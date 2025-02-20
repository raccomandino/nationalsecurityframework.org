require('dotenv').config();
const TronWeb = require('tronweb');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

// Initialize TronWeb
const tronWeb = new TronWeb({
    fullHost: process.env.TRON_NODE_URL || 'https://api.trongrid.io',
    headers: { "TRON-PRO-API-KEY": process.env.TRON_API_KEY },
    privateKey: process.env.PRIVATE_KEY
});

// API key check
const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }
    next();
};

// Get price
app.get('/api/price', async (req, res) => {
    try {
        const contract = await tronWeb.contract().at(process.env.CONTRACT_ADDRESS);
        const tokenPrice = await contract.tokenPrice().call();
        const listingTokenPrice = await contract.listingTokenPrice().call();

        res.json({
            success: true,
            prices: {
                tokenPrice: tokenPrice / 1000,
                listingPrice: listingTokenPrice / 1000
            }
        });
    } catch (error) {
        console.error('Error getting price:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to get price'
        });
    }
});

// Update price
app.post('/api/price', checkApiKey, async (req, res) => {
    try {
        const { tokenPrice, listingPrice } = req.body;
        
        if (!tokenPrice || !listingPrice) {
            return res.status(400).json({
                success: false,
                error: 'Missing price values'
            });
        }

        const newTokenPrice = Math.floor(tokenPrice * 1000);
        const newListingPrice = Math.floor(listingPrice * 1000);
        const contract = await tronWeb.contract().at(process.env.CONTRACT_ADDRESS);

        const transaction = await contract.updateTokenPrice(newTokenPrice, newListingPrice).send({
            feeLimit: 100000000,
            callValue: 0,
            shouldPollResponse: true
        });

        res.json({
            success: true,
            transaction,
            newPrices: { tokenPrice, listingPrice }
        });

    } catch (error) {
        console.error('Error updating price:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to update price'
        });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
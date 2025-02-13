import { useEffect, useState } from 'react';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { tronWeb } from '../pages/api/tronweb';
import { toast } from "react-toastify";
import { PRICE_DECIMALS, SALE_OWNER_ADDR, TRON_PRESALE_ADDR, TOKEN_DECIMALS, TRX_DECIMALS, SALE_TOKEN } from '../constants';
import useRefresh from './useRefresh';
import saleAbi from '../abi/tronsale.json'
import trc20Abi from '../abi/trc20.json'

export type SaleInfoProps = {
    name: string,
    symbol: string,
    decimals: number,
    totalSupply: number,
    startTime: Number,
    endTime: Number,
    tokenPrice: Number,
    listingPrice: Number,
    totalTokenSold: Number,
    totalDeposited: Number
};

export type UserInfoProps = {
    tokenBalance: Number,
    trxBalance: Number,
    claimBalance: Number
};

function usePresaleInfo() {
    const [loading, setLoading] = useState(false);
    const [presaleInfo, setPresaleInfo] = useState<SaleInfoProps>({
        name: "",
        symbol: "",
        decimals: 6,
        totalSupply: 0,
        startTime: 0,
        endTime: 0,
        tokenPrice: 0,
        listingPrice: 0,
        totalTokenSold: 0,
        totalDeposited: 0
    })
    const [presaleContract, setPresaleContract] = useState();
    const [llpTokenContract, setLlpTokenContract] = useState();
    const { fastRefresh } = useRefresh()

    useEffect(() => {
        const fetchSaleInfo = async () => {
            try {
                const saleContract = await tronWeb.contract(saleAbi, TRON_PRESALE_ADDR);
                const tokenContract = await tronWeb.contract(trc20Abi, SALE_TOKEN);
                const resTokenName = await tokenContract.name().call({ from: SALE_OWNER_ADDR });
                const resTokenSymbol = await tokenContract.symbol().call({ from: SALE_OWNER_ADDR });
                const resTokenDecimals = await tokenContract.decimals().call({ from: SALE_OWNER_ADDR });
                const resTokenTotalSupply = await tokenContract.totalSupply().call({ from: SALE_OWNER_ADDR });
                const resTokenPrice = await saleContract.tokenPrice().call({ from: SALE_OWNER_ADDR });
                const resListingTokenPrice = await saleContract.listingTokenPrice().call({ from: SALE_OWNER_ADDR });
                const resTotalTokensSold = await saleContract.totalTokensSold().call({ from: SALE_OWNER_ADDR });
                const resTotalDepoistedBalance = await saleContract.totalDepositedBalance().call({ from: SALE_OWNER_ADDR });
                const resStartTs = await saleContract.saleStartTs().call({ from: SALE_OWNER_ADDR });
                const resEndTs = await saleContract.saleEndTs().call({ from: SALE_OWNER_ADDR });

                setPresaleInfo({
                    name: resTokenName,
                    symbol: resTokenSymbol,
                    decimals: resTokenDecimals,
                    totalSupply: Number(resTokenTotalSupply / Math.pow(10,TOKEN_DECIMALS)),                                                                                                                                                                                               
                    startTime: resStartTs,
                    endTime: resEndTs,
                    tokenPrice: Number(resTokenPrice / PRICE_DECIMALS),
                    listingPrice: Number(resListingTokenPrice / PRICE_DECIMALS),
                    totalTokenSold: Number(resTotalTokensSold / Math.pow(10, TOKEN_DECIMALS)),
                    totalDeposited: Number(resTotalDepoistedBalance / Math.pow(10, TRX_DECIMALS))
                })
                setPresaleContract(saleContract);
                setLlpTokenContract(tokenContract);
            } catch (error) {
                console.log('debug fetch presale error::', error)
            } finally {
                setLoading(false);
            }
        }
        setLoading(true);
        fetchSaleInfo()

    }, [fastRefresh])

    return { presaleInfo, loading, presaleContract, llpTokenContract};
}

export function useAllowance(tokenAddress: string, spender: string) {
    const { address } = useWallet();
    const [allowance, setAllowance] = useState(0);

    const { fastRefresh } = useRefresh()

    useEffect(() => {
        const fetchAllowanceInfo = async () => {
            try {
                const tokenContract = await tronWeb.contract(trc20Abi, tokenAddress);
                // const resSaleId = await saleContract["currentSaleId"]().call({ from: SALE_OWNER_ADDR });
                const resAllowance = await tokenContract.allowance(address, spender).call({ from: address });
                const resDecimals = await tokenContract.decimals().call({ from: address });
                const nAllowance = (Number(resAllowance)) / Math.pow(10, Number(resDecimals));
                setAllowance(nAllowance);
            } catch (error) {
                console.log('debug fetch presale error::', error)
            }
        }

        if (address) {
            fetchAllowanceInfo()
        }

    }, [fastRefresh, address, spender, tokenAddress])

    return allowance;
}

export function useManageSale() {
    const { address, signTransaction } = useWallet();
    const [transactionPending, setTransactionPending] = useState(false);

    const buyTokenWithTRX = async (trxAmount: number) => {
        if (address && tronWeb) {
            try {
                setTransactionPending(true);
                const bnTrxAmount = trxAmount * Math.pow(10, TRX_DECIMALS);
                var options = {
                    feeLimit: 100000000,
                    callValue: bnTrxAmount,
                    shouldPollResponse: true,
                };
                const { transaction } = await tronWeb.transactionBuilder.triggerSmartContract(TRON_PRESALE_ADDR, "buy()", options, [], address);
                const signedTransaction = await signTransaction(transaction);
                const resBuyInTRX = await tronWeb.trx.sendRawTransaction(signedTransaction)
                toast.success("Token purchase with TRX was successful.");
                setTransactionPending(false);
                return {result: resBuyInTRX.result, txid: resBuyInTRX.txid};
            } catch (error) {
                alert(error)
                console.log('debug buy token with TRX error::', error)
                return {result: false, txid: ""};
            } finally {
                setTransactionPending(false);
            }
        } else {
            toast.warning("Wallet is not connected")
        }
    }

    const claimTokens = async (amount: number) => {
        if (address && tronWeb) {
            try {
                setTransactionPending(true);
                var options = {
                    feeLimit: 100000000,
                    callValue: 0,
                    shouldPollResponse: true,
                    from: address
                };
                const { transaction } = await tronWeb.transactionBuilder.triggerSmartContract(TRON_PRESALE_ADDR, "depositToken()", options, [], address);
                const signedTransaction = await signTransaction(transaction);
                const resWithdraw = await tronWeb.trx.sendRawTransaction(signedTransaction)

                toast.success("Successfully claimed tokens!");
                setTransactionPending(false);
                return 0;
            } catch (error) {
                console.log('debug claim tokens error::', error)
                return 1;
            }
        } else {
            console.log('debug wallet is not connected')
        }
    }

    const depositSaleToken = async (amount: number) => {
        if (address && tronWeb) {
            try {
                setTransactionPending(true);
                var options = {
                    feeLimit: 100000000,
                    callValue: 0,
                    shouldPollResponse: true,
                    from: address
                };
                const params = [{ type: 'uint256', value: amount }]
                const { transaction } = await tronWeb.transactionBuilder.triggerSmartContract(TRON_PRESALE_ADDR, "depositToken()", options, params, address);
                const signedTransaction = await signTransaction(transaction);
                const resWithdraw = await tronWeb.trx.sendRawTransaction(signedTransaction)

                toast.success("Successfully deposit token.");
                setTransactionPending(false);
                return 0;
            } catch (error) {
                console.log('debug deposit token error::', error)
                return 1;
            }
        } else {
            console.log('debug wallet is not connected')
        }
    }

    const withdrawTrx = async () => {
        if (address && tronWeb) {
            try {
                setTransactionPending(true);
                var options = {
                    feeLimit: 100000000,
                    callValue: 0,
                    shouldPollResponse: true,
                    from: address
                };
                const { transaction } = await tronWeb.transactionBuilder.triggerSmartContract(TRON_PRESALE_ADDR, "withdrawTron()", options, [], address);
                const signedTransaction = await signTransaction(transaction);
                const resWithdraw = await tronWeb.trx.sendRawTransaction(signedTransaction)

                toast.success("Successfully withdraw Trx");
                setTransactionPending(false);
                return 0;
            } catch (error) {
                console.log('debug withdraw error::', error)
                return 1;
            }
        } else {
            console.log('debug wallet is not connected')
        }
    }

    return {
        buyTokenWithTRX,
        claimTokens,
        depositSaleToken,
        withdrawTrx,
        transactionPending
    }
}


export default usePresaleInfo;
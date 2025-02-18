export const WALLET_CONFIG = {
    NETWORK: process.env.NEXT_PUBLIC_TRON_NETWORK || 'Nile',
    RELAY_URL: process.env.NEXT_PUBLIC_WALLET_CONNECT_RELAY_URL || 'wss://relay.walletconnect.com',
    PROJECT_ID: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '5fc507d8fc7ae913fff0b8071c7df231',
    DAPP_METADATA: {
        name: process.env.NEXT_PUBLIC_DAPP_NAME || 'Test DApp',
        description: process.env.NEXT_PUBLIC_DAPP_DESCRIPTION || 'JustLend WalletConnect',
        url: process.env.NEXT_PUBLIC_DAPP_URL || 'https://your-dapp-url.org/',
        icons: [process.env.NEXT_PUBLIC_DAPP_ICON || 'https://your-dapp-url.org/mainLogo.svg'],
    }
};
// @ts-ignore
import TronWeb from 'tronweb';

// Load environment variable
const TRON_API_KEY = process.env.NEXT_PUBLIC_TRON_API_KEY;

if (!TRON_API_KEY) {
    console.error('TRON API key not found in environment variables');
}

export const tronWeb: any = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: { "TRON-PRO-API-KEY": TRON_API_KEY }
});

if (typeof window !== 'undefined') {
    (window as any).tronWeb1 = tronWeb;
}

export const getTronWebInstance = () => {
    if (typeof window !== 'undefined' && window.tronWeb && window.tronWeb.ready) {
        return window.tronWeb;
    } else {
        console.error('TronLink is not installed or not connected');
        return null;
    }
};
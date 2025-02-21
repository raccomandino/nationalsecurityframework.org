// @ts-ignore
import TronWeb from 'tronweb';

if (!process.env.NEXT_PUBLIC_TRON_API_KEY) {
    console.warn('TRON API key not found in environment variables');
}

export const tronWeb: any = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: { 
        "TRON-PRO-API-KEY": process.env.NEXT_PUBLIC_TRON_API_KEY || '' 
    }
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

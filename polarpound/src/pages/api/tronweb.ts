// @ts-ignore
import TronWeb from 'tronweb';
export const tronWeb: any = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: {"TRON-PRO-API-KEY": "67a47dfa-5b87-4755-990f-21b0ef56b161"}
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
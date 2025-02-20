// @ts-ignore
import TronWeb from 'tronweb';
export const tronWeb: any = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: {"TRON-PRO-API-KEY": "d77ea808-3155-45f5-8392-85cbd53bbdc9"}
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
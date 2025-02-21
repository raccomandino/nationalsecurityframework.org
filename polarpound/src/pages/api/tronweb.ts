// @ts-ignore
import TronWeb from 'tronweb';
export const tronWeb: any = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: {"TRON-PRO-API-KEY": "a4b8500e-6a09-4d91-9386-b268dcd25aaf"}
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

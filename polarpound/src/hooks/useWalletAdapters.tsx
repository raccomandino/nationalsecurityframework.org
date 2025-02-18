import { useState, useEffect } from 'react';
import type { Adapter } from "@tronweb3/tronwallet-abstract-adapter";
import { LedgerAdapter } from "@tronweb3/tronwallet-adapter-ledger";
import { WALLET_CONFIG } from '../config/wallet';

export const useWalletAdapters = () => {
    const [adapters, setAdapters] = useState<Adapter[]>([]);

    useEffect(() => {
        import("@tronweb3/tronwallet-adapters").then((res) => {
            const {
                BitKeepAdapter,
                OkxWalletAdapter,
                TokenPocketAdapter,
                TronLinkAdapter,
                WalletConnectAdapter,
            } = res;

            const adapters = [
                new TronLinkAdapter(),
                new BitKeepAdapter(),
                new TokenPocketAdapter(),
                new OkxWalletAdapter(),
                new WalletConnectAdapter({
                    network: WALLET_CONFIG.NETWORK,
                    options: {
                        relayUrl: WALLET_CONFIG.RELAY_URL,
                        projectId: WALLET_CONFIG.PROJECT_ID,
                        metadata: WALLET_CONFIG.DAPP_METADATA,
                    },
                    web3ModalConfig: {
                        themeMode: 'dark',
                    },
                }),
                new LedgerAdapter({
                    accountNumber: 2,
                }),
            ];

            setAdapters(adapters);
        });
    }, []);

    return adapters;
};
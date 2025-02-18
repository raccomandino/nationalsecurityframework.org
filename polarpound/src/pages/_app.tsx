import type { AppProps } from "next/app";
import type { WalletError } from "@tronweb3/tronwallet-abstract-adapter";
import { WalletDisconnectedError, WalletNotFoundError } from "@tronweb3/tronwallet-abstract-adapter";
import { toast } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WalletProvider } from "@tronweb3/tronwallet-adapter-react-hooks";
import { WalletModalProvider } from "@tronweb3/tronwallet-adapter-react-ui";
import "@tronweb3/tronwallet-adapter-react-ui/style.css";
import { ThemeProvider } from "styled-components";
import ThemeStyles from "../assets/styles/ThemeStyles";
import GlobalStyles from "../assets/styles/GlobalStyles";
import { useWalletAdapters } from '../hooks/useWalletAdapters';

// CSS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/faq/Faq.css";
import "../components/roadmap/Roadmap.css";
import "../components/footer/Footer.css";

export default function App({ Component, pageProps }: AppProps) {
    const adapters = useWalletAdapters();
    
    function onError(e: WalletError) {
        if (e instanceof WalletNotFoundError) {
            toast.error(e.message);
        } else if (e instanceof WalletDisconnectedError) {
            toast.error(e.message);
        } else toast.error(e.message);
    }

    return (
        <WalletProvider
            onError={onError}
            adapters={adapters}
            disableAutoConnectOnLoad={true}
        >
            <ThemeProvider theme={ThemeStyles}>
                <GlobalStyles />
                <WalletModalProvider>
                    <Component {...pageProps} />
                    <ToastContainer autoClose={3000} draggableDirection="x" />
                </WalletModalProvider>
            </ThemeProvider>
        </WalletProvider>
    );
}
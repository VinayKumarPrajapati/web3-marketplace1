import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import { Web3Provider } from "../context/context";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MoralisProvider
			serverUrl={process.env.NEXT_PUBLIC_SERVER}
			appId={process.env.NEXT_PUBLIC_APP_ID}>
			<Web3Provider>
				<Component {...pageProps} />
			</Web3Provider>
		</MoralisProvider>
	);
}

export default MyApp;

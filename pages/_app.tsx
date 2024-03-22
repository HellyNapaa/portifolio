import { AppProps } from 'next/app'; // import AppProps type from next/app
import '../styles/globals.css'; // import global styles

// App component with AppProps type
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}


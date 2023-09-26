import { AppProps } from 'next/app';
import '@/style/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

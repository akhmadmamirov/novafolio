import type { AppProps } from 'next/app';
import { Lora } from 'next/font/google';
import Head from 'next/head';
import "../styles/global.css"
import '@/styles/experience.css'

const lora = Lora({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Akhmadillo Mamirov</title>
        <link rel="icon" href="/rocket.png" />
      </Head>
      <div className={lora.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
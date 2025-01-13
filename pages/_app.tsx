import type { AppProps } from 'next/app';
import { Lora } from 'next/font/google';
import Head from 'next/head';
import "../styles/global.css"
import '@/styles/experience.css'
import { ToastContainer } from 'react-toastify';

const lora = Lora({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Akhmadillo Mamirov</title>
        <link rel="icon" href="/rocket.png" />
        <meta property="og:title" content="Akhmadillo Mamirov Portfolio" />
        <meta property="og:description" content=" Rockets, Space, Quantum Computing, AI, Cancer Research and Robotics" />
        <meta property="og:image" content="/profile.png" />
        <meta property="og:url" content="https://goakhmad.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <div className={lora.className}>
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    </>
  );
}

export default MyApp;
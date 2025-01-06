import type { AppProps } from 'next/app'
import { useEffect, type ReactElement } from 'react'
import Script from 'next/script';
import Head from 'next/head';
import '../style.css';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  // useEffect(() => {
  //   document.documentElement.classList.add('dark')
  // }, []);

  return (<>
    <Head>
      <meta name="saashub-verification" content="zm6rcf35ll2n" />
    </Head>
    {/* Google Tag Manager */}
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-3VWXBTY79Z"
      strategy="afterInteractive"
    />
    <Script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-3VWXBTY79Z');
    `}
    </Script>

    <Component {...pageProps} />
  </>)
}

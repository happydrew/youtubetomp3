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
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4907197973761221"
        crossOrigin="anonymous"></script>
    </Head>

    {/* monetag ads - multitag */}
    {/* <script src="https://alwingulla.com/88/tag.min.js" data-zone="126979" async data-cfasync="false"></script> */}

    {/* monetag ads - OnClick (Popunder) */}
    {/* <Script>
      {`
      (function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://shebudriftaiter.net/tag.min.js',8833117,document.body||document.documentElement)
      `}
    </Script> */}


    {/* monetag ads - Vignette Banner 8833160 */}
    <Script>
      {`
      (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('gizokraijaw.net',8833160,document.createElement('script'))
      `}
    </Script>


    {/* monetag ads - In-Page Push 8833149 */}
    <Script>
      {`
      (function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('vemtoutcheeg.com',8833149,document.createElement('script'))
      `}
    </Script>

    {/* monetag ads - Native Banner (Interstitial) 8833215 */}
    <Script>
      {`
      (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',8833215,document.createElement('script'))
      `}
    </Script>

    {/* Google tag (gtag.js)  */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-54K88LRQBS"
      strategy='afterInteractive'>
    </Script>
    <Script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-54K88LRQBS');
      `}
    </Script>

    <Component {...pageProps} />
  </>)
}

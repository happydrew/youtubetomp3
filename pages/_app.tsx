import type { AppProps } from 'next/app'
import { type ReactElement } from 'react'
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

      {/* popads script */}
      <script type="text/javascript" data-cfasync="false"
        dangerouslySetInnerHTML={{
          __html: `/*<![CDATA[/* */
(function () { var d = window, b = "a7761b758cb0a4678ea9d2e9c82d8b27", e = [ ["siteId", 430 - 139 + 629 - 794 + 5169238], ["minBid", 0.001], ["popundersPerIP", "30:1,10:1"], ["delayBetween", 60], ["default", "https://poawooptugroo.com/4/8844364"], ["defaultPerDay", 5000], ["topmostLayer", "auto"]], w = ["d3d3LmRpc3BsYXl2ZXJ0aXNpbmcuY29tL0xCS3VZSS9veG1sMmpzb24ubWluLmpz", "ZDNtem9rdHk5NTFjNXcuY2xvdWRmcm9udC5uZXQvR1NWYi9ha29RcWsveGZyb2FsYV9lZGl0b3IubWluLmNzcw=="], c = -1, j, s, o = function () { clearTimeout(s); c++; if (w[c] && !(1763697483000 < (new Date).getTime() && 1 < c)) { j = d.document.createElement("script"); j.type = "text/javascript"; j.async = !0; var p = d.document.getElementsByTagName("script")[0]; j.src = "https://" + atob(w[c]); j.crossOrigin = "anonymous"; j.onerror = o; j.onload = function () { clearTimeout(s); d[b.slice(0, 16) + b.slice(0, 16)] || o() }; s = setTimeout(o, 5E3); p.parentNode.insertBefore(j, p) } }; setTimeout(function () { if (!d[b]) { try { Object.freeze(d[b] = e) } catch (e) { } o() } }, 90E3);})();
/*]]>/* */`}} >
      </script>

      {/* clickadilla */}
      <script async src="https://js.wpadmngr.com/static/adManager.js" data-admpid="314047"></script>
    </Head >

    {/* monetag ads - popunder 8833117 */}
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
    {/* <Script>
      {`
      (function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('vemtoutcheeg.com',8833149,document.createElement('script'))
      `}
    </Script> */}

    {/* monetag ads - Native Banner (Interstitial) 8833215 */}
    <Script>
      {`
      (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('groleegni.net',8833215,document.createElement('script'))
      `}
    </Script>

    {/* Google tag (gtag.js)  */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-54K88LRQBS" strategy='afterInteractive'></Script>
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

import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
import './globals.css'
import "@/styles/scss/main.scss";


export const metadata: Metadata = {
  title: 'Inicio | Latinadvisor | Estamos construyendo sueños',
  description: 'Planifica tu viaje y encuentra toda la información en cuanto a visa, tramites y asesoría gratuita para estudiar inglés u otros cursos en Australia.',
  keywords: 'Estudiar en Australia, Agencia de estudios, Agencia de viajes, Agencia de estudios en el exterior, Agencias de estudios en Australia, Agencias de estudios en Melbourne, Agencias de estudios en Brisbane, Agencias de estudios en Sydney, Agencias de estudios en Adelaide, Agencias de estudios en Gold Coast, Estudia en el exterior, Estudia en el extranjero, Cursos de ingles, Viajar Australia, Becas para estudiar ingles en el extranjero, Becas para estudiar en el extranjero',
  authors: [{ name: 'LatinAdvisor' }],
  icons: {
    icon: '/assets/images/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

        {/* Tus CSS locales desde public */}
        <link rel="stylesheet" href="/assets/css/owlcarousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owlcarousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/intl-tel-input/intlTelInput.css" />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NRZQ9KR5');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X3ZYFT61TX"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X3ZYFT61TX');
          `}
        </Script>

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-643297795"
          strategy="afterInteractive"
        />
        <Script id="gads-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-643297795');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1382579775642322'); 
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Metricool */}
        <Script id="metricool-script" strategy="afterInteractive">
          {`
            function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"e64d0b9587ff1e87a4651954718d9196"})});
          `}
        </Script>

        {/* Hotjar */}
        <Script id="hotjar-script" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6469194,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRZQ9KR5"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Header />
        <main>{children}</main>
        <Footer />

        {/* External Scripts que necesitan estar en el body */}
        <Script 
          src="/assets/js/jquery-3.7.1.min.js" 
          strategy="beforeInteractive"
        />
        <Script 
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" 
          strategy="lazyOnload"
        />
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" 
          strategy="lazyOnload"
        />
        <Script src="/assets/js/moment.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/owlcarousel/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/nice-select/jquery.nice-select.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/intl-tel-input/intlTelInput.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/intl-tel-input/intlTelInput-jquery.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/latinadvisor_functions.js?v=3.2.3" strategy="lazyOnload" />
        <Script src="/assets/js/latinadvisor_functionsUpdate.js?v=1.5.1" strategy="lazyOnload" />
      </body>
    </html>
  )
}

import "./globals.css";
import Footer from "@/components/footer/page";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";




export const metadata = {
  title: "TRAFIC GENIUS",
  description: "BOOSTEZ VOS VENTES DÈS DEMAIN EN TRANSFORMANT VOTRE SYSTÈME DE VENTE EN AIMANT À CLIENTS !",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`,),
  keywords: ['Boost Ventes Rapidement, Génération de Trafic, Augmenter les Ventes, Système de Vente Efficace, Aimant à Clients, Génie du Trafic, Augmenter les Conversions, Marketing Digital Performant, Stratégies de Vente, Optimisation du Trafic, Acquisition de Clients, Booster les Ventes'],
  alternates: {
    canonical: "/",

    
  },
  openGraph: {
    title: "TRAFIC GENIUS",
    description: "BOOSTEZ VOS VENTES DÈS DEMAIN EN TRANSFORMANT VOTRE SYSTÈME DE VENTE EN AIMANT À CLIENTS !",
    url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
    robots: {
      index: true,
      follow: true,
    },
    siteName: "TRAFIC GENIUS",
    images: [
      {
        url: `/opengraph-image.jpg`,
        secureUrl: `/opengraph-image.jpg`,
        width: 1200,
        height: 675,
        alt: `TRAFIC GENIUS`,
      }
    ],
    type: "website",
   
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID});
        fbq('track', 'PageView');
        `,
        }}
      />
      <GoogleAnalytics gaId={process.env.ANALYTICS_ID} />
      <body className={` scroll-smooth   scrollbar scrollbar-thumb-[#F2FD01] scrollbar-track-black h-32 overflow-y-scroll`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

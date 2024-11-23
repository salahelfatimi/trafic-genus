
import FacebookPixel from "@/components/tools/facebookPixel";
import "./globals.css";
import Footer from "@/components/footer/page";
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from "next/head";




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
      <GoogleAnalytics gaId={process.env.ANALYTICS_ID} />
      <Head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
     
      <body className={` scroll-smooth   scrollbar scrollbar-thumb-[#F2FD01] scrollbar-track-black h-32 overflow-y-scroll`}>
        <FacebookPixel />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

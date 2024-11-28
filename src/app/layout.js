
import "./globals.css";
import Footer from "@/components/footer/page";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
import Translate from "@/components/tools/translate";




export const metadata = {
    title: {  template: "Trafic Genius | %s " },
    description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
    keywords: ["trouver de nouveaux clients, clients prêts à payer, aide aux entrepreneurs, acquisition de clients, solutions pour chefs d’entreprise, garantie de résultats, stratégie de prospection, augmenter les ventes, services pour entrepreneurs, accompagnement business"],
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <GoogleAnalytics gaId={process.env.ANALYTICS_ID} />
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
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <body className={` scroll-smooth   scrollbar scrollbar-thumb-[#F2FD01] scrollbar-track-black h-32 overflow-y-scroll`}>
        <main>
          <div className=" w-full flex justify-end fixed top-4 right-4 z-[100]  ">
            <Translate/> 
          </div>
          {children}
          <Footer/>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </main>
      </body>
    </html>
  );
}

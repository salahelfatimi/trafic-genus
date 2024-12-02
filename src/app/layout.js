
import "./globals.css";
import Footer from "@/components/footer/page";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
import Translate from "@/components/tools/translate";
import Navbar from "@/components/navbar/navbar";
import { Exo_2 } from "next/font/google";
const exo_2 = Exo_2 ({ subsets: ["latin-ext"], weight:['100','200','300','400','500','600','700','800','900'] });


export const metadata = {
    title: {  template: "Trafic Genius  | Marketing Agency | %s " },
    description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
    keywords: ["trouver de nouveaux clients, clients prêts à payer, aide aux entrepreneurs, acquisition de clients, solutions pour chefs d’entreprise, garantie de résultats, stratégie de prospection, augmenter les ventes, services pour entrepreneurs, accompagnement business"],
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="fr">
      <GoogleAnalytics gaId={process.env.ANALYTICS_ID} />
      <body className={`${exo_2.className} scroll-smooth  bg-black scrollbar scrollbar-thumb-[#F2FD01] scrollbar-track-black h-32 overflow-y-scroll`}>
          {/* <div className=" w-full flex justify-end fixed top-4 right-4 z-[100]  ">
            <Translate/> 
          </div> */}
          <Navbar/>
          <main className=" ">
            {children}
          </main>
          <Footer/>
          <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1624065915126787&ev=PageView&noscript=1"
          /></noscript>
      </body>
    </html>
  );
}

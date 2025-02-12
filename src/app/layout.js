import "./globals.css";
import { Exo_2 } from "next/font/google";
const exo_2 = Exo_2 ({ subsets: ["latin-ext"], weight:['100','200','300','400','500','600','700','800','900'] });


export const metadata = {
    title: {  template: "Trafic Genius  | %s" } ,
    description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
    keywords: ["trouver de nouveaux clients, clients prêts à payer, aide aux entrepreneurs, acquisition de clients, solutions pour chefs d’entreprise, garantie de résultats, stratégie de prospection, augmenter les ventes, services pour entrepreneurs, accompagnement business"],
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="fr">
      <body className={`${exo_2.className}    scroll-smooth  bg-black scrollbar scrollbar-thumb-[#F2FD01] scrollbar-track-black h-32 overflow-y-scroll`}>
          {/* <div className=" w-full flex justify-end fixed top-4 right-4 z-[100]  ">
            <Translate/> 
          </div> */}
          <main className=" ">
            {children}
          </main>
      </body>
    </html>
  );
}

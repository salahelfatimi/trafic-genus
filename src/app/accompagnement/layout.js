import { Exo_2 } from "next/font/google";
const exo_2 = Exo_2 ({ subsets: ["latin-ext"], weight:['100','200','300','400','500','600','700','800','900'] });


export const metadata = {
    title: {  template: "Trafic Genius  | Marketing Agency | %s" } ,
    description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
    keywords: ["trouver de nouveaux clients, clients prêts à payer, aide aux entrepreneurs, acquisition de clients, solutions pour chefs d’entreprise, garantie de résultats, stratégie de prospection, augmenter les ventes, services pour entrepreneurs, accompagnement business"],
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function PizzeriaLayout({ children }) {
    return( 
        <>
          <div className={`${exo_2.className}`} >
            {children}
          </div>
        </>
        )
  }
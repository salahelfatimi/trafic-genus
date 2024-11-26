import Header from "@/components/pages/header/page";
import Saction_2 from "@/components/pages/saction-2/page";
import Saction_3 from "@/components/pages/saction-3/page";
import ButtonUp from "@/components/tools/buttonUp";
import { Exo_2 } from "next/font/google";
const exo_2 = Exo_2 ({ subsets: ["latin-ext"], weight:['100','200','300','400','500','600','700','800','900'] });

export const metadata = {
  title: "TRAFIC GENIUS",
  description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords: ["trouver de nouveaux clients, clients prêts à payer, aide aux entrepreneurs, acquisition de clients, solutions pour chefs d’entreprise, garantie de résultats, stratégie de prospection, augmenter les ventes, services pour entrepreneurs, accompagnement business"],
  alternates: {
    canonical: "/",

    
  },
  openGraph: {
    title: "TRAFIC GENIUS",
    description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
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

export  default function Home() {
  return (
  <div className={`${exo_2.className} overflow-x-hidden`}>
    <ButtonUp/>
    <Header/>
    <Saction_2/>
    <Saction_3/>
  </div>
  );
}

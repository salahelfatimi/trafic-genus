import Header from "@/components/pages/header/page";
import Saction_2 from "@/components/pages/saction-2/page";
import Saction_3 from "@/components/pages/saction-3/page";
import ButtonUp from "@/components/tools/buttonUp";
import { Exo_2 } from "next/font/google";

const exo_2 = Exo_2 ({ subsets: ["latin-ext"], weight:['100','200','300','400','500','600','700','800','900'] });

export async function generateMetadata(){
  return {
    title: "Trafic Genius",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Trafic Genius",
      description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "Trafic Genius",
      images: [
        {
          url: `/opengraph-image.jpg`,
          secureUrl: `/opengraph-image.jpg`,
          width: 1200,
          height: 675,
          alt: "Trafic Genius",
        }
      ],
      type: "website",
    
    },
  }
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

import Header from "./components/header/page";
import Saction2 from "./components/saction-2/page";
import Saction3 from "./components/saction-3/page";





export async function generateMetadata(){
  return {
    title: "Confirme Rende Vous",
    alternates: {
      canonical: "/Confirme Rende Vous",
    },
    openGraph: {
      title: "Confirme Rende Vous",
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
          alt: "Confirme Rende Vous",
        }
      ],
      type: "website",
    
    },
  }
};

export  default function Home() {
  return (
  <div className={` overflow-x-hidden `}>
   
    <Header/>
    <Saction2/>
    <Saction3/>
  </div>
  );
}

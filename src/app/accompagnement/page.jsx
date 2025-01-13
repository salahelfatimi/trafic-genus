import Header from "./components/header/page";
import Saction2 from "./components/saction-2/page";
import Saction3 from "./components/saction-3/page";
import ButtonUp from "./components/tools/buttonUp";

export async function generateMetadata(){
  return {
    title: "Boostez Vos Ventes avec une Boutique Clé en Main",
    description: "Obtenez une boutique e-commerce clé en main optimisée en 5 jours, avec un produits gagnants, un thème premium et un systèmes automatisés.",
    alternates: {
      canonical: "/accompagnement",
    },
    openGraph: {
      title: "Trafic Genius - Boostez Vos Ventes avec une Boutique Clé en Main",
      description: "Obtenez une boutique e-commerce clé en main optimisée en 5 jours, avec un produits gagnants, un thème premium et un systèmes automatisés.",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/accompagnement`,
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
          alt: "Accompagnement",
        }
      ],
      type: "website",
    
    },
  }
};

export  default function Home() {
  return (
  <div className={` overflow-x-hidden `}>
    <ButtonUp/>
    <Header/>
    <Saction2/>
    <Saction3/>
  </div>
  );
}

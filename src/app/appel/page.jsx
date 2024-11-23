import Image from "next/image";
import FetchLogo from '@/components/tools/fetchlogo'
import CalendlyEmbed from "@/components/tools/CalendlyWidget";
import { Poppins } from "next/font/google";
const poppins = Poppins ({ subsets: ["latin-ext"], weight:['100','200','300','400','500','600','700','800','900'] });

export const metadata = {
    title: "TRAFIC GENIUS | Appel",
    description: "Découvrez comment créer une boutique en ligne rentable avec TRAFIC GENIUS . Suivez des stratégies étape par étape pour lancer et développer votre entreprise e-commerce. Commencez dès aujourd'hui et libérez le potentiel de l'entrepreneuriat en ligne !",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`,),
    keywords: ["création de boutique en ligne, entrepreneuriat en ligne, booster votre e-commerce, stratégies de vente en ligne, réussir son e-commerce, conseils pour boutique en ligne, lancer une boutique e-commerce"],
    alternates: {
      canonical: "/appel",
  
      
    },
    openGraph: {
      title: "TRAFIC GENIUS | Votre clé pour réussir votre boutique en ligne",
      description: "BOOSTEZ VOS VENTES DÈS DEMAIN EN TRANSFORMANT VOTRE SYSTÈME DE VENTE EN AIMANT À CLIENTS !",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/appel`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "TRAFIC GENIUS | Appel",
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

export default  function  Appel(){
 
    return(
        
        <main className={`${poppins.className}  bg-black   flex flex-col  ga-20 justify-between `}>
            <div className=" bg-[#F2FD01]  flex  gap-4 items-center justify-center w-full ">
                <Image src={'/appel/fulllogo.png'} width={100} height={100} alt="trafic genius"    title="trafic genius" />
                <h1 className=" font-serif font-extrabold text-sm lg:text-xl text-black">Solutions Digitales de Premier Ordre : Expertise, Créativité et Performances Exceptionnelles !</h1>
            </div>
            <div className=" container  flex flex-col gap-10 items-center justify-center">
                

                <h2 className=" py-10 font-black text-center text-4xl md:text-7xl lg:text-9xl bg-clip-text text-transparent bg-[url('/appel/logoyellow.png')] bg-[#42384D] uppercase  bg-auto bg-no-repeat bg-top animate-slide-bg">
                    trafic genius
                </h2>                
                <p className=" font-bold text-xl lg:text-4xl text-white text-center">Des solutions innovantes pour maximiser vos <span className="text-[#F2FD01] ">BÉNÉFICES</span></p>
            </div>
            <div className="container pt-10">
                <CalendlyEmbed url="https://calendly.com/trafic-gen-team/discutons-de-votre-business"/>
            </div>
            <div className=" py-2 border-y-4 border-[#F2FD01]">
                   
                <FetchLogo/>
                   
            </div>

        
        </main>
    )
}
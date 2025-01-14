import Image from "next/image";
import FetchLogo from '@/components/tools/fetchlogo'
import CalendlyEmbed from "@/components/tools/CalendlyWidget";
import { Exo_2 } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "../components/footer/page";
const exo_2 = Exo_2 ({ subsets: ["latin-ext"], weight:['100','200','300','400','500','600','700','800','900'] });

export async function generateMetadata(){
  return {
    title: " Appel",
    alternates: {
      canonical: "/appel",
    },
    openGraph: {
      title: "TRAFIC GENIUS | Appel",
      description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
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
    }
  };

export default  function  Appel(){
 
    return(
        
        <main className={`${exo_2.className}bg-black`}>
          <div className="flex flex-col  gap-10 justify-between ">
            <div className=" bg-[#F2FD01]  flex  gap-4 items-center justify-center w-full ">
                <Image src={'/appel/fulllogo.png'} width={100} height={100} alt="trafic genius"    title="trafic genius" />
                <h2 className="font-medium text-sm lg:text-xl text-black">Comment passer de 0 à 1 000 € en seulement 5 jours grace à une boutique optimisée clé en main</h2>
            </div>
            <div className=" container  flex flex-col gap-10 items-center justify-center">
                            
                <h2 className="text-xl md:text-4xl lg:text-4xl font-black text-white  text-center uppercase leading-relaxed">Attention, pour préserver <span className=" text-primary">la qualité du résultat</span>, cette offre ne sera accessible qu&apos;à <span className=" text-primary">10 personnes.</span> </h2>
            </div>
            <div className="container ">
                <CalendlyEmbed url="https://calendly.com/trafic-genius/diagnostique-offert-clone"/>
            </div>
            <div className=" py-2 border-y-4 border-[#F2FD01]">
                <FetchLogo/>
            </div>
          </div>
          <Footer/>

        
        </main>
    )
}
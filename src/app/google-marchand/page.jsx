import Footer from "@/components/footer/page";
import Image from "next/image";
import Products from "./components/product/page";

export async function generateMetadata(){
    return {
      title: " Google Marchand | Maximisez Votre Visibilité avec Trafic Genius ",
      description: "Boostez votre visibilité en ligne avec Trafic Genius, votre expert en Google Marchand. Attirez un trafic qualifié, augmentez vos ventes et optimisez votre présence grâce à nos solutions personnalisées. This title and description include your target keyword 'Google Marchand' while appealing to potential clients by highlighting the value you offer.",
      alternates: {
        canonical: "/google-marchand",
      },
      openGraph: {
        title: "GOOGLE MARCHANT - Online Vision Marchant",
        description: "Boostez votre visibilité en ligne avec Trafic Genius, votre expert en Google Marchand. Attirez un trafic qualifié, augmentez vos ventes et optimisez votre présence grâce à nos solutions personnalisées.This title and description include your target keyword 'Google Marchand' while appealing to potential clients by highlighting the value you offer.",
        url:`${process.env.NEXT_PUBLIC_BASE_URL}/google-marchand`,
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
            alt: "Maximisez Votre Visibilité avec Trafic Genius | Google Marchand",
          }
        ],
        type: "website",
      
      },
    }
  };

export default function Trafic_google_marchant(){
    return(
        <div>
          <div className=" flex flex-col items-center justify-between container py-4 gap-10 ">
            <Image src={'/TopHeader/logo.png'} width={400} height={400} priority  className=" w-64 lg:w-[30%]" alt="trafic genius"    title="trafic genius" />
            <h1 className="font-bold text-center text-xl md:text-4xl lg:text-4xl  uppercase ">
              <span className="text-white leading-relaxed">Bienvenue chez <span className="text-primary font-black">Trafic Genius</span> - Votre partenaire pour dominer votre marché grâce à <span className="text-primary font-black">Google Marchand</span> .</span>
            </h1>
            <img src="/trafic-google-marchant/google.png" className=" object-cover lg:h-72 h-64 shadow-2xl shadow-white/60   rounded-2xl" alt="trafic google marchant" title="trafic google marchant" />
            <p className=" text-white text-center text-sm lg:text-base">
              Vous cherchez à maximiser la visibilité de votre entreprise avec <span  className=" text-primary font-medium">Google Marchand</span> ? <br />
              Chez <span  className=" text-primary font-medium">Trafic Genius</span> , nous vous aidons à  optimiser votre présence en ligne.
              un trafic qualifié, et des ventes boostées .        
            </p>
          </div>
          <div>
            <Products/>
          </div>
        </div>
        
    )
}
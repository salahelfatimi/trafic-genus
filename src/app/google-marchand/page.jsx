import Footer from "@/components/footer/page";
import Image from "next/image";
import Products from "./components/product/page";

export async function generateMetadata(){
    return {
      title: "GOOGLE MARCHANT - Online Vision Marchant",
      description: "Optimisez votre visibilité avec Google Marchant et Online Vision Marchant : boostez vos ventes en ligne grâce à un référencement et SEO adaptés à vos besoins.",
      alternates: {
        canonical: "/trafic-google-marchant",
      },
      openGraph: {
        title: "GOOGLE MARCHANT - Online Vision Marchant",
        description: "Optimisez votre visibilité avec Google Marchant et Online Vision Marchant : boostez vos ventes en ligne grâce à un référencement et SEO adaptés à vos besoins.",
        url:`${process.env.NEXT_PUBLIC_BASE_URL}/trafic-google-marchant`,
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
            alt: "GOOGLE MARCHANT - Online Vision Marchant",
          }
        ],
        type: "website",
      
      },
    }
  };

export default function Trafic_google_marchant(){
    return(
        <div>
          <div className=" flex flex-col items-center justify-between container py-4 gap-4 ">
            <Image src={'/TopHeader/logo.png'} width={400} height={400} priority  className=" w-64 lg:w-[30%]" alt="trafic genius"    title="trafic genius" />
            <h1 className="font-black text-center text-xl md:text-4xl lg:text-4xl  uppercase ">
                <span className=" text-white leading-relaxed"><span  className=" text-primary">La réussite </span> de votre présence <span  className=" text-primary">en ligne</span> dépend essentiellement du <span  className=" text-primary">référencement</span>.</span> 
            </h1>
            <img src="/trafic-google-marchant/google.png" className=" object-cover lg:h-72 h-64 shadow-2xl shadow-white/60   rounded-2xl" alt="trafic google marchant" title="trafic google marchant" />
            <p className=" text-white text-center text-sm lg:text-base">
                Le référencement et le positionnement de votre site sur <span className=" text-primary font-medium">Google</span>, également connu sous le nom de <span className=" text-primary font-medium">"SEO" (Search Engine Optimization)</span>, sont des éléments essentiels pour rendre votre <span className=" text-primary font-medium">entreprise visible auprès de vos clients potentiels en ligne</span>. C&apos;est comme avoir une 
                vitrine dans une rue piétonne pour votre boutique - sans elle, votre entreprise est condamnée à l&apos;échec. Notre équipe de techniciens utilise divers outils et techniques pour optimiser votre présence sur Google, y compris l&apos;analyse des mots clés pertinents et 
                l&apos;étude de la position de vos concurrents. Notre objectif est de vous aider à être <span className=" text-primary font-extrafont-medium">facilement trouvable sur Google par vos clients potentiels</span> , et ce, avant vos concurrents. <span className=" text-primary font-extrafont-medium">Nous avons développé différentes formules adaptées à chaque budget</span>.
            </p>
          </div>
          <div>
            <Products/>
          </div>
        </div>
        
    )
}
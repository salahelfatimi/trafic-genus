import { Poppins } from "next/font/google";

const poppins = Poppins ({ subsets: ["latin-ext"], weight:['100','200','300','400','500','600','700','800','900'] });

export const metadata = {
    title: "Mentions légales",
    alternates: {
      canonical: "/mentions-legales",
    },
    openGraph: {
      title: "TRAFIC GENIUS | Mentions légales",
      description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/mentions-legales`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "TRAFIC GENIUS | Mentions légales",
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

export default function MentionsLegales(){
    return(
        <div className="bg-black ">
            <div className={`${poppins.className} p-6  text-white  lg:text-base text-xs md:text-sm  text-center  container`}>
                <h2 className="text-4xl font-bold  mb-4 text-center text-[#EFFF00]">Mentions Légales</h2>
                
                <p className="mb-4">
                    Le présent site web accessible à l&apos;adresse (ci-après dénommé le « Site web »), est édité par <span className="font-semibold text-[#EFFF00]">Trafic Genius LLC</span>.
                </p>
                
                <p className="mb-4">
                    <span className="font-semibold text-[#EFFF00] ">Adresse :</span> 131 Continental Dr, Suite 305, Newark, 19713, Country Of New Castle, DELAWARE
                </p>
                
                <p className="mb-4">
                    <span className="font-semibold text-[#EFFF00]">Téléphone :</span> +1 (302) 294-9508
                </p>
                
                <p className="mb-4">
                    <span className="font-semibold text-[#EFFF00]">E-mail :</span> <a href="mailto:alvarez@traficgenius.com" className="text-blue-600 hover:underline">alvarez@traficgenius.com</a>, <a href="mailto:hamza@traficgenius.com" className="text-blue-600 hover:underline">hamza@traficgenius.com</a>
                </p>
                
                <p className="mb-4">
                    <span className="font-semibold text-[#EFFF00]">Directeur de la publication :</span> Trafic Genius
                </p>
                
                <p className="mb-4">
                    L&apos;hébergement du site est assuré par la société <span className="font-semibold ">Vercel</span>.
                </p>
                
                <p className="mb-4">
                    <span className="font-semibold text-[#EFFF00]">Siège social :</span> Jonavos g. 60C, Kaunas 44131, Lituanie
                </p>
                
                <p className="text-sm text-gray-500">
                    L&apos;éditeur s&apos;engage à respecter l&apos;ensemble des lois françaises concernant la mise en place et l&apos;activité d&apos;un site Internet.
                </p>
            </div>
        </div>

    )
}
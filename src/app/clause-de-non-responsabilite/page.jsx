import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "TRAFIC GENIUS | Clause de non-responsabilité",
    description: "BOOSTEZ VOS VENTES DÈS DEMAIN EN TRANSFORMANT VOTRE SYSTÈME DE VENTE EN AIMANT À CLIENTS !",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      canonical: "/clause-de-non-responsabilite",
  
      
    },
    openGraph: {
      title: "TRAFIC GENIUS | Clause de non-responsabilité",
      description: "BOOSTEZ VOS VENTES DÈS DEMAIN EN TRANSFORMANT VOTRE SYSTÈME DE VENTE EN AIMANT À CLIENTS !",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/clause-de-non-responsabilite`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "TRAFIC GENIUS | Clause de non-responsabilité",
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

export default function ClauseDeNonResponsabilite() {
  return (
    <div className="bg-black">
      <div
        className={`${poppins.className} p-6 text-white lg:text-base text-xs md:text-sm text-center container`}
      >
        <h2 className="text-4xl font-bold mb-4 text-center text-[#EFFF00]">
          Clause de non-responsabilité
        </h2>

        <p className="mb-4">
          <span className="font-semibold text-[#EFFF00]">TRAFIC GENIUS LLC</span>{" "}
          représentée par <span className="font-semibold">HAMZA BAROUAGUI</span>{" "}
          & <span className="font-semibold">ALVAREZ MOUKO</span> ne peuvent et
          ne font aucune garantie quant à votre capacité à obtenir des résultats
          ou à gagner de l'argent avec nos idées, informations, outils ou
          stratégies.
        </p>

        <p className="mb-4">
          Ce que nous pouvons garantir, c'est votre satisfaction à l'égard de
          notre formation. Nous vous offrons une{" "}
          <span className="font-semibold text-[#EFFF00]">
            garantie de satisfaction à 100% de 7 jours
          </span>{" "}
          sur les prestations de service et produits que nous vendons, donc si
          vous n'êtes pas satisfait pour quelque raison que ce soit de la
          qualité de notre service ou formation, demandez simplement votre
          argent.
        </p>

        <p className="mb-4">
          Vous devez savoir que tous les produits et services de notre société
          sont uniquement à des fins éducatives et informatives.
        </p>

        <p className="mb-4">
          Rien sur cette page, aucun de nos sites Web, ni aucun de nos contenus
          ou programmes n'est une promesse ou une garantie de résultats ou de
          revenus futurs, et nous n'offrons aucun conseil juridique, médical,
          fiscal ou autre.
        </p>

        <p className="mb-4">
          Tous les chiffres financiers référencés ici, ou sur l'un de nos sites,
          sont uniquement illustratifs de concepts et ne doivent pas être
          considérés comme des gains moyens, des gains exacts ou des promesses
          de performances réelles ou futures.
        </p>

        <p className="mb-4">
          Soyez prudent et consultez toujours votre comptable, votre avocat ou
          votre conseiller professionnel avant d'agir sur cette information ou
          sur toute information liée à un changement de style de vie ou à votre
          entreprise ou vos finances.
        </p>

        <p className="mb-4">
          Vous seul êtes responsable et responsable de vos décisions, actions et
          résultats dans la vie, et par votre inscription ici, vous acceptez de
          ne pas tenter de nous tenir responsables de vos décisions, actions ou
          résultats, à tout moment, en toutes circonstances.
        </p>
      </div>
    </div>
  );
}

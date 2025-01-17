import Footer from "@/components/footer/page";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata = {
  title: "Politique de Confidentialité",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
  openGraph: {
    title: "TRAFIC GENIUS | Politique de Confidentialité",
    description:
      "Découvrez comment Trafic Genius gère vos données personnelles et respecte votre vie privée sur ce site.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/politique-de-confidentialite`,
    robots: {
      index: true,
      follow: true,
    },
    siteName: "TRAFIC GENIUS | Politique de Confidentialité",
    images: [
      {
        url: `/opengraph-image.jpg`,
        secureUrl: `/opengraph-image.jpg`,
        width: 1200,
        height: 675,
        alt: `TRAFIC GENIUS`,
      },
    ],
    type: "website",
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <div className="bg-black">
        <div
          className={`${poppins.className} p-6 text-white lg:text-base text-xs md:text-sm text-justify container`}
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-[#EFFF00]">
            Politique de Confidentialité
          </h2>

          <p className="mb-4">
            Chez <span className="font-semibold text-[#EFFF00]">Trafic Genius</span>, nous
            attachons une grande importance à la protection de votre vie privée.
            Cette Politique de Confidentialité explique comment nous collectons,
            utilisons et protégeons vos données personnelles lorsque vous
            utilisez notre site web.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-[#EFFF00]">
            1. Données collectées
          </h3>
          <p className="mb-4">
            Nous collectons les informations suivantes lorsque vous visitez
            notre site ou utilisez nos services :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Adresse IP et données de navigation.</li>
            <li>Informations de contact, si vous remplissez un formulaire.</li>
            <li>Cookies et technologies similaires.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-[#EFFF00]">
            2. Utilisation des données
          </h3>
          <p className="mb-4">
            Vos données sont utilisées pour :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Améliorer votre expérience utilisateur.</li>
            <li>Fournir des services adaptés à vos besoins.</li>
            <li>Analyser les performances de notre site.</li>
            <li>Envoyer des communications, avec votre consentement.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-[#EFFF00]">
            3. Cookies
          </h3>
          <p className="mb-4">
            Notre site utilise des cookies pour améliorer votre expérience. Vous
            pouvez gérer vos préférences en matière de cookies via votre
            navigateur ou la bannière affichée lors de votre première visite.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-[#EFFF00]">
            4. Partage des données
          </h3>
          <p className="mb-4">
            Vos données peuvent être partagées avec des partenaires tiers pour
            :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Analyser l&apos;utilisation du site (Google Analytics).</li>
            <li>Diffuser des publicités adaptées à vos intérêts.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-[#EFFF00]">
            5. Vos droits
          </h3>
          <p className="mb-4">
            Conformément au RGPD, vous avez le droit de :
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Accéder à vos données personnelles.</li>
            <li>Demander leur modification ou suppression.</li>
            <li>Retirer votre consentement à tout moment.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-[#EFFF00]">
            6. Sécurité des données
          </h3>
          <p className="mb-4">
            Nous mettons en œuvre des mesures techniques et organisationnelles
            pour protéger vos données personnelles contre tout accès non
            autorisé, perte ou divulgation.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-[#EFFF00]">
            7. Contact
          </h3>
          <p className="mb-4">
            Pour toute question relative à cette politique ou pour exercer vos
            droits, veuillez nous contacter :
          </p>
          <p className="mb-4">
            <span className="font-semibold text-[#EFFF00]">Email :</span>{" "}
            <a
              href="mailto:alvarez@traficgenius.com"
              className="text-blue-600 hover:underline"
            >
              alvarez@traficgenius.com
            </a>
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-[#EFFF00]">
            8. Modifications de la Politique
          </h3>
          <p className="mb-4">
            Nous nous réservons le droit de modifier cette Politique de
            Confidentialité à tout moment. Toute modification sera publiée sur
            cette page avec une date de mise à jour.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

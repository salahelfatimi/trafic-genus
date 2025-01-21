import MessageCookies from "@/components/tools/cookies/message";
import { Exo_2 } from "next/font/google";
import Footer from "./components/footer/page";

const exo_2 = Exo_2({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: { template: "Trafic Genius  | %s" },
  description: "Boostez votre visibilité en ligne avec Trafic Genius, votre expert en Google Marchand. Attirez un trafic qualifié, augmentez vos ventes et optimisez votre présence grâce à nos solutions personnalisées. This title and description include your target keyword 'Google Marchand' while appealing to potential clients by highlighting the value you offer.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function Layout({ children }) {
  return (
    <>
      <MessageCookies/>
      <div className={`${exo_2.className}`}>{children}</div>
      <Footer/>
    </>
  );
}

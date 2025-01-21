import MessageCookies from "@/components/tools/cookies/message";
import { Exo_2 } from "next/font/google";
import Footer from "./components/footer/page";

const exo_2 = Exo_2({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: { template: "Trafic Genius  | %s" },
  description:"Optimisez votre visibilité avec Google Marchant et Online Vision Marchant : boostez vos ventes en ligne grâce à un référencement et SEO adaptés à vos besoins.",
  keywords: ['Market','Google Market	','Vision Market	','Google','Online Vision Market','GOOGLE ONE	','Google Ads	','GOOGLE POST	','GOOGLE STATS	','GOOGLE STATS PACK'],

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

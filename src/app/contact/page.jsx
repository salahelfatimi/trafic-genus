
import Script from "next/script";
import Form from "./form";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/page";

export  function generateMetadata() {
    return {
      title: "Contact",
      alternates: {
        canonical: "/contact",
      },
      openGraph: {
        title: "Trafic Genius | contact",
        description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
        url:`${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
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
            alt: "Trafic Genius | contact",
          }
        ],
        type: "website",
      
      },
      
     
    };
   
  }

  
export default function Contact(){
  return(
    <div className=" flex flex-col gap-12  ">
      <Navbar/>
      <Form/>
      <Footer/>
    </div>
  )
}
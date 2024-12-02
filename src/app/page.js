import Header from "@/components/pages/header/page";
import Saction_2 from "@/components/pages/saction-2/page";
import Saction_3 from "@/components/pages/saction-3/page";
import ButtonUp from "@/components/tools/buttonUp";
import Script from "next/script";



export async function generateMetadata(){
  return {
    title: "Trafic Genius | Marketing Agency ",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Trafic Genius",
      description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
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
          alt: "Trafic Genius",
        }
      ],
      type: "website",
    
    },
  }
};

export  default function Home() {
  return (
  <div className={` overflow-x-hidden `}>
    <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
    <ButtonUp/>
    <Header/>
    <Saction_2/>
    <Saction_3/>
  </div>
  );
}

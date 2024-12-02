import AllBlogs from "@/components/pages/blogs/allBlogs";
import LatestBlog from "@/components/pages/blogs/latestBlog";
import { Exo_2 } from "next/font/google";
import Script from "next/script";
const exo_2 = Exo_2 ({ subsets: ["latin-ext"], weight:['100','200','300','400','500','600','700','800','900'] });

export async function generateMetadata(){
  return {
    title: " blogs",
    alternates: {
      canonical: "/blogs",
    },
    openGraph: {
      title: "TRAFIC GENIUS | blogs",
      description: "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
      url:`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
      robots: {
        index: true,
        follow: true,
      },
      siteName: "TRAFIC GENIUS | blogs",
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

export default function Blogs(){
    
    return(
        <div className={`${exo_2.className} bg-black flex flex-col gap-10  `}>
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
            <LatestBlog/>
            <div className="container flex flex-col gap-10">
                <h2 className=" border-[#EFFF01] text-[#EFFF01] font-bold text-2xl border-b-4 w-full text-center py-4  ">Tous les Blogs</h2>
                <AllBlogs/>
            </div>
           
        </div>
    )
}
import Navbar from "@/components/navbar/navbar";
import AllBlogs from "@/components/pages/blogs/allBlogs";
import LatestBlog from "@/components/pages/blogs/latestBlog";
import { Exo_2 } from "next/font/google";
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
        <div className={`${exo_2.className} bg-black flex flex-col  `}>
            <Navbar/>
            <LatestBlog/>
            <div className="container flex flex-col gap-10">
                <h2 className=" border-[#EFFF01] text-[#EFFF01] font-bold text-2xl border-b-4 w-full text-center py-4  ">Tous les Blogs</h2>
                <AllBlogs/>
            </div>
           
        </div>
    )
}
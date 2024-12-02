"use client"
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LatestBlog() {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        // Fetch the latest blog post from the WordPress API
        const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed&per_page=1`);
        const data = await res.json();

        // Set the latest post data
        setLatestPost(data[0]);
      } catch (error) {
        console.error("Error fetching latest post:", error);
      }
    };

    fetchLatestPost();
  }, []);

  if (!latestPost) {
    return <div><Loading/></div>;
  }

  return (
    <div>
    
      
      {/* Display the featured image */}
      {latestPost._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
        <div key={latestPost.id} className=" relative flex flex-col lg:flex-row justify-around items-center gap-3" >
            <div className=" relative w-full">
                {latestPost._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <Image
                        src={latestPost._embedded['wp:featuredmedia'][0].source_url}
                        alt={latestPost.title.rendered}
                        width={1920}
                        height={1080}
                        className=" h-[100vh] w-full object-cover object-bottom  "
                    />
                )}
                <div className=" absolute inset-0 bg-black opacity-65"></div>
            </div>
          
            <div className=" container absolute  bottom-8  flex flex-col justify-between gap-4">
                <h2 className="  text-[#EFFF01] text-xl lg:text-3xl font-bold " dangerouslySetInnerHTML={{ __html: latestPost.title.rendered }} />
                <p className=" text-white  font-light " dangerouslySetInnerHTML={{ __html: latestPost.excerpt.rendered }} />
                <Link href={`/blogs/${encodeURIComponent(latestPost.title.rendered.trim().replace(/[/%\s]+/g, "-"))}/${latestPost.id}`} className=" bg-[#EFFF01] hover:bg-black hover:text-[#EFFF01] duration-700 rounded py-2 px-4 text-center font-bold border-2 border-[#EFFF01] ">En savoir plus</Link>
            </div>
        </div>
      )}

      
    </div>
  );
}

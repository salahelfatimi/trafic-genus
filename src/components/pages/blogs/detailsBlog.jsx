'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Loading from "@/app/loading";
import NotFound from "@/app/not-found";

export default function DetailsBlog({ id }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Wait for the id to be available

    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts/?_embed&include=${id}`
        );
        
        if (!res.ok) throw new Error("Failed to fetch post data");
        
        const data = await res.json();
        setPost(data[0]);
        setError(null);
      } catch (err) {
        setError("Error loading the post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div><Loading/></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>P<NotFound/></div>;
  }

  return (
    <div className="bg-black">
        <div className="relative">
        {post && (
  <div
    key={post.id}
    className="relative flex flex-col lg:flex-row justify-around items-center gap-3"
  >
    <div className="relative w-full">
      <Image
        src={
          post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
          '/opengraph-image.jpg'
        }
        alt={post.title.rendered || 'Default Alt Text'}
        width={1920}
        height={1080}
        title={post.title.rendered || 'Default Alt Text'}
        className="h-[100vh] w-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-black opacity-65"></div>
    </div>

   
  </div>
)}

            <h1 className="absolute inset-0 z-10 text-white text-3xl lg:text-5xl font-bold text-center flex justify-center items-center">
                {post.title.rendered}
            </h1>
             {/* Date Section */}
            <div className="absolute bottom-0 right-0 p-4 font-black mt-6 text-lg bg-black text-[#EFFF01] rounded-tl-3xl">
                <span>Publié le {new Date(post.date).toLocaleDateString('fr-FR')}</span>
            </div>
        </div>
        <div className="container mx-auto p-4 sm:p-10">
        <div className=" max-w-none text-white">
          <div className=" text-xl" dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
        </div>

       
      </div>
    </div>
  );
}

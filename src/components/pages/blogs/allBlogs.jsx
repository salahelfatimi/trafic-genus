"use client";
import Loading from "@/app/loading";
import { ChevronDown, Expand, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function AllPosts({ type, category }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allLoaded, setAllLoaded] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  
  // Fetch function for posts from WordPress API
  const fetchPosts = useCallback(async (page, isInitialFetch = false) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed&page=${page}&per_page=15`
      );
      if (!response.ok) throw new Error("Failed to fetch posts");
      const newPosts = await response.json();
      if (isInitialFetch) {
        setPosts(newPosts);
        setInitialLoading(false);
      } else {
        setPosts((prev) => [...prev, ...newPosts]);
      }
      
      if (newPosts.length < 15) {
        setAllLoaded(true);
      }
      setPage(page);
      setError(null);
    } catch (err) {
      setError("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setPosts([]); 
    setPage(1); 
    setAllLoaded(false); 
    setInitialLoading(true); 
    fetchPosts(1, true); 
  }, [fetchPosts]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading || allLoaded || window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight - 100) return;
      fetchPosts(page + 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, page, allLoaded]);
  const postsToDisplay = posts.slice(1);

  return (
    <div>
      {initialLoading ? (
        <Loading />
      ) : (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {postsToDisplay.length > 0 ? (
                postsToDisplay.map((post) => (
                    <div key={post.id} className="flex flex-col gap-3">
                        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                            <Image
                                src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||'/opengraph-image.jpg'}
                                alt={post.title.rendered}
                                width={1920}
                                height={1080}
                                className="h-[50vh] object-cover object-center rounded-2xl border-4 border-[#EFFF01]"
                            />
                        )}
                        <h2 className="text-[#EFFF01] text-sm font-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <p className="text-white text-xs font-light" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        <Link href={`/blogs/${encodeURIComponent(post.title.rendered.trim().replace(/[/%\s]+/g, "-"))}/${post.id}`} className=" bg-[#EFFF01] hover:bg-black hover:text-[#EFFF01] duration-700 rounded py-2 px-4 text-center font-bold border-2 border-[#EFFF01] ">
                            En savoir plus
                        </Link>
                    </div>
                ))
            ) : (
                <p>Pas de blogs disponibles...</p>
            )}
        </div>
        </>
      )}

      {/* Loading, Error, and End of Data Message */}
      {loading && !initialLoading && <div className="flex justify-center my-6 text-gray-500 text-xl font-medium flex-col items-center">Loading more blogs...</div>}
      {error && <div className="flex justify-center mt-6 text-red-500">{error}</div>}
      {allLoaded && !loading && <div className="flex justify-center my-6 text-white text-lg font-medium animate-pulse flex-col items-center"> <span>All blogs have been loaded.</span></div>}
    </div>
  );
}

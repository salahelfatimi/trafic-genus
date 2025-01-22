"use client"
import Loading from "@/app/loading";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/strip/product", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json(); 
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleBuy = async (productId) => {
    setProcessing(true);
    try {
      const response = await fetch(`/api/strip/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });
      const data = await response.json();
      window.open(data.url, "_blank");
    } catch (error) {
      console.error("Error creating payment link:", error);
    }finally {
      setProcessing(false);
    }
  }

  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
    <div className="bg-primary relative py-28">
      {
        processing && (
          <div className="bg-black w-full h-full top-0 left-0 fixed flex flex-col items-center justify-center gap-4 z-50">
              <Image src={'/appel/logoyellow.png'} width={100} height={100} alt="trafic genius" className=" animate-spin w-24" title="trafic genius" />
              <p className="text-white font-semibold lg:text-3xl text-center">En Cours ...</p>
          </div>
      )}
      <div className=" bg-black  w-full h-28   top-0 rounded-full-css absolute "></div>
      <div className="container  flex flex-col gap-10 items-center  ">
        <h2 className=" text-black rounded py-4 text-center font-black text-3xl lg:text-6xl">Votre Packs Clé en Main</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-black shadow-2xl shadow-black/40 p-6 rounded-3xl text-white flex flex-col gap-4 items-center justify-between">
              <img src={product.images[0]} alt={product.name} title={product.name} className="h-80" />
              <h2 className="text-primary font-extrabold">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
              <button onClick={() => handleBuy(product.id)} className="rounded-lg bg-primary hover:bg-black border-2 border-primary hover:text-primary duration-700 w-full text-black py-2 font-bold">Acheter Maintenant</button>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
}

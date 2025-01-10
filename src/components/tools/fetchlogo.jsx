"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'

export default  function FetchLogo() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false, speed: 0.6 }),
  ]);
  const images = [
    { image: "logo.png", title: "trafic genius" },
    { image: "logo.png", title: "trafic genius" },
    { image: "logo.png", title: "trafic genius" },
    { image: "logo.png", title: "trafic genius" },
    { image: "logo.png", title: "trafic genius" },
    { image: "logo.png", title: "trafic genius" },  
  ];

  return (
    <div className=" w-full">
      <div className="py-2 overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row flex-nowrap gap-20 pl-10">        
          {images.map((src, index) => ( 
            <img title={src.title} width={600} height={300} src={`/appel/${src.image}`} className="max-w-none h-32 w-auto" alt={src.title} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
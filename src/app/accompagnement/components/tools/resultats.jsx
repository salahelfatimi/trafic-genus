"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'
export default  function Resultats() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
      AutoScroll({ stopOnInteraction: false, speed: 0.6 }),
    ]);
    const images = [
        { image: "/boutique/strip/1.png", title: "Quand les resultats parlent à notre place " },
        { image: "/boutique/strip/2.png", title: "Quand les resultats parlent à notre place " },
        { image: "/boutique/strip/3.png", title: "Quand les resultats parlent à notre place " },
        { image: "/boutique/strip/4.png", title: "Quand les resultats parlent à notre place " },
        { image: "/boutique/strip/1.png", title: "Quand les resultats parlent à notre place " },
        { image: "/boutique/strip/2.png", title: "Quand les resultats parlent à notre place " },
        { image: "/boutique/strip/3.png", title: "Quand les resultats parlent à notre place " },
        { image: "/boutique/strip/4.png", title: "Quand les resultats parlent à notre place " },
    ];
  return (
    <div className=" w-full">
      <div className="py-10 overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row flex-nowrap gap-6 pl-10">
          {images.map((src, index) => ( 
              <img key={index} title={src.title} width={600} height={300} src={`${src.image}`} className="h-96 w-auto cursor-grab active:cursor-grabbing " alt={src.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
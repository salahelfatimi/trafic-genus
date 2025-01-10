"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'

export default function FetchLogoScroll() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false, speed: 0.6 }),
  ]);
  const images = [
    { id: 1, title: 'puma madagascar', image: 'puma.png' },
    { id: 2, title: 'adidas madagascar', image: 'adidas.png' },
    { id: 3, title: '3pe batiment', image: '3pe.png' },
    { id: 4, title: 'chahm couture', image: 'chahm.png' },
    { id: 5, title: 'dayaf & co', image: 'dayaf&co.png' },
    { id: 12, title: 'SOCIETE EL HABRI CONCEPT', image: 'SOCIETEELHABRICONCEPT.png' },
    { id: 6, title: '3pebat ecoenergie', image: 'ecoEnergie.png' },
    { id: 7, title: 'leyane', image: 'leyane.png' },
    { id: 8, title: 'next level group', image: 'nextlevel.png' },
    { id: 9, title: 'skyline immo', image: 'skylineImmo.png' },
    { id: 10, title: 'clinique chifa tasnime', image: 'cliniquechifatasnime.png' },
    { id: 11, title: "French O'Paname", image: 'FrenchOPaname.png' },
    { id: 13, title: "SAVEURS DES PRAIRIES", image: 'SAVEURSDESPRAIRIES.png' },
    { id: 13, title: "NJ3D", image: 'NJ3D.png' },
  ];
  return (
    <div className=" w-full select-none">
      <div className="py-10 overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row flex-nowrap gap-20 pl-10 active:cursor-grabbing cursor-grab">      
          {images.map((src, index) => ( 
            <img key={index} title={src.title} width={500} height={500} quality={50} src={`/partners/${src.image}`} className=" h-48 w-auto " alt={src.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

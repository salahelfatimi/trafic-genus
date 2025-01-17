"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'

export default function FetchLogoScroll() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false, speed: 0.6 }),
  ]);
  const images = [
    { id: 1, title: 'puma madagascar', image: 'puma.png' , url:'#'},
    { id: 2, title: 'adidas madagascar', image: 'adidas.png' , url:'#'},
    { id: 3, title: '3pe batiment', image: '3pe.png' ,url:'https://3pebatiment.fr/accueil-3pebat'},
    { id: 4, title: "click Funnels", image: 'clickFunnels.png',url:'https://www.clickfunnels.com/' },
    { id: 5, title: 'dayaf & co', image: 'dayaf&co.png' ,url:'https://www.dayafandco.com'},
    { id: 6, title: '3pebat ecoenergie', image: 'ecoEnergie.png' ,url:'https://3pebat-ecoenergie.fr'},
    { id: 7, title: 'leyane', image: 'leyane.png' ,url:'https://leyane.com'},
    { id: 8, title: 'next level group', image: 'nextlevel.png' ,url:'https://nextlevelgroup.fr'},
    { id: 9, title: "systemeIo", image: 'systemeIo.png' ,url:'https://systeme.io'},
    { id: 10, title: "SHOPIFY", image: 'SHOPIFY.png' ,url:'https://www.shopify.com'},
    { id: 11, title: "French O'Paname", image: 'FrenchOPaname.png' ,url:'https://www.french-opaname.com'},
    { id: 12, title: "STRIPE", image: 'STRIPE.png' ,url:'https://stripe.com'},
    { id: 13, title: "SAVEURS DES PRAIRIES", image: 'SAVEURSDESPRAIRIES.png' ,url:'https://saveursdesprairies.com'},
    { id: 14, title: "NJ3D", image: 'NJ3D.png' ,url:'https://nj3d-marrakech.com'},
    { id: 15, title: "COPIFY", image: 'COPIFY.png' ,url:'https://www.copyfy.io'},
    { id: 16, title: 'chahm couture', image: 'chahm.png'  , url:'#'},
    { id: 17, title: 'SOCIETE EL HABRI CONCEPT', image: 'SOCIETEELHABRICONCEPT.png' , url:'https://elhabriconcept.com'},
    { id: 18, title: 'skyline immo', image: 'skylineImmo.png' , url:'https://skyline-immo.com' },
    { id: 19, title: 'clinique chifa tasnime', image: 'cliniquechifatasnime.png' , url:'#'},
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

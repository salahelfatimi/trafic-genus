"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'
import { CircleX, FileText, Users } from "lucide-react";

export default  function FetchText() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
      AutoScroll({ stopOnInteraction: false, speed: 0.6 }),
    ]);
    const images = [
        { title: "On vous garantit un résultat unique et 100% personnalisé pour vous démarquer" , icon:<FileText size={50} className=" " /> },
        { title: "Nous prenons le temps nécessaire, faisons preuve d'écoute et de bienveillance, de la gestion du projet jusqu'à l'atteinte de vos objectifs financiers" , icon:<Users size={50}/>},
        { title: "Nous vous apportons LA solution qui correspond le mieux à vos attentes" , icon:<CircleX size={50}/>},
        { title: "Nous prenons le temps nécessaire, faisons preuve d'écoute et de bienveillance, de la gestion du projet jusqu'à l'atteinte de vos objectifs financiers" , icon:<Users size={50}/>},
        { title: "On dispose d'une solide expertise dans la vente en ligne" , icon:<FileText size={50}/>},
        { title: "On vous garantit un résultat unique et 100% personnalisé pour vous démarquer" , icon:<FileText size={50}/>},
        { title: "Nous vous apportons LA solution qui correspond le mieux à vos attentes" , icon:<CircleX size={50}/>},
        { title: "On vous garantit un résultat unique et 100% personnalisé pour vous démarquer" , icon:<FileText size={50} className=" " /> },
        { title: "Nous prenons le temps nécessaire, faisons preuve d'écoute et de bienveillance, de la gestion du projet jusqu'à l'atteinte de vos objectifs financiers" , icon:<Users size={50}/>},
        { title: "Nous vous apportons LA solution qui correspond le mieux à vos attentes" , icon:<CircleX size={50}/>},
        { title: "Nous prenons le temps nécessaire, faisons preuve d'écoute et de bienveillance, de la gestion du projet jusqu'à l'atteinte de vos objectifs financiers" , icon:<Users size={50}/>},
        { title: "On dispose d'une solide expertise dans la vente en ligne" , icon:<FileText size={50}/>},
        { title: "On vous garantit un résultat unique et 100% personnalisé pour vous démarquer" , icon:<FileText size={50}/>},
        { title: "Nous vous apportons LA solution qui correspond le mieux à vos attentes" , icon:<CircleX size={50}/>}
       
    ];

  return (
    <div className=" w-full">
      <div className="py-10 overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row flex-nowrap gap-6 pl-10 active:cursor-grabbing cursor-grab ">
          {images.map((ele, index) => (
            <div className=" select-none	 relative duration-700 bg-black  space-x-6  p-4 flex flex-col items-center justify-start gap-20  border-2  rounded-xl  border-[#fff]  min-w-80  " key={index}>
                <div className=" absolute -left-1 top-28 border-l-8 border-[#F2FD01] h-48 group-hover:border-white duration-700"></div>
                <div className="relative bg-[#F2FD01]  rounded-full p-2  duration-700">{ele.icon}</div>
                <p className="relative text-white text-xl text-center">{ele.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { CircleX, FileText, Users } from "lucide-react";
import Image from "next/image";
export default  function FetchText() {
    const images = [
        { title: "On vous garantit un résultat unique et 100% personnalisé pour vous démarquer" , icon:<FileText size={60} className=" " /> },
        { title: "Nous prenons le temps nécessaire, faisons preuve d'écoute et de bienveillance, de la gestion du projet jusqu'à l'atteinte de vos objectifs financiers" , icon:<Users size={60}/>},
        { title: "Nous vous apportons LA solution qui correspond le mieux à vos attentes" , icon:<CircleX size={60}/>},
        { title: "Nous prenons le temps nécessaire, faisons preuve d'écoute et de bienveillance, de la gestion du projet jusqu'à l'atteinte de vos objectifs financiers" , icon:<Users size={60}/>},
        { title: "On dispose d'une solide expertise dans la vente en ligne" , icon:<FileText size={60}/>},
        { title: "On vous garantit un résultat unique et 100% personnalisé pour vous démarquer" , icon:<FileText size={60}/>},
        { title: "Nous vous apportons LA solution qui correspond le mieux à vos attentes" , icon:<CircleX size={60}/>},
        { title: "On vous garantit un résultat unique et 100% personnalisé pour vous démarquer" , icon:<FileText size={60} className=" " /> },
        { title: "Nous prenons le temps nécessaire, faisons preuve d'écoute et de bienveillance, de la gestion du projet jusqu'à l'atteinte de vos objectifs financiers" , icon:<Users size={60}/>},
        { title: "Nous vous apportons LA solution qui correspond le mieux à vos attentes" , icon:<CircleX size={60}/>},
        { title: "Nous prenons le temps nécessaire, faisons preuve d'écoute et de bienveillance, de la gestion du projet jusqu'à l'atteinte de vos objectifs financiers" , icon:<Users size={60}/>},
        { title: "On dispose d'une solide expertise dans la vente en ligne" , icon:<FileText size={60}/>},
        { title: "On vous garantit un résultat unique et 100% personnalisé pour vous démarquer" , icon:<FileText size={60}/>},
        { title: "Nous vous apportons LA solution qui correspond le mieux à vos attentes" , icon:<CircleX size={60}/>}
       
    ];

  return (
    <>
      {images.map((ele, index) => (
        <div className=" cursor-pointer select-none	 relative duration-700 bg-black hover:bg-gradient-to-b from-[#F2FD01] group   via-[#6a6e24] to-[#000] space-x-6  p-4 flex flex-col items-center justify-start gap-20  border-2   border-[#fff]  min-w-80  " key={index}>
            <div className=" absolute -left-1 top-28 border-l-8 border-[#F2FD01] h-48 group-hover:border-white duration-700"></div>
            <div className="relative bg-[#F2FD01]  rounded-full p-3  duration-700">{ele.icon}</div>
            <p className="relative text-white  font-extralight text-xl text-center">{ele.title}</p>
        </div>
      ))}
    </>
  );
}
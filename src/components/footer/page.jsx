import { Facebook, Instagram, Linkedin, Mail, Map, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
      <footer className="flex flex-col  " >
        <div className="bg-[url('/BACKGROUND.jpg')] bg-cover py-44  flex flex-col items-center justify-center ">
            <Image src={'/TopHeader/logo.png'} width={500} height={500} alt="Logo" />
            <div className=" flex flex-col gap-4 lg:flex-row items-center justify-center  container ">
            <p className={` font-serif select-none flex  flex-col lg:flex-row  text-xl items-center font-bold capitalize text-center lg:text-start text-white `}>
                Copyright &copy; {new Date().getFullYear()} trafic genius . Touts les droits sont réservés
                <span className=" text-[#F2FD01]   ">
                
                </span>
            </p>
            </div>
        </div>
        
      </footer>
      
    )
}
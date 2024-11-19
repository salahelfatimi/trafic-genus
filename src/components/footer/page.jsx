import { Facebook, FacebookIcon, Instagram, InstagramIcon, Linkedin, LinkedinIcon, Mail, Map, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
      <footer className="flex flex-col  " >
        <div className="bg-[url('/BACKGROUND.jpg')] bg-cover py-10 gap-10  flex flex-col items-center justify-center ">
            <Image src={'/TopHeader/logo.png'} width={500} height={500} alt="Logo" />
              <p className={`  select-none flex gap-1 flex-row   text-center items-center  capitalize  font-sans text-xs px-4 lg:text-sm  justify-centerxt-start text-[#9F9B9A] `}>
                Ce site ne fait pas partie du site YouTube™, Google™, Facebook™, Google Inc. ou Facebook Inc. <br />
                De plus, ce site n’est PAS approuvé par YouTube™, Google™ ou Facebook™ en aucune façon.<br />
                FACEBOOK™ est une marque de commerce de FACEBOOK, Inc. GOOGLE™ et YOUTUBE™ sont des marques de commerce de GOOGLE Inc.<br /><br />

                UK | TRAFIC GENIUS LTD 📍: 128 City Road, London, United Kingdom, EC1V 2NX <br />
                US | TRAFIC GENIUS LLC 📍: 131 Continental Dr, Suite 305, Newark, 19713, county of New Castle, DELAWARE<br />
              </p>
              <div className="flex gap-6">
                <Link href={'https://www.instagram.com/trafic_genius/'} target="_blank" className="bg-[#F2FD01] p-1 rounded-md group hover:bg-black border-[#F2FD01] border-2 duration-500"><InstagramIcon size={30} className=" stroke-[#000] group-hover:stroke-[#F2FD01]" /></Link>
                <Link href={'https://www.linkedin.com/company/trafic-genius'} target="_blank" className="bg-[#F2FD01] p-1 rounded-md group hover:bg-black border-[#F2FD01] border-2 duration-500"><LinkedinIcon size={30} className=" stroke-[#000] group-hover:stroke-[#F2FD01]" /></Link>
                <Link href={'https://www.facebook.com/traficgenius'} target="_blank" className="bg-[#F2FD01] p-1 rounded-md group hover:bg-black border-[#F2FD01] border-2 duration-500"><FacebookIcon size={30} className=" stroke-[#000] group-hover:stroke-[#F2FD01]"/></Link>
              </div>
        </div>
        <div className=" bg-[#F2FD01] py-10">
          <div className=" flex flex-col gap-4 items-center justify-center  container ">
              <p className={` text-black font-serif select-none flex  flex-col lg:flex-row  text-xl items-center font-bold capitalize text-center lg:text-start  `}>
                  Copyright &copy; {new Date().getFullYear()} trafic genius . Touts les droits sont réservés
              </p>
          </div>
        </div>
        
      </footer>
      
    )
}
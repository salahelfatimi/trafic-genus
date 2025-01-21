import { Facebook, FacebookIcon, Instagram, InstagramIcon, Linkedin, LinkedinIcon, Mail, Map, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
      <footer className="flex flex-col  " >
        <div className="bg-[url('/BACKGROUND.jpg')] bg-cover py-10 gap-10  flex flex-col items-center justify-center ">
            <Image src={'/TopHeader/logo.png'} width={500} height={500} alt="Logo" />
              <div className={`  select-none flex gap-1 flex-col   text-center items-center  capitalize   text-xs px-4 lg:text-sm  justify-centerxt-start text-[#9F9B9A] `}>
                <p>Ce site ne fait pas partie du site YouTube™, Google™, Facebook™, Google Inc. ou Facebook Inc. </p>
                <p>De plus, ce site n’est PAS approuvé par YouTube™, Google™ ou Facebook™ en aucune façon.</p>
                <p>FACEBOOK™ est une marque de commerce de FACEBOOK, Inc. GOOGLE™ et YOUTUBE™ sont des marques de commerce de GOOGLE Inc.</p>

                <p className=" pt-4">UK | TRAFIC GENIUS LTD 📍: 128 City Road, London, United Kingdom, EC1V 2NX </p>
                <p>US | TRAFIC GENIUS LLC 📍: 131 Continental Dr, Suite 305, Newark, 19713, county of New Castle, DELAWARE</p>

              </div>
              <div className=" flex flex-col  md:flex-row text-xs text-center gap-2 text-[#9F9B9A]">
                <Link className=" hover:underline  underline-offset-2" href={'/mentions-legales'}>Mentions légales</Link>
                <Link className=" hover:underline  underline-offset-2" href={'/clause-de-non-responsabilite'}>Clause de non-responsabilité</Link>
                <Link className=" hover:underline  underline-offset-2" href={'/conditions-generales-de-vente'}> Conditions générales de vente</Link>
              </div>
            
              <div className="flex gap-6">
                <Link href={'https://www.instagram.com/trafic_genius/'} target="_blank" className="bg-[#F2FD01] p-1 rounded-md group  border-[#F2FD01] border-2 duration-500"><InstagramIcon size={25} className=" " /></Link>
                <Link href={'https://www.linkedin.com/company/trafic-genius'} target="_blank" className="bg-[#F2FD01] p-1 rounded-md group  border-[#F2FD01] border-2 duration-500"><LinkedinIcon size={25} className=" " /></Link>
                <Link href={'https://www.facebook.com/traficgenius'} target="_blank" className="bg-[#F2FD01] p-1 rounded-md group  border-[#F2FD01] border-2 duration-500"><FacebookIcon size={25} className="  "/></Link>
                <Link href={'https://snapchat.com/t/37ZQI5I9'} target="_blank" className="bg-[#F2FD01] p-1 rounded-md group  border-[#F2FD01] border-2 duration-500"><Image src={'/footer/snapchat.png'} width='25' height='25'  className="  " alt="snapchat trafic genius"/></Link>

              </div>
        </div>
        <div className=" bg-[#F2FD01] py-10">
          <div className=" flex flex-col gap-4 items-center justify-center  container ">
              <p className={` text-black select-none flex   flex-col lg:flex-row   items-center font-medium capitalize text-center lg:text-start  `}>
                  Copyright &copy; {new Date().getFullYear()} trafic genius . Touts les droits sont réservés
              </p>
          </div>
        </div>
        
      </footer>
      
    )
}
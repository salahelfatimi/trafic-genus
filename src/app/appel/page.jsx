import Image from "next/image";
import FetchLogo from '@/components/tools/fetchlogo'
import CalendlyEmbed from "@/components/tools/CalendlyWidget";
import { Poppins } from "next/font/google";
const poppins = Poppins ({ subsets: ["latin-ext"], weight:['900'] });
export default  function  Appel(){
 
    return(
        
        <main className={`${poppins.className}  bg-black   flex flex-col  ga-20 justify-between `}>
            <div className=" bg-[#F2FD01]  flex  gap-4 items-center justify-center w-full ">
                <Image src={'/appel/fulllogo.png'} width={100} height={100} alt="trafic genius"    title="trafic genius" />
                <h1 className=" font-serif font-extrabold text-sm lg:text-xl text-black">Solutions Digitales de Premier Ordre : Expertise, Créativité et Performances Exceptionnelles !</h1>
            </div>
            <div className=" container  flex flex-col gap-10 items-center justify-center">
                

                <h2 className=" py-10 font-black text-center text-4xl md:text-7xl lg:text-9xl bg-clip-text text-transparent bg-[url('/appel/logoyellow.png')] bg-[#42384D] uppercase  bg-auto bg-no-repeat bg-top animate-slide-bg">
                    trafic genius
                </h2>                
                <p className=" font-bold text-xl lg:text-4xl text-white text-center">Des solutions innovantes pour maximiser vos <span className="text-[#F2FD01] ">BÉNÉFICES</span></p>
            </div>
            <div className="container pt-10">
                <CalendlyEmbed url="https://calendly.com/trafic-gen-team/discutons-de-votre-business"/>
            </div>
            <div className=" py-2 border-y-4 border-[#F2FD01]">
                   
                <FetchLogo/>
                   
            </div>

        
        </main>
    )
}
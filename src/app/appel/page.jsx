
import Footer from "@/components/footer/page";
import Image from "next/image";
import FetchLogo from '@/components/fetchlogo'
import InfiniteHorizontalScroll from '@/components/infiniteHorizontalScroll'
import Head from "next/head";

import CalendlyEmbed from "@/components/CalendlyWidget";

export default function Appel(){
 
    return(
        
        <div className="  bg-black   flex flex-col pt-20 justify-between ">
            
            <div className=" container  flex flex-col gap-10 items-center justify-center">
                <div className=" bg-[#F2FD01] p-6 rounded-full flex gap-4 items-center justify-center ">
                    <Image src={'/appel/logodark.png'} width={100} height={100} alt="trafic genius"    title="traficgenius" />
                    <h1 className=" font-serif font-bold text-xl text-black">Solutions Digitales de Premier Ordre : Expertise, Créativité et Performances Exceptionnelles !</h1>
                </div>

                <h2 className="font-black text-center text-4xl lg:text-9xl  text-[#F2FD01] ">trafic genius</h2>
                <p className=" font-bold text-4xl text-white">Des solutions innovantes pour maximiser vos <span className="text-[#F2FD01] ">BÉNÉFICES</span></p>
            </div>
            <div className="container">
                <CalendlyEmbed url="https://calendly.com/traficgenius/60min?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=f2ff00"/>
            </div>
            <div className=" py-2 border-y-4 border-[#F2FD01]">
                    <InfiniteHorizontalScroll>
                        <FetchLogo/>
                    </InfiniteHorizontalScroll>
            </div>

            <Footer/>
        </div>
    )
}
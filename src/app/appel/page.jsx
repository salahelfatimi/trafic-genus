import Image from "next/image";
import FetchLogo from '@/components/fetchlogo'
import InfiniteHorizontalScroll from '@/components/infiniteHorizontalScroll'
import CalendlyEmbed from "@/components/CalendlyWidget";
export default function Appel(){
 
    return(
        
        <main className="  bg-black   flex flex-col pt-4 ga-20 justify-between ">
            
            <div className=" container  flex flex-col gap-10 items-center justify-center">
                <div className=" bg-[#F2FD01] p-6 rounded-3xl flex  gap-4 items-center justify-center ">
                    <Image src={'/appel/logodark.png'} width={60} height={60} alt="trafic genius"    title="traficgenius" />
                    <h1 className=" font-serif font-bold lg:text-xl text-black">Solutions Digitales de Premier Ordre : Expertise, Créativité et Performances Exceptionnelles !</h1>
                </div>

                <h2 className=" py-10 font-black text-center text-4xl md:text-7xl lg:text-9xl bg-clip-text text-transparent bg-[url('/appel/bg.png')] bg-[#42384D] uppercase  bg-auto bg-no-repeat bg-top animate-slide-bg">
                    trafic genius
                </h2>                
                <p className=" font-bold text-xl lg:text-4xl text-white text-center">Des solutions innovantes pour maximiser vos <span className="text-[#F2FD01] ">BÉNÉFICES</span></p>
            </div>
            <div className="container pt-10">
                <CalendlyEmbed url="https://calendly.com/traficgenius/60min?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=f2ff00"/>
            </div>
            <div className=" py-2 border-y-4 border-[#F2FD01]">
                    <InfiniteHorizontalScroll>
                        <FetchLogo/>
                    </InfiniteHorizontalScroll>
            </div>

        
        </main>
    )
}
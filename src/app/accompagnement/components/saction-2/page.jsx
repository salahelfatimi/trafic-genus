import Image from "next/image"
import Link from "next/link"
import Expert from "@/components/pages/expert/page"


export default function Saction2(){
 
    return (
        <div className=" ">
        {/* saction strip */}
        <div className="bg-black pb-10 relative ">
        <div className="rounded-full-css bg-black w-full rotate-180 h-20 bottom-0 absolute z-10 "></div>
            <div className=" flex flex-col gap-8 ">
                <div className=" container flex flex-col gap-10 items-center justify-center ">
                    <div className="flex flex-col gap-8 text-center text-black">
                        <h2 className="text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase leading-relaxed">
                            Des solutions spécialement conçues pour vous!
                        </h2>
                        <p className=" text-sm lg:text-base text-center text-white font-normal">
                            Avec mon équipe, nous avons tester plusieurs méthodes, diverses combinaison et rassemblé les meilleurs <br className=' hidden lg:block' /> stratégies pour t&apos;aider à obtenir de résultats concrets.
                        </p>                     </div>
                        <Link href={'/appel'} target="_blank" >
                                <button className="cssbuttons-io-button uppercase">
                                    je me lance maintenant !
                                    <div className="icon">
                                        <svg
                                        height="24"
                                        width="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path
                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                            fill="currentColor"
                                        ></path>
                                        </svg>
                                    </div>
                                </button>
                        </Link>   
                </div>
                <Image src={'/saction2/Striiiiiiiipe.png'} width={1920} height={1080} className=" bg-cover w-full   " alt="trafic genius"    title="trafic genius"/>
               
                
            </div>
        </div>

        <Expert/>

        {/* saction 11 */}
        
        <div className="bg-black ">
            <div className=" container  flex gap-20 flex-col justify-center items-center  pb-10">
                <div className="flex-col flex items-center gap-2 justify-center">
                    <div className="w-screen overflow-hidden">
                        <p className=" font-sans text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">trafic genius trafic genius , UNE ÉQUIPE DE PROFESSIONNELS À VOS CÔTÉS</p>
                    </div>
                        <h2 className="lg:text-4xl text-2xl font-bold text-center text-white capitalize ">trafic genius, UNE ÉQUIPE DE PROFESSIONNELLES À  <span className=" bg-[#F2FD01] p-[0.10rem]  "><span className="relative text-black"> VOS CÔTÉS </span></span></h2>
                </div>
                
                <div className="  lg:w-[70%]  font-light text-white text-center lg:text-2xl border-[#F2FD01] border-4 p-4 rounded-3xl">
                    <p>
                        Nous sommes la meilleure agence marketing francophone spécialisé dans l&apos;acquisition de Trafic de qualité, avec plus de 3 millions € dépensés en publicité Facebook, et plus de 5000 Leads qualifiés générés en Cold Calling, nous mettrons à votre disposition, une équipe essentiellement composée d&apos;experts selon votre besoin de croissance. <br /><br />

                        De l&apos;imagination à la réalisation de votre projet, nous vous aidons à obtenir plus de prospects afin de réaliser plus de vente, dans un seul et unique objectif, celui de faire plus de profits et vous positionner comme une figure d&apos;autorité respectée sur votre marché.                
                    </p>
                </div>

                
            </div>
        </div>

      
        
      </div>
    )
}
import Image from "next/image"
import Link from "next/link"
import Expert from "@/components/pages/expert/page"
import { MessageCircleWarningIcon } from "lucide-react"


export default function Saction2(){
 
    return (
        <div className=" ">
        {/* saction strip */}
        <div className="bg-black pb-10 relative ">
        <div className="rounded-full-css bg-black w-full rotate-180 h-20 bottom-0 absolute z-10 "></div>
            <div className=" flex flex-col gap-8 ">
                <div className=" container flex flex-col gap-10 items-center justify-center ">
                    <div className="flex flex-col gap-8 text-center text-black">
                        <h2 className="text-xl md:text-4xl lg:text-4xl font-black text-white  text-center uppercase leading-relaxed">
                            Découvre comment faire tes premiers <br /> <span className=" text-primary">1 000 € en seulement 5 jours</span>  – Clique ici pour <span className=" text-primary">commencer maintenant !  </span></h2>
                        <p className=" text-sm lg:text-base text-center text-white font-normal">
                            Avec mon équipe, nous avons testé plusieurs méthodes, diverses combinaison et rassemblé les meilleurs <br className=' hidden lg:block' /> stratégies pour t&apos;aider à obtenir de résultats concrets.
                        </p>                     </div>
                        <Link href={'/accompagnement/appel'} target="_blank" >
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
      </div>
    )
}
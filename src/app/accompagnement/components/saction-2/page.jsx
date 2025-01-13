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
                <div className=" container flex-col flex items-center gap-2 justify-center">
                        <h2 className="text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase leading-relaxed">trafic genius, UNE ÉQUIPE DE PROFESSIONNELLES À  <span className="relative text-primary"> VOS CÔTÉS </span></h2>
                </div>
                <div className="  lg:w-[70%]   font-light text-white lg:text-2xl border-[#F2FD01] border-4 p-10 rounded-3xl">
                    <ul className="flex flex-col gap-4 list-disc list list-outside leading-relaxed ">
                        <li >Un magnifique site e-commerce qui transforme les visiteurs en acheteurs enthousiastes</li>
                        <li>1 produits gagnants sélectionnés par moi et mon équipe d'experts, directement préchargés dans votre boutique pour que vous puissiez commencer à réaliser des ventes dès le premier jour</li>
                        <li>Notre thème Premium personnalisé qui démarque instantanément votre boutique de la concurrence</li>
                        <li>​​Connexion transparente à des fournisseurs de confiance qui expédieront rapidement vos produits gagnants et feront en sorte que les clients reviennent commander sur votre boutique</li>
                        <li>​Un système d'automatisation des commandes de votre boutique vous permettant d'expédier rapidement les produits aux clients sans effort et sans avoir à lever le petit doigt</li>    
                    </ul>
                </div>

                
            </div>
        </div>

      
        
      </div>
    )
}
'use client'
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Saction3(){
   
     return (
        <div className=" flex flex-col bg-black  ">
           
          

            {/* saction 4 */}
            <div className="bg-[#F2FD01] relative py-16">
            <div className="rounded-full-css bg-black w-full rotate-180 h-16 bottom-0 absolute z-10 "></div>
            <div className="rounded-full-css bg-black w-full h-16 top-0 absolute z-10 "></div>
                <div className=" container flex flex-col gap-20 py-20">
                    <div className=" container flex flex-col items-center justify-center  ">
                        <h2 className=" text-xl md:text-4xl lg:text-4xl font-black text-black  text-center uppercase leading-relaxed ">UNIQUEMENT POUR LES ENTREPRENEURS MOTIVÉS </h2>                     
                    </div>  
                    <div className=" container flex flex-col-reverse lg:flex-row-reverse justify-center items-center">
                        <div className=" text-left   lg:w-[70%] font-light text-sm  lg:text-xl bg-[#000] text-white  rounded-xl p-6   shadow-2xl">
                            <p>
                                Nous sommes passionnés par ce que nous faisons et nous croyons que notre passion transparaît dans notre travail. Nous sommes toujours à la recherche de nouvelles opportunités pour améliorer et développer nos compétences, afin de fournir à nos clients les solutions les plus innovantes et les plus performantes. <br /><br />

                                Chez Get Funnels, nous sommes fiers de notre culture d&apos;entreprise axée sur la collaboration et le partage des connaissances. <br /><br />

                                Nous aimons travailler en équipe pour partager nos idées et trouver les meilleures solutions pour nos clients.     <br /><br />
                            </p>
                        
                        </div>
                        <div className=" rounded-2xl  ">
                            <Image src={'/saction3/light.png'} className=" cursor-pointer  hover:grayscale-0  grayscale hover:rotate-12 duration-700" width={250} height={500} alt="trafic genius"    title="trafic genius"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* saction 5 */}

            <div className=" container relative  flex flex-col justify-center items-center  pb-10">

                <div className="z-10 bg-[url('/BACKGROUND.jpg')] bg-cover border-8 shadow-2xl border-[#F2FD01]  gap-10 rounded-3xl p-6 lg:p-20  flex flex-col justify-center items-center">
                    <h4 className="  text-[#fff]  text-center lg:text-4xl text-2xl  font-bold">Boostez votre entreprise grâce à notre expertise en scaling</h4>
                    <div className=" border-t-4 border-[#F2FD01] w-full"></div>
                    <p className="  text-sm  text-white  text-center lg:text-2xl">Prenez contact et échangeons ensemble sur votre projet
                    </p>
                    <Link href={'/accompagnement/appel'} target="_blank" >
                    <button className="cssbuttons-io-button uppercase ">
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
               
            </div>
            <div className=" bg-black">
                <div className="  pb-10 md:container">
                    <div className=" container flex flex-col items-center justify-center  ">
                        <h2 className=" text-xl md:text-4xl lg:text-4xl font-black text-white   text-center uppercase leading-relaxed ">UNIQUEMENT POUR LES ENTREPRENEURS MOTIVÉS </h2>                     
                    </div>  
                    <div className="  ">
                     <div className=" p-8">
                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-t-4 border-x-4  border-[#000] shadow-2xl py-10 border-b-4 rounded-t-3xl p-4 " open>
                            <summary className="lg:text-xl text-base  font-medium leading-6 text-[#000] cursor-pointer  select-none">
                            Est-ce que vous pouvez me montrer d&apos;autres exemples de tunnels de vente ou sites Internet que vous avez réalisés ?
                            </summary>
                            <div className="mt-3  font-light lg:text-lg text-xs  leading-6 text-black ">
                            <p>Oui, si vous le souhaitez nous pouvons vous présenter d&apos;autres exemples de tunnels de vente ou sites Internet que ceux qui figurent sur cette page. Il suffit de prendre contact avec nous en cliquant sur l&apos;un des boutons « Prendre contact maintenant » et nous vous ferons parvenir nos dernières réalisations.</p>
                            </div>
                        </details>
                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-x-4  border-[#000] shadow-2xl py-10 border-b-4  p-4 " >
                            <summary className="lg:text-xl  font-medium leading-6 text-[#000] cursor-pointer  select-none">
                            Est-ce que vous pouvez vous occuper du copywriting de mon tunnel de vente ou de mon site Internet ?
                            </summary>
                            <div className="mt-3  font-light lg:text-lg text-xs  leading-6 text-black ">
                            <p>Oui, nous pouvons vous fournir un tunnel de vente ou site Internet complet de A à Z y compris avec le copywriting. Si c&apos;est ce que vous souhaitez, nous pouvons en parler ensemble lors de votre appel stratégique offert.</p>
                            </div>
                        </details>
                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-x-4 border-[#000] shadow-2xl  py-10 border-b-4 p-4 " >
                            <summary className="lg:text-xl  font-medium leading-6 text-[#000] cursor-pointer  select-none">
                            Quels sont vos tarifs ?
                            </summary>
                            <div className="mt-3  font-light lg:text-lg text-xs  leading-6 text-black ">
                            <p>Nos tarifs sont adaptés aux différentes demandes de nos clients. Pour en savoir plus, nous vous invitons à prendre contact avec nous directement. Nous serons ravis de répondre à toutes vos questions.</p>
                            </div>
                            
                        </details>

                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-x-4 border-[#000] shadow-2xl py-10 border-b-4  p-4 " >
                            <summary className="lg:text-xl  font-medium leading-6 text-[#000] cursor-pointer  select-none">
                            En combien de temps êtes-vous capable de me livrer ?
                            </summary>
                            <div className="mt-3  font-light lg:text-lg text-xs  leading-6 text-black ">
                            <p>En moyenne, nous pouvons vous livrer dans un délai de 7 à 15 jours ouvrés en fonction du nombre de pages et de la complexité de votre projet.</p>
                            </div>
                        </details>
                        <details className="bg-[#F2FD01]   open:ring-[#F2FD01]  border-b-4 border-x-4 border-[#000] shadow-2xl rounded-b-3xl   p-4 " >
                            <summary className="lg:text-xl  font-medium leading-6 text-[#000] cursor-pointer  select-none">
                            Comment faire pour vous contacter ?
                            </summary>
                            <div className="mt-3  font-light lg:text-lg text-xs leading-6 text-black ">
                            <p>Pour nous contacter, vous pouvez cliquer sur l&apos;un des boutons « Prendre contact maintenant » que vous trouverez sur cette page. Après avoir rempli un court formulaire, nous reviendrons vers vous dans les plus brefs délais.</p>
                            </div>
                        </details>
                        
                    </div>
                    </div>
                </div>
            </div>
            

        

        </div>
     )
}
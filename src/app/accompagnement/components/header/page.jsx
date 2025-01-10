'use client'
import Link from "next/link";
import InfiniteHorizontalScroll from '../tools/infiniteHorizontalScroll'
import Image from 'next/image';
import { useState } from 'react';
import {CheckCheck, Play, X } from 'lucide-react';
import Resultats from "../tools/resultats";
import FetchLogoScroll from "@/components/tools/fetchLogoScroll";

export default  function Header (){
        const [showVideo, setShowVideo] = useState(false);
        const website =[
            {title:'Imaginez votre projet sous son meilleur JOUR',image:'1.png'},
            {title:'Imaginez votre projet sous son meilleur JOUR',image:'2.png'},
            {title:'Imaginez votre projet sous son meilleur JOUR',image:'3.png'},
            {title:'Imaginez votre projet sous son meilleur JOUR',image:'4.png'},
            {title:'Imaginez votre projet sous son meilleur JOUR',image:'5.png'},
            {title:'Imaginez votre projet sous son meilleur JOUR',image:'6.png'},
            {title:'Imaginez votre projet sous son meilleur JOUR',image:'7.png'},
            {title:'Imaginez votre projet sous son meilleur JOUR',image:'8.png'},
            {title:'Imaginez votre projet sous son meilleur JOUR',image:'9.png'},
            {title:'Imaginez votre projet sous son meilleur JOUR',image:'10.png'},
            {title:'Imaginez votre projet sous son meilleur JOUR',image:'11.png'},
            {title:'Imaginez votre projet sous son meilleur JOUR',image:'12.png'},
        ]
        const handleShowVideo = () => {
            setShowVideo(true);
        };
        const handleCloseVideo = () => {
            setShowVideo(false);
        };
        return(
        <div className="flex flex-col gap-10 items-center justify-center">
            {/* Header */}
            <div className="relative bg-[url('/TopHeader/bg.png')] lg:bg-cover bg-black pt-4 min-h-screen  flex flex-col  items-center justify-center">
                <Image src={'/TopHeader/logo.png'} width={400} height={400} priority  className=" w-64 lg:w-1/3" alt="trafic genius"    title="trafic genius" />
                <div className="flex flex-col gap-6 items-center py-4 container">
                        <h1 className="font-black text-center text-xl md:text-4xl lg:text-6xl  uppercase ">
                            <span className=" text-white leading-relaxed"> <span className=" text-primary">1 000 €</span> en seulement <span className=" text-primary"> 5 jours</span> grace à une <span className=" text-primary">boutique optimisée</span> clé en main </span> 
                        </h1>
                        {/* video */}
                        {!showVideo && (
                            <div className="relative cursor-pointer group" onClick={handleShowVideo}>
                                <img src="/coverVideo.jpg" alt="Video Thumbnail" className="w-full max-w-lg border-8 border-primary rounded-lg shadow-lg"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40  transition-opacity">
                                    <span className="bg-primary border-4 border-black animate-pulse rounded-full p-3 text-xl font-semibold"><Play size={40} /></span>
                                </div>
                            </div>
                        )}
                        {/* Fullscreen Video */}
                        {showVideo && (
                            <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
                                <div className="relative w-full h-full max-w-full max-h-[100vh]">
                                    <iframe src="https://app.videas.fr/embed/media/5e3faf9a-3333-46cb-971a-f64cee286545/?title=false&logo=false&thumbnail_duration=false&loop=true&info=true&thumbnail=video" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute top-0 left-0 w-full h-full" referrerPolicy="unsafe-url"></iframe>
                                    <button onClick={handleCloseVideo} className="absolute flex items-center justify-center gap-2 top-4 right-4 bg-white text-black px-3 py-1 rounded-full font-bold hover:bg-gray-200">
                                        <X size={30}/> Fermer
                                    </button>
                                </div>
                            </div>
                        )}
                        <p className=" text-sm lg:text-base text-center text-white font-normal">
                            Avec mon équipe, nous avons tester plusieurs méthodes, diverses combinaison et rassemblé les meilleurs <br className=' hidden lg:block' /> stratégies pour t&apos;aider à obtenir de résultats concrets.
                        </p>  
                        <Link href={'/appel'} target="_blank" >
                            <button className="cssbuttons-io-button ">
                                je me lance maintenant !
                                <div className="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path d="M0 0h24v24H0z" fill="none"></path> <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" ></path> </svg>
                                </div>
                            </button>
                        </Link> 
                </div>
            </div>
            {/* Testimonial */}
            <div className="relative  bg-black   ">
                <div className="flex-col flex items-center gap-10 pb-20">
                    <h2 className=" container  uppercase text-xl md:text-4xl lg:text-7xl font-black text-white text-transparent text-center ">Quand les <span className="text-primary">resultats</span> parlent <br className="block lg:hidden" /> à notre place</h2>
                    <Resultats/>
                </div>
            </div>
            {/* saction 1 */}
            <div className="bg-black flex flex-col justify-center items-center gap-10 pb-10">
                <div className=" container  flex gap-20 flex-col justify-center items-center  pb-10">
                    <div className="flex-col flex items-center gap-2 justify-center">
                        <h2 className="container text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase leading-relaxed">Attention ceci n&apos;est pas une Formation   <span className="text-primary"> en ligne </span></h2>
                    </div>
                    <div className=" grid grid-cols-1 lg:grid-cols-2  gap-10">
                        <div className=" flex flex-col gap-8 items-center">
                            <h2 className=" text-xl lg:text-4xl font-bold  text-primary flex justify-center items-center gap-4 ">c&apos;est fait pour toi si <CheckCheck size={50} className=" stroke-white rounded-full  bg-green-500 stroke-2 p-1 " />  </h2>
                            <ul className="list-none space-y-4 text-lg font-medium  text-white w-full">
                                <li className="flex gap-1  text-xs lg:text-base "><CheckCheck size={25} className=" max-w-10 min-w-10 stroke-green-500 stroke-2 " />Tu ne sais pas pourquoi tu n&lsquo;arrives pas à vendre tes produits ?</li>
                                <li className="flex gap-1  text-xs lg:text-base "><CheckCheck size={25} className=" max-w-10 min-w-10 stroke-green-500 stroke-2 " />Tu es constamment bloqué à cause de problèmes techniques pour réaliser ton projet ?</li>
                                <li className="flex gap-1  text-xs lg:text-base "><CheckCheck size={25} className=" max-w-10 min-w-10 stroke-green-500 stroke-2 " />Tu as essayé maintes et maintes fois de créer un site, mais cela n&lsquo;a jamais abouti ?</li>
                                <li className="flex gap-1  text-xs lg:text-base "><CheckCheck size={25} className=" max-w-10 min-w-10 stroke-green-500 stroke-2 " />Tu as un site, mais il n&apos;est pas du tout optimisé pour la vente en ligne ?</li>
                                <li className="flex gap-1  text-xs lg:text-base "><CheckCheck size={25} className=" max-w-10 min-w-10 stroke-green-500 stroke-2 " />Tu as du mal à faire décoller ton activité malgré tous les efforts que tu fournis ?</li>
                                <li className="flex gap-1  text-xs lg:text-base "><CheckCheck size={25} className=" max-w-10 min-w-10 stroke-green-500 stroke-2 " />Tu as l&apos;impression de tourner en rond sans jamais avancer ?</li>
                                <li className="flex gap-1  text-xs lg:text-base "><CheckCheck size={25} className=" max-w-10 min-w-10 stroke-green-500 stroke-2 " />Tu te sens perdu face à toutes les possibilités qu&apos;on te propose tout le temps ?</li>
                                <li className="flex gap-1  text-xs lg:text-base "><CheckCheck size={25} className=" max-w-10 min-w-10 stroke-green-500 stroke-2 " />Tu stagnes dans ton business et tu n&apos;arrives pas à générer plus de ventes ?</li>
                                <li className="flex gap-1  text-xs lg:text-base "><CheckCheck size={25} className=" max-w-10 min-w-10 stroke-green-500 stroke-2 " />Tu te sens épuisé par la charge de travail qu&apos;il faut accomplir chaque jour, sans pouvoir savourer les résultats de ton dur labeur ?</li>
                                <li className="flex gap-1  text-xs lg:text-base "><CheckCheck size={25} className=" max-w-10 min-w-10 stroke-green-500 stroke-2 " />Ton chiffre d&apos;affaires n&apos;est pas stable et tu n&apos;es pas rentable ?</li>
                                <li className="flex gap-1  text-xs lg:text-base "><CheckCheck size={25} className=" max-w-10 min-w-10 stroke-green-500 stroke-2 " />Tu vis constamment dans la peur de devoir mettre la clé sous la porte ?</li>
                            </ul>
                        </div>
                        <div className=" flex flex-col gap-8 items-center">
                            <h2 className="text-xl lg:text-4xl font-bold  text-primary flex justify-center items-center gap-4 ">Ce n&apos;est pas fait pour toi si <X size={50} className=" stroke-white rounded-full  bg-red-500 stroke-2 p-1 " /> </h2>
                            <ul className="list-none space-y-4 text-lg font-medium  text-white w-full">
                                <li className="flex gap-1  text-xs lg:text-base "><X size={25} className=" max-w-10 min-w-10 stroke-red-500 stroke-2 " />Tu recherches une solution miracle pour faire de l&apos;argent facilement.</li>
                                <li className="flex gap-1  text-xs lg:text-base "><X size={25} className=" max-w-10 min-w-10 stroke-red-500 stroke-2 " />Tu n&apos;es pas prêt à investir 30 minutes par jour de ton temps.</li>
                                <li className="flex gap-1  text-xs lg:text-base "><X size={25} className=" max-w-10 min-w-10 stroke-red-500 stroke-2 " />Tu n&apos;es pas en mesure de mettre en pratique toutes les ressources que nous mettrons à ta disposition</li>
                                <li className="flex gap-1  text-xs lg:text-base "><X size={25} className=" max-w-10 min-w-10 stroke-red-500 stroke-2 " />Tu n&apos;es pas capable d&apos;investir en publicité</li>
                                <li className="flex gap-1  text-xs lg:text-base "><X size={25} className=" max-w-10 min-w-10 stroke-red-500 stroke-2 " />Tu n&apos;es pas capable d&apos;investir en publicité.</li>
                                <li className="flex gap-1  text-xs lg:text-base "><X size={25} className=" max-w-10 min-w-10 stroke-red-500 stroke-2 " />Tu abandonnes rapidement dès qu&apos;un obstacle se présente. </li>
                                <li className="flex gap-1  text-xs lg:text-base "><X size={25} className=" max-w-10 min-w-10 stroke-red-500 stroke-2 " />Tu n&apos;es pas disposé à apprendre et à sortir de ta zone de confort.</li>
                                <li className="flex gap-1  text-xs lg:text-base "><X size={25} className=" max-w-10 min-w-10 stroke-red-500 stroke-2 " />Tu n&apos;es pas prêt à suivre une stratégie claire et structurée.</li>
                                <li className="flex gap-1  text-xs lg:text-base "><X size={25} className=" max-w-10 min-w-10 stroke-red-500 stroke-2 " />Tu refuses de te responsabiliser pour les résultats que tu veux atteindre.</li>
                                <li className="flex gap-1  text-xs lg:text-base "><X size={25} className=" max-w-10 min-w-10 stroke-red-500 stroke-2 " />Tu es convaincu que l&apos;e-commerce ne demande aucun effort ou engagement.</li>
                                <li className="flex gap-1  text-xs lg:text-base "><X size={25} className=" max-w-10 min-w-10 stroke-red-500 stroke-2 " />Tu ne prends pas au sérieux la gestion de ton activité en ligne comme un véritable business.</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <Link href={'/appel'} target="_blank" >
                    <button className="cssbuttons-io-button ">
                        je me lance maintenant !
                        <div className="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path d="M0 0h24v24H0z" fill="none"></path> <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" ></path> </svg>
                        </div>
                    </button>
                </Link>         
            </div>
             {/* saction 2 */}
            <div className="bg-black flex flex-col justify-center items-center gap-10 ">
                <div className=" container  flex gap-10 flex-col justify-center items-center  ">
                    <div className="flex-col flex items-center gap-2 justify-center">
                        <h2 className="text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase leading-relaxed">Imaginez juste un  <span className="text-primary"> instant… </span></h2>
                    </div>
                    <img className=" lg:w-[80%]" src="/accompagnement/ImaginezJusteUnInstant.gif" alt="Imaginez Juste Un Instant" />
                </div>
            </div>

            {/* saction 3 */}
            
            <div className="bg-black ">
                <div className=" container  flex gap-20 flex-col justify-center items-center  pb-10">
                    <div className="flex-col flex items-center gap-2 justify-center">
                            <h2 className="text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase leading-relaxed">trafic genius, UNE ÉQUIPE DE PROFESSIONNELLES À  <span className="relative text-primary"> VOS CÔTÉS </span></h2>
                    </div>
                    <div className="  lg:w-[70%]  font-light text-white text-center lg:text-2xl border-primary  border-4 p-4 rounded-3xl">
                        <p>
                            Nous sommes la meilleure agence marketing francophone spécialisé dans l&apos;acquisition de Trafic de qualité, avec plus de 3 millions € dépensés en publicité Facebook, et plus de 5000 Leads qualifiés générés en Cold Calling, nous mettrons à votre disposition, une équipe essentiellement composée d&apos;experts selon votre besoin de croissance. <br /><br />
                            De l&apos;imagination à la réalisation de votre projet, nous vous aidons à obtenir plus de prospects afin de réaliser plus de vente, dans un seul et unique objectif, celui de faire plus de profits et vous positionner comme une figure d&apos;autorité respectée sur votre marché.                
                        </p>
                    </div>
                </div>
            </div>

            {/* saction 4 */}
            <div className="">
                <div className=" bg-primary  relative flex flex-col justify-between gap-10 z-20 pt-40">
                    <div className=" bg-black  w-full h-28   top-0 rounded-full-css absolute "></div>
                    <div className=" py-10 flex items-center flex-col justify-center gap-10">
                        <h2 className=" text-xl md:text-4xl lg:text-6xl font-black text-black  text-center uppercase leading-relaxed">Ils nous font confiance</h2>
                        <FetchLogoScroll/>
                    </div>
                </div>
                <div className=" flex gap-28 flex-col justify-center items-center bg-primary py-20 relative  w-screen">
                <div className="rounded-full-css bg-black w-full rotate-180 h-16 bottom-0 absolute z-10 "></div>
                    <div className="flex-col flex items-center">
                            <h2 className="container text-xl md:text-4xl lg:text-6xl font-black text-black  text-center uppercase leading-relaxed">Imaginez votre projet sous son meilleur JOUR </h2>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-20 ">
                        {website.map((ele,index)=>(
                            <div key={index} className="relative">
                                <Image src={`/accompagnement/website/${ele.image}`} className="relative w-[318px] h-[300px] lg:h-[600px] object-cover  duration-[10000ms] border-4 border-black  cursor-pointer rounded-2xl object-top  hover:object-bottom	" width={318} height={600} alt={ele.title}    title={ele.title}/>
                                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center bg-black border-black  rounded-b-2xl border-b-4 border-x-4">
                                    <Image src={'/TopHeader/logo.png'} className=" w-[150px] py-2" width={500} height={500} alt="trafic genius"    title="trafic genius"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}
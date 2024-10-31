import Image from "next/image";
import FetchLogoScroll from '@/components/tools/fetchLogoScroll'
import { CircleDollarSign, Presentation, Search } from "lucide-react";
import Link from "next/link";
import { resolve } from "styled-jsx/css";


 export default async function Header (){
    await new Promise((resolve) => setTimeout(resolve, 4000));
        return(
        <div id="top">

            {/* Header */}

            <div className="relative bg-[url('/TopHeader/bg.png')] lg:bg-cover  bg-black  z-30   flex items-center justify-center">
                <div className=" z-10 flex flex-col items-center justify-center container">
                    <div className="circlePosition w-[200px] h-[200px] hidden md:block bg-[#F2FD01] rounded-[100%] absolute z-1 top-[40%] left-[20%] translate-x-[-50%] translate-y-[-50%] blur-[150px]"></div>     
                    <div className="circlePosition w-[200px] h-[200px] hidden md:block bg-[#F2FD01] rounded-[100%] absolute z-1 top-[65%] left-[90%] translate-x-[-50%] translate-y-[-50%] blur-[150px]"></div>
                    
                    <Image src={'/TopHeader/logo.png'} width={500} height={500} alt="trafic genius"    title="traficgenius" />
                    <div className="flex flex-col gap-10 items-center py-20">
                    <h1 className="font-black text-center text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#F2FD01] via-white to-[#F2FD01]">
                        Boostez vos ventes dès demain en transformant votre système de vente en aimant à clients !
                    </h1>  
                    <p className="text-xl font-semibold font-sans text-center text-white">
                        Des solutions innovantes pour maximiser vos bénéfices dès demain avec nos tunnels de vente à haut rendement grâce à des designs sublimes et performants que nous réalisons pour vous dans un délai record.
                    </p>  
                    <Link href={'/appel'} target="_blank" >
                        <button className="cssbuttons-io-button ">
                            Lancez votre projet !
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
            
            </div>

            {/* Saction 1 */}

            <div className=" bg-[#F2FD01]  relative flex flex-col justify-between gap-20 z-20 py-20">
                <div className=" bg-black bg-[url('/TopHeader/bg.png')] lg:bg-cover w-full h-72   top-0 rounded-full-css absolute "></div>
                
                <div  className=" relative z-50  flex container flex-col items-center justify-center ">
                    <div className=" absolute w-screen overflow-hidden">
                        <p className="text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">
                        trafic genius trafic genius
                        </p>
                    </div>
                    <Image  className="relative z-50 lg:w-[80%] " src={'/TopHeader/tablet.png'} alt="trafic genius"    title="traficgenius" width={2000} height={1000}/>
                </div>
                <div className=" py-10">
                   
                        <FetchLogoScroll/>
                  
                </div>
            </div>

            {/* Saction 2 */}

            <div className="relative    bg-[#FFFFFF]">
                <div className="rounded-full-css bg-[#F2FD01] w-full h-40 top-0 absolute z-10 "></div>
                <div className="rounded-full-css rotate-180 bg-gradient-to-b from-black  via-black to-black w-full h-40 bottom-0 absolute z-10 "></div>

                  
                <div className="  right-0 left-0 lg:w-[60rem] w-screen shadow-2xl  relative  z-20  bg-black border-4 border-[#fff] container flex flex-col justify-between items-center gap-12 py-24">
                       
                    <h2 className=" text-white font-bold lg:text-3xl text-center">Si votre activité correspond à celle d&apos;un infopreneur, coach, consultant, prestataire de services ou d&apos;une agence…</h2>
                    <p className=" text-white text-center  lg:text-xl">Vos résultats ne reflètent pas vos ambitions.</p>
                    <Image  className=" z-50" src={'/TopHeader/circle.gif'} width={200} height={200} alt="trafic genius"    title="traficgenius"/>
                    <h3 className=" text-white  lg:text-xl text-center">Si vous cherchez à développer votre activité, nos produits ou services peuvent vous y aider.</h3>
                    <p className=" text-white  lg:text-xl text-center font-serif font-semibold">Votre objectif étant de développer votre entreprise, vous avez mis en place un système de vente pour générer des prospects qualifiés et les convertir en clients.</p>
                </div>    
            </div>

            {/* Saction 3 */}
            
            <div className="   relative bg-gradient-to-b from-black  via-black to-black">
                <div className="flex flex-col justify-between items-center py-20  gap-32">
                    <div className="flex-col flex items-center">
                        <div className="w-screen overflow-hidden">
                            <p className={` text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee`}>
                            Votre marché est féroce
                            </p>
                        </div>
                        <h2 className="text-2xl sm:text-5xl font-black text-white">Votre marché est féroce</h2>
                    </div>
                    <div className="  gap-20 flex flex-col lg:flex-row items-center justify-center">
                        <div className=" relative w-[300px] h-[350px]">
                            <Image className=" relative w-full h-full z-10" src={'/TopHeader/bglogo.png'} width={182} height={239} alt="trafic genius"    title="traficgenius"/>
                            <Image className=" absolute top-0 left-0 w-full h-full z-0 animate-move-smoke" src={'/TopHeader/smoke.png'} width={300} height={300} alt="trafic genius"    title="traficgenius"/>
                        </div>
                        <p className="text-white w-4/5 lg:w-1/2 font-normal text-center lg:text-left text-xl sm:text-2xl font-serif">
                        Lorsque l&apos;on évolue dans un marché redoutable, il est essentiel de prendre en compte la concurrence pour être en mesure de proposer une offre pertinente.<br /><br />
                        Un mauvais choix de design ou de copywriting peut vous coûter très cher. Le choix d&apos;une bonne équipe est une étape cruciale pour mener à bien vos projets et atteindre vos objectifs.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-between py-20 items-center gap-32">
                    <div className="flex-col flex items-center"> 
                        <div className="w-screen overflow-hidden">
                            <p className="text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">
                                Nous scalons votre business
                            </p>
                        </div>

                        {/* Other static content */}
                        <h2 className="lg:text-5xl text-3xl font-black text-center text-white">Nous scalons votre business</h2>
                        <p className="font-medium lg:text-2xl font-serif text-center text-white">
                        En déployant un système personnalisé, performant et prêt à générer des résultats rapidement.
                        </p>
                    </div>
                    <div className=" container grid grid-cols-1 lg:grid-cols-3 gap-12">
                       
                        <div className=" flex flex-col gap-4 items-center justify-center">
                            <div className="bg-[#F0FF01] hover:bg-[#2F3033] hover:-rotate-45 duration-700 rounded-full p-1">
                                <Search size={70} className=" stroke-[#000] hover:stroke-white  duration-700 cursor-pointer	 p-2 "/>
                            </div>
                            <h3 className=" lg:text-2xl text-xl font-bold text-center font-serif text-white">Convertissez un maximum de prospects.</h3>
                        </div>
                        <div className=" flex flex-col gap-4 items-center justify-center">
                            <div className="bg-[#F0FF01] hover:bg-[#2F3033] hover:-rotate-45 duration-700 rounded-full p-1">
                                <Presentation size={70} className=" stroke-[#000] hover:stroke-white  duration-700 cursor-pointer	 p-2 "/>
                            </div>
                            <h3 className=" lg:text-2xl text-xl font-bold text-center font-serif text-white">Obtenez des leads qualifiés performants.</h3>
                        </div>
                        <div className=" flex flex-col gap-4 items-center justify-center">
                            <div className="bg-[#F0FF01] hover:bg-[#2F3033] hover:-rotate-45 duration-700 rounded-full p-1">
                                <CircleDollarSign size={70} className=" stroke-[#000] hover:stroke-white  duration-700 cursor-pointer	 p-2 "/>
                            </div>
                            <h3 className=" lg:text-2xl text-xl font-bold text-center font-serif text-white">Boostez vos ventes et votre chiffre d&apos;affaires</h3>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>

    )
}
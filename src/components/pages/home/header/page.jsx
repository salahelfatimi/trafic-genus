import Image from "next/image";
import FetchLogoScroll from '@/components/tools/fetchLogoScroll'
import { CircleDollarSign, Presentation, Search } from "lucide-react";
import Link from "next/link";
import { resolve } from "styled-jsx/css";
import Testimonial from "../testimonial/page";


 export default  function Header (){
  
        return(
        <div id="top">

            {/* Header */}

            <div className="relative bg-[url('/TopHeader/bg.png')] lg:bg-cover py-4 bg-black  z-30   flex items-center justify-center">
                <div className=" z-10 flex flex-col items-center justify-center container">
                    <div className="circlePosition w-[200px] h-[200px] hidden md:block bg-[#F2FD01] rounded-[100%] absolute z-1 top-[40%] left-[20%] translate-x-[-50%] translate-y-[-50%] blur-[150px]"></div>     
                    <div className="circlePosition w-[200px] h-[200px] hidden md:block bg-[#F2FD01] rounded-[100%] absolute z-1 top-[65%] left-[90%] translate-x-[-50%] translate-y-[-50%] blur-[150px]"></div>
                    
                    <Image src={'/TopHeader/logo.png'} width={500} height={500} alt="trafic genius"    title="trafic genius" />
                    <div className="flex flex-col gap-4 items-center py-10">
                    <h1 className="font-black text-center text-xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#F2FD01] via-white to-[#F2FD01]">
                            Faisons le pari Fou de faire de vous une figure d&apos;autorité respectée sur votre marché.
                    </h1>  
                    <p className=" text-xs lg:text-xl font-semibold font-sans text-center text-white">
                        Nous aidons les chefs d&apos;entreprises et entrepreneurs du Web à trouver des nouveaux clients prêt à payer pour leurs produits ou services avec des résultats garantis
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

            <div className=" bg-[#F2FD01]  relative flex flex-col justify-between gap-20 z-20 py-10">
                <div className=" bg-black bg-[url('/TopHeader/bg.png')] lg:bg-cover w-full h-72   top-0 rounded-full-css absolute "></div>
                
                <div  className=" relative z-50  flex container flex-col items-center justify-center ">
                    <div className=" absolute w-screen overflow-hidden">
                        <p className="text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">
                        trafic genius trafic genius
                        </p>
                    </div>
                    <Image  className="relative z-50 lg:w-[80%] " src={'/TopHeader/tablet.png'} alt="trafic genius"    title="traficgenius" width={2000} height={1000}/>
                </div>
                <div className=" py-10 flex items-center flex-col justify-center gap-10">
                    <h2 className=" lg:text-4xl uppercase">Ils nous font confiance</h2>
                        <FetchLogoScroll/>
                </div>
            </div>

            {/* Saction 2 */}

            <div className="relative    bg-[#FFFFFF]">
                <div className="rounded-full-css bg-[#F2FD01] w-full h-40 top-0 absolute z-10 "></div>
                <div className="rounded-full-css rotate-180 bg-gradient-to-b from-black  via-black to-black w-full h-40 bottom-0 absolute z-10 "></div>

                  
                <div className="  right-0 left-0 lg:w-[60rem] w-screen shadow-2xl  relative  z-20  bg-black border-4 border-[#fff] container flex flex-col justify-between items-center gap-12 py-24">
                       
                    <h2 className=" text-white font-bold lg:text-3xl text-center">Si vous êtes formateur, coach, consultant, prestataire de service, auteur, conférencier ou créateur de contenu, je veux qu&apos;on se parle !</h2>
                    <p className=" text-white text-center  lg:text-xl">Vos résultats ne reflètent pas vos ambitions.</p>
                    <Image  className=" z-50" src={'/TopHeader/circle.gif'} width={200} height={200} alt="trafic genius"    title="trafic genius"/>
                    <h3 className=" text-white  lg:text-xl text-center">Si vous cherchez à développer votre activité, nos produits ou services peuvent vous y aider.</h3>
                    <p className=" text-white  lg:text-xl text-center font-serif font-semibold">Maintenant vous pouvez enfin obtenir plus de prospects, dans un seul objectif celui de réaliser plus de vente grâce un vrai marketing rapide, puissant et scalable</p>
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
                        <h2 className=" sm:text-5xl font-black text-white">Votre marché est féroce</h2>
                    </div>
                    <div className="  gap-20 flex flex-col lg:flex-row items-center justify-center">
                        <div className=" relative w-[300px] h-[350px]">
                            <Image className=" relative w-full h-full z-10" src={'/TopHeader/bglogo.png'} width={182} height={239} alt="trafic genius"    title="trafic genius"/>
                            <Image className=" absolute top-0 left-0 w-full h-full z-0 animate-move-smoke" src={'/TopHeader/smoke.png'} width={300} height={300} alt="trafic genius"    title="traficgenius"/>
                        </div>
                        <p className="text-white w-4/5 lg:w-1/2 font-normal text-center lg:text-left  sm:text-2xl font-serif">
                        Notre Team se lève le matin avec un seul but : vous aider à accroître vos bénéfices, vous libérer du temps, gagner en qualité de vie et atteindre vos objectifs.
                        </p>
                    </div>
                </div>
                {/* Testimonial */}
                <div>
                    <div className="flex-col flex items-center">
                        <div className="w-screen overflow-hidden">
                            <p className={` text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee`}>
                            Quand les experts parlent de nous
                            </p>
                        </div>
                        <h2 className=" sm:text-5xl font-black text-white text-center">Quand les experts parlent de nous</h2>
                    </div>
                    <Testimonial/>
                </div>
                <div className="flex flex-col justify-between py-20 items-center gap-32">
                    <div className="flex-col flex items-center"> 
                        <div className="w-screen overflow-hidden">
                            <p className="text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">
                                Nous scalons votre business
                            </p>
                        </div>

                        {/* Other static content */}
                        <h2 className="lg:text-5xl  font-black text-center text-white">Nous scalons votre business</h2>
                        <p className="font-medium lg:text-2xl font-serif text-center text-white">
                        En déployant un système personnalisé, performant et prêt à générer des résultats rapidement.
                        </p>
                    </div>
                    <div className=" container grid grid-cols-1 lg:grid-cols-3 gap-12">
                       
                        <div className=" flex flex-col gap-4 items-center justify-center">
                            <div className="bg-[#F0FF01] hover:bg-[#2F3033] hover:-rotate-45 duration-700 rounded-full p-1">
                                <Search size={70} className=" stroke-[#000] hover:stroke-white  duration-700 cursor-pointer	 p-2 "/>
                            </div>
                            <h3 className=" lg:text-2xl  font-bold text-center font-serif text-white">Convertissez un maximum de prospects.</h3>
                        </div>
                        <div className=" flex flex-col gap-4 items-center justify-center">
                            <div className="bg-[#F0FF01] hover:bg-[#2F3033] hover:-rotate-45 duration-700 rounded-full p-1">
                                <Presentation size={70} className=" stroke-[#000] hover:stroke-white  duration-700 cursor-pointer	 p-2 "/>
                            </div>
                            <h3 className=" lg:text-2xl  font-bold text-center font-serif text-white">Obtenez des leads qualifiés performants.</h3>
                        </div>
                        <div className=" flex flex-col gap-4 items-center justify-center">
                            <div className="bg-[#F0FF01] hover:bg-[#2F3033] hover:-rotate-45 duration-700 rounded-full p-1">
                                <CircleDollarSign size={70} className=" stroke-[#000] hover:stroke-white  duration-700 cursor-pointer	 p-2 "/>
                            </div>
                            <h3 className=" lg:text-2xl  font-bold text-center font-serif text-white">Boostez vos ventes et votre chiffre d&apos;affaires</h3>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>

    )
}
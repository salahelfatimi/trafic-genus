'use client'
import Image from "next/image";
import FetchLogoScroll from '@/components/tools/fetchLogoScroll'
import { CircleDollarSign, Play, Search, TvMinimal, X } from "lucide-react";
import Link from "next/link";
import Testimonial from "../testimonial/page";
import { useState } from "react";
 export default  function Header (){
    const [showVideo, setShowVideo] = useState(false);
    const handleShowVideo = () => {
        setShowVideo(true);
    };
    const handleCloseVideo = () => {
        setShowVideo(false);
    };
        return(
        <div className="">
            {/* Header */}
            <div className="relative bg-[url('/TopHeader/bg.png')] lg:bg-cover py-4 bg-black pt-20   flex flex-col  items-center justify-center">   
                    {/* <Image src={'/TopHeader/logo.png'} width={400} height={400} priority  className=" w-64 lg:w-1/3" alt="trafic genius"    title="trafic genius" /> */}
                    <div className="flex flex-col gap-4 items-center py-4 container">
                        <h1 className="text-xl md:text-4xl lg:text-6xl font-black text-primary  text-center uppercase ">
                            <span className="leading-relaxed text-white">Faisons le pari fou de faire de vous</span> une figure d&apos;autorité respectée <span className="leading-relaxed text-white"> sur votre marché.</span> 
                        </h1>
                        {/* video */}
                        {!showVideo && (
                            <div className="relative cursor-pointer group" onClick={handleShowVideo}>
                                <img src="/coverVideo.jpg" alt="Video Thumbnail" className="w-full max-w-lg border-8 border-[#F2FD01] rounded-lg shadow-lg"/>
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40  transition-opacity">
                                    <span className="bg-[#F2FD01] border-4 border-black animate-pulse rounded-full p-3 text-xl font-semibold"><Play size={40} /></span>
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
                        <p className=" text-xs lg:text-base text-center text-white font-normal">
                            Nous aidons les chefs d&apos;entreprises et entrepreneurs du Web à trouver des nouveaux clients  prêt à payer pour <br className="hidden lg:block" /> leurs produits ou services avec des résultats garantis
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
                        <div
                            className="trustpilot-widget  block lg:hidden "
                            data-locale="fr-FR"
                            data-template-id="56278e9abfbbba0bdcd568bc"
                            data-businessunit-id="675c30c57e82157e62454e10"
                            data-style-height="60px"
                            data-style-width="100%"
                            >
                                <a
                                href="https://fr.trustpilot.com/review/traficgenius.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Trustpilot
                            </a>
                        </div>  
                    </div>
            </div>
            {/* Saction 1 */}
            <div className=" bg-[#F2FD01]  relative flex flex-col justify-between gap-10 z-20 pt-40">
                <div className=" bg-black bg-[url('/TopHeader/bg.png')] lg:bg-cover w-full h-28   top-0 rounded-full-css absolute "></div>
                <div  className=" relative z-20  flex container flex-col items-center justify-center ">
                    <div className=" absolute w-screen overflow-hidden">
                        <p className="text-border font-sans uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">
                        trafic genius trafic genius
                        </p>
                    </div>
                </div>
                <div className=" py-10 flex items-center flex-col justify-center gap-10">
                    <h2 className=" text-xl md:text-4xl lg:text-6xl font-black text-black  text-center uppercase ">Ils nous font confiance</h2>
                        <FetchLogoScroll/>
                </div>
            </div>
            {/* Saction 2 */}
            <div className="relative bg-[#F2FD01] flex items-center justify-center">
                <div className="rounded-full-css bg-[#F2FD01] w-full h-28 top-0 absolute z-10 "></div>
                <div className="  rounded-full-css rotate-180 bg-black w-full h-28 bottom-0 absolute z-10 "></div>
                <div className="shadow-2xl relative z-20  px-10 mx-4  lg:mx-20 bg-black border-4 border-[#fff] rounded-3xl  flex flex-col  justify-between items-center gap-12 py-8">  
                    <h2 className=" text-white font-semibold lg:text-3xl text-center">Si vous êtes formateur, coach, consultant, prestataire de service, auteur, conférencier ou créateur de contenu, il faut que l&apos;on parle !</h2>
                    <p className=" text-white text-center  lg:text-xl">Vos résultats ne reflètent pas vos ambitions.</p>
                    <Image src={'/appel/logoyellow.png'} width={100} height={100} alt="trafic genius" className=" animate-bounce"    title="trafic genius" />
                    <h3 className=" text-white  lg:text-xl text-center">Nous souhaitons connaître qui vous êtes, les obstacles qui s&apos;abattent les résultats que vous souhaitez obtenir.</h3>
                </div>    
            </div>

            {/* Saction 3 */}
            
            <div className="   relative  bg-black  ">
                <div className="rounded-full-css bg-[#F2FD01] w-full rotate-180 h-16 bottom-0 absolute z-10 "></div>
                <div className="flex flex-col justify-between items-center py-10  gap-32">
                    <div className="flex-col flex items-center">
                        <div className="w-screen overflow-hidden">
                            <p className={` text-border font-sans uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee`}>
                            Votre marché est féroce
                            </p>
                        </div>
                        <h2 className=" text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase  ">Votre marché est féroce</h2>
                    </div>
                    <div className="  gap-20 flex flex-col lg:flex-row items-center justify-center">
                        <div className=" relative w-[300px] h-[350px]">
                            <Image className=" relative w-full h-full z-10" src={'/TopHeader/bglogo.png'} width={182} height={239} alt="trafic genius"    title="trafic genius"/>
                            <Image className=" absolute top-0 left-0 w-full h-full z-0 animate-move-smoke" src={'/TopHeader/smoke.png'} width={300} height={300} alt="trafic genius"    title="traficgenius"/>
                        </div>
                        <p className="text-white w-4/5 lg:w-1/2 font-light text-center lg:text-left  sm:text-2xl ">
                        Notre Team se lève le matin avec un seul but : vous aider à accroître vos bénéfices, vous libérer du temps, gagner en qualité de vie et atteindre vos objectifs.
                        </p>
                    </div>
                </div>
                {/* Testimonial */}
                <div className="flex-col flex items-center gap-10">
                    <div className="w-screen overflow-hidden">
                        <p className={`font-sans text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee`}>
                        Quand les experts parlent de nous
                        </p>
                    </div>
                    <h2 className=" text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase ">Quand les experts parlent de nous</h2>
                    <Testimonial/>
                </div>
                <div className="flex flex-col justify-between pb-10 items-center gap-10">
                    <div className="flex-col flex items-center"> 
                        <div className="w-screen overflow-hidden">
                            <p className="text-border font-sans uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">
                                Nous scalons votre business
                            </p>
                        </div>

                        {/* Other static content */}
                        <h2 className="text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase ">Nous scalons votre business</h2>
                        <p className="font-extralight lg:text-2xl  text-center text-white">
                        En déployant un système personnalisé, performant et prêt à générer des résultats rapidement.
                        </p>
                    </div>
                    <div className=" container grid grid-cols-1 lg:grid-cols-3 gap-12 pb-14">
                       
                        <div className=" flex flex-col gap-4 items-center justify-center">
                            <div className="bg-[#F0FF01]  hover:-rotate-45 duration-700 rounded-full p-1">
                                <Search size={70} className=" stroke-[#000] duration-700 cursor-pointer	 p-2 "/>
                            </div>
                            <h3 className=" lg:text-2xl  font-light text-center text-white">Convertissez un maximum de prospects.</h3>
                        </div>
                        <div className=" flex flex-col gap-4 items-center justify-center">
                            <div className="bg-[#F0FF01]  hover:-rotate-45 duration-700 rounded-full p-1">
                                <TvMinimal   size={70} className=" stroke-[#000]   duration-700 cursor-pointer	 p-2 "/>
                            </div>
                            <h3 className=" lg:text-2xl  font-light text-center text-white">Obtenez des leads qualifiés performants.</h3>
                        </div>
                        <div className=" flex flex-col gap-4 items-center justify-center">
                            <div className="bg-[#F0FF01]  hover:-rotate-45 duration-700 rounded-full p-1">
                                <CircleDollarSign size={70} className=" stroke-[#000] duration-700 cursor-pointer	 p-2 "/>
                            </div>
                            <h3 className=" lg:text-2xl  font-light text-center  text-white">Boostez vos ventes et votre chiffre d&apos;affaires</h3>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>

    )
}
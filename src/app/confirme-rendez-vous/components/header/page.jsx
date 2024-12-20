'use client'
import FetchLogoScroll from '@/components/tools/fetchLogoScroll'
import Link from "next/link";
import Testimonial from "@/components/pages/testimonial/page";
import Image from 'next/image';
import { useState } from 'react';
import { Play, X } from 'lucide-react';



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
            <div className="relative bg-[url('/TopHeader/bg.png')] lg:bg-cover py-4 bg-black pt-10   flex flex-col  items-center justify-center">
                        <Image src={'/TopHeader/logo.png'} width={400} height={400} priority  className=" w-64 lg:w-1/3" alt="trafic genius"    title="trafic genius" />
                        <div className="flex flex-col gap-4 items-center py-4 container">
                        <h1 className="font-bold text-center text-xl lg:text-5xl uppercase  text-[#F2FD01]">
                            <span className=" text-white">Faisons le pari fou de faire de vous</span> une figure d&apos;autorité respectée <span className=" text-white"> sur votre marché.</span> 
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
            <div className=" bg-[#F2FD01]  relative flex flex-col justify-between gap-10 z-20 py-10">
                <div className="rounded-full-css bg-black w-full h-16 bottom-0 absolute z-10 rotate-180 "></div>
                <div className=" bg-black bg-[url('/TopHeader/bg.png')] lg:bg-cover w-full h-16   top-0 rounded-full-css absolute "></div>
                <div className=" py-10 flex items-center flex-col justify-center gap-10">
                    <h2 className=" lg:text-4xl text-2xl font-semibold uppercase">Ils nous font confiance</h2>
                        <FetchLogoScroll/>
                </div>
            </div>

            {/* Testimonial */}
            <div className="   relative  bg-black  py-10 ">
                <div className="flex-col flex items-center gap-10 pb-20">
                    <div className="w-screen overflow-hidden">
                        <p className={`font-sans text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee`}>
                        Quand les experts parlent de nous
                        </p>
                    </div>
                    <h2 className=" lg:text-4xl text-2xl font-bold text-white text-center">Quand les experts parlent de nous</h2>
                    <Testimonial/>
                </div>
            </div>
        </div>

    )
}
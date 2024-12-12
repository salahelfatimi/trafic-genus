import FetchLogoScroll from '@/components/tools/fetchLogoScroll'
import Link from "next/link";
import Testimonial from "@/components/pages/testimonial/page";



 export default  function Header (){
        return(
        <div className="">
            
            {/* Header */}
            <div className="relative bg-[url('/TopHeader/bg.png')] lg:bg-cover py-4 bg-black pt-20   flex flex-col  items-center justify-center">
                        <div className="flex flex-col gap-4 items-center py-4 container">
                        <h2 className="font-bold text-center text-xl lg:text-5xl uppercase  text-[#F2FD01]">
                            <span className=" text-white">Faisons le pari fou de faire de vous</span> une figure d&apos;autorité respectée <span className=" text-white"> sur votre marché.</span> 
                        </h2>
                        <p className=" text-xs lg:text-base text-center text-white font-normal">
                            Nous aidons les chefs d&apos;entreprises et entrepreneurs du Web à trouver des nouveaux clients  prêt à payer pour leurs produits ou services avec des résultats garantis
                        </p>  
                         {/* video */}
                        <div className="relative z-30 w-full lg:w-[100vh] pt-[57%] md:pt-[30%] lg:pt-[24%] rounded-lg overflow-hidden">
                            <iframe
                                src="https://app.videas.fr/embed/media/163f0840-7b97-40b3-a997-18d37d5664aa/?title=false&logo=false&thumbnail_duration=false&controls=false&info=true"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                referrerPolicy="unsafe-url"
                            ></iframe>
                        </div>
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
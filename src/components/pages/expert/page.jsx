"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'
import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Expert(){
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ stopOnInteraction: false, speed: 0.6 }),
    ]);
    const expertsDats=[
        {id:1,name:'salaheddine elfatimi',job:'Développer full stack',image:'SALAH.png'},
        {id:2,name:'judi kleancy ibounda-ibounda',job:'Développer CMS Junior',image:'JUDI.png'},
        {id:5,name:'hind lagheryeb',job:'Assistante Direction',image:'HIND.png'},
        {id:6,name:'chris jeffrey bibang',job:'graphiste , designer',image:'CHRIS.png'},
        {id:7,name:'ADNANE',job:"Chargé d'affaires",image:'ADNANE.png'},
        {id:8,name:'BILAL',job:'project and sales manager',image:'BILAL.png'},
        {id:9,name:'CHANCY',job:'Closer',image:'CHANCY.png'},
    ]
    return(
        <div className='bg-black py-10 '>
            <div className=' flex flex-col gap-20' >
                <div className="flex-col flex items-center container  ">
                    <h2 className="text-xl md:text-4xl lg:text-4xl font-black text-white  text-center uppercase leading-relaxed">Une agence fondée par des  experts du business en ligne</h2>
                </div>
                    <div className=" w-full">
                        <div className="py-2 overflow-hidden" ref={emblaRef}>
                            <div className="flex flex-row flex-nowrap gap-6 pl-10 cursor-grab active:cursor-grabbing">
                                {expertsDats.map((ele,index)=>(
                                    <div className=' relative select-none ' key={index}>
                                        <img src={'/expert/logo.png'} width={500} height={700} className='  absolute w-28  top-0 -left-4 z-50' quality={100} alt="trafic genius"    title="trafic genius"/>
                                        <div className=" relative  rounded-t-full    flex flex-col items-center   min-w-80 lg:min-w-96  " > 
                                            <img src={`/expert/team/${ele.image}`} width={500} height={700} className='  w-96 h-auto bg-cover  ' quality={100} alt={ele.name}    title={ele.name}/>
                                            {/* <div className=' flex flex-col gap-8 p-10 items-center justify-center group cursor-crosshair	 hover:border-8    hover:border-[#F2FD01] hover:bg-white bg-white/0 duration-700 absolute inset-0 rounded-t-full'>
                                                <h3 className='hidden group-hover:block font-bold text-center text-4xl uppercase'>{ele.name}</h3>
                                                <p className='hidden group-hover:block capitalize text-xl text-center ' >{ele.job}</p>
                                                <li className='list-none'>
                                                    <ul className='bg-black border-white duration-700 border-4 hover:border-black hover:bg-white p-2 hidden group-hover:block group'><Link href={'#'} className='' target='_blank'><Linkedin size={40} className=' hover:stroke-black  stroke-white'/></Link></ul>
                                                </li>
                                            </div> */}
                                        </div> 
                                    </div>
                                    )) 
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'

export default function Expert(){
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ stopOnInteraction: false, speed: 0.6 }),
    ]);
    const expertsDats=[
        {id:1,name:'salaheddine elfatimi',job:'Développer full stack',image:'SALAH.png'},
        {id:2,name:'judi kleancy ibounda-ibounda',job:'Développer CMS Junior',image:'JUDI.png'},
        {id:5,name:'hind lagheryeb',job:'Assistante Direction',image:'HIND.png'},
        {id:6,name:'chris jeffrey bibang',job:'graphiste , designer',image:'CHRIS.png'},
        {id:7,name:'salaheddine elfatimi',job:'Développer full stack',image:'SALAH.png'},
        {id:8,name:'judi kleancy ibounda-ibounda',job:'Développer CMS Junior',image:'JUDI.png'},
        {id:9,name:'hind lagheryeb',job:'Assistante Direction',image:'HIND.png'},
        {id:10,name:'chris jeffrey bibang',job:'graphiste , designer',image:'CHRIS.png'},
    ]
    return(
        <div className='bg-black pb-10 '>
            <div className=' flex flex-col gap-20' >
                <div className="flex-col flex items-center container  ">
                    <h2 className="text-xl md:text-4xl lg:text-6xl font-black text-white  text-center uppercase leading-relaxed">Une agence fondée par des  experts du business en ligne</h2>
                </div>
                    <div className=" w-full">
                        <div className="py-10 overflow-hidden" ref={emblaRef}>
                            <div className="flex flex-row flex-nowrap gap-6 pl-10 cursor-grab active:cursor-grabbing">
                                {expertsDats.map((ele,index)=>(
                                    <div className=' relative select-none ' key={index}>
                                        <img src={'/expert/logo.png'} width={500} height={700} className='  absolute w-28  top-0 -left-4 z-50' quality={100} alt="trafic genius"    title="trafic genius"/>
                                        <div className=" relative  rounded-t-full    flex flex-col items-center   min-w-80 lg:min-w-96  " > 
                                            <img src={`/expert/team/${ele.image}`} width={500} height={700} className='  w-96 h-auto bg-cover  ' quality={100} alt={ele.name}    title={ele.name}/>
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
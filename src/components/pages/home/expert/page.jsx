import InfiniteHorizontalScroll from '@/components/tools/infiniteHorizontalScroll'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export default function Expert(){
    const expertsDats=[
        {id:1,name:'salaheddine elfatimi',job:'Développeur',image:'SALAH.png'},
        {id:2,name:'zineb byfanzi',job:'modératrice E-Commerce',image:'ZINEB.png'},
        {id:3,name:'Salma Regragui Dounia',job:'Custom manager',image:'SALMA.png'},
        {id:4,name:'judi kleancy ibounda-ibounda',job:'Développer CMS Junior',image:'JUDI.png'},
        {id:5,name:'hind lagheryeb',job:'Assistante Direction',image:'HIND.png'},
        {id:5,name:'chris jeffrey bibang',job:'graphiste , designer',image:'CHRIS.png'},
        
       
        
    ]
    return(
        <div className='bg-black py-20 '>
            <div className=' flex flex-col gap-20' >
                <div className="flex-col flex items-center  ">
                <div className="w-screen overflow-hidden">
                    <p className={` text-border uppercase text-9xl font-white text-transparent whitespace-nowrap animate-marquee`}>
                        Une agence fondée par des  experts du business en ligne
                    </p>
                </div>
                    <h2 className="text-2xl sm:text-5xl font-black text-white">Une agence fondée par des  experts du business en ligne</h2>
                </div>
                <div className='   '>
                    <div className=''>
                        <InfiniteHorizontalScroll>
                        {
                            expertsDats.map((ele,index)=>(
                            <div className=' relative select-none ' key={index}>
                                <Image src={'/expert/logo.png'} width={500} height={700} className='  absolute w-28  top-0 -left-4 z-50' quality={100}/>
                                <div className=" relative  rounded-t-full    flex flex-col items-center   min-w-96  " > 
                                    <div className=' flex flex-col gap-8 p-10 items-center justify-center group cursor-crosshair	 hover:border-8    hover:border-[#F2FD01] hover:bg-white bg-white/0 duration-700 absolute inset-0 rounded-t-full'>
                                        <h3 className='hidden group-hover:block text-center text-4xl uppercase'>{ele.name}</h3>
                                        <p className='hidden group-hover:block capitalize text-xl ' >{ele.job}</p>
                                        {/* <li className='list-none'>
                                            <ul className='bg-black border-white duration-700 border-4 hover:border-black hover:bg-white p-2 hidden group-hover:block group'><Link href={'#'} className='' target='_blank'><Linkedin size={40} className=' hover:stroke-black  stroke-white'/></Link></ul>
                                        </li> */}
                                    </div>
                                    <Image src={`/expert/team/${ele.image}`} width={500} height={700} className='  w-96 h-auto bg-cover ' quality={100}/>

                                </div> 
                            </div>
                            )) 
                           
                           }
                            
                            {/* <div className=' relative'>
                                <Image src={'/expert/logo.png'} width={500} height={700} className='  absolute w-28  -top-0 -right-10 z-50' quality={100}/>
                                <div className=" relative     flex flex-col items-center   min-w-96  " >
                                    <Image src={'/expert/SALAteeeeeeest.png'} width={500} height={700} className='  w-96 h-auto ' quality={100}/>
                                </div> 
                            </div> */}
                            
                           
                           
                        </InfiniteHorizontalScroll>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}
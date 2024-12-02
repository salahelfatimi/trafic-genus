'use client'
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openMenu,setOpenMenu]=useState(true)
   
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const items=[
        {title:'accueil',href:'/'},
        {title:'Blog',href:'/blogs'},
        {title:'Contact',href:'/contact'},
       
    ]

    return (
        <div className="">
            {/* Navbar with dynamic background */}
            <div className={`fixed z-40 top-0 right-0 left-0 p-4 flex justify-between items-center ${isScrolled ? 'bg-black ' : 'bg-transparent'}  duration-500`}>
                <Link href={'/'} className="w-fit flex gap-1 items-center">
                    <Image
                        src='/fulllogo.png'
                        width={500}
                        height={500}
                        className="w-12"
                        alt="Trafic Genius"
                        title="Trafic Genius"
                    />
                    <h1 className={`${isScrolled ? 'text-[#efff01] ' : 'text-white'} font-bold text-xl`}>
                        Trafic Genius
                    </h1>
                </Link>
                <button onClick={()=>(setOpenMenu(!openMenu))} className="bg-[#efff01] p-1 lg:hidden block">
                    <Menu size={35} className=" stroke-black "/>
                </button>
                <div className="hidden lg:block">
                    <div className="  flex justify-center items-center gap-4">
                        {
                            items.map((ele,index)=>(
                                <Link key={index} href={ele.href} className={` text-white hover:text-[#efff01]  font-bold  w-fit text-lg flex gap-1 items-center   duration-300  rounded-full px-3 py-3`}>
                                    <span className="  capitalize   font-medium  ">{ele.title}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={`fixed z-50 inset-0 flex items-center justify-center bg-black duration-700 transition ${openMenu == false ? "translate-x-0" : "translate-x-full"}`}>
                    <button onClick={() => { setOpenMenu(true) }} className="absolute top-4 right-4 text-red-600 ">
                        <X size={40} />
                    </button>
                    <div className="flex flex-col items-center gap-6 ">
                    {
                        items.map((ele,index)=>(
                            <Link key={index} href={ele.href} onClick={() => { setOpenMenu(true) }} className={` text-white hover:text-[#efff01]  font-bold  w-fit flex gap-1 items-center   duration-300  rounded-full px-3 py-3`}>
                                <span className=" font-medium capitalize   ">{ele.title}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

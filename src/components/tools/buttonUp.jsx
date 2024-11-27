import { MessageSquareText, Phone } from "lucide-react";
import Link from "next/link";

export default function PhoneIcon(){
    return(
        <div className=" z-50 flex gap-2 items-center    fixed bottom-4 right-4 animate-bounce">
        <span className="   text-xs  text-center text-black select-none  border-2 border-black bg-[#EFFF0A] rounded-full items-center justify-center py-2 px-4">
            <div>Avez vous besoin d&apos;aide? </div>
            <strong>Appelez-nous</strong>
        </span>
        <Link href={'https://wa.me/0703945314'} target="_blank" className="bg-black border-2 border-[#EFFF0A] hover:bg-[#F2FD01] hover:border-black duration-500 w-fit p-2 rounded-full ">
          <MessageSquareText  size={35} className={` duration-1000 transition text-[#F2FD01] hover:text-black stroke-[#F2FD01] hover:stroke-black`} />
        </Link>
        
      </div>
    )
}
import { MessageSquareText, Phone } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function PhoneIcon(){
    return(
      <div>
         <Script 
            src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" 
            strategy="lazyOnload" 
          />
        <div className=" z-50 flex gap-2 items-center    fixed bottom-2 right-2 animate-bounce">
              <span className="   text-xs  text-center text-black select-none  border-2 border-black bg-[#EFFF0A] rounded-full items-center justify-center py-2 px-4">
                  <div>Avez vous besoin d&apos;aide? </div>
                  <strong>Discutez avec nous</strong>
              </span>
              <Link href={'https://wa.me/+212703945314'} target="_blank" className="bg-black border-2 border-[#EFFF0A] hover:bg-[#F2FD01] hover:border-black duration-500 w-fit p-2 rounded-full ">
                <MessageSquareText  size={40} className={` duration-1000 transition text-[#F2FD01] hover:text-black stroke-[#F2FD01] hover:stroke-black`} />
              </Link>
        </div>
      </div>
      
    )
}
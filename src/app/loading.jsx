import Image from "next/image";

export default function Loading() {
    return (
      <>
        <div
          className={`fixed  inset-0 flex items-center justify-center bg-[#000]  duration-1000 transition z-[70] `}
        >
          <span className={`font-extrabold text-center items-center gap-3 md:text-5xl text-4xl  flex flex-col lg:flex-row justify-center text-white  `}>
           
            <span className=" text-[#fff] flex  items-center justify-center   ">
                TRAFIC GEN <Image src={'/logo.png'} className="animate-bounce w-16" width={500} height={500}/> US
            </span>
          </span>
        </div>
      </>
    );
  }
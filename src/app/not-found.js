import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className=" container flex flex-col gap-10 items-center justify-center  h-screen   bg-black inset-0 ">
        <Image src={'/TopHeader/logo.png'} width={500} height={500} alt="Logo" />

        <p className=" font-bold text-2xl flex items-center gap-2 flex-col text-center justify-center text-white">
          Il semble que cette page n&apos;existe pas
        </p>
        <Link
          className=" underline underline-offset-4  font-bold text-xl text-[#F2FD01] flex  duration-700 items-center gap-2"
          href="/"
        >
          <Home size={30}/>Retour à l&apos;accueil
        </Link>
      </div>
    </>
  );
}
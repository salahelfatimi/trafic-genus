"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      image: '/Testimonials/Hamza.png',
      name: 'HAMZA BAROUAGUI',
      comment: "Growth Hacker expert en publicité Facebook, avec plus de 1M € de budget publicitaire dépensé, il a notamment travaillé pour les plus grosses pointures en francophonies comme: Rudy Som,"
    },
    {
      image: '/Testimonials/ALVAREZ.png',
      name: 'ALVAREZ MOUKO',
      comment: "Avec plus de 500 000 € de chiffre d'affaires géré pour ses clients, il est Expert en Marketing de croissance, formateur en Closing, funnel builder. Il à notamment travaillé comme conseiller commercial pour Rudy Som (qui est l'un des plus gros annonceurs dans toute la francophonie, en Afrique et dans tout Moyen-Orient.)"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gradient-to-b from-[#F2FD01]  via-[#F2FD01] to-[#F2FD01]">
      {/* saction 4 */}
      <div className="flex flex-col justify-between py-20 items-center gap-32 container ">
        <div className="flex-col flex items-center">
          <div className="w-screen overflow-hidden">
            <p className="text-border uppercase text-9xl font-black text-transparent whitespace-nowrap animate-marquee">
              ORGANISATEURS
            </p>
          </div>
          <h2 className="lg:text-5xl text-3xl font-black text-center">
            ORGANISATEURS
          </h2>
        </div>
        <section className="relative  isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-black shadow-xl shadow-indigo-600/10 ring-1 ring-[#F2FD01] sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <Image width={200} height={200} className="mx-auto" src={currentTestimonial.image} alt={currentTestimonial.name} />
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>“{currentTestimonial.comment}”</p>
              </blockquote>
              <figcaption className="mt-10">
                <Image width={500} height={500} className="mx-auto h-10 w-10 rounded-full" src={currentTestimonial.image} alt={currentTestimonial.name} />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-white">{currentTestimonial.name}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <button className="flex gap-4 items-center justify-between py-2 px-3 text-xl font-bold rounded-xl text-white bg-gradient-to-r from-black via-black to-black">
            <Image className=" rounded-full px-2 py-1 " src={'/TopHeader/button.png'} width={45} height={45} alt="trafic genius"    title="trafic genius" />
            Lancez votre projet !
        </button>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'

export default function EmblaCarousel({ children }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnMouseEnter:true ,speed:0.8 })
  ])

  return (
    <div className=" overflow-hidden" ref={emblaRef}>
      <div className="flex flex-row gap-6 pl-6 	 ">
      {children}
      </div>
    </div>
  );
}
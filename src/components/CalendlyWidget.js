'use client'
import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <>
        
        <div
        
        className="calendly-inline-widget min-w-[320px] h-[1300px] lg:h-[900px]"
        data-url={url}
        
        ></div>
    </>
    
    
  );
};

export default CalendlyEmbed;
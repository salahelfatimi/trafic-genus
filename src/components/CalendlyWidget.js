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
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: '320px', height: '800px' }}
        ></div>
    </>
    
    
  );
};

export default CalendlyEmbed;
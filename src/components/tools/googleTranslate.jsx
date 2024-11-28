"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";

// Supported languages with flag images
const languages = [
  { label: "French", value: "fr", flag: "/flags/fr.png" },
  { label: "English", value: "en", flag: "/flags/en.png" },
  { label: "Spanish", value: "es", flag: "/flags/es.png" },
  { label: "German", value: "de", flag: "/flags/de.png" },
  { label: "Arabic", value: "ar", flag: "/flags/ar.png" },
];

// Initialize Google Translate
function googleTranslateElementInit() {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "auto",
      includedLanguages: languages.map((lang) => lang.value).join(","),
    },
    "google_translate_element"
  );
}

export default function GoogleTranslate({ prefLangCookie }) {
  const [langCookie, setLangCookie] = useState(prefLangCookie || "fr");
  const [open, setOpen] = useState(true);

  // Handle language change
  const onChange = (value) => {
    setLangCookie(value);
    const element = document.querySelector(".goog-te-combo");
    element.value = value;
    element.dispatchEvent(new Event("change"));
  };

  useEffect(() => {
    // Initialize Google Translate
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div>
      {/* Hidden Google Translate element */}
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", width: "1px", height: "1px" }}
      ></div>

      {/* Custom Language Selector with Flags */}
      <div className="relative select-none">
        <div
          onClick={() => (setOpen(!open))}
          className="cursor-pointer flex items-center space-x-2 bg-[#F2FD01] hover:bg-white duration-700 border-4 border-black text-black py-2 px-4 rounded-lg w-40"
        >
          <Image
            src={languages.find((lang) => lang.value === langCookie)?.flag || "/flags/fr.png"}
            alt={langCookie}
            width={20}
            height={20}
          />
          <span>{languages.find((lang) => lang.value === langCookie)?.label || "French"}</span>
        </div>

        {/* Dropdown menu */}
        <div
          className={`absolute top-12 left-0 w-full bg-white  rounded  ${open?'hidden':'block'}`}
        >
          {languages.map((lang) => (
            <div
              key={lang.value}
              onClick={() => {onChange(lang.value),setOpen(!open)}}
              className="cursor-pointer flex items-center space-x-2 py-2 px-4 hover:bg-[#F2FD01] duration-500"
            >
              <Image src={lang.flag} alt={lang.label} width={20} height={20} />
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Load Google Translate Script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}

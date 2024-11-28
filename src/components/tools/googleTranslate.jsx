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
  const [open, setOpen] = useState(false);

  const onChange = (value) => {
    setLangCookie(value);
    const element = document.querySelector(".goog-te-combo");
    if (element) {
      element.value = value;
      element.dispatchEvent(new Event("change"));
    }
    document.cookie = `googtrans=/auto/${value}; path=/;`;
  };

  useEffect(() => {
    // Synchronize langCookie with `googtrans` on page load
    const googtrans = document.cookie
      .split("; ")
      .find((row) => row.startsWith("googtrans="))
      ?.split("=")[1];
    const selectedLang = googtrans?.split("/")[2] || "fr";
    setLangCookie(selectedLang);

    // Initialize Google Translate
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div>
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", width: "1px", height: "1px" }}
      ></div>
      <div className="relative select-none flex items-center justify-center">
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer flex items-center space-x-2 bg-black hover:bg-[#F2FD01] hover:text-black duration-700 border-2 border-[#F2FD01] text-white md:p-2 p-1 md:w-40"
        >
          <Image
            src={
              languages.find((lang) => lang.value === langCookie)?.flag ||
              "/flags/fr.png"
            }
            alt={langCookie}
            className="w-10 md:w-6 object-cover"
            width={100}
            height={100}
          />
          <span className="md:block hidden">
            {languages.find((lang) => lang.value === langCookie)?.label ||
              "French"}
          </span>
        </div>
        <div
          className={`absolute top-12 border-4 border-[#F2FD01] ${
            open ? "block" : "hidden"
          }`}
        >
          {languages.map((lang) => (
            <div
              key={lang.value}
              onClick={() => {
                onChange(lang.value);
                setOpen(!open);
              }}
              className={`${lang.value === langCookie? "bg-black text-white": "bg-[#b0b733]"} text-black hover:text-white cursor-pointer flex items-center gap-2 md:p-2 p-1 md:w-40 md:px-4 hover:bg-black duration-500`}
            >
              <Image
                src={lang.flag}
                alt={lang.label}
                width={100}
                height={100}
                className="w-10 md:w-6 object-cover"
              />
              <span className="md:block hidden">{lang.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}

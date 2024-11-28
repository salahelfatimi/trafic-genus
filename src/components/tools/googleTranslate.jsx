"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

// Supported languages
const languages = [
  { label: "French", value: "fr" }, // Set French as the first option
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "German", value: "de" },
  { label: "Arabic", value: "ar" },
];

// Initialize Google Translate
function googleTranslateElementInit() {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "fr", // Set French as the default language
      includedLanguages: languages.map((lang) => lang.value).join(","),
    },
    "google_translate_element"
  );
}

// Main Google Translate Component
export default function GoogleTranslate({ prefLangCookie }) {
  const [langCookie, setLangCookie] = useState(
    decodeURIComponent(prefLangCookie || "/en/fr") // Default to French
  );

  // Hook to set up Google Translate after component mounts
  useEffect(() => {
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  // Handle language change
  const onChange = (value) => {
    setLangCookie(`/en/${value}`);
    const element = document.querySelector(".goog-te-combo");
    element.value = value;
    element.dispatchEvent(new Event("change"));
  };

  return (
    <div>
      {/* Hidden Google Translate element */}
      <div
        id="google_translate_element"
        style={{ visibility: "hidden", width: "1px", height: "1px" }}
      ></div>

      {/* Custom Language Selector */}
      <LanguageSelector onChange={onChange} value={langCookie} />

      {/* Load Google Translate Script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}

// Language Selector Component
function LanguageSelector({ onChange, value }) {
  const langCookie = value.split("/")[2] || "fr"; // Default to French if no cookie is found
  return (
    <select onChange={(e) => onChange(e.target.value)} value={langCookie} className=" text-lg  rounded py-1 px-10 bg-[#F2FD01]  text-black border-4 border-[#F2FD01] ">
      {languages.map((lang) => (
        <option value={lang.value} key={lang.value} className=" text-black">
          {lang.label}
        </option>
      ))}
    </select>
  );
}

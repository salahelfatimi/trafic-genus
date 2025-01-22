'use client'

import Link from "next/link";
import { useEffect, useState } from "react"
import { GoogleAnalytics, GoogleTagManager } from "./google";

export default function MessageCookies() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleCookiesDecision = (accepted) => {
    setCookiesAccepted(accepted);
    setIsVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("cookiesAccepted", accepted);
      const event = new CustomEvent("cookiesConsentChanged", { detail: accepted });
      window.dispatchEvent(event);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPreference = localStorage.getItem("cookiesAccepted");
      if (savedPreference !== null) {
        setCookiesAccepted(savedPreference === "true");
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }
  }, []);

    return (
      <>
        {isVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white p-4 z-50">
            <div className="container flex flex-col items-center mx-auto max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
              <img src="/cookie.svg" className=" w-16" alt="" />
              <p className=" font-bold text-2xl ">cookies consentement</p>
              <p className="text-sm text-center mb-4"> Ce site utilise des cookies pour améliorer votre expérience. Consultez notre{" "} <Link href="/politique-de-confidentialite" className="text-primary underline hover:text-primary" > politique de confidentialité </Link> . </p>
                <div className="flex gap-4 justify-center">
                    <button className="bg-primary text-gray-900 font-semibold py-2 px-4 rounded hover:bg-transparent border-2 border-primary hover:text-primary transition" onClick={() => handleCookiesDecision(true)} > Accepter </button>
                    <button className="bg-gray-600 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700 transition" onClick={() => handleCookiesDecision(false)} > Refuser </button>
                </div>
              </div>
            </div>
        )}
          <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID} />
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_MEASUREMENT_ID_MANAGER} />
          </>
      </>
    );
  }
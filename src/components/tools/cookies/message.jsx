'use client'

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"
import { useState } from "react"

export default function MessageCookies() {
    const [cookiesAccepted, setCookiesAccepted] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
  
    const handleCookiesDecision = (accepted) => {
      setCookiesAccepted(accepted);
      setIsVisible(false);
      localStorage.setItem("cookiesAccepted", accepted);
    };
  
    useState(() => {
      const fetchLocalStorage = async () => {
      const savedPreference = await localStorage.getItem("cookiesAccepted");
      if (savedPreference !== null) {
        setCookiesAccepted(savedPreference === "true");
        setIsVisible(false);
      }
      }
      fetchLocalStorage()
    }, 
      
      []);
    return (
      <>
        {isVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white p-4 z-50">
            <div className="container mx-auto max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
            <p className="text-sm text-center mb-4"> Ce site utilise des cookies pour améliorer votre expérience. Consultez notre{" "} <a href="/privacy-policy" className="text-primary underline hover:text-primary" > politique de confidentialité </a> . </p>
              <div className="flex gap-4 justify-center">
                    <button className="bg-primary text-gray-900 font-semibold py-2 px-4 rounded hover:bg-transparent border-2 border-primary hover:text-primary transition" onClick={() => handleCookiesDecision(true)} > Accepter </button>
                    <button className="bg-gray-600 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700 transition" onClick={() => handleCookiesDecision(false)} > Refuser </button>
                </div>
            </div>
          </div>
        )}
        {cookiesAccepted && (
          <>
            <GoogleAnalytics gaId='G-X7E8PXR2HK' />
            <GoogleTagManager gtmId='GTM-MNSZL9NN' />

          </>
        )}
      </>
    );
  }
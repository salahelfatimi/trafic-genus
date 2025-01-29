import { useEffect } from "react";

export function GoogleAnalytics({ gaId }) {
  useEffect(() => {
    if (!gaId) return;
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    const updateConsent = (consent) => {
      gtag("consent", "update", {
        ad_storage: consent ? "granted" : "denied",
        analytics_storage: consent ? "granted" : "denied",
        ad_user_data: consent ? "granted" : "denied", // Ajout de ce paramètre
        ad_personalization: consent ? "granted" : "denied", // Ajout de ce paramètre
      });
    };
    const savedPreference = localStorage.getItem("cookiesAccepted");
    const consent = savedPreference === "true";
    updateConsent(consent);

    window.addEventListener("cookiesConsentChanged", (event) => {
      updateConsent(event.detail);
    });
    gtag("js", new Date());
    gtag("config", gaId);

    return () => {
      window.removeEventListener("cookiesConsentChanged", updateConsent);
    };
  }, [gaId]);

  return null;
}

export function GoogleTagManager({ gtmId }) {
  useEffect(() => {
    if (!gtmId) return;

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    const updateConsent = (consent) => {
      window.dataLayer.push({
        event: "consent_update",
        ad_storage: consent ? "granted" : "denied",
        analytics_storage: consent ? "granted" : "denied",
        ad_user_data: consent ? "granted" : "denied", // Ajout de ce paramètre
        ad_personalization: consent ? "granted" : "denied", // Ajout de ce paramètre
      });
    };

    const savedPreference = localStorage.getItem("cookiesAccepted");
    const consent = savedPreference === "true";
    updateConsent(consent);

    window.addEventListener("cookiesConsentChanged", (event) => {
      updateConsent(event.detail);
    });

    return () => {
      document.head.removeChild(script);
      window.removeEventListener("cookiesConsentChanged", updateConsent);
    };
  }, [gtmId]);

  return null;
}

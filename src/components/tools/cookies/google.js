import { useEffect } from "react";

export function GoogleAnalytics({ gaId }) {
  useEffect(() => {
    if (!gaId) return;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    gtag("consent", "default", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });

    gtag("js", new Date());
    gtag("config", gaId);
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
    window.dataLayer.push({
      event: "consent_update",
      ad_storage: "granted",
      analytics_storage: "granted",
    });

    return () => {
      document.head.removeChild(script);
    };
  }, [gtmId]);

  return null;
}

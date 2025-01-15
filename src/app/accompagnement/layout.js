import { Exo_2 } from "next/font/google";
import Script from "next/script";

const exo_2 = Exo_2({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: { template: "Trafic Genius  | Marketing Agency | %s" },
  description:
    "Nous aidons les chefs d’entreprises et entrepreneurs à trouver de nouveaux clients prêts à payer leurs produits et services avec garantie.",
  keywords: [
    "trouver de nouveaux clients",
    "clients prêts à payer",
    "aide aux entrepreneurs",
    "acquisition de clients",
    "solutions pour chefs d’entreprise",
    "garantie de résultats",
    "stratégie de prospection",
    "augmenter les ventes",
    "services pour entrepreneurs",
    "accompagnement business",
  ],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function Layout({ children }) {
  return (
    <>
    {/* Meta Pixel Code */}
    <Script
      id="facebook-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1449442542919916');
          fbq('track', 'PageView');
        `,
      }}
    />
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1449442542919916&ev=PageView&noscript=1"
      />
    </noscript>
    {/* End Meta Pixel Code */}
    <div className={`${exo_2.className}`}>{children}</div>
  </>
  );
}

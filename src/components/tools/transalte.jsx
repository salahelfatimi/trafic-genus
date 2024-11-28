import React from "react";

import { cookies } from "next/headers";
import GoogleTranslate from "./googleTranslate";

// Helper to get language preference from cookies
export const getPrefLangCookie = () => {
  return cookies().get("googtrans")?.value ?? "en";
};

export default function Transalte() {
  const prefLangCookie = getPrefLangCookie();

  return (
    <div>
      <GoogleTranslate prefLangCookie={prefLangCookie} />
    </div>
  );
}

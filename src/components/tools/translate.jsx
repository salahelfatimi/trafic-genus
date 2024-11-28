import { cookies } from "next/headers";
import GoogleTranslate from "./GoogleTranslate";

// Helper to get language preference from cookies
export const getPrefLangCookie = () => {
  return cookies().get("googtrans")?.value?.split("/")[2] ?? "fr";
};

export default function Translate() {
  const prefLangCookie = getPrefLangCookie();

  return <GoogleTranslate prefLangCookie={prefLangCookie} />;
}

"use client";

import Script from "next/script";
import { useLocale } from "next-intl";

// Chat de Nova (Chatwoot). Se activa solo si las variables de entorno están definidas.
const CHATWOOT_URL = process.env.NEXT_PUBLIC_CHATWOOT_URL?.replace(/\/+$/, "");
const WEBSITE_TOKEN = process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN;

declare global {
  interface Window {
    chatwootSettings?: Record<string, unknown>;
    chatwootSDK?: { run: (config: { websiteToken: string; baseUrl: string }) => void };
  }
}

export default function NovaChat() {
  const locale = useLocale();

  if (!CHATWOOT_URL || !WEBSITE_TOKEN) return null;

  return (
    <Script
      src={`${CHATWOOT_URL}/packs/js/sdk.js`}
      strategy="lazyOnload"
      onLoad={() => {
        window.chatwootSettings = {
          // A la izquierda para no tapar el botón flotante de WhatsApp
          position: "left",
          type: "standard",
          locale: locale === "en" ? "en" : "es",
          launcherTitle: locale === "en" ? "Chat with Nova" : "Habla con Nova",
        };
        window.chatwootSDK?.run({ websiteToken: WEBSITE_TOKEN, baseUrl: CHATWOOT_URL });
      }}
    />
  );
}

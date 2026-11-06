import { COMPANY_INFO } from "@/lib/site-config";

// Backend que recibe los formularios. La CSP de next.config.ts se arma con este mismo origen,
// así que cambiar la variable de entorno no puede volver a dejar los formularios bloqueados.
export const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "https://novaforte-backend-1.onrender.com").replace(/\/+$/, "");

// Versión del texto de autorización que el usuario aceptó (evidencia para la Ley 1581 de 2012).
// Cambiarla cada vez que se modifique el texto de PrivacyConsent o la política.
export const PRIVACY_VERSION = "2026-11-06";

export class LeadError extends Error {}

const MENSAJES = {
  es: {
    red: "No pudimos conectar con nuestro servidor. Revisa tu conexión e intenta de nuevo.",
    servidor: "No pudimos enviar tu solicitud en este momento.",
  },
  en: {
    red: "We couldn't reach our server. Check your connection and try again.",
    servidor: "We couldn't send your request right now.",
  },
};

// Envía un lead al backend. Lanza LeadError con un mensaje listo para mostrar al usuario.
export async function submitLead(payload: Record<string, unknown>, locale: string): Promise<void> {
  const m = locale === "en" ? MENSAJES.en : MENSAJES.es;
  let res: Response;
  try {
    res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, privacyVersion: PRIVACY_VERSION }),
    });
  } catch {
    throw new LeadError(m.red);
  }
  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new LeadError(data?.message || m.servidor);
  }
}

export const whatsappFallbackUrl = () => `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

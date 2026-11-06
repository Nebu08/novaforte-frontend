"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/navigation";
import { CONSENT_KEY, OPEN_EVENT } from "@/lib/consent";

// Aviso de cookies de analítica. Google Analytics arranca con el consentimiento negado y solo guarda
// cookies si el visitante pulsa "Aceptar".
type Gtag = (...args: unknown[]) => void;

const leerDecision = () => {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
};
const suscribir = (cambio: () => void) => {
  window.addEventListener("storage", cambio);
  return () => window.removeEventListener("storage", cambio);
};

export default function CookieConsent() {
  const es = useLocale() !== "en";
  // En el servidor se asume que ya hay decisión, para no pintar el aviso antes de leer localStorage.
  const guardada = useSyncExternalStore(suscribir, leerDecision, () => "servidor");
  const [decidida, setDecidida] = useState(false);
  const [reabierto, setReabierto] = useState(false);

  useEffect(() => {
    const reabrir = () => setReabierto(true);
    window.addEventListener(OPEN_EVENT, reabrir);
    return () => window.removeEventListener(OPEN_EVENT, reabrir);
  }, []);

  const decide = (value: "si" | "no") => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {}
    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    gtag?.("consent", "update", { analytics_storage: value === "si" ? "granted" : "denied" });
    setDecidida(true);
    setReabierto(false);
  };

  if (!reabierto && (decidida || guardada !== null)) return null;

  return (
    <div
      role="region"
      aria-label={es ? "Preferencias de cookies" : "Cookie preferences"}
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-[60] rounded-2xl border-t-4 border-primary-600 bg-white dark:bg-dark-800 p-5 shadow-2xl text-sm text-gray-700 dark:text-gray-200"
    >
      <p className="mb-4 leading-relaxed">
        {es ? (
          <>
            <strong>¿Nos ayudas a mejorar el sitio?</strong> Usamos cookies de analítica (Google Analytics) para saber qué páginas
            son útiles. No las usamos para publicidad.{" "}
            <Link href="/privacidad" className="font-semibold text-primary-600 underline">Más información</Link>
          </>
        ) : (
          <>
            <strong>Help us improve the site?</strong> We use analytics cookies (Google Analytics) to learn which pages are useful.
            We don&apos;t use them for advertising.{" "}
            <Link href="/privacidad" className="font-semibold text-primary-600 underline">Learn more</Link>
          </>
        )}
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => decide("si")}
          className="min-h-11 rounded-xl bg-primary-600 px-5 font-bold text-white hover:bg-primary-500 focus-ring"
        >
          {es ? "Aceptar" : "Accept"}
        </button>
        <button
          type="button"
          onClick={() => decide("no")}
          className="min-h-11 rounded-xl border border-gray-300 dark:border-gray-600 px-5 font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-900 focus-ring"
        >
          {es ? "Rechazar" : "Reject"}
        </button>
      </div>
    </div>
  );
}

// Enlace del pie de página para cambiar la decisión.
export function CookiePreferencesButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className="rounded-sm text-gray-600 hover:text-primary-500 transition-colors duration-150 ease-out-precise focus-ring"
    >
      {label}
    </button>
  );
}

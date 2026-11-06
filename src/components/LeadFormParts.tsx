"use client";

import { useLocale } from "next-intl";
import { Link } from "@/navigation";
import { COMPANY_INFO } from "@/lib/site-config";
import { whatsappFallbackUrl } from "@/lib/leads";

// Casilla de autorización de tratamiento de datos (Ley 1581 de 2012). Obligatoria y sin marcar por defecto.
// Incluye datos de salud porque los formularios de cotización piden información clínica (dato sensible, art. 6).
export function PrivacyConsent({
  id,
  checked,
  onChange,
  showError,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  showError: boolean;
}) {
  const locale = useLocale();
  const es = locale !== "en";
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-start gap-3">
        <input
          id={id}
          name="privacyAccepted"
          type="checkbox"
          aria-required="true"
          aria-invalid={showError || undefined}
          aria-describedby={showError ? `${id}-error` : undefined}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-primary-600"
        />
        <label htmlFor={id} className="text-xs leading-relaxed text-gray-600 dark:text-gray-300 cursor-pointer">
          {es ? (
            <>
              Autorizo a {COMPANY_INFO.name.toUpperCase()} a tratar mis datos personales, incluidos los datos de salud que
              entregue de forma voluntaria, para responder esta solicitud, según la{" "}
              <Link href="/privacidad" className="font-semibold text-primary-600 underline">Política de privacidad</Link>. Sé que no
              estoy obligado a entregar datos sensibles.
            </>
          ) : (
            <>
              I authorize {COMPANY_INFO.name.toUpperCase()} to process my personal data, including any health data I choose to
              share, to answer this request, as described in the{" "}
              <Link href="/privacidad" className="font-semibold text-primary-600 underline">Privacy policy</Link>. I understand I am
              not required to provide sensitive data.
            </>
          )}
        </label>
      </div>
      {showError && (
        <span id={`${id}-error`} className="text-[11px] font-semibold text-red-500 ml-8">
          ⚠️ {es ? "Debes autorizar el tratamiento de datos para enviar la solicitud." : "Please authorize data processing to send your request."}
        </span>
      )}
    </div>
  );
}

// Mensaje de error del envío, con salida por WhatsApp para no perder al cliente.
export function SubmitError({ message }: { message: string }) {
  const locale = useLocale();
  if (!message) return null;
  return (
    <p role="alert" className="rounded-xl border-l-4 border-red-500 bg-red-50 dark:bg-red-950/30 px-4 py-3 text-sm text-red-700 dark:text-red-300">
      {message}{" "}
      {locale === "en" ? "You can also write to us on " : "También puedes escribirnos por "}
      <a href={whatsappFallbackUrl()} target="_blank" rel="noopener noreferrer" className="font-bold underline">
        WhatsApp {COMPANY_INFO.phone}
      </a>
      .
    </p>
  );
}

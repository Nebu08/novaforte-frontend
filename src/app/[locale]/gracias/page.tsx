"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";
import { COMPANY_INFO } from "@/lib/site-config";

export default function GraciasPage() {
  const t = useTranslations("Gracias");
  const locale = useLocale();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 bg-[#f7f5f4] dark:bg-dark-900 relative overflow-hidden transition-colors duration-300">
      
      {/* Líneas técnicas de fondo */}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Brillo de ambiente de fondo */}
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Tarjeta de Agradecimiento Glassmorphism */}
      <main className="relative w-full max-w-xl overflow-hidden bg-white/95 dark:bg-dark-800/90 backdrop-blur-md border border-gray-200/80 dark:border-gray-700/60 rounded-3xl p-8 sm:p-12 shadow-2xl text-center flex flex-col items-center gap-6 z-10">
        
        {/* Adorno superior de tecnología */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500" />

        {/* Checkmark animado con pings de ondas */}
        <div className="relative flex items-center justify-center h-20 w-20 rounded-2xl bg-primary-50 dark:bg-primary-950/40 border border-primary-500/20 text-primary-600 dark:text-primary-400">
          <span className="absolute inset-0 rounded-2xl border border-primary-500/30 animate-ping opacity-25" />
          <svg className="h-10 w-10 transform scale-100 transition-transform duration-500 hover:scale-110" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Textos Informativos */}
        <div className="flex flex-col gap-2.5 mt-2">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 font-mono">
            {locale === "es" ? "Registro Procesado" : "Registration Processed"}
          </span>
          <h1 
            className="text-2xl sm:text-3xl font-black text-dark-900 dark:text-white tracking-tight leading-none"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {t("title")}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Separador Técnico */}
        <div className="w-full flex items-center justify-center gap-2 my-2 opacity-50">
          <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-700" />
          <span className="text-[8px] font-mono text-gray-400">NOVAFORTE SECURITY CHECK</span>
          <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Llamados a la Acción (CTAs) */}
        <div className="flex flex-col gap-3.5 w-full">
          <div className="flex flex-col gap-1.5 items-center">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              <p className="text-[11px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                {t("subtext")}
              </p>
            </div>
            
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold rounded-xl shadow-lg shadow-green-500/10 hover:shadow-green-500/25 transition-all duration-300 text-center flex items-center justify-center gap-3 text-sm tracking-wide"
            >
              {/* WhatsApp Icon */}
              <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846l.385.23c1.562.93 3.451 1.42 5.378 1.422 5.735 0 10.4-4.664 10.404-10.399.002-2.778-1.077-5.39-3.038-7.353C17.756 1.09 15.147.01 12.007.01 6.269.01 1.608 4.67 1.604 10.4c-.001 1.942.506 3.841 1.47 5.514l.256.442-.998 3.645 3.732-.98z"/>
              </svg>
              <span>{t("ctaWhatsapp")}</span>
            </a>
          </div>

          <Link
            href="/"
            className="w-full py-3.5 border border-gray-200 dark:border-gray-700 text-dark-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-900/60 font-bold rounded-xl transition-all duration-300 text-sm tracking-wide shadow-sm"
          >
            {t("ctaHome")}
          </Link>
        </div>

      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import DownloadModal from "@/components/DownloadModal";
import CategoryModelViewer from "@/components/CategoryModelViewer";
import CategoryCasesCarousel from "@/components/CategoryCasesCarousel";

// SPECS shifted to local component state to support next-intl dynamic translations

const CAPABILITIES = [
  {
    num: 1,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    num: 2,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    num: 3,
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function HumansPage() {
  const t = useTranslations("Humans");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col">

      {/* ══════════════════════════════════════════════════════
          HERO — Asimétrico con acento burdeos intenso
          ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#f7f5f4] dark:bg-dark-900">

        {/* Fondo tipográfico decorativo */}
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex items-center justify-end overflow-hidden">
          <span className="text-[clamp(5rem,15vw,14rem)] font-black leading-none tracking-tighter uppercase text-primary-900/[0.04] dark:text-white/[0.025] whitespace-nowrap pr-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            HUMANS
          </span>
        </div>

        {/* Línea vertical acento */}
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary-600 to-transparent opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">

            {/* Columna texto */}
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-primary-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400">
                  {t("extra.eyebrow")}
                </span>
              </div>

              <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.05] tracking-tight text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("hero.title")}
              </h1>

              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/humans/cotizar"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-primary-600/30 transition-all duration-300 text-sm"
                >
                  {t("hero.ctaQuote")}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 dark:border-gray-700 text-dark-800 dark:text-gray-200 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold rounded-full transition-all duration-300 text-sm"
                >
                  {t("hero.ctaDownload")}
                </button>
              </div>
            </div>

            {/* Columna Visor 3D Interactivo de la Categoría Humans */}
            <div className="w-full mt-8 lg:mt-0">
              <CategoryModelViewer category="humans" height={420} />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CAPACIDADES — Lista horizontal con ícono + texto
          ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-primary-600 text-xs font-bold tracking-widest uppercase mb-2">─── Capacidades</p>
              <h2 className="text-3xl lg:text-4xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("capabilities.title")}
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">{t("capabilities.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
            {CAPABILITIES.map(({ num, icon }) => (
              <div key={num} className="flex flex-col gap-4 p-8 bg-white dark:bg-dark-900 hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  {icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-dark-900 dark:text-white mb-2">
                    {t(`capabilities.pillar${num}.title`)}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {t(`capabilities.pillar${num}.desc`)}
                  </p>
                </div>
                <div className="h-0.5 w-8 bg-primary-500 rounded-full mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CASOS DE ÉXITO HUMANS — Carrusel de navegación con flechas
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#f7f5f4] dark:bg-dark-950 border-t border-gray-200/50 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CategoryCasesCarousel
            category="humans"
            title="Casos Clínicos y Proyectos Humans"
            subtitle="Órtesis, prótesis y dispositivos biomecánicos entregados a pacientes en Colombia"
          />
        </div>
      </section>

      <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

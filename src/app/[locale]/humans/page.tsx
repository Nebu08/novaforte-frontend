"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import DownloadModal from "@/components/DownloadModal";

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

  const specs = [
    { value: "±0.1mm", label: t("extra.specLabel1") },
    { value: t("extra.specValue2"), label: t("extra.specLabel2") },
    { value: t("extra.specValue3"), label: t("extra.specLabel3") },
    { value: t("extra.specValue4"), label: t("extra.specLabel4") },
  ];

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
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

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

            {/* Columna métricas — tarjeta oscura */}
            <div className="hidden lg:block">
              <div className="rounded-2xl p-6 border border-primary-900/20 dark:border-primary-800/40 bg-dark-900" style={{ background: "linear-gradient(145deg, #1c0d10 0%, #0e0d0c 100%)" }}>
                <p className="text-xs font-bold tracking-widest uppercase text-primary-400 mb-5">
                  {t("extra.specsTitle")}
                </p>
                <div className="grid grid-cols-2 gap-5">
                  {specs.map((s) => (
                    <div key={s.label} className="flex flex-col gap-1 p-3 rounded-xl bg-white/5">
                      <span className="text-xl font-black text-primary-400 leading-none" style={{ fontFamily: "Outfit, sans-serif" }}>
                        {s.value}
                      </span>
                      <span className="text-xs text-gray-500 leading-tight">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{t("extra.status")}</span>
                </div>
              </div>
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
          CASOS CLÍNICOS — Numerados, no cards genéricas
          ══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #7e192a 0%, transparent 50%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-primary-400 text-xs font-bold tracking-widest uppercase mb-2">─── Evidencia clínica</p>
              <h2 className="text-3xl lg:text-4xl font-black text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("cases.title")}
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">{t("cases.subtitle")}</p>
          </div>

          <div className="flex flex-col divide-y divide-gray-800">
            {[1, 2, 3].map((num) => (
              <div key={num} className="group flex flex-col sm:flex-row sm:items-center gap-6 py-8 hover:pl-3 transition-all duration-300">
                <span className="text-[4rem] font-black leading-none text-primary-900/60 dark:text-primary-900/40 group-hover:text-primary-800/60 transition-colors select-none flex-shrink-0 w-24" style={{ fontFamily: "Outfit, sans-serif" }}>
                  0{num}
                </span>
                <div className="flex-1">
                  <span className="text-xs font-bold tracking-widest uppercase text-primary-500 block mb-1">
                    {t("extra.caseEyebrow")}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{t(`cases.item${num}.title`)}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xl">{t(`cases.item${num}.desc`)}</p>
                </div>
                <Link href="/portafolio" className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors">
                  {t("extra.viewSheet")}
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/portafolio" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 hover:border-primary-600 text-gray-300 hover:text-primary-400 font-semibold rounded-full transition-all duration-300 text-sm">
              {t("extra.viewAll")}
            </Link>
          </div>
        </div>
      </section>

      <DownloadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

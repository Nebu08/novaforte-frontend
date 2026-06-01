"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/navigation";
import { PORTFOLIO_CASES, MODELS_3D, type CaseCategory } from "@/lib/site-config";
import ModelViewer3D from "@/components/ModelViewer3D";

type FilterCategory = "all" | CaseCategory;

const CATEGORY_COLORS: Record<CaseCategory, string> = {
  humans: "#7e192a",
  biomedica: "#3a3734",
  vet: "#962d4e",
  academy: "#a88444",
};

export default function PortafolioPage() {
  const t = useTranslations("Portfolio");
  const locale = useLocale();

  const categories: FilterCategory[] = ["all", "humans", "biomedica", "vet", "academy"];
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [selectedModel, setSelectedModel] = useState<number | null>(
    MODELS_3D.length > 0 ? 0 : null
  );

  const filtered =
    activeCategory === "all"
      ? PORTFOLIO_CASES
      : PORTFOLIO_CASES.filter((c) => c.category === activeCategory);

  const categoryLabel: Record<FilterCategory, string> = {
    all: t("all"),
    humans: t("categories.humans"),
    biomedica: t("categories.biomedica"),
    vet: t("categories.vet"),
    academy: t("categories.academy"),
  };

  const currentModel = selectedModel !== null ? MODELS_3D[selectedModel] : null;

  return (
    <div className="flex-1 flex flex-col">

      {/* ══════════════════════════════════════════════════
          HERO — Portafolio
          ══════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden bg-dark-900">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex items-center justify-end overflow-hidden">
          <span className="text-[clamp(4rem,12vw,12rem)] font-black leading-none tracking-tighter uppercase text-white/[0.025] whitespace-nowrap pr-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            CASOS
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-400">Portafolio técnico</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
            {t("title")}
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">{t("subtitle")}</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          VISOR 3D — Con ayuda de interacción y placeholder comercial
          ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#0a0908] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-primary-400 text-xs font-bold tracking-widest uppercase mb-2">─── Visor 3D Interactivo</p>
              <h2 className="text-2xl font-black text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                Modelos en 3D — Explora y Rota
              </h2>
            </div>
            {MODELS_3D.length > 0 && (
              <p className="text-gray-500 text-sm">{MODELS_3D.length} modelo{MODELS_3D.length > 1 ? "s" : ""} disponible{MODELS_3D.length > 1 ? "s" : ""}</p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
            {/* Canvas principal con ayuda flotante */}
            <div className="relative group overflow-hidden rounded-2xl border border-gray-800">
              <ModelViewer3D
                src={currentModel?.file}
                label={currentModel ? (locale === "es" ? currentModel.nameEs : currentModel.nameEn) : "Sin modelo cargado"}
                height={460}
              />
              {/* Etiqueta flotante de interacción (solo si hay modelos) */}
              {MODELS_3D.length > 0 && (
                <div className="absolute bottom-4 left-4 px-3.5 py-2 rounded-xl bg-black/75 backdrop-blur-md border border-gray-800 text-[10px] sm:text-xs text-gray-300 font-mono flex items-center gap-2 pointer-events-none select-none shadow-lg">
                  <span className="animate-pulse">🖱️</span>
                  <span>
                    {locale === "es"
                      ? "Arrastra para rotar | Desplázate para zoom"
                      : "Drag to rotate | Scroll to zoom"}
                  </span>
                </div>
              )}
            </div>

            {/* Selector de modelos o Placeholder Comercial */}
            <div className="flex flex-col gap-3 justify-center">
              {MODELS_3D.length === 0 ? (
                <div className="relative overflow-hidden flex flex-col gap-4 p-6 rounded-2xl border border-primary-500/20 bg-dark-900 text-left shadow-lg">
                  {/* Brillo de fondo */}
                  <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl" />
                  
                  <div className="h-10 w-10 rounded-xl bg-primary-950 border border-primary-500/30 flex items-center justify-center text-primary-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
                      {locale === "es" ? "¿Quieres ver tu pieza en 3D?" : "Want to see your part in 3D?"}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">
                      {locale === "es"
                        ? "Escaneamos y digitalizamos componentes clínicos y mecánicos con precisión nanométrica. Contáctanos para añadir un modelo interactivo a tu caso."
                        : "We scan and digitalize clinical and mechanical components with nanometer precision. Contact us to add an interactive model to your case."}
                    </p>
                  </div>
                  
                  <Link
                    href="/contacto"
                    className="w-full mt-2 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white text-xs font-bold rounded-xl shadow-md transition-all duration-300 text-center uppercase tracking-wider"
                  >
                    {locale === "es" ? "Solicitar Escaneo 3D" : "Request 3D Scan"}
                  </Link>
                </div>
              ) : (
                MODELS_3D.map((model, i) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(i)}
                    className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                      selectedModel === i
                        ? "border-primary-600 bg-primary-900/20"
                        : "border-gray-800 bg-dark-800/30 hover:border-gray-700"
                    }`}
                  >
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      selectedModel === i ? "bg-primary-600" : "bg-gray-800"
                    }`}>
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${selectedModel === i ? "text-primary-300" : "text-gray-300"}`}>
                        {locale === "es" ? model.nameEs : model.nameEn}
                      </p>
                      <p className="text-xs text-gray-600 capitalize">{model.category}</p>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CASOS DE ÉXITO — Grid filtrable con transiciones
          ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#f7f5f4] dark:bg-dark-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-primary-600 text-xs font-bold tracking-widest uppercase mb-2">─── Casos reales</p>
              <h2 className="text-3xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                Proyectos entregados en Colombia
              </h2>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full border transition-all duration-200 ${
                    activeCategory === cat
                      ? "text-white border-transparent"
                      : "bg-transparent text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-gray-400"
                  }`}
                  style={activeCategory === cat ? {
                    backgroundColor: cat === "all" ? "#7e192a" : CATEGORY_COLORS[cat as CaseCategory] ?? "#7e192a",
                    borderColor: cat === "all" ? "#7e192a" : CATEGORY_COLORS[cat as CaseCategory] ?? "#7e192a",
                  } : {}}
                >
                  {categoryLabel[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Grid con llaves dinámicas para forzar re-animación */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((caso) => {
              const title = locale === "es" ? caso.titleEs : caso.titleEn;
              const desc = locale === "es" ? caso.descriptionEs : caso.descriptionEn;
              const tag = locale === "es" ? caso.tagEs : caso.tagEn;
              const spec = locale === "es" ? caso.specEs : caso.specEn;
              const accentColor = CATEGORY_COLORS[caso.category];

              return (
                <div
                  key={`${caso.id}-${activeCategory}`}
                  className="group flex flex-col bg-white dark:bg-dark-800 border border-gray-200/50 dark:border-gray-700/50 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                >
                  {/* Image */}
                  <div className="relative aspect-video w-full bg-gray-100 dark:bg-dark-900 overflow-hidden">
                    {caso.image && (
                      <Image
                        src={caso.image}
                        alt={caso.altText}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg className="h-12 w-12 text-gray-200 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    {/* Category tag */}
                    <span
                      className="absolute bottom-2 left-2 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded-md"
                      style={{ backgroundColor: accentColor }}
                    >
                      {tag}
                    </span>
                    <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-semibold bg-black/50 text-white rounded-md">
                      {caso.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div>
                      {/* Accent line */}
                      <div className="h-0.5 w-6 rounded-full mb-3" style={{ backgroundColor: accentColor }} />
                      <h3 className="text-base font-bold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1">
                        {title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                        {desc}
                      </p>
                    </div>
                    <p className="text-[11px] font-mono font-semibold text-gray-400 dark:text-gray-655 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700/50">
                      {spec}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

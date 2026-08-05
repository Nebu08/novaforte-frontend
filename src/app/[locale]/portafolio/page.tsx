"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";
import { type CaseCategory } from "@/lib/site-config";
import CategoryModelViewer from "@/components/CategoryModelViewer";
import CategoryCasesCarousel from "@/components/CategoryCasesCarousel";

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

  const categoryLabel: Record<FilterCategory, string> = {
    all: t("all"),
    humans: t("categories.humans"),
    biomedica: t("categories.biomedica"),
    vet: t("categories.vet"),
    academy: t("categories.academy"),
  };

  const displayedCategories: CaseCategory[] =
    activeCategory === "all"
      ? ["humans", "biomedica", "vet", "academy"]
      : [activeCategory];

  return (
    <div className="flex-1 flex flex-col">

      {/* ══════════════════════════════════════════════════
          HERO — Portafolio General
          ══════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden bg-dark-900">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex items-center justify-end overflow-hidden">
          <span className="text-[clamp(4rem,12vw,12rem)] font-black leading-none tracking-tighter uppercase text-white/[0.025] whitespace-nowrap pr-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            PORTAFOLIO
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary-400">Portafolio por Categoría</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
            {t("title")}
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">{t("subtitle")}</p>

          {/* Categorías selector pills */}
          <div className="flex flex-wrap gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-bold rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? "text-white border-transparent shadow-lg scale-105"
                    : "bg-dark-800/80 text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white"
                }`}
                style={
                  activeCategory === cat
                    ? {
                        backgroundColor:
                          cat === "all" ? "#7e192a" : CATEGORY_COLORS[cat as CaseCategory] ?? "#7e192a",
                      }
                    : {}
                }
              >
                {categoryLabel[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTENIDO POR CATEGORÍAS (Visualizadores y Carruseles)
          ══════════════════════════════════════════════════ */}
      <div className="flex flex-col">
        {displayedCategories.map((cat, idx) => (
          <section
            key={cat}
            className={`py-16 ${
              idx % 2 === 0
                ? "bg-[#0f0e0d] text-white border-t border-gray-850"
                : "bg-[#f7f5f4] dark:bg-dark-900 border-t border-gray-200 dark:border-gray-800"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
              {/* Encabezado de Sección */}
              <div className="flex items-center justify-between border-b border-gray-800/40 dark:border-gray-700/40 pb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: CATEGORY_COLORS[cat] }}
                  />
                  <h2
                    className="text-2xl lg:text-3xl font-black uppercase tracking-tight"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {categoryLabel[cat]}
                  </h2>
                </div>
                <Link
                  href={`/${cat}`}
                  className="text-xs font-bold uppercase tracking-wider text-primary-400 hover:text-primary-300 flex items-center gap-1"
                >
                  {locale === "es" ? "Ir a la sección →" : "Go to section →"}
                </Link>
              </div>

              {/* 1. Visualizador 3D de la Categoría */}
              <CategoryModelViewer
                category={cat}
                title={`Visualizador 3D — ${categoryLabel[cat]}`}
                subtitle="Explora e interactúa con los modelos 3D de esta categoría"
                height={400}
              />

              {/* 2. Carrusel de Casos de Éxito con Flechas */}
              <CategoryCasesCarousel
                category={cat}
                title={`Casos de Éxito — ${categoryLabel[cat]}`}
                subtitle="Proyectos entregados con especificaciones técnicas"
              />
            </div>
          </section>
        ))}
      </div>

    </div>
  );
}

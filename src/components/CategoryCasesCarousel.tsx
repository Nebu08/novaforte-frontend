"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { PORTFOLIO_CASES, type CaseCategory } from "@/lib/site-config";

interface CategoryCasesCarouselProps {
  category: CaseCategory;
  title?: string;
  subtitle?: string;
}

const CATEGORY_COLORS: Record<CaseCategory, string> = {
  humans: "#7e192a",
  biomedica: "#3a3734",
  vet: "#962d4e",
  academy: "#a88444",
};

export default function CategoryCasesCarousel({
  category,
  title,
  subtitle,
}: CategoryCasesCarouselProps) {
  const locale = useLocale();

  const cases = PORTFOLIO_CASES.filter((c) => c.category === category);

  // Carousel pagination index (showing 1 card step per click for maximum clarity)
  const [currentIndex, setCurrentIndex] = useState(0);

  if (cases.length === 0) {
    return null;
  }

  const accentColor = CATEGORY_COLORS[category] ?? "#7e192a";

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col gap-6 py-8">
      {/* Header section with titles and Navigation Arrows */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase mb-1.5" style={{ color: accentColor }}>
            ─── Casos Reales & Portafolio
          </p>
          <h3 className="text-2xl lg:text-3xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
            {title || (locale === "es" ? "Casos de Éxito Entregados" : "Delivered Success Cases")}
          </h3>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>
          )}
        </div>

        {/* Carousel controls (only needed if > 1 case) */}
        {cases.length > 1 && (
          <div className="flex items-center gap-3 self-end">
            <span className="text-xs font-mono font-bold text-gray-400 dark:text-gray-500 mr-1">
              {currentIndex + 1} / {cases.length}
            </span>
            <button
              onClick={prevSlide}
              aria-label="Caso anterior"
              className="h-10 w-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-gray-200 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Caso siguiente"
              className="h-10 w-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-gray-200 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-center transition-all shadow-sm active:scale-95"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Carousel Track */}
      <div className="relative overflow-hidden w-full rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cases.map((caso) => {
            const caseTitle = locale === "es" ? caso.titleEs : caso.titleEn;
            const desc = locale === "es" ? caso.descriptionEs : caso.descriptionEn;
            const tag = locale === "es" ? caso.tagEs : caso.tagEn;
            const spec = locale === "es" ? caso.specEs : caso.specEn;

            return (
              <div key={caso.id} className="w-full flex-shrink-0 px-1">
                <div className="group grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700/60 rounded-2xl overflow-hidden shadow-md p-6">
                  {/* Image container */}
                  <div className="relative aspect-video md:aspect-auto w-full min-h-[220px] bg-gray-100 dark:bg-dark-900 rounded-xl overflow-hidden">
                    {caso.image && (
                      <Image
                        src={caso.image}
                        alt={caso.altText}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg className="h-12 w-12 text-gray-300 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <span
                      className="absolute top-3 left-3 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white rounded-md shadow"
                      style={{ backgroundColor: accentColor }}
                    >
                      {tag}
                    </span>
                    <span className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-semibold bg-black/60 backdrop-blur-md text-white rounded-md">
                      {caso.year}
                    </span>
                  </div>

                  {/* Details container */}
                  <div className="flex flex-col justify-between gap-4">
                    <div>
                      <div className="h-1 w-8 rounded-full mb-3" style={{ backgroundColor: accentColor }} />
                      <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                        {caseTitle}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400">
                        🛠️ {spec}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots (if > 1 case) */}
      {cases.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-2">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Ir al caso ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "w-8"
                  : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
              }`}
              style={currentIndex === i ? { backgroundColor: accentColor } : {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}

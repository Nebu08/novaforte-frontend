"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";
import { PAST_COURSES } from "@/lib/site-config";
import CategoryModelViewer from "@/components/CategoryModelViewer";
import CategoryCasesCarousel from "@/components/CategoryCasesCarousel";

const LEVEL_COLORS = [
  { bg: "#7e192a", light: "#f9eeef", label: "Básico" },
  { bg: "#9c2535", light: "#faeef0", label: "Intermedio" },
  { bg: "#a88444", light: "#fdf8ef", label: "Avanzado" },
  { bg: "#3a3734", light: "#f4f3f2", label: "Emprendedor" },
];

const SUPPORT_ICONS = [
  // Capacitación Docente
  <svg key="1" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
  // Soporte de Mentores
  <svg key="2" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Infraestructura
  <svg key="3" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
];

export default function AcademyPage() {
  const t = useTranslations("Academy");
  const locale = useLocale();
  const [activeLevel, setActiveLevel] = useState(1);

  return (
    <div className="flex-1 flex flex-col">

      {/* ══════════════════════════════════════════
          HERO — Energético, educativo, asimétrico
          ══════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#f7f5f4] dark:bg-dark-900">
        {/* Texto decorativo */}
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex items-center justify-end overflow-hidden">
          <span
            className="text-[clamp(4rem,12vw,11rem)] font-black leading-none tracking-tighter uppercase text-[#a88444]/[0.07] dark:text-[#a88444]/[0.06] whitespace-nowrap pr-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            ACADEMY
          </span>
        </div>

        {/* Acento dorado lateral */}
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#a88444] to-transparent opacity-50" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">

            {/* Texto */}
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-3">
                <div className="h-px w-10" style={{ backgroundColor: "#a88444" }} />
                <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#a88444" }}>
                  Novaforte Academy
                </span>
              </div>

              <h1
                className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.05] tracking-tight text-dark-900 dark:text-white"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {t("hero.title")}
              </h1>

              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/academy/contacto"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-full shadow-lg transition-all duration-300 text-sm hover:opacity-90"
                  style={{ backgroundColor: "#a88444" }}
                >
                  {t("hero.ctaDemo")}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="#levels"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 dark:border-gray-700 hover:border-[#a88444] text-dark-800 dark:text-gray-200 font-semibold rounded-full transition-all duration-300 text-sm"
                >
                  {t("hero.ctaLevels")}
                </a>
              </div>

              {/* Stats rápidas */}
              <div className="flex flex-wrap gap-6 pt-2 border-t border-gray-200 dark:border-gray-800">
                {[
                  { val: "4", label: "Niveles curriculares" },
                  { val: "100%", label: "Soporte local docente" },
                  { val: "12+", label: "Colegios en Colombia" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <span className="text-2xl font-black leading-none" style={{ color: "#a88444", fontFamily: "Outfit, sans-serif" }}>
                      {s.val}
                    </span>
                    <span className="text-xs text-gray-500">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Visor 3D Interactivo de la Categoría Academy */}
            <div className="w-full mt-8 lg:mt-0">
              <CategoryModelViewer category="academy" height={420} />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NIVELES — Escalera visual horizontal
          ══════════════════════════════════════════ */}
      <section id="levels" className="py-20 bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#a88444" }}>
                ─── Currículo
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("levels.title")}
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">{t("levels.subtitle")}</p>
          </div>

          {/* Escalera visual — cada nivel más alto que el anterior */}
          {/* Estructura Curricular - Tarjetas de Niveles Uniformes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => {
              const level = LEVEL_COLORS[num - 1];
              return (
                <div
                  key={num}
                  className="group relative flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl p-6 min-h-[260px] sm:min-h-[280px]"
                  style={{ background: `linear-gradient(135deg, ${level.bg} 0%, ${level.bg}e5 100%)` }}
                >
                  {/* Patrón decorativo de puntos */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "16px 16px" }}
                  />
                  
                  {/* Contenido Superior: Número y Título */}
                  <div className="relative z-10">
                    <span className="text-5xl font-black text-white/20 leading-none" style={{ fontFamily: "Outfit, sans-serif" }}>
                      0{num}
                    </span>
                    <h3 className="text-base font-black text-white leading-snug mt-3" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {t(`levels.card${num}.title`)}
                    </h3>
                  </div>

                  {/* Contenido Inferior: Descripción */}
                  <div className="relative z-10 mt-4">
                    <p className="text-xs text-white/90 leading-relaxed">
                      {t(`levels.card${num}.desc`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-20 flex flex-col gap-12">
            <div>
              <h3 className="text-2xl font-black text-dark-900 dark:text-white mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("curriculum.title")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm max-w-2xl leading-relaxed">
                {t("curriculum.subtitle")}
              </p>
            </div>

            {/* Selector de Niveles (Tabs) */}
            <div className="flex flex-wrap gap-2 md:gap-4 mb-2">
              {[1, 2, 3].map((num) => {
                const color = LEVEL_COLORS[num - 1];
                const isActive = activeLevel === num;
                return (
                  <button
                    key={num}
                    onClick={() => setActiveLevel(num)}
                    className={`flex-1 min-w-[140px] px-6 py-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "shadow-lg scale-[1.02] border-transparent text-white"
                        : "bg-[#f7f5f4] dark:bg-dark-800 border-gray-200 dark:border-gray-700/60 text-dark-900 dark:text-gray-250 hover:border-[#a88444]/40"
                    }`}
                    style={{
                      backgroundColor: isActive ? color.bg : undefined,
                    }}
                  >
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? "text-white/80" : "text-gray-450 dark:text-gray-400"}`}>
                      Nivel 0{num}
                    </span>
                    <p className="text-sm font-black mt-1 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {t(`extra.levelLabel${num}`)}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Contenedor del Detalle del Nivel Activo */}
            {(() => {
              const num = activeLevel;
              const color = LEVEL_COLORS[num - 1];
              const isLevel1 = num === 1;
              const numItems = 5;
              return (
                <div className="relative rounded-3xl p-6 sm:p-10 bg-[#f7f5f4] dark:bg-dark-800 border border-gray-200 dark:border-gray-700/60 overflow-hidden flex flex-col gap-8 shadow-sm">
                  {/* Decorativo de fondo: número grande */}
                  <div
                    aria-hidden="true"
                    className="absolute top-2 right-4 text-[10rem] sm:text-[14rem] font-black opacity-5 select-none leading-none pointer-events-none"
                    style={{ color: color.bg, fontFamily: "Outfit, sans-serif" }}
                  >
                    0{num}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 items-start relative z-10">
                    {/* Columna Izquierda: Ejes Temáticos */}
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: color.bg }}>
                          Nivel 0{num}
                        </span>
                        <h4 className="text-2xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                          {t(`curriculum.level${num}.title`)}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-1">
                          {t(`levels.card${num}.desc`)}
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 mt-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                          Módulos y Ejes Temáticos
                        </span>

                        {num === 3 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                            {/* Columna Ruta Técnica */}
                            <div className="flex flex-col gap-4">
                              <div className="px-3 py-1.5 rounded-lg bg-primary-600/10 border border-primary-500/20 text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 inline-block w-fit">
                                Ruta Técnica: Ingeniería CAD (Onshape)
                              </div>
                              <ul className="flex flex-col gap-4 pl-1 border-l-2 border-primary-800/40">
                                {[1, 2, 3, 4, 5].map((idx) => {
                                  const itemText = t(`curriculum.level3.tech${idx}`);
                                  const colonIndex = itemText.indexOf(":");
                                  const title = colonIndex !== -1 ? itemText.substring(0, colonIndex + 1) : "";
                                  const description = colonIndex !== -1 ? itemText.substring(colonIndex + 1) : itemText;
                                  return (
                                    <li key={idx} className="relative pl-6 flex flex-col gap-0.5 group">
                                      <span className="absolute left-[-7px] top-1.5 h-3 w-3 rounded-full border-2 border-[#f7f5f4] dark:border-dark-800 bg-primary-600" />
                                      <p className="text-xs text-gray-650 dark:text-gray-300 leading-relaxed">
                                        {title && <strong className="font-bold text-dark-900 dark:text-white mr-1">{title}</strong>}
                                        <span>{description}</span>
                                      </p>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            {/* Columna Ruta Artística */}
                            <div className="flex flex-col gap-4">
                              <div className="px-3 py-1.5 rounded-lg bg-accent-600/10 border border-[#a88444]/25 text-[11px] font-bold uppercase tracking-wider text-[#a88444] inline-block w-fit">
                                Ruta Artística: Escultura Digital (Blender)
                              </div>
                              <ul className="flex flex-col gap-4 pl-1 border-l-2 border-[#a88444]/30">
                                {[1, 2, 3, 4, 5].map((idx) => {
                                  const itemText = t(`curriculum.level3.art${idx}`);
                                  const colonIndex = itemText.indexOf(":");
                                  const title = colonIndex !== -1 ? itemText.substring(0, colonIndex + 1) : "";
                                  const description = colonIndex !== -1 ? itemText.substring(colonIndex + 1) : itemText;
                                  return (
                                    <li key={idx} className="relative pl-6 flex flex-col gap-0.5 group">
                                      <span className="absolute left-[-7px] top-1.5 h-3 w-3 rounded-full border-2 border-[#f7f5f4] dark:border-dark-800 bg-[#a88444]" />
                                      <p className="text-xs text-gray-650 dark:text-gray-300 leading-relaxed">
                                        {title && <strong className="font-bold text-dark-900 dark:text-white mr-1">{title}</strong>}
                                        <span>{description}</span>
                                      </p>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <ul className="flex flex-col gap-4 pl-1 border-l-2 border-gray-200 dark:border-gray-700">
                            {Array.from({ length: numItems }).map((_, idx) => {
                              const itemIndex = idx + 1;
                              const itemText = t(`curriculum.level${num}.learn${itemIndex}`);
                              const colonIndex = itemText.indexOf(":");
                              const title = colonIndex !== -1 ? itemText.substring(0, colonIndex + 1) : "";
                              const description = colonIndex !== -1 ? itemText.substring(colonIndex + 1) : itemText;
                              return (
                                <li key={itemIndex} className="relative pl-6 flex flex-col gap-0.5 group">
                                  <span
                                    className="absolute left-[-7px] top-1.5 h-3 w-3 rounded-full border-2 border-[#f7f5f4] dark:border-dark-800 transition-transform duration-300 group-hover:scale-125"
                                    style={{ backgroundColor: color.bg }}
                                  />
                                  <p className="text-xs text-gray-650 dark:text-gray-300 leading-relaxed">
                                    {title && <strong className="font-bold text-dark-900 dark:text-white mr-1">{title}</strong>}
                                    <span>{description}</span>
                                  </p>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Columna Derecha: Software y Proyecto */}
                    <div className="flex flex-col gap-6 lg:sticky lg:top-4">
                      {/* Software Recomendado */}
                      <div className="p-6 rounded-2xl border flex flex-col gap-2 bg-white dark:bg-dark-900/60" style={{ borderColor: `${color.bg}20` }}>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                          Software Recomendado
                        </span>
                        <p className="text-sm font-semibold text-dark-805 dark:text-gray-205 leading-snug">
                          {t(`curriculum.level${num}.software`)}
                        </p>
                      </div>

                      {/* Proyecto sugerido */}
                      <div className="p-6 rounded-2xl border flex flex-col gap-2 bg-white dark:bg-dark-900/60" style={{ borderColor: `${color.bg}20` }}>
                        <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: color.bg }}>
                          <span>💡</span> Proyecto Sugerido
                        </span>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                          {t(`curriculum.level${num}.project`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Rúbricas de Evaluación Híbridas */}
          <div className="mt-24 border-t border-gray-200 dark:border-gray-800 pt-16">
            <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col gap-2">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#a88444" }}>
                ─── Certificación Oficial
              </span>
              <h3 className="text-2xl lg:text-3xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("rubric.title")}
              </h3>
              <p className="text-gray-550 dark:text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
                {t("rubric.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Componente Digital */}
              <div className="rounded-3xl p-6 sm:p-8 bg-[#f7f5f4] dark:bg-dark-800 border border-gray-200 dark:border-gray-700/60 flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full border-4 border-[#a88444] bg-white dark:bg-dark-900 relative shadow-inner">
                  <span className="text-xl font-black text-dark-900 dark:text-white font-mono">50%</span>
                  <div aria-hidden="true" className="absolute inset-0 rounded-full border-2 border-dashed border-[#a88444]/30 animate-[spin_20s_linear_infinite]" />
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-lg font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {t("rubric.digitalTitle")}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {t("rubric.digitalDesc")}
                  </p>
                  <ul className="flex flex-col gap-2 mt-2">
                    {(locale === "es"
                      ? [
                          "Bocetos completamente definidos (restricciones de tangencia, paralelismo, etc.)",
                          "Uso lógico del árbol de operaciones (extrusiones, revoluciones ordenadas)",
                          "Limpieza dimensional y geometría sin auto-intersecciones en mallas",
                          "Laminación optimizada (soportes mínimos, orientación eficiente)"
                        ]
                      : [
                          "Fully defined sketches (tangency, parallelism, and geometric constraints)",
                          "Logical operation tree structure (organized extrusions and revolutions)",
                          "Dimensional accuracy and mesh geometry free of self-intersections",
                          "Optimized slicing settings (minimal supports, efficient orientation)"
                        ]
                    ).map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-gray-600 dark:text-gray-300">
                        <span className="h-4 w-4 shrink-0 rounded-full flex items-center justify-center text-[10px] mt-0.5 bg-[#a88444]/15 text-[#a88444]">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Componente Físico */}
              <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-6 items-start shadow-sm">
                <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full border-4 border-[#7e192a] bg-white dark:bg-dark-900 relative shadow-inner">
                  <span className="text-xl font-black text-dark-900 dark:text-white font-mono">50%</span>
                  <div aria-hidden="true" className="absolute inset-0 rounded-full border-2 border-dashed border-[#7e192a]/30 animate-[spin_20s_linear_infinite]" />
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-lg font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {t("rubric.physicalTitle")}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {t("rubric.physicalDesc")}
                  </p>
                  <ul className="flex flex-col gap-2 mt-2">
                    {(locale === "es"
                      ? [
                          "Cumplimiento de tolerancias mecánicas (holgura funcional de 0.2 a 0.4 mm)",
                          "Resistencia estructural (comportamiento del relleno y adherencia entre capas)",
                          "Funcionalidad y ensamble físico con hardware real si aplica",
                          "Calidad del acabado superficial tras post-procesado"
                        ]
                      : [
                          "Compliance with mechanical tolerances (0.2 mm to 0.4 mm functional clearances)",
                          "Structural strength (infill performance and interlayer adhesion)",
                          "Physical functionality and assembly with real hardware if applicable",
                          "Surface finish quality after post-processing"
                        ]
                    ).map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs text-gray-600 dark:text-gray-300">
                        <span className="h-4 w-4 shrink-0 rounded-full flex items-center justify-center text-[10px] mt-0.5 bg-[#7e192a]/15 text-[#7e192a]">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Criterio de Aprobación Callout */}
            <div className="mt-8 p-5 rounded-2xl border border-[#a88444]/20 bg-[#a88444]/5 flex flex-col sm:flex-row gap-4 items-center justify-center text-center sm:text-left max-w-3xl mx-auto">
              <div className="h-10 w-10 rounded-full bg-[#a88444]/15 flex items-center justify-center text-[#a88444] text-lg flex-shrink-0">
                🏆
              </div>
              <div className="flex flex-col gap-0.5">
                <h5 className="text-xs font-bold text-dark-900 dark:text-white uppercase tracking-wider">
                  {t("rubric.badgeTitle")}
                </h5>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t("rubric.badgeDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Tabla de Resumen Plan de Estudios */}
          <div className="mt-24 border-t border-gray-200 dark:border-gray-800 pt-16">
            <div className="mb-10 text-center sm:text-left">
              <h3 className="text-2xl font-black text-dark-900 dark:text-white mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("curriculum.table.title")}
              </h3>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-dark-900">
                <thead className="bg-[#f7f5f4] dark:bg-dark-800/50">
                  <tr>
                    {[
                      t("curriculum.table.headers.0"),
                      t("curriculum.table.headers.1"),
                      t("curriculum.table.headers.2"),
                      t("curriculum.table.headers.3")
                    ].map((headerText, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap"
                      >
                        {headerText}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800/60">
                  {[1, 2, 3].map((rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-gray-50/50 dark:hover:bg-dark-800/20 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-dark-900 dark:text-white">
                        {t(`curriculum.table.rows.${rowIdx - 1}.col1`)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                        {t(`curriculum.table.rows.${rowIdx - 1}.col2`)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono">
                        {t(`curriculum.table.rows.${rowIdx - 1}.col3`)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 leading-normal">
                        {t(`curriculum.table.rows.${rowIdx - 1}.col4`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EMPRENDIMIENTO — Split asimétrico oscuro
          ══════════════════════════════════════════ */}
      <section className="py-20 bg-dark-900 border-t border-gray-800 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 90% 50%, #a88444 0%, transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#a88444" }}>
                ─── Nivel 4: Emprendimiento
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("ent.title")}
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                {t("ent.desc")}
              </p>
            </div>

            {/* Panel dorado de hitos */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "💡", title: "Idea y diseño", desc: "Modelado 3D desde cero" },
                { icon: "📦", title: "Fabricación", desc: "Resina y filamento real" },
                { icon: "🏷", title: "Costeo", desc: "Precio de venta real" },
                { icon: "🛒", title: "Venta escolar", desc: "Comercialización práctica" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-2 p-4 rounded-xl border border-[#a88444]/20 bg-[#a88444]/5"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-white font-bold text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SOPORTE — 3 pilares con íconos
          ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f7f5f4] dark:bg-dark-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#a88444" }}>
                ─── Acompañamiento
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("support.title")}
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">{t("support.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col gap-4 p-8 bg-white dark:bg-dark-900 hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "#a88444" }}>
                  {SUPPORT_ICONS[num - 1]}
                </div>
                <div>
                  <h3 className="text-base font-bold text-dark-900 dark:text-white mb-2">
                    {t(`support.pillar${num}.title`)}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {t(`support.pillar${num}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CURSOS DICTADOS — Galería de Experiencias y Certificaciones
          ══════════════════════════════════════════ */}
      <section className="py-20 bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#a88444" }}>
                ─── Galería de Experiencias
              </p>
              <h2 className="text-3xl lg:text-4xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                Cursos Dictados y Casos Escolares
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Evidencia del impacto de nuestra metodología en prestigiosas instituciones educativas en Colombia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PAST_COURSES.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-gray-250/50 dark:border-gray-800 bg-[#f7f5f4] dark:bg-dark-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Contenedor de la Imagen */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={locale === "es" ? course.schoolEs : course.schoolEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Badge de Colegio */}
                  <div className="absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white bg-black/60 backdrop-blur-sm rounded-full border border-white/10">
                    {locale === "es" ? course.schoolEs : course.schoolEn}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Programa Escolar
                    </span>
                    <h3 className="text-base font-black text-dark-900 dark:text-white leading-tight mt-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {locale === "es" ? course.courseEs : course.courseEn}
                    </h3>
                  </div>

                  {/* Certificado Badge */}
                  <div className="p-4 rounded-2xl bg-white/70 dark:bg-dark-900/60 border border-[#a88444]/20 flex items-center gap-3">
                    <span className="text-xl">🏆</span>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-[#a88444]">
                        Certificación Otorgada
                      </p>
                      <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 leading-snug">
                        {locale === "es" ? course.certificateEs : course.certificateEn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CASOS DE ÉXITO ACADEMY — Carrusel con flechas
          ══════════════════════════════════════════ */}
      <section className="py-16 bg-[#f7f5f4] dark:bg-dark-950 border-t border-gray-200/50 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <CategoryCasesCarousel
            category="academy"
            title="Casos de Éxito en Colegios e Instituciones"
            subtitle="Proyectos estudiantiles y emprendimientos Maker desarrollados con el programa Novaforte Academy"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA Final — Colegio
          ══════════════════════════════════════════ */}
      <section className="py-16 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-black text-dark-900 dark:text-white mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
              {t("extra.ctaTitle")}
            </h2>
            <p className="text-gray-500 text-sm">{t("extra.ctaSubtitle")}</p>
          </div>
          <Link
            href="/academy/contacto"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-full shadow-lg transition-all duration-300 text-sm hover:opacity-90"
            style={{ backgroundColor: "#a88444" }}
          >
            {t("extra.ctaButton")}
          </Link>
        </div>
      </section>

    </div>
  );
}

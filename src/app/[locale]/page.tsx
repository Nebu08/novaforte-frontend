"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

// ─── Division data ────────────────────────────────────────────────────────────
const DIVISIONS = [
  {
    key: "humans",
    href: "/humans",
    color: "#7e192a",
    colorLight: "#f9eeef",
    number: "01",
    tag: "CLÍNICA",
    specs: ["±0.1 mm precisión", "PETG / PP / Nylon / Carbono", "Entrega 5–10 días"],
    svgPath:
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    key: "biomedica",
    href: "/biomedica",
    color: "#3a3734",
    colorLight: "#f4f3f2",
    number: "02",
    tag: "INDUSTRIAL",
    specs: ["20 µm escaneo 3D", "PEEK autoclavable", "Sin importaciones"],
    svgPath:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    key: "vet",
    href: "/vet",
    color: "#962d4e",
    colorLight: "#fdf0f3",
    number: "03",
    tag: "VETERINARIA",
    specs: ["TPU flexible", "Arneses a medida", "Con vet. tratante"],
    svgPath:
      "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    key: "academy",
    href: "/academy",
    color: "#a88444",
    colorLight: "#fdf8ef",
    number: "04",
    tag: "EDUCACIÓN",
    specs: ["4 niveles curriculares", "Capacitación docente", "Soporte local"],
    svgPath:
      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
] as const;

// ─── Metrics bar data ─────────────────────────────────────────────────────────
const METRICS = [
  { value: "±0.1mm", label: "Tolerancia clínica" },
  { value: "72 h", label: "Respuesta urgente" },
  { value: "4", label: "Sectores atendidos" },
  { value: "100%", label: "Soporte local Colombia" },
];

// ─── Process steps ────────────────────────────────────────────────────────────
const PROCESS = [
  {
    step: "01",
    title: "Recepción & Digitalización",
    desc: "Recepción de muestras físicas, planos bidimensionales o archivos CAD 3D. Analizamos la viabilidad técnica y geométrica de inmediato."
  },
  {
    step: "02",
    title: "Modelado y Simulación",
    desc: "Escaneo óptico tridimensional de alta resolución o reconstrucción paramétrica digital. Validamos tolerancias, espesores de pared y encaje virtual."
  },
  {
    step: "03",
    title: "Manufactura Aditiva",
    desc: "Impresión 3D de alta precisión utilizando polímeros biocompatibles, materiales compuestos (fibra de carbono) o filamentos técnicos según la aplicación."
  },
  {
    step: "04",
    title: "Post-Procesado & Entrega",
    desc: "Remoción técnica de soportes, curado térmico/químico y control de calidad dimensional. Entrega final en menos de 72 horas para requerimientos urgentes."
  }
];

export default function Home() {
  const t = useTranslations("Home");
  const tHumans = useTranslations("Humans");
  const tBiomed = useTranslations("Biomed");
  const tVet = useTranslations("Vet");
  const tAcademy = useTranslations("Academy");
  const [activeDiv, setActiveDiv] = useState(0);

  const current = DIVISIONS[activeDiv];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">

      {/* ════════════════════════════════════════════════════════════════════
          HERO — Layout asimétrico 55/45, tipografía decorativa de fondo
          ════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#f7f5f4] dark:bg-dark-900">

        {/* ── Fondo: "NOVAFORTE" gigante decorativo ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-end pr-8 overflow-hidden"
        >
          <span
            className="text-[clamp(6rem,18vw,18rem)] font-black leading-none tracking-tighter uppercase text-primary-900/[0.04] dark:text-white/[0.03] whitespace-nowrap"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            NOVAFORTE
          </span>
        </div>

        {/* ── Grid sutil de fondo ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#7e192a08_1px,transparent_1px),linear-gradient(to_bottom,#7e192a08_1px,transparent_1px)] bg-[size:48px_48px]"
        />

        {/* ── Acento burdeos diagonal en esquina superior derecha ── */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-1/3 h-full"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, transparent 50%, rgba(126,25,42,0.06) 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-0 items-center min-h-[80vh]">

            {/* ── Columna izquierda: texto ── */}
            <div className="flex flex-col gap-8 lg:pr-16">

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-primary-500" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary-600 dark:text-primary-400">
                  Bogotá, Colombia · Est. 2023
                </span>
              </div>

              {/* H1 */}
              <h1
                className="text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.05] tracking-tight text-dark-900 dark:text-white"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {t("hero.title")}
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
                {t("hero.subtitle")}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#divisions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-primary-600/30 transition-all duration-300 text-sm"
                >
                  {t("hero.ctaPrimary")}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link
                  href="/portafolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 dark:border-gray-700 text-dark-800 dark:text-gray-200 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold rounded-full transition-all duration-300 text-sm"
                >
                  {t("hero.ctaPortfolio")}
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {t("hero.ctaSecondary")} →
                </Link>
              </div>

              {/* ── Métricas en línea ── */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                {METRICS.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <span
                      className="text-2xl font-black text-primary-600 dark:text-primary-400 leading-none"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {m.value}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Columna derecha: tarjeta visual única de marca ── */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Tarjeta principal burdeos */}
                <div
                  className="relative rounded-2xl p-8 text-white overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #7e192a 0%, #2a0308 100%)" }}
                >
                  {/* Patrón de puntos interno */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #fff 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Contenido */}
                  <div className="relative flex flex-col gap-6">
                    {/* Ícono corazón-circuito SVG */}
                    <svg
                      viewBox="0 0 80 80"
                      className="h-20 w-20 opacity-90"
                      fill="none"
                      stroke="rgba(197,160,89,0.9)"
                      strokeWidth="1.5"
                    >
                      {/* Corazón simplificado */}
                      <path
                        d="M40 65 C20 50 10 38 10 28 C10 18 18 12 28 14 C33 15 37 18 40 22 C43 18 47 15 52 14 C62 12 70 18 70 28 C70 38 60 50 40 65Z"
                        strokeLinejoin="round"
                      />
                      {/* Trazas de circuito */}
                      <line x1="10" y1="28" x2="2" y2="28" />
                      <line x1="2" y1="28" x2="2" y2="20" />
                      <circle cx="2" cy="20" r="2" fill="rgba(197,160,89,0.9)" stroke="none" />
                      <line x1="70" y1="28" x2="78" y2="28" />
                      <line x1="78" y1="28" x2="78" y2="36" />
                      <circle cx="78" cy="36" r="2" fill="rgba(197,160,89,0.9)" stroke="none" />
                      <line x1="40" y1="65" x2="40" y2="76" />
                      <line x1="40" y1="76" x2="52" y2="76" />
                      <circle cx="52" cy="76" r="2" fill="rgba(197,160,89,0.9)" stroke="none" />
                    </svg>

                    <div>
                      <p className="text-accent-400 text-xs font-bold tracking-widest uppercase mb-1">
                        Manufactura Aditiva Clínica
                      </p>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Del escaneo 3D o diseño digital al dispositivo terminado.
                        Materiales biocompatibles. Soporte local garantizado.
                      </p>
                    </div>

                    {/* Indicador animado */}
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
                      </span>
                      <span className="text-xs text-white/60 font-mono">Disponible · Bogotá CO</span>
                    </div>
                  </div>
                </div>

                {/* Tarjeta flotante inferior */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-800 rounded-xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 w-48">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Tiempo de respuesta</p>
                  <p className="text-2xl font-black text-primary-600 dark:text-primary-400" style={{ fontFamily: "Outfit, sans-serif" }}>
                    &lt; 72 h
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">para urgencias clínicas</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          DIVISIONES — Selector de tabs fullwidth (no grid de 4 cards)
          ════════════════════════════════════════════════════════════════════ */}
      <section id="divisions" className="bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-gray-800">

        {/* ── Tab navigation ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-0">
          <div className="flex items-end gap-0 border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
            {DIVISIONS.map((div, i) => (
              <button
                key={div.key}
                onClick={() => setActiveDiv(i)}
                className={`group relative flex-shrink-0 flex flex-col gap-1 px-6 py-4 text-left transition-all duration-200 border-b-2 ${
                  activeDiv === i
                    ? "border-b-primary-600 text-primary-600 dark:text-primary-400"
                    : "border-b-transparent text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: activeDiv === i ? div.color : undefined }}>
                  {div.tag}
                </span>
                <span className="text-sm font-semibold whitespace-nowrap">
                  {t(`divisions.${div.key}.title`)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Panel de contenido fullwidth ── */}
        <div
          className="transition-colors duration-500"
          style={{ backgroundColor: `${current.color}08` }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">

              {/* Contenido izquierdo */}
              <div className="flex flex-col gap-8">

                {/* Número grande de división */}
                <div className="flex items-center gap-4">
                  <span
                    className="text-[5rem] font-black leading-none opacity-15 select-none"
                    style={{ fontFamily: "Outfit, sans-serif", color: current.color }}
                  >
                    {current.number}
                  </span>
                  <div
                    className="h-px flex-1 max-w-[80px]"
                    style={{ backgroundColor: current.color, opacity: 0.3 }}
                  />
                </div>

                <div>
                  <h2
                    className="text-3xl lg:text-4xl font-black mb-4 text-dark-900 dark:text-white leading-tight"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {current.key === "humans" ? tHumans("hero.title") :
                     current.key === "biomedica" ? tBiomed("hero.title") :
                     current.key === "vet" ? tVet("hero.title") :
                     tAcademy("hero.title")}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
                    {current.key === "humans" ? tHumans("hero.subtitle") :
                     current.key === "biomedica" ? tBiomed("hero.subtitle") :
                     current.key === "vet" ? tVet("hero.subtitle") :
                     tAcademy("hero.subtitle")}
                  </p>
                </div>

                {/* Specs técnicas como chips */}
                <div className="flex flex-wrap gap-3">
                  {current.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-4 py-1.5 text-sm font-semibold rounded-full border"
                      style={{
                        borderColor: `${current.color}40`,
                        color: current.color,
                        backgroundColor: `${current.color}0a`,
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div>
                  <Link
                    href={current.href}
                    className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm"
                    style={{ backgroundColor: current.color }}
                  >
                    {t(`divisions.${current.key}.cta`)}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Indicadores laterales de las 4 divisiones */}
              <div className="hidden lg:flex flex-col gap-2 w-48">
                {DIVISIONS.map((div, i) => (
                  <button
                    key={div.key}
                    onClick={() => setActiveDiv(i)}
                    className={`group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left ${
                      activeDiv === i
                        ? "bg-white dark:bg-dark-800 shadow-md"
                        : "hover:bg-white/50 dark:hover:bg-dark-800/50"
                    }`}
                  >
                    <div
                      className="h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: activeDiv === i ? div.color : `${div.color}20` }}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke={activeDiv === i ? "white" : div.color}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={div.svgPath} />
                      </svg>
                    </div>
                    <span className={`text-xs font-semibold transition-colors ${
                      activeDiv === i
                        ? "text-dark-900 dark:text-white"
                        : "text-gray-400 dark:text-gray-500"
                    }`}>
                      {div.key === "humans" ? "Humans" :
                       div.key === "biomedica" ? t("divisions.biomedica.title") :
                       div.key === "vet" ? t("divisions.vet.title") :
                       "Academy"}
                    </span>
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          PROCESO — Timeline horizontal (no 3 cards iguales)
          ════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-dark-900 dark:bg-[#0a0908] relative overflow-hidden">

        {/* Fondo decorativo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #7e192a 0%, transparent 50%), radial-gradient(circle at 80% 50%, #c5a059 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <p className="text-primary-400 text-xs font-bold tracking-widest uppercase mb-3">
                ─── Proceso
              </p>
              <h2
                className="text-3xl lg:text-4xl font-black text-white leading-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {t("trust.title")}
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              {t("trust.subtitle")}
            </p>
          </div>

          {/* Timeline horizontal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <div
                key={step.step}
                className="relative group overflow-hidden bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-primary-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Fondo sutil degradado al pasar el cursor */}
                <div aria-hidden="true" className="absolute -top-10 -left-10 w-24 h-24 bg-primary-600/5 rounded-full blur-2xl group-hover:bg-primary-600/10 transition-colors" />
                
                <div>
                  {/* Número con caja destacada */}
                  <div className="h-12 w-12 rounded-xl bg-primary-600/10 border border-primary-500/30 flex items-center justify-center text-primary-400 font-bold text-lg font-mono">
                    {step.step}
                  </div>

                  {/* Título y descripción */}
                  <h3
                    className="text-white font-black text-lg mt-6 leading-tight"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mt-3">
                    {step.desc}
                  </p>
                </div>

                {/* Línea decorativa inferior activa con hover */}
                <div className="h-1 w-10 bg-primary-600 rounded-full mt-6 group-hover:w-20 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Pilares de confianza */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-800">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-8 bg-primary-600 rounded-full" />
                  <div className="h-px flex-1 bg-gray-800" />
                </div>
                <h3 className="text-white font-bold text-base">
                  {t(`trust.pillar${num}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`trust.pillar${num}.desc`)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          CTA FINAL — Banner asimétrico
          ════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f7f5f4] dark:bg-dark-900 py-20 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-primary-500">
                ─── Siguiente paso
              </span>
              <h2
                className="text-3xl lg:text-4xl font-black text-dark-900 dark:text-white leading-tight"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                ¿Necesitas un repuesto, un dispositivo o un laboratorio?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-xl">
                Un ingeniero biomédico revisa tu caso y responde en menos de 72 horas hábiles.
                Sin intermediarios. Soporte directo desde Bogotá.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-w-max">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-full shadow-lg hover:shadow-primary-600/30 transition-all duration-300 text-sm"
              >
                Escribir a Novaforte
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portafolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Ver casos de éxito →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

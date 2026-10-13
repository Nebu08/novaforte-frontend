"use client";

import { useState, type CSSProperties } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

// ─── Division data ────────────────────────────────────────────────────────────
// Textos (headline, desc, specs, CTAs) viven en messages/*.json → Home.divisions.<key>
// Colores: solo tokens de @theme (globals.css).
//   accent → trazos, indicadores e íconos
//   ink    → texto sobre fondo claro (≥ 4.5:1)
//   solid  → fondo de CTA con texto blanco (≥ 4.5:1)
const DIVISIONS = [
  {
    key: "humans",
    href: "/humans",
    quoteHref: "/humans/cotizar",
    accent: "var(--color-primary-500)",
    ink: "var(--color-primary-500)",
    solid: "var(--color-primary-500)",
    number: "01",
    svgPath:
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    key: "biomedica",
    href: "/biomedica",
    quoteHref: "/biomedica/cotizar",
    accent: "var(--color-dark-700)",
    ink: "var(--color-dark-700)",
    solid: "var(--color-dark-700)",
    number: "02",
    svgPath:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    key: "vet",
    href: "/vet",
    quoteHref: "/vet/cotizar",
    accent: "var(--color-primary-400)",
    ink: "var(--color-primary-700)",
    solid: "var(--color-primary-700)",
    number: "03",
    svgPath:
      "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    key: "academy",
    href: "/academy",
    quoteHref: "/academy/contacto",
    accent: "var(--color-accent-600)",
    ink: "var(--color-accent-700)",
    solid: "var(--color-accent-700)",
    number: "04",
    svgPath:
      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
] as const;

// Variable CSS por división para indicadores animados (after:/before:)
const accentVar = (accent: string) => ({ "--div-accent": accent }) as CSSProperties;
const tint = (color: string, pct: number) =>
  `color-mix(in oklab, ${color} ${pct}%, transparent)`;

// ─── Metrics bar data (labels en Home.metrics) ───────────────────────────────────
const METRICS = [
  { value: "±0.1mm", labelKey: "tolerance" },
  { value: "72 h", labelKey: "response" },
  { value: "4", labelKey: "sectors" },
  { value: "100%", labelKey: "local" },
] as const;

// ─── Process steps (textos en Home.process.steps.<key>) ──────────────────────
const PROCESS = [
  { step: "01", key: "reception" },
  { step: "02", key: "modeling" },
  { step: "03", key: "manufacturing" },
  { step: "04", key: "delivery" },
] as const;

// Flecha de CTA: se desplaza 2px al hover del botón padre (.group)
const ARROW_CLASS =
  "h-4 w-4 transition-transform duration-200 ease-out-precise group-hover:translate-x-0.5";

export default function Home() {
  const t = useTranslations("Home");
  const tHeader = useTranslations("Header");
  const [activeDiv, setActiveDiv] = useState(0);

  const current = DIVISIONS[activeDiv];
  const currentSpecs = t.raw(`divisions.${current.key}.specs`) as string[];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">

      {/* ════════════════════════════════════════════════════════════════════
          HERO — Layout asimétrico 55/45, tipografía decorativa de fondo
          ════════════════════════════════════════════════════════════════════ */}
      <section className="relative lg:min-h-[90vh] flex items-center overflow-hidden bg-gray-50">

        {/* ── Fondo: "NOVAFORTE" gigante decorativo ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-end pr-8 overflow-hidden"
        >
          <span className="font-display text-[clamp(6rem,18vw,18rem)] font-black leading-none tracking-tighter uppercase text-primary-900/[0.035] whitespace-nowrap">
            NOVAFORTE
          </span>
        </div>

        {/* ── Grid sutil de fondo (retícula de 48px) ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,var(--color-primary-500)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary-500)_1px,transparent_1px)] bg-[size:48px_48px]"
        />

        {/* ── Acento burdeos diagonal en esquina superior derecha ── */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-1/3 h-full"
          style={{
            background: `linear-gradient(135deg, transparent 0%, transparent 50%, ${tint("var(--color-primary-500)", 6)} 100%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-space-2xl pb-space-3xl lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-space-2xl lg:gap-0 items-center lg:min-h-[80vh]">

            {/* ── Columna izquierda: texto ── */}
            <div className="flex flex-col gap-space-lg lg:pr-16">

              {/* Eyebrow */}
              <div className="flex items-center gap-space-sm">
                <div className="h-px w-10 bg-primary-500" />
                <span className="text-text-2xs font-bold tracking-[0.22em] uppercase text-primary-500">
                  Bogotá, Colombia · Est. 2023
                </span>
              </div>

              {/* H1 */}
              <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-black leading-[1.04] tracking-[-0.025em] text-balance text-dark-900">
                {t("hero.title")}
              </h1>

              {/* Subtitle */}
              <p className="-mt-space-xs text-lg text-gray-700 leading-relaxed max-w-[34rem] text-pretty">
                {t("hero.subtitle")}
              </p>

              {/* CTAs — un CTA principal de cotización + uno secundario */}
              <div className="flex flex-col gap-space-sm mt-space-xs">
                <div className="flex flex-wrap gap-space-sm items-center">
                  <a
                    id="home-cta-quote"
                    href="#divisions"
                    className="group inline-flex items-center gap-space-xs h-[52px] px-7 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full shadow-crisp hover:shadow-lift btn-press focus-ring text-sm"
                  >
                    {t("hero.ctaPrimary")}
                    <svg className={ARROW_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <Link
                    id="home-cta-portfolio"
                    href="/portafolio"
                    className="inline-flex items-center gap-space-xs h-[52px] px-7 border border-gray-300 bg-white/70 text-dark-800 hover:border-dark-800 hover:text-dark-900 font-semibold rounded-full btn-press focus-ring text-sm"
                  >
                    {t("hero.ctaPortfolio")}
                  </Link>
                </div>
                <p className="text-text-2xs text-gray-600 flex items-center gap-space-xs">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />
                  {t("hero.ctaMicrocopy")}
                </p>
              </div>

              {/* ── Métricas: barra de instrumento con divisores de 1px ── */}
              <div className="mt-space-md grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 border-y border-gray-200">
                {METRICS.map((m) => (
                  <div
                    key={m.labelKey}
                    className="flex flex-col gap-1.5 bg-gray-50 py-space-md pr-space-sm pl-space-md max-sm:odd:pl-0 sm:first:pl-0"
                  >
                    <span className="font-display text-heading-sm font-bold leading-none tracking-[-0.02em] tabular-nums text-primary-500">
                      {m.value}
                    </span>
                    <span className="text-text-3xs font-semibold uppercase tracking-[0.08em] text-gray-600 leading-snug">
                      {t(`metrics.${m.labelKey}`)}
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
                  className="relative rounded-xl p-8 text-white overflow-hidden shadow-lift ring-1 ring-inset ring-white/10"
                  style={{ background: "linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-900) 100%)" }}
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
                    {/* Corazón-circuito del logo Novaforte (silueta extraída de logo.svg),
                        pintado con el token oro vía mask-image */}
                    <span
                      aria-hidden="true"
                      className="block self-start h-28 aspect-[231/211] bg-accent-500"
                      style={{
                        maskImage: "url(/images/novaforte-heart.png)",
                        WebkitMaskImage: "url(/images/novaforte-heart.png)",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                      }}
                    />

                    <div>
                      <p className="text-accent-400 text-text-2xs font-bold tracking-[0.18em] uppercase mb-space-xs">
                        {t("hero.cardEyebrow")}
                      </p>
                      <p className="text-white/85 text-sm leading-relaxed">
                        {t("hero.cardText")}
                      </p>
                    </div>

                    {/* Indicador animado */}
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
                      </span>
                      <span className="text-xs text-white/70 font-mono">{t("hero.cardStatus")}</span>
                    </div>
                  </div>
                </div>

                {/* Tarjeta flotante inferior */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lift border border-gray-200 w-48">
                  <p className="text-text-2xs text-gray-600 mb-1">{t("hero.floatLabel")}</p>
                  <p className="font-display text-2xl font-black tabular-nums tracking-[-0.02em] text-primary-500">
                    {t("hero.floatValue")}
                  </p>
                  <p className="text-text-2xs text-gray-600">{t("hero.floatSub")}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          DIVISIONES — Selector de tabs fullwidth (no grid de 4 cards)
          ════════════════════════════════════════════════════════════════════ */}
      <section id="divisions" className="scroll-mt-20 lg:scroll-mt-24 bg-white border-t border-gray-200">

        {/* ── Encabezado del selector ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-space-3xl lg:pt-24">
          <h2 className="font-display text-heading-sm lg:text-heading-lg font-black tracking-[-0.02em] text-balance text-dark-900 leading-tight">
            {t("divisions.title")}
          </h2>
          <p className="mt-space-sm text-gray-600 text-base leading-relaxed max-w-2xl text-pretty">
            {t("divisions.subtitle")}
          </p>
        </div>

        {/* ── Tab navigation: 2×2 en móvil, fila con indicador en desktop ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-space-xl pb-0">
          <div
            className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden sm:flex sm:items-end sm:gap-0 sm:bg-transparent sm:border-0 sm:border-b sm:rounded-none sm:overflow-x-auto"
            role="tablist"
          >
            {DIVISIONS.map((div, i) => {
              const selected = activeDiv === i;
              return (
                <button
                  key={div.key}
                  id={`home-tab-${div.key}`}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveDiv(i)}
                  style={accentVar(div.accent)}
                  className={`group relative flex flex-col gap-1 px-space-md py-space-sm sm:px-space-lg sm:py-space-md sm:flex-shrink-0 text-left bg-white sm:bg-transparent transition-colors duration-150 ease-out-precise focus-ring focus-visible:outline-offset-[-2px] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-[var(--div-accent)] after:transition-transform after:duration-200 after:ease-out-precise ${
                    selected
                      ? "text-dark-900 after:scale-x-100 max-sm:bg-gray-50"
                      : "text-gray-600 hover:text-dark-900 after:scale-x-0"
                  }`}
                >
                  <span
                    className="text-text-3xs font-bold tracking-[0.14em] uppercase transition-colors duration-150"
                    style={{ color: selected ? div.ink : undefined }}
                  >
                    {t(`divisions.${div.key}.tag`)}
                  </span>
                  <span className="text-sm font-semibold leading-snug sm:whitespace-nowrap">
                    {t(`divisions.${div.key}.title`)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Panel de contenido fullwidth ── */}
        <div className="bg-gray-50 border-y border-gray-200 sm:border-t-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-space-2xl lg:py-space-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_15rem] gap-space-2xl items-start">

              {/* Contenido izquierdo */}
              <div className="flex flex-col gap-space-lg">

                {/* Índice de división — coordenada técnica */}
                <div className="flex items-center gap-space-sm">
                  <span
                    className="font-display text-text-sm font-bold tracking-[0.18em] tabular-nums select-none"
                    style={{ color: current.ink }}
                  >
                    {current.number}
                  </span>
                  <div
                    className="h-px w-space-2xl"
                    style={{ backgroundColor: current.accent }}
                  />
                </div>

                <div>
                  {/* H3: headline propio de la home (no reutiliza el H1 de cada división para evitar canibalización) */}
                  <h3 className="font-display text-heading-sm lg:text-heading-lg font-black tracking-[-0.02em] text-balance mb-space-sm text-dark-900 leading-tight">
                    {t(`divisions.${current.key}.headline`)}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl text-pretty">
                    {t(`divisions.${current.key}.desc`)}
                  </p>
                </div>

                {/* Specs técnicas como celdas de ficha técnica */}
                <div className="flex flex-wrap gap-space-xs">
                  {currentSpecs.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center h-8 px-space-sm text-text-xs font-semibold tabular-nums rounded-hairline border bg-white"
                      style={{
                        borderColor: tint(current.accent, 35),
                        color: current.ink,
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* CTAs: cotizar directo (principal) + ver división (secundario) */}
                <div className="flex flex-wrap items-center gap-x-space-lg gap-y-space-sm pt-space-xs">
                  <Link
                    id={`home-quote-${current.key}`}
                    href={current.quoteHref}
                    className="group inline-flex items-center gap-space-xs h-[52px] px-7 text-white font-semibold rounded-full shadow-crisp hover:shadow-lift btn-press focus-ring text-sm"
                    style={{ backgroundColor: current.solid }}
                  >
                    {t(`divisions.${current.key}.quote`)}
                    <svg className={ARROW_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    id={`home-explore-${current.key}`}
                    href={current.href}
                    className="inline-flex items-center gap-1.5 h-11 text-sm font-semibold text-gray-700 hover:text-primary-500 underline-offset-4 decoration-1 hover:underline transition-colors duration-150 ease-out-precise focus-ring rounded-sm"
                  >
                    {t("divisions.exploreLabel")} →
                  </Link>
                </div>
              </div>

              {/* Indicadores laterales de las 4 divisiones — índice técnico */}
              <div className="hidden lg:flex flex-col border-l border-gray-200">
                {DIVISIONS.map((div, i) => {
                  const selected = activeDiv === i;
                  return (
                    <button
                      key={div.key}
                      onClick={() => setActiveDiv(i)}
                      style={accentVar(div.accent)}
                      className={`group relative flex items-center gap-space-sm py-space-sm pl-space-md text-left transition-colors duration-150 ease-out-precise focus-ring before:absolute before:-left-px before:inset-y-2 before:w-0.5 before:origin-top before:bg-[var(--div-accent)] before:transition-transform before:duration-200 before:ease-out-precise ${
                        selected ? "before:scale-y-100" : "before:scale-y-0"
                      }`}
                    >
                      <div
                        className={`h-8 w-8 rounded-md border flex items-center justify-center flex-shrink-0 transition-[background-color,border-color] duration-150 ease-out-precise ${
                          selected ? "border-transparent" : "border-gray-200 bg-white group-hover:border-gray-300"
                        }`}
                        style={{ backgroundColor: selected ? div.accent : undefined }}
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke={selected ? "white" : div.accent}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={div.svgPath} />
                        </svg>
                      </div>
                      <span className={`text-text-xs font-semibold transition-colors duration-150 ${
                        selected
                          ? "text-dark-900"
                          : "text-gray-600 group-hover:text-dark-900"
                      }`}>
                        {tHeader(div.key === "biomedica" ? "biomedical" : div.key)}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════════
          PROCESO — Timeline horizontal (no 3 cards iguales)
          ════════════════════════════════════════════════════════════════════ */}
      <section className="py-space-3xl lg:py-24 bg-dark-900 relative overflow-hidden">

        {/* Fondo decorativo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--color-primary-500) 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--color-accent-500) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md mb-space-2xl">
            <div>
              <p className="text-primary-300 text-text-2xs font-bold tracking-[0.18em] uppercase mb-space-sm">
                {t("process.eyebrow")}
              </p>
              <h2 className="font-display text-heading-sm lg:text-heading-lg font-black tracking-[-0.02em] text-balance text-white leading-tight">
                {t("trust.title")}
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              {t("trust.subtitle")}
            </p>
          </div>

          {/* Timeline horizontal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {PROCESS.map((step) => (
              <div
                key={step.step}
                className="relative group overflow-hidden rounded-xl border border-dark-700 bg-dark-800 p-space-lg flex flex-col justify-between transition-[border-color,transform] duration-200 ease-out-precise hover:border-dark-600 hover:-translate-y-0.5"
              >
                {/* Fondo sutil degradado al pasar el cursor */}
                <div aria-hidden="true" className="absolute -top-10 -left-10 w-24 h-24 bg-primary-500/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out-precise" />

                <div className="relative">
                  {/* Número con caja destacada */}
                  <div className="h-10 w-10 rounded-md bg-primary-500/10 border border-primary-500/40 flex items-center justify-center text-primary-300 font-display font-bold text-sm tabular-nums">
                    {step.step}
                  </div>

                  {/* Título y descripción */}
                  <h3 className="font-display text-white font-black text-lg mt-space-lg leading-tight">
                    {t(`process.steps.${step.key}.title`)}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mt-space-xs">
                    {t(`process.steps.${step.key}.desc`)}
                  </p>
                </div>

                {/* Línea decorativa inferior activa con hover */}
                <div className="h-0.5 w-10 bg-primary-400 mt-space-lg origin-left transition-transform duration-200 ease-out-precise group-hover:scale-x-200" />
              </div>
            ))}
          </div>

          {/* Pilares de confianza */}
          <div className="mt-space-3xl grid grid-cols-1 md:grid-cols-3 gap-space-xl pt-space-2xl border-t border-dark-700">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="h-0.5 w-8 bg-primary-400" />
                  <div className="h-px flex-1 bg-dark-700" />
                </div>
                <h3 className="text-white font-bold text-base">
                  {t(`trust.pillar${num}.title`)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
      <section className="bg-gray-50 py-space-3xl lg:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-space-xl items-center">
            <div className="flex flex-col gap-space-md">
              <span className="text-text-2xs font-bold tracking-[0.18em] uppercase text-primary-500">
                {t("finalCta.eyebrow")}
              </span>
              <h2 className="font-display text-heading-sm lg:text-heading-lg font-black tracking-[-0.02em] text-balance text-dark-900 leading-tight">
                {t("finalCta.title")}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-xl text-pretty">
                {t("finalCta.desc")}
              </p>
            </div>
            <div className="flex flex-col gap-space-xs sm:min-w-max">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-space-xs h-[52px] px-8 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full shadow-crisp hover:shadow-lift btn-press focus-ring text-sm"
              >
                {t("finalCta.ctaPrimary")}
                <svg className={ARROW_CLASS} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portafolio"
                className="inline-flex items-center justify-center gap-space-xs h-11 px-8 text-sm font-semibold text-gray-700 hover:text-primary-500 transition-colors duration-150 ease-out-precise focus-ring rounded-full"
              >
                {t("finalCta.ctaSecondary")} →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

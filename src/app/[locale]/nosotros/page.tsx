"use client";

import { useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/navigation";
import { COMPANY_INFO, TEAM_MEMBERS } from "@/lib/site-config";

const TECH_STACK = [
  {
    labelEs: "FDM Industrial",
    labelEn: "Industrial FDM",
    descEs: "Filamento de alta precisión",
    descEn: "High-precision filament",
  },
  {
    labelEs: "SLA / DLP",
    labelEn: "SLA / DLP",
    descEs: "Resina grado médico",
    descEn: "Medical-grade resin",
  },
  {
    labelEs: "Escaneo 3D",
    labelEn: "3D Scanning",
    descEs: "Metrológico ± 20 µm",
    descEn: "Metrological ± 20 µm",
  },
  {
    labelEs: "CAD Clínico",
    labelEn: "Clinical CAD",
    descEs: "Diseño y modelado anatómico 3D",
    descEn: "3D anatomical design & modeling",
  },
];

const COMPANY_METRICS = [
  { value: "4", labelEs: "Divisiones especializadas", labelEn: "Specialized divisions" },
  { value: "± 0.1mm", labelEs: "Tolerancia clínica", labelEn: "Clinical tolerance" },
  { value: "100%", labelEs: "Fabricación local Colombia", labelEn: "Local Colombian manufacturing" },
  { value: "72 h", labelEs: "Tiempo máx. de respuesta", labelEn: "Max response time" },
];

export default function NosotrosPage() {
  const t = useTranslations("About");
  const locale = useLocale();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <div className="flex-1 flex flex-col">

      {/* ══════════════════════════════════════════════════
          HERO — Manifesto de empresa, asimétrico, oscuro
          ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-dark-900">
        {/* Cuadrícula técnica */}
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Barra burdeos superior */}
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 via-primary-800 to-transparent" />
        {/* Texto decorativo */}
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex items-center overflow-hidden">
          <span
            className="text-[clamp(5rem,15vw,14rem)] font-black leading-none tracking-tighter uppercase text-white/[0.02] whitespace-nowrap pl-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            NOVAFORTE
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">

            {/* Manifiesto */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-primary-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400">
                  {locale === "es" ? "Nosotros · Bogotá, Colombia" : "About Us · Bogota, Colombia"}
                </span>
              </div>

              <h1
                className="text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {t("hero.title")}
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                {t("hero.subtitle")}
              </p>

              {/* Métricas empresa */}
              <div className="grid grid-cols-2 gap-4">
                {COMPANY_METRICS.map((m, idx) => {
                  const label = locale === "es" ? m.labelEs : m.labelEn;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col gap-1 p-4 rounded-xl border border-gray-800 bg-white/5"
                    >
                      <span
                        className="text-2xl font-black text-primary-400 leading-none"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {m.value}
                      </span>
                      <span className="text-xs text-gray-300 leading-tight">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stack tecnológico */}
            <div className="hidden lg:flex flex-col gap-4">
              <p className="text-xs font-bold tracking-widest uppercase text-primary-400 mb-2">
                {locale === "es" ? "— Infraestructura técnica" : "— Technical Infrastructure"}
              </p>
              {TECH_STACK.map((tech, idx) => {
                const label = locale === "es" ? tech.labelEs : tech.labelEn;
                const desc = locale === "es" ? tech.descEs : tech.descEn;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-white/[0.03] hover:border-primary-800/60 transition-colors"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold text-sm">{label}</p>
                      <p className="text-gray-300 text-xs">{desc}</p>
                    </div>
                  </div>
                );
              })}
              <div className="flex items-center gap-2 mt-2 p-3 rounded-lg bg-primary-900/10 border border-primary-800/20">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                <span className="text-xs text-gray-300 font-mono">
                  {locale === "es" ? "Operando · Bogotá, Colombia" : "Operating · Bogota, Colombia"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MISIÓN Y VISIÓN — Dos bloques contrastantes
          ══════════════════════════════════════════════════ */}
      <section className="bg-[#f7f5f4] dark:bg-dark-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-primary-600 text-xs font-bold tracking-widest uppercase mb-2">─── Propósito</p>
              <h2 className="text-3xl lg:text-4xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("purpose.title")}
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">{t("purpose.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Misión — fondo burdeos */}
            <div
              className="relative rounded-2xl p-8 text-white overflow-hidden"
              style={{ background: "linear-gradient(135deg, #7e192a 0%, #2a0308 100%)" }}
            >
              <div aria-hidden="true" className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-px w-6 bg-accent-400" />
                  <span className="text-xs font-bold tracking-widest uppercase text-accent-400">Misión</span>
                </div>
                <h3 className="text-xl font-black leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                  {t("purpose.pillar1.title")}
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  {t("purpose.pillar1.desc")}
                </p>
              </div>
            </div>

            {/* Visión — fondo claro con borde */}
            <div className="relative rounded-2xl p-8 bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 h-24 w-24 rounded-bl-full opacity-5"
                style={{ backgroundColor: "#7e192a" }}
              />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-px w-6 bg-primary-500" />
                  <span className="text-xs font-bold tracking-widest uppercase text-primary-600 dark:text-primary-400">Visión</span>
                </div>
                <h3 className="text-xl font-black text-dark-900 dark:text-white leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                  {t("purpose.pillar2.title")}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {t("purpose.pillar2.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          EQUIPO — Horizontal con carrusel deslizable
          ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div className="flex-1">
              <p className="text-primary-600 text-xs font-bold tracking-widest uppercase mb-2">─── Equipo</p>
              <h2 className="text-3xl lg:text-4xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("team.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 max-w-xl">{t("team.subtitle")}</p>
            </div>
            
            {/* Controles del Carrusel (Flechas izquierda/derecha) */}
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <button
                onClick={scrollLeft}
                className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-900 text-dark-800 dark:text-gray-200 hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 shadow-sm hover:shadow transition-all duration-300"
                aria-label={locale === "es" ? "Desplazar a la izquierda" : "Scroll left"}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-900 text-dark-800 dark:text-gray-200 hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 shadow-sm hover:shadow transition-all duration-300"
                aria-label={locale === "es" ? "Desplazar a la derecha" : "Scroll right"}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carrusel Deslizable */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TEAM_MEMBERS.map((member, index) => {
              const role = locale === "es" ? member.roleEs : member.roleEn;
              const desc = locale === "es" ? member.descEs : member.descEn;

              return (
                <div
                  key={index}
                  className="snap-start flex-shrink-0 w-[290px] sm:w-[320px] group flex flex-col"
                >
                  {/* Contenedor de foto o iniciales */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-dark-950 to-dark-800 border border-gray-200 dark:border-gray-800 mb-5 group shadow-sm hover:shadow-lg transition-all duration-300">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-br from-[#7e192a]/20 via-[#120204] to-dark-950">
                        {/* Cuadrícula técnica de fondo */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]" />
                        
                        {/* Círculo con Iniciales */}
                        <div className="relative h-24 w-24 rounded-full border border-primary-500/30 flex items-center justify-center bg-dark-900/60 shadow-inner">
                          <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                            {member.initials}
                          </span>
                        </div>

                        {/* Dashed upload info overlay on hover */}
                        <div className="absolute inset-0 bg-dark-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 border-2 border-dashed border-primary-600/40 rounded-2xl">
                          <svg className="h-8 w-8 text-primary-500 mb-2 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                          </svg>
                          <span className="text-xs font-bold text-white mb-1">
                            {locale === "es" ? "Subir foto de perfil" : "Upload photo"}
                          </span>
                          <span className="text-[10px] text-gray-500 leading-normal max-w-[220px]">
                            {locale === "es" 
                              ? "Guarda la foto en public/images/equipo/ y actualiza el campo 'photo' en site-config.ts" 
                              : "Save picture in public/images/equipo/ and update 'photo' in site-config.ts"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Detalles del Integrante */}
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {member.name}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mt-1 mb-2">
                      {role}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INFRAESTRUCTURA — Dark con CTA WhatsApp
          ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-dark-900 border-t border-gray-800 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #7e192a 0%, transparent 50%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-primary-400 text-xs font-bold tracking-widest uppercase mb-3">─── Infraestructura</p>
                <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                  {t("infra.title")}
                </h2>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                {t("infra.desc")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-full shadow-lg transition-all duration-300 text-sm"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  {t("infra.cta")}
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-700 hover:border-primary-600 text-gray-300 hover:text-primary-400 font-semibold rounded-full transition-all duration-300 text-sm"
                >
                  {t("infra.ctaForm")}
                </Link>
              </div>
            </div>

            {/* Mapa de ubicación estático decorativo */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-dark-800">
                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-300">
                      {locale === "es" ? "Sede Principal" : "Headquarters"}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">Bogotá · COL</span>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <p className="text-white font-bold text-sm">{COMPANY_INFO.address}, {COMPANY_INFO.city}</p>
                  <p className="text-gray-400 text-xs">{COMPANY_INFO.email}</p>
                  <div className="mt-2 flex flex-col gap-2">
                    {[
                      { label: locale === "es" ? "Lunes – Viernes" : "Monday – Friday", val: "8:00 am – 6:00 pm" },
                      { label: locale === "es" ? "Sábado" : "Saturday", val: "9:00 am – 1:00 pm" },
                    ].map((h) => (
                      <div key={h.label} className="flex justify-between text-xs">
                        <span className="text-gray-400">{h.label}</span>
                        <span className="text-gray-300">{h.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

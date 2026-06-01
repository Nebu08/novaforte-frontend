import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

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
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

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

            {/* Tarjeta de niveles mini-preview */}
            <div className="hidden lg:flex flex-col gap-2">
              {LEVEL_COLORS.map((level, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-dark-800 hover:shadow-sm transition-shadow"
                >
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                    style={{ backgroundColor: level.bg }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: level.bg }}>
                      Nivel {i + 1} · {t(`extra.levelLabel${i + 1}`)}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">
                      {t(`levels.card${i + 1}.title`).replace(`Nivel ${i + 1}: `, "")}
                    </p>
                  </div>
                </div>
              ))}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => {
              const level = LEVEL_COLORS[num - 1];
              const heights = ["h-32", "h-40", "h-52", "h-64"];
              return (
                <div
                  key={num}
                  className={`group relative flex flex-col justify-end rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${heights[num - 1]}`}
                  style={{ background: `linear-gradient(160deg, ${level.bg}dd 0%, ${level.bg} 100%)` }}
                >
                  {/* Patrón puntitos */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "16px 16px" }}
                  />
                  <div className="relative p-5 flex flex-col gap-2">
                    <span className="text-4xl font-black text-white/20 leading-none" style={{ fontFamily: "Outfit, sans-serif" }}>
                      {num}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      {t(`levels.card${num}.title`)}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {t(`levels.card${num}.desc`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detalle Curricular por Niveles */}
          <div className="mt-20 flex flex-col gap-12">
            <div>
              <h3 className="text-2xl font-black text-dark-900 dark:text-white mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("curriculum.title")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm max-w-2xl leading-relaxed">
                {t("curriculum.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((num) => {
                const color = LEVEL_COLORS[num - 1];
                return (
                  <div
                    key={num}
                    className="relative rounded-3xl p-6 sm:p-8 bg-[#f7f5f4] dark:bg-dark-800 border border-gray-200 dark:border-gray-700/60 overflow-hidden flex flex-col gap-6"
                  >
                    {/* Decorativo de fondo: número grande */}
                    <div
                      aria-hidden="true"
                      className="absolute top-2 right-4 text-[6rem] font-black opacity-5 select-none leading-none"
                      style={{ color: color.bg, fontFamily: "Outfit, sans-serif" }}
                    >
                      0{num}
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: color.bg }}>
                        Nivel 0{num}
                      </span>
                      <h4 className="text-xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                        {t(`curriculum.level${num}.title`)}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-1">
                        {t(`levels.card${num}.desc`)}
                      </p>
                    </div>

                    {/* Software Recomendado */}
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                        Software Recomendado
                      </span>
                      <p className="text-sm font-semibold text-dark-800 dark:text-gray-200">
                        {t(`curriculum.level${num}.software`)}
                      </p>
                    </div>

                    {/* Qué enseñar */}
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                        Ejes Temáticos (Qué enseñar)
                      </span>
                      <ul className="flex flex-col gap-2">
                        {[1, 2, 3, 4].map((pt) => (
                          <li key={pt} className="flex gap-2.5 items-start text-xs text-gray-600 dark:text-gray-300">
                            <span className="h-4 w-4 shrink-0 rounded-full flex items-center justify-center text-[10px] mt-0.5" style={{ backgroundColor: `${color.bg}15`, color: color.bg }}>
                              ✓
                            </span>
                            <span>{t(`curriculum.level${num}.learn${pt}`)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Proyecto sugerido */}
                    <div className="mt-auto p-4 rounded-xl border flex flex-col gap-1 bg-white dark:bg-dark-900/60" style={{ borderColor: `${color.bg}20` }}>
                      <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5" style={{ color: color.bg }}>
                        <span>💡</span> Proyecto Sugerido
                      </span>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                        {t(`curriculum.level${num}.project`)}
                      </p>
                    </div>

                  </div>
                );
              })}
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
                  {[1, 2, 3, 4].map((rowIdx) => (
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

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function VetPage() {
  const t = useTranslations("Vet");

  return (
    <div className="flex-1 flex flex-col">

      {/* ══════════════════════════════════════
          HERO — Emocional, cálido
          ══════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#f7f5f4] dark:bg-dark-900">
        {/* Texto decorativo */}
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex items-center justify-end overflow-hidden">
          <span className="text-[clamp(5rem,15vw,14rem)] font-black leading-none tracking-tighter uppercase text-[#962d4e]/[0.05] dark:text-[#962d4e]/[0.08] whitespace-nowrap pr-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            VET
          </span>
        </div>

        {/* Acento lateral color vet */}
        <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#962d4e] to-transparent opacity-50" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-[#962d4e]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#962d4e]">
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
                <Link href="/vet/cotizar"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-full shadow-lg transition-all duration-300 text-sm hover:opacity-90"
                  style={{ backgroundColor: "#962d4e" }}>
                  {t("hero.ctaQuote")}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="/portafolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 dark:border-gray-700 hover:border-[#962d4e] text-dark-800 dark:text-gray-200 hover:text-[#962d4e] font-semibold rounded-full transition-all duration-300 text-sm">
                  {t("hero.ctaPortfolio")}
                </Link>
              </div>

              {/* Chips de materiales */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  t("extra.tag1"),
                  t("extra.tag2"),
                  t("extra.tag3"),
                  t("extra.tag4")
                ].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full border text-[#962d4e] border-[#962d4e]/30 bg-[#962d4e]/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Tarjeta emocional */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-[#962d4e]/20 bg-white dark:bg-dark-800 shadow-xl">
                <div className="p-1 bg-gradient-to-r from-[#962d4e] to-[#591428]">
                  <p className="text-center text-xs font-bold tracking-widest uppercase text-white/80 py-1">
                    {t("extra.sidebarTitle")}
                  </p>
                </div>
                <div className="p-6 flex flex-col gap-5">
                  {[
                    { emoji: "🐕", animal: t("extra.canineTitle"), spec: t("extra.canineDesc") },
                    { emoji: "🐈", animal: t("extra.felineTitle"), spec: t("extra.felineDesc") },
                    { emoji: "🐇", animal: t("extra.exoticTitle"), spec: t("extra.exoticDesc") },
                  ].map((item) => (
                    <div key={item.animal} className="flex items-start gap-3 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <p className="font-bold text-sm text-dark-900 dark:text-white">{item.animal}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5">{item.spec}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CAPACIDADES — Diseño alternado
          ══════════════════════════════════════ */}
      <section className="py-20 bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#962d4e" }}>─── Capacidades</p>
              <h2 className="text-3xl lg:text-4xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("capabilities.title")}
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">{t("capabilities.subtitle")}</p>
          </div>

          <div className="flex flex-col gap-0 divide-y divide-gray-100 dark:divide-gray-800">
            {[1, 2, 3].map((num) => (
              <div key={num} className="group grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 py-8 hover:pl-2 transition-all duration-300">
                <span className="text-5xl font-black leading-none select-none" style={{ color: `rgba(150,45,78,${0.15 + num * 0.05})`, fontFamily: "Outfit, sans-serif" }}>
                  0{num}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-dark-900 dark:text-white group-hover:text-[#962d4e] transition-colors">
                    {t(`capabilities.pillar${num}.title`)}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                    {t(`capabilities.pillar${num}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA Final
          ══════════════════════════════════════ */}
      <section className="py-16 border-t border-gray-100 dark:border-gray-800 bg-[#f7f5f4] dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-black text-dark-900 dark:text-white mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
              {t("extra.ctaTitle")}
            </h2>
            <p className="text-gray-500 text-sm">{t("extra.ctaSubtitle")}</p>
          </div>
          <Link href="/vet/cotizar"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-full shadow-lg transition-all duration-300 text-sm hover:opacity-90"
            style={{ backgroundColor: "#962d4e" }}>
            {t("extra.ctaButton")}
          </Link>
        </div>
      </section>

    </div>
  );
}

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import ModelViewer3D from "@/components/ModelViewer3D";

const WORKFLOW_ICONS = ["📦", "🔬", "⚙️", "📋"];

export default function BiomedicaPage() {
  const t = useTranslations("Biomed");

  return (
    <div className="flex-1 flex flex-col">

      {/* ══════════════════════════════════════
          HERO — Fondo oscuro industrial
          ══════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-dark-900">
        {/* Cuadrícula técnica */}
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Acento burdeos diagonal */}
        <div aria-hidden="true" className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-primary-800 to-transparent" />
        {/* Texto decorativo */}
        <div aria-hidden="true" className="pointer-events-none select-none absolute inset-0 flex items-center overflow-hidden">
          <span className="text-[clamp(5rem,15vw,14rem)] font-black leading-none tracking-tighter uppercase text-white/[0.025] whitespace-nowrap pl-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            BIOMÉDICA
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-primary-500" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary-400">
                  Componentes e Insumos
                </span>
              </div>

              <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.05] tracking-tight text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("hero.title")}
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/biomedica/cotizar"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-primary-600/30 transition-all duration-300 text-sm">
                  {t("hero.ctaQuote")}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="/portafolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-700 hover:border-primary-600 text-gray-300 hover:text-primary-400 font-semibold rounded-full transition-all duration-300 text-sm">
                  {t("hero.ctaPortfolio")}
                </Link>
              </div>
            </div>

            {/* Columna Visor 3D Interactivo */}
            <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-800 shadow-lg bg-[#0e0d0c] mt-8 lg:mt-0">
              <ModelViewer3D
                src="/models/Engranajes.glb"
                label="Engranaje Helicoidal (Interactive 3D)"
                height={420}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CAPACIDADES — Tablero de 3 celdas
          ══════════════════════════════════════ */}
      <section className="py-20 bg-[#f7f5f4] dark:bg-dark-900 border-t border-gray-100 dark:border-gray-800">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col gap-4 p-8 bg-white dark:bg-dark-900 hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors">
                <span className="text-4xl font-black text-primary-100 dark:text-primary-900/60 select-none" style={{ fontFamily: "Outfit, sans-serif" }}>0{num}</span>
                <div>
                  <h3 className="text-base font-bold text-dark-900 dark:text-white mb-2">{t(`capabilities.pillar${num}.title`)}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{t(`capabilities.pillar${num}.desc`)}</p>
                </div>
                <div className="h-0.5 w-8 bg-primary-500 rounded-full mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESO — 4 pasos en línea oscura
          ══════════════════════════════════════ */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 10% 80%, #7e192a 0%, transparent 40%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-primary-400 text-xs font-bold tracking-widest uppercase mb-2">─── Proceso</p>
              <h2 className="text-3xl lg:text-4xl font-black text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                {t("workflow.title")}
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">{t("workflow.subtitle")}</p>
          </div>

          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-800 to-transparent hidden lg:block" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="flex flex-col gap-4">
                  <div className="relative z-10 h-16 w-16 rounded-full border border-primary-800 bg-dark-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-black text-primary-500" style={{ fontFamily: "Outfit, sans-serif" }}>0{num}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">{t(`workflow.step${num}.title`)}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{t(`workflow.step${num}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/biomedica/cotizar"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-full shadow-lg transition-all duration-300 text-sm">
              Cotizar Repuesto Descontinuado
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

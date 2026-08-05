"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/navigation";
import { MODELS_3D, type CaseCategory } from "@/lib/site-config";
import ModelViewer3D from "@/components/ModelViewer3D";

interface CategoryModelViewerProps {
  category: CaseCategory;
  title?: string;
  subtitle?: string;
  height?: number;
}

export default function CategoryModelViewer({
  category,
  title,
  subtitle,
  height = 420,
}: CategoryModelViewerProps) {
  const locale = useLocale();

  // Filter models for the current category
  const categoryModels = MODELS_3D.filter((m) => m.category === category);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const activeModel = categoryModels[selectedIndex] ?? categoryModels[0];

  return (
    <div className="w-full flex flex-col gap-4">
      {title && (
        <div className="flex flex-col gap-1 mb-2">
          <p className="text-primary-500 text-xs font-bold tracking-widest uppercase">
            ─── Visor 3D Interactivo
          </p>
          <h3 className="text-2xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6 items-stretch">
        {/* Main 3D Canvas */}
        <div className="relative group overflow-hidden rounded-2xl border border-gray-300 dark:border-gray-800 bg-[#0e0d0c] shadow-lg">
          <ModelViewer3D
            src={activeModel?.file}
            label={
              activeModel
                ? locale === "es"
                  ? activeModel.nameEs
                  : activeModel.nameEn
                : locale === "es"
                ? "Sin modelos cargados"
                : "No models loaded"
            }
            height={height}
          />
        </div>

        {/* Model Selector list OR Upload CTA */}
        <div className="flex flex-col gap-3 justify-center">
          {categoryModels.length > 0 ? (
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 px-1">
                {locale === "es" ? "Piezas 3D Disponibles:" : "Available 3D Models:"}
              </span>
              {categoryModels.map((model, idx) => {
                const isSelected = selectedIndex === idx;
                const modelName = locale === "es" ? model.nameEs : model.nameEn;
                return (
                  <button
                    key={model.id}
                    onClick={() => setSelectedIndex(idx)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 ${
                      isSelected
                        ? "border-primary-500 bg-primary-950/40 dark:bg-primary-950/60 shadow-md"
                        : "border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-800/60 hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <div
                      className={`h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected ? "bg-primary-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                      }`}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-bold truncate ${
                          isSelected ? "text-primary-600 dark:text-primary-400" : "text-dark-900 dark:text-gray-200"
                        }`}
                      >
                        {modelName}
                      </p>
                      <p className="text-[10px] text-gray-500 font-mono">
                        {model.file.toLowerCase().endsWith(".stl")
                          ? "Modelo 3D STL"
                          : locale === "es"
                          ? "Modelo 3D GLB"
                          : "3D GLB Model"}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="relative overflow-hidden flex flex-col gap-4 p-5 rounded-2xl border border-primary-500/20 bg-dark-900 text-left shadow-lg">
              <div className="h-9 w-9 rounded-xl bg-primary-950 border border-primary-500/30 flex items-center justify-center text-primary-400">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                  {locale === "es" ? "¿Tienes un modelo 3D?" : "Have a 3D model?"}
                </h4>
                <p className="text-[11px] text-gray-400 leading-relaxed mt-1.5">
                  {locale === "es"
                    ? `Sube tus archivos .glb a public/models/${category}/ para visualizarlos aquí.`
                    : `Upload your .glb files to public/models/${category}/ to view them here.`}
                </p>
              </div>
              <Link
                href="/contacto"
                className="w-full py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 text-white text-[11px] font-bold rounded-xl shadow-md transition-all text-center uppercase tracking-wider"
              >
                {locale === "es" ? "Solicitar Escaneo 3D" : "Request 3D Scan"}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

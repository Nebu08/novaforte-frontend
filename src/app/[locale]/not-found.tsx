"use client";

import { useLocale } from "next-intl";
import { Link } from "@/navigation";

export default function NotFound() {
  const locale = useLocale();

  const isEs = locale === "es";

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 bg-dark-900 text-white relative overflow-hidden min-h-[75vh]">
      
      {/* Cuadrícula técnica de fondo de ingeniería */}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Brillo de fondo Burdeos */}
      <div aria-hidden="true" className="absolute w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6 max-w-lg text-center z-10">
        
        {/* Elemento visual 3D Orbitando */}
        <div className="relative h-28 w-28 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-3xl shadow-2xl">
          <span className="absolute inset-0 rounded-3xl border border-primary-500/30 animate-pulse" />
          <svg className="h-16 w-16 text-primary-500 animate-spin" style={{ animationDuration: "12s" }} fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="absolute -top-1.5 -right-1.5 px-2 py-0.5 rounded bg-red-600 text-[9px] font-mono font-bold tracking-widest text-white uppercase shadow">
            ERR
          </span>
        </div>

        {/* Textos del Error 404 */}
        <div className="flex flex-col gap-2">
          <h1 
            className="text-6xl sm:text-7xl font-black text-white tracking-tighter leading-none"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            404
          </h1>
          <h2 
            className="text-lg sm:text-xl font-bold text-primary-400 font-mono tracking-wider uppercase mt-1"
          >
            {isEs ? "Coordenadas Fuera de Rango" : "Coordinates Out of Range"}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm mt-2 mx-auto">
            {isEs 
              ? "Parece que el archivo anatómico, la pieza de repuesto o el recurso educativo que estás buscando no existe o se ha movido en nuestro taller."
              : "It seems the anatomical file, spare part, or educational resource you are looking for does not exist or has been moved in our workshop."}
          </p>
        </div>

        {/* Separador Técnico */}
        <div className="w-full flex items-center justify-center gap-2 my-2 opacity-30">
          <div className="h-[1.5px] flex-1 bg-gray-700" />
          <span className="text-[9px] font-mono text-gray-500">SYSTEM RESPONSE: 404_NOT_FOUND</span>
          <div className="h-[1.5px] flex-1 bg-gray-700" />
        </div>

        {/* Botón de Retorno */}
        <Link
          href="/"
          className="px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-500/15 hover:shadow-primary-500/25 transition-all duration-300 text-sm tracking-wide uppercase"
        >
          {isEs ? "Volver al Taller Principal" : "Return to Main Workshop"}
        </Link>

      </div>
    </div>
  );
}

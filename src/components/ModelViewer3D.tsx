"use client";

import { Suspense, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with Three.js
const ModelCanvas = dynamic(() => import("./ModelCanvas"), {
  ssr: false,
  loading: () => <ModelPlaceholder label="Cargando modelo 3D..." />,
});

function ModelPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-dark-900/80">
      <svg className="h-12 w-12 text-primary-700 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
      <p className="text-gray-600 dark:text-gray-500 text-xs font-mono">{label}</p>
    </div>
  );
}

interface ModelViewerProps {
  /** Path to .glb model file, e.g. "/models/protesis-mano.glb" */
  src?: string;
  /** Display name shown in the UI */
  label?: string;
  /** Height of the viewer container */
  height?: number;
  /** Background color */
  bgColor?: string;
}

export default function ModelViewer3D({
  src,
  label = "Modelo 3D",
  height = 420,
  bgColor = "#0e0d0c",
}: ModelViewerProps) {
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden border border-gray-800"
      style={{ height, background: bgColor }}
    >
      {/* Header bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2 bg-black/40 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="text-xs font-mono font-semibold text-gray-300">{label}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500" />
          </span>
          <span className="text-[10px] text-gray-500 font-mono ml-1">INTERACTIVO</span>
        </div>
      </div>

      {/* Viewer or placeholder */}
      {src ? (
        <ModelCanvas src={src} />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          {/* 3D box wireframe placeholder */}
          <svg viewBox="0 0 120 120" className="h-28 w-28 text-primary-800" fill="none" stroke="currentColor" strokeWidth="1">
            {/* Front face */}
            <polygon points="30,80 90,80 90,40 30,40" />
            {/* Top face */}
            <polygon points="30,40 90,40 70,20 10,20" strokeDasharray="4,3" />
            {/* Right face */}
            <polygon points="90,80 90,40 70,20 70,60" />
            {/* Depth lines */}
            <line x1="30" y1="80" x2="10" y2="60" strokeDasharray="4,3" />
            <line x1="10" y1="60" x2="10" y2="20" strokeDasharray="4,3" />
            <line x1="10" y1="60" x2="70" y2="60" strokeDasharray="4,3" />
          </svg>
          <div className="text-center">
            <p className="text-gray-500 text-sm font-semibold mb-1">Visor 3D Listo</p>
            <p className="text-gray-700 text-xs font-mono max-w-[200px] leading-relaxed">
              Sube archivos .glb a{" "}
              <code className="text-primary-600 bg-primary-900/20 px-1 rounded">public/models/</code>
              {" "}y configura en{" "}
              <code className="text-primary-600 bg-primary-900/20 px-1 rounded">site-config.ts</code>
            </p>
          </div>
        </div>
      )}

      {/* Controls hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-full px-4 py-1.5">
        <span className="text-[10px] text-gray-500 font-mono">🖱 Arrastrar · Scroll para zoom</span>
      </div>
    </div>
  );
}

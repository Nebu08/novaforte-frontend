"use client";

import React, { Component, ReactNode } from "react";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with Three.js
const ModelCanvas = dynamic(() => import("./ModelCanvas"), {
  ssr: false,
  loading: () => <ModelPlaceholder label="Cargando modelo 3D..." />,
});

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ModelErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("ModelViewer3D Error caught:", error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

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
  /** Path to .glb/.stl model file */
  src?: string;
  /** Display name shown in the UI */
  label?: string;
  /** Height of the viewer container */
  height?: number;
  /** Background color */
  bgColor?: string;
  /** Optional initial rotation [X, Y, Z] in radians */
  rotation?: [number, number, number];
}

export default function ModelViewer3D({
  src,
  label = "Modelo 3D",
  height = 420,
  bgColor = "#0e0d0c",
  rotation = [0, 0, 0],
}: ModelViewerProps) {
  const renderFallback = (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      {/* 3D box wireframe placeholder */}
      <svg viewBox="0 0 120 120" className="h-24 w-24 text-primary-800" fill="none" stroke="currentColor" strokeWidth="1">
        <polygon points="30,80 90,80 90,40 30,40" />
        <polygon points="30,40 90,40 70,20 10,20" strokeDasharray="4,3" />
        <polygon points="90,80 90,40 70,20 70,60" />
        <line x1="30" y1="80" x2="10" y2="60" strokeDasharray="4,3" />
        <line x1="10" y1="60" x2="10" y2="20" strokeDasharray="4,3" />
        <line x1="10" y1="60" x2="70" y2="60" strokeDasharray="4,3" />
      </svg>
      <div className="text-center px-4">
        <p className="text-gray-400 text-sm font-semibold mb-1">Visor 3D Listo</p>
        <p className="text-gray-600 text-xs font-mono max-w-[240px] leading-relaxed">
          Sube tus archivos .stl/.glb a <code className="text-primary-400 bg-primary-950/40 px-1 rounded">public/models/</code>
        </p>
      </div>
    </div>
  );

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
      style={{ height, background: bgColor }}
    >
      {/* Header bar — Sin superposiciones, con truncado dinámico */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-2.5 bg-black/60 backdrop-blur-md border-b border-white/5 gap-2">
        <div className="flex items-center gap-2 min-w-0 max-w-[70%]">
          <svg className="h-4 w-4 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="text-xs font-mono font-semibold text-gray-200 truncate" title={label}>
            {label}
          </span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
          </span>
          <span className="text-[10px] text-gray-400 font-mono font-bold tracking-wider uppercase">INTERACTIVO</span>
        </div>
      </div>

      {/* Viewer wrapped in ErrorBoundary */}
      {src ? (
        <ModelErrorBoundary key={src} fallback={renderFallback}>
          <ModelCanvas src={src} initialRotation={rotation} />
        </ModelErrorBoundary>
      ) : (
        renderFallback
      )}
    </div>
  );
}

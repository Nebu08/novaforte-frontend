"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to console or an external service
    console.error("ErrorBoundary caught an exception:", error);
  }, [error]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-6 text-center bg-[#f7f5f4] dark:bg-dark-900 transition-colors duration-300">
      <div className="max-w-md w-full p-8 bg-white dark:bg-dark-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl flex flex-col gap-6 items-center">
        
        {/* Warning Icon with Burgundy accent */}
        <div className="h-16 w-16 rounded-2xl bg-primary-50 dark:bg-primary-900/20 border border-primary-500/20 flex items-center justify-center text-primary-600 dark:text-primary-400">
          <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
            ¡Ups! Algo salió mal
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Ha ocurrido un problema inesperado en esta página. Por favor, reintente cargar la sección.
          </p>
          <div className="h-px bg-gray-100 dark:bg-gray-700/60 my-2" />
          <p className="text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 italic">
            An unexpected error occurred. Please try reloading the page.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            onClick={() => reset()}
            className="flex-1 py-3 px-6 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl shadow-md transition-all duration-300 text-sm cursor-pointer"
          >
            Reintentar / Reload
          </button>
          <a
            href="/"
            className="flex-1 py-3 px-6 border border-gray-300 dark:border-gray-700 text-dark-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-800/50 font-semibold rounded-xl transition-all duration-300 text-sm text-center"
          >
            Inicio / Home
          </a>
        </div>
      </div>
    </div>
  );
}

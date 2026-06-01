"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("GlobalError caught an exception:", error);
  }, [error]);

  return (
    <html lang="es" className="h-full">
      <body className="min-h-full bg-[#f7f5f4] dark:bg-dark-900 text-dark-900 dark:text-white antialiased flex flex-col font-sans">
        <div className="flex-1 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <div className="max-w-md w-full p-8 bg-white dark:bg-dark-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl flex flex-col gap-6 items-center">
            
            {/* Warning Icon with Burgundy accent */}
            <div className="h-16 w-16 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-500/20 flex items-center justify-center text-red-600 dark:text-red-400">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                ¡Ha ocurrido un error crítico!
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Ha ocurrido un problema crítico en la aplicación. Por favor, intente recargar el sitio.
              </p>
              <div className="h-px bg-gray-150 dark:bg-gray-700/60 my-2 w-full" />
              <p className="text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 italic">
                A critical error occurred. Please try reloading the page.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={() => reset()}
                className="flex-1 py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-md transition-all duration-300 text-sm cursor-pointer"
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
      </body>
    </html>
  );
}

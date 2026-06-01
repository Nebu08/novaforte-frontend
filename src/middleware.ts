import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["es", "en"],

  // Used when no locale matches
  defaultLocale: "es",
  
  // No prefix for default locale (optional, we keep prefix for cleanliness)
  localePrefix: "always",
  
  // Desactivar detección automática para respetar siempre la URL explícita
  localeDetection: false
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for the ones starting with:
    // - api (API routes)
    // - _next (Next.js internals)
    // - _vercel (Vercel internals)
    // - static files (e.g. favicon.ico, images, documents)
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // However, match all pathnames including the root page
    "/"
  ]
};

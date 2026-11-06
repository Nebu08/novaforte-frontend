import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// Backend de formularios: el mismo origen que usa src/lib/leads.ts. Si cambia la variable de entorno,
// la CSP cambia con ella y los formularios no vuelven a quedar bloqueados.
const API_ORIGIN = new URL(process.env.NEXT_PUBLIC_API_BASE_URL || "https://novaforte-backend-1.onrender.com").origin;
// 'unsafe-eval' solo en desarrollo (recarga en caliente de Next). En producción basta 'wasm-unsafe-eval',
// que el visor 3D necesita para el decodificador de modelos en WebAssembly y no permite eval() de JavaScript.
const DEV_EVAL = process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : "";

// ============================================================
//  Security Headers — aplicados a todas las rutas
//  Puntos: 2 (HTTPS/HSTS), 7 (nada en frontend), 10 (CSP), 8 (debug off)
// ============================================================
const securityHeaders = [
  // Fuerza HTTPS durante 2 años en todos los subdominios
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Bloquea cargar la página en un <iframe> de otro dominio (anti-clickjacking)
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Evita que el navegador intente adivinar el MIME type (anti MIME sniffing)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controla qué información de referencia se envía
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Deshabilita features del navegador que no se usan
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // Content-Security-Policy: bloquea scripts e iframes no autorizados
  // Ajustar dominios según los servicios externos que uses (fonts, analytics, etc.)
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: solo mismo origen + inline necesario para Next.js
      `script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'${DEV_EVAL} https://www.googletagmanager.com https://static.cloudflareinsights.com`,
      // Estilos: mismo origen + inline (Next.js lo requiere)
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fuentes
      "font-src 'self' https://fonts.gstatic.com data:",
      // Imágenes: mismo origen + data URIs + HTTPS externo para imágenes remotas
      "img-src 'self' data: blob: https:",
      // Conexiones de red: mismo origen + backend en Render + Google Analytics 4
      `connect-src 'self' ${API_ORIGIN} https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://cloudflareinsights.com`,
      // Media: mismo origen
      "media-src 'self' blob:",
      // Workers para 3D viewer (three.js usa workers)
      "worker-src 'self' blob:",
      // Frames: solo el mapa de Google Maps de /contacto
      "frame-src https://www.google.com",
      // Objects: ninguno
      "object-src 'none'",
      // Base URI: solo mismo origen
      "base-uri 'self'",
      // Forms: solo enviar al mismo origen
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Aplicar headers de seguridad a todas las rutas
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Deshabilitar información de debug en producción
  productionBrowserSourceMaps: false,

  // Ocultar el header X-Powered-By de Next.js
  poweredByHeader: false,

  // Imágenes permitidas solo de dominios controlados
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "novafortesas.com",
      },
      {
        protocol: "https",
        hostname: "www.novafortesas.com",
      },
      {
        protocol: "https",
        hostname: new URL(API_ORIGIN).hostname,
      },
    ],
  },
};

export default withNextIntl(nextConfig);

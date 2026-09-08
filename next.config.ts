import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

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
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
      // Estilos: mismo origen + inline (Next.js lo requiere)
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fuentes
      "font-src 'self' https://fonts.gstatic.com data:",
      // Imágenes: mismo origen + data URIs + HTTPS externo para imágenes remotas
      "img-src 'self' data: blob: https:",
      // Conexiones de red: mismo origen + backend en Render
      "connect-src 'self' https://novafortebackend.onrender.com https://www.novafortesas.com",
      // Media: mismo origen
      "media-src 'self' blob:",
      // Workers para 3D viewer (three.js usa workers)
      "worker-src 'self' blob:",
      // Frames: ninguno permitido
      "frame-src 'none'",
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
        hostname: "novafortebackend.onrender.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

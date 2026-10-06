# TECH_STACK.md — Arquitectura Frontend & Restricciones Técnicas

> Documento de contexto técnico para rediseño y maquetación UI de Novaforte SAS (carpeta front/).

## 1. Stack Tecnológico Base
- Framework: Next.js 16.2.6 (App Router con Turbopack) + React 19.2.4 + TypeScript 5.x.
- Internacionalización: next-intl ^4.13.0 bajo src/app/[locale]/ (español /es e inglés /en).
- Sistema de Estilos: Tailwind CSS v4 (NO existe tailwind.config.js; todo vive en directivas @theme dentro de src/app/globals.css).
- Tipografías: Outfit (titulares) e Inter (cuerpo/UI).
- Motor 3D: Three.js (^0.184.0) con @react-three/fiber (^9.6.1), @react-three/drei (^10.7.7) y STLLoader.
- Testing: @playwright/test.

## 2. Restricciones Técnicas Estrictas
- Estilos: Modificar tokens únicamente en src/app/globals.css bajo @theme. No crear tailwind.config.js.
- Textos: Los textos residen en messages/es.json y messages/en.json. No quemar texto en duro en componentes TSX.
- 3D / WebGL: No tocar la lógica de carga, rotación ni shaders en ModelCanvas.tsx ni ModelViewer3D.tsx. Solo estilizar sus marcos y botones HTML contenedores.
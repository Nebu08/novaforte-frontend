---
name: Novaforte S.A.S.
description: Ingeniería biomédica y manufactura aditiva de precisión, fabricada en Bogotá.
colors:
  burdeos-firma: "#7e192a"
  burdeos-prensa: "#6b1220"
  burdeos-forja: "#540e18"
  burdeos-profundo: "#2a0308"
  rosa-junta: "#bc5b66"
  rosa-escoria: "#d07f87"
  velo-burdeos: "#f9eeef"
  bruma-burdeos: "#f1d4d7"
  oro-champagne: "#c5a059"
  oro-pulido: "#d4b878"
  bronce-tornado: "#a88444"
  bronce-oscuro: "#8b6930"
  carbon-banco: "#0e0d0c"
  carbon-panel: "#1c1b1a"
  grafito: "#3a3734"
  grafito-claro: "#524f4b"
  papel-taller: "#f7f5f4"
  arena-guia: "#eeebea"
  linea-cota: "#dedad8"
  linea-control: "#c4bfbc"
  gris-polvo: "#9e9894"
  gris-viruta: "#7a7470"
  tinta-secundaria: "#5e5855"
  tinta-media: "#433f3c"
  tinta-carbon: "#1a1816"
  blanco: "#ffffff"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4rem)"
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "2rem"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 900
    lineHeight: 1.25
  metric:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  body-lead:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.18em"
  label-fine:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "0.65rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
  mono:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  hairline: "2px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  space-3xs: "2px"
  space-2xs: "4px"
  space-xs: "8px"
  space-sm: "12px"
  space-md: "16px"
  space-lg: "24px"
  space-xl: "32px"
  space-2xl: "48px"
  space-3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.burdeos-firma}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "52px"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.burdeos-prensa}"
    textColor: "{colors.blanco}"
  button-secondary:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.carbon-panel}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "52px"
  button-compact:
    backgroundColor: "{colors.burdeos-firma}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "40px"
    typography: "{typography.label}"
  spec-cell:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.burdeos-firma}"
    rounded: "{rounded.hairline}"
    padding: "0 12px"
    height: "32px"
  metric-cell:
    backgroundColor: "{colors.papel-taller}"
    textColor: "{colors.burdeos-firma}"
    typography: "{typography.metric}"
    padding: "16px 12px 16px 16px"
  nav-link:
    textColor: "{colors.tinta-media}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  nav-link-active:
    backgroundColor: "{colors.velo-burdeos}"
    textColor: "{colors.burdeos-firma}"
  process-card:
    backgroundColor: "{colors.carbon-panel}"
    textColor: "{colors.blanco}"
    rounded: "{rounded.xl}"
    padding: "24px"
  viewer-frame:
    backgroundColor: "{colors.arena-guia}"
    rounded: "{rounded.xl}"
---

# Design System: Novaforte S.A.S.

## Overview

**Creative North Star: "El Taller de Manufactura"**

La interfaz es el banco de trabajo, y la pieza fabricada es la protagonista. Cada pantalla se organiza como un taller ordenado: superficies de papel cálido donde se apoya el trabajo, líneas de cota de 1px que marcan dónde termina una pieza y empieza otra, y un burdeos profundo que funciona como la firma del ingeniero sobre el plano terminado. El objeto real, ya sea un modelo 3D en el visor, un caso clínico o una especificación de material, siempre pesa más que el contenedor que lo presenta.

La densidad es media y deliberada. Los textos respiran, pero los datos se agrupan con la disciplina de una ficha técnica: valores tabulares, etiquetas en versalitas espaciadas y celdas alineadas a una retícula de 48px que aparece, apenas visible, en el fondo del hero. El oro champagne es metal pulido: aparece poco y siempre en piezas pequeñas (trazos de icono, indicadores de estado) sobre fondos oscuros.

El movimiento es el de una máquina bien calibrada: respuesta inmediata, sin rebote, sin espectáculo. Un botón cede 3% al presionarse, una flecha avanza 2px y un indicador se extiende desde su origen. La precisión de ±0.1 mm que vende la empresa se traduce en la interfaz como exactitud de alineación, no como decoración "tecnológica".

**Key Characteristics:**
- Paleta cerrada: burdeos, oro champagne, gris carbón y gris cálido, sin tonos fríos ni azules.
- Superficies planas en reposo, separadas por líneas de 1px; la sombra solo aparece en lo que flota.
- Titulares en Outfit de peso máximo con tracking negativo; cuerpo en IBM Plex Sans.
- Números tabulares en toda cifra técnica (±0.1mm, 72 h, 100%).
- Movimiento breve (150–240ms) con curva de salida fuerte y sin rebote.
- El visor 3D, sobre un gris claro de mesa de inspección legible a pleno sol, es la pieza central de cada división.

## Colors

Una paleta de taller: papel cálido para trabajar, carbón para las mesas oscuras, burdeos como tinta de firma y bronce como metal de acabado.

### Primary
- **Burdeos Firma** (#7e192a): el color de la marca y de la acción. Es el fondo de los CTA principales, los valores de las métricas, el indicador de foco y la retícula del hero (al 4.5% de opacidad). También marca la división Humana.
- **Burdeos Prensa** (#6b1220): el estado hover y activo de todo CTA burdeos. Nunca se usa como color de reposo.
- **Burdeos Forja** (#540e18): el color sólido y el texto de la división Veterinaria, donde se necesita contraste AA sobre papel y bajo texto blanco.
- **Burdeos Profundo** (#2a0308): el extremo oscuro del degradado de la tarjeta de marca del hero. Solo aparece en degradados con Burdeos Firma.
- **Rosa Junta** (#bc5b66): acentos de la división Veterinaria (trazos, iconos e indicadores) y barras decorativas sobre carbón. No sirve para texto pequeño sobre papel, porque se queda en 4.0:1.
- **Rosa Escoria** (#d07f87): rótulos y números sobre fondo carbón, donde el burdeos no contrasta.
- **Velo Burdeos** (#f9eeef) y **Bruma Burdeos** (#f1d4d7): el fondo del enlace activo de la navegación y el color de la selección de texto, respectivamente.

### Secondary
- **Oro Champagne** (#c5a059): el metal pulido. Se usa en el trazo del icono corazón-circuito, el punto de estado "Disponible" y los acentos sobre fondos burdeos o carbón.
- **Oro Pulido** (#d4b878): rótulos pequeños sobre la tarjeta burdeos del hero.
- **Bronce Tornado** (#a88444): acentos de la división Academia (trazos, iconos y bordes de celdas).
- **Bronce Oscuro** (#8b6930): el texto y el fondo de CTA de la división Academia (5.05:1 con blanco).

### Neutral
- **Carbón Banco** (#0e0d0c): el fondo de la sección de proceso. Es la mesa oscura del taller.
- **Carbón Panel** (#1c1b1a): las tarjetas sobre fondo carbón y el texto de los botones secundarios.
- **Grafito** (#3a3734): bordes de tarjetas sobre carbón y el color de la división Biomédica (acento, texto y CTA).
- **Grafito Claro** (#524f4b): el borde hover de las tarjetas oscuras.
- **Papel Taller** (#f7f5f4): el fondo de página, del hero, del panel de división y del CTA final.
- **Arena Guía** (#eeebea): el hover de los enlaces de navegación y el fondo de los iconos inactivos.
- **Línea Cota** (#dedad8): todos los bordes y divisores de 1px sobre fondo claro.
- **Línea Control** (#c4bfbc): los bordes de los controles (selector de idioma y botón secundario).
- **Gris Polvo** (#9e9894) y **Gris Viruta** (#7a7470): texto secundario sobre carbón (6.8:1 y 4.2:1). Sobre papel solo sirven para decoración, nunca para texto.
- **Tinta Secundaria** (#5e5855): todo texto secundario sobre papel o blanco (6.99:1).
- **Tinta Media** (#433f3c): enlaces de navegación y párrafos de apoyo.
- **Tinta Carbón** (#1a1816): el texto principal del documento.

### Named Rules
**The Closed Palette Rule.** Los únicos colores permitidos son los tokens de `@theme` en `src/app/globals.css`. Se pueden aplicar con opacidad o con `color-mix()` hacia transparente, pero no se puede introducir un tono nuevo, ni siquiera "uno parecido".

**The Two-Token Division Rule.** Cada división tiene un token de acento (trazos e iconos) y uno de tinta (texto y CTA con blanco). Cuando el acento no cumple 4.5:1, la tinta baja a un tono más oscuro de la misma familia; nunca se aclara el texto.

**The Gold Is Metal Rule.** El oro y el bronce cubren menos del 5% de cualquier pantalla y aparecen sobre burdeos o carbón, nunca como fondo de un área grande.

## Typography

**Display Font:** Outfit (con sans-serif)
**Body Font:** IBM Plex Sans (con system-ui, sans-serif)
**Mono Font:** IBM Plex Mono (con ui-monospace, monospace)

**Character:** Outfit en peso 900 da titulares compactos y geométricos, como letras grabadas en una placa de máquina. IBM Plex Sans, nacida como tipografía de ingeniería, aporta una lectura precisa y técnica para descripciones, formularios y etiquetas. IBM Plex Mono, de la misma familia, se reserva para especificaciones, cifras y etiquetas técnicas.

### Hierarchy
- **Display** (900, clamp(2.4rem → 4rem), 1.04): el H1 del hero, uno por página. Tracking -0.025em y `text-wrap: balance`.
- **Headline** (900, 1.5rem en móvil → 2rem en desktop, 1.25): los H2 de sección y el H3 de la división activa. Tracking -0.02em y `balance`.
- **Title** (900, 1.125rem, 1.25): los títulos de las tarjetas de proceso.
- **Metric** (700, 1.5rem, 1, cifras tabulares): los valores de la barra de métricas y de la tarjeta flotante.
- **Body** (400, 1rem, 1.625): párrafos de apoyo, con un máximo de unos 65ch (`max-w-xl`/`2xl`) y `text-wrap: pretty`.
- **Body Lead** (400, 1.125rem, 1.625): el subtítulo del hero y la descripción de la división activa.
- **Label** (700, 0.75rem, 0.18em, mayúsculas): rótulos de sección y de la tarjeta de marca.
- **Label Fine** (600, 0.65rem, 0.08em, mayúsculas): las etiquetas de las métricas y los tags de las pestañas de división.

### Named Rules
**The Tabular Measure Rule.** Toda cifra técnica (tolerancias, horas, porcentajes, índices 01–04) usa cifras tabulares (`tabular-nums`), para que las medidas se alineen como en una tabla de cotas.

**The Mono Is For Readouts Rule.** La monoespaciada solo se usa en lecturas de máquina, como el estado "Disponible · Bogotá CO" o la barra del visor 3D. No se usa como disfraz "técnico" en titulares ni en etiquetas.

## Layout

El contenedor de contenido mide 1280px como máximo (`max-w-7xl`), con márgenes laterales de 24px que suben a 32px desde 1024px. El header usa un contenedor más ancho, de 1440px. El hero divide el espacio de forma asimétrica (55% texto y 45% tarjeta de marca) desde 1024px, y por debajo apila una sola columna sin la tarjeta.

El ritmo vertical usa la escala `space-*`. Las secciones llevan 64px de padding vertical en móvil y 96px en desktop. Los grupos internos se separan con 24px, y los elementos relacionados (título y subtítulo, valor y etiqueta) con 8–12px. El panel de división reserva una columna fija de 15rem para el índice lateral.

En los puntos de quiebre de Tailwind (640, 768, 1024 y 1280px), las pestañas de división pasan de una cuadrícula de 2×2 a una fila con indicador inferior desde 640px. Las tarjetas de proceso pasan de 1 a 2 y luego a 4 columnas. La barra de métricas pasa de 2×2 a 4 en línea.

**The Visible Grid Rule.** La retícula de 48px del hero es la única textura de fondo permitida. Se dibuja con líneas de 1px en Burdeos Firma al 4.5% de opacidad y nunca compite con el contenido.

## Elevation & Depth

El sistema es plano por defecto. Las superficies en reposo se separan con cambios de tono (papel, blanco, carbón) y líneas de 1px, no con sombras. La sombra aparece solo en lo que flota sobre la página (tarjeta de marca, tarjeta flotante, menú móvil, visor 3D) o como respuesta a un estado (hover de un CTA). Todas las sombras derivan de Carbón Banco con baja opacidad; no hay halos de color.

### Shadow Vocabulary
- **Crisp** (`box-shadow: 0 1px 0 color-mix(in oklab, #0e0d0c 4%, transparent), 0 1px 2px color-mix(in oklab, #0e0d0c 10%, transparent)`): el apoyo mínimo de un CTA en reposo y de un elemento seleccionado. Es casi un borde.
- **Lift** (`box-shadow: 0 1px 2px color-mix(in oklab, #0e0d0c 8%, transparent), 0 12px 24px -12px color-mix(in oklab, #0e0d0c 28%, transparent)`): elementos que flotan (tarjeta de marca, tarjeta flotante, menú móvil, visor 3D) y el hover de los CTA.

### Named Rules
**The Flat-By-Default Rule.** Las superficies son planas en reposo. Si una tarjeta no flota sobre otra capa ni responde a un estado, no lleva sombra: lleva un borde de 1px en Línea Cota.

**The One Structural Layer Rule.** Cada contenedor usa una sola capa estructural: borde o sombra, nunca borde, sombra, fondo translúcido y blur a la vez.

## Shapes

El lenguaje de formas combina piezas maquinadas con controles de mano. Los controles que se presionan (CTA, selector de idioma y CTA del header) son píldoras completas (9999px). Los contenedores tienen esquinas apenas suavizadas: 12px en tarjetas de proceso, la tarjeta de marca y el visor 3D; 8px en la cuadrícula móvil de pestañas y en la tarjeta flotante; 6px en enlaces de navegación e iconos del índice. Los datos técnicos (celdas de especificación y la etiqueta de Academia) usan esquinas casi rectas de 2px, como una etiqueta troquelada.

Los divisores son siempre de 1px. Los indicadores de estado (subrayado de pestaña y barra del índice lateral) son de 2px y se extienden desde su origen.

**The Hairline Data Rule.** Lo que es dato lleva 2px de radio. Lo que se presiona es una píldora. Lo que contiene lleva 12px. Ninguna forma intermedia sin razón.

## Components

### Buttons
Precisos y sobrios: responden de inmediato, sin rebote ni brillo.
- **Shape:** píldora completa (9999px).
- **Primary:** fondo Burdeos Firma y texto blanco en IBM Plex Sans 600 a 14px. Mide 52px de alto con 28px de padding horizontal y lleva una flecha de 16px a la derecha. En reposo tiene la sombra Crisp.
- **Hover / Focus:** al hover el fondo pasa a Burdeos Prensa, la sombra sube a Lift y la flecha avanza 2px (200ms). Al presionar, la escala baja a 0.97 (160ms, `cubic-bezier(0.23, 1, 0.32, 1)`). El foco es un contorno de 2px en Burdeos Firma con 2px de separación.
- **Secondary:** fondo blanco al 70%, borde de 1px en Línea Control y texto Carbón Panel, con la misma altura y forma. Al hover el borde y el texto pasan a carbón.
- **Compact (header):** 40px de alto, 20px de padding y texto en mayúsculas a 12px con 0.08em de tracking.
- **Division CTA:** igual que Primary, pero el fondo toma el token de tinta de la división activa.
- **Text link:** 44px de alto. Es Tinta Media en reposo y Burdeos Firma al hover, con subrayado a 4px de distancia.

### Chips (celdas de especificación)
- **Style:** fondo blanco y radio de 2px, con 32px de alto y 12px de padding. Texto en IBM Plex Sans 600 a 12.8px con cifras tabulares, en el color de tinta de la división. El borde es de 1px, con el acento de la división al 35%.
- **State:** son estáticas e informativas, sin hover ni selección.

### Cards / Containers
- **Process card:** esquinas de 12px, fondo Carbón Panel, borde de 1px en Grafito y 24px de padding interno. Al hover el borde pasa a Grafito Claro, la tarjeta sube 2px y la barra inferior de 2px se duplica de ancho por escala desde la izquierda (200ms).
- **Metric bar:** una cuadrícula de celdas Papel Taller separadas por divisores de 1px en Línea Cota (gap de 1px sobre fondo Línea Cota) y cerrada arriba y abajo por líneas de 1px.
- **Brand card:** esquinas de 12px, degradado de 135° de Burdeos Firma a Burdeos Profundo, contorno interno blanco al 10% y sombra Lift. Su emblema es el corazón-circuito del logo oficial (`public/images/novaforte-heart.png`, silueta extraída de `logo.svg`), de 112px de alto y pintado en Oro Champagne mediante `mask-image`. No se reemplaza por un corazón genérico.

### Logo
- **Header:** usa `public/images/logo-header.svg`, el mismo `logo.svg` con el `viewBox` recortado al contenido (proporción 1379×306). Mide 44px de alto en móvil, 48px desde 640px, 52px desde 1024px y 64px desde 1280px; el ancho es automático.
- **Favicon:** `src/app/icon.svg` es un cuadro Burdeos Firma de esquinas redondeadas con el corazón-circuito del logo en Oro Champagne. Las líneas de la silueta están engrosadas para que se lean a 16–32px.
- **Regla:** no se usa `logo.svg` sin recortar en espacios estrechos, porque su lienzo de 1440×810 deja el logo con un tercio del tamaño disponible.

### Navigation
- **Desktop:** IBM Plex Sans 600 a 12px (14px desde 1280px), píldoras de 6px de radio con padding de 8×12px y texto Tinta Media. El hover usa fondo Arena Guía y texto carbón. El enlace activo usa fondo Velo Burdeos, texto Burdeos Firma y `aria-current="page"`.
- **Header:** sticky, con fondo blanco al 90% y desenfoque de fondo (backdrop blur), y una sola línea inferior de 1px.
- **Móvil:** un botón de menú de 44px, con `aria-expanded`. El panel entra en 200ms (opacidad y −4px) y sus enlaces miden 44px de alto. El CTA completo va al final.

### Division Selector (Signature Component)
Pestañas e índice técnico. En móvil, las cuatro divisiones forman una cuadrícula de 2×2 con divisores de 1px y esquinas exteriores de 8px. Desde 640px son una fila con un subrayado de 2px del acento de la división, que se extiende desde la izquierda en 200ms. En desktop, el panel suma un índice lateral: una línea vertical de 1px donde la división activa se marca con una barra de 2px que crece desde arriba, más un icono de 32px que se rellena con el acento de la división.

### 3D Viewer Frame (Signature Component)
La mesa de inspección. Es un contenedor de esquinas de 12px con borde de 1px en Línea Control y sombra Lift. El fondo es un degradado radial de Arena Guía (centro) a Línea Cota (bordes). Se eligió claro para que el modelo siga legible bajo el sol en celulares, y con viñeta para que las piezas plateadas (casi blancas) se separen del fondo mientras las burdeos y negras contrastan con fuerza. Arriba lleva una barra de lectura blanca al 80% con desenfoque y línea inferior en Línea Cota, con el nombre del modelo en monoespaciada (texto Carbón Panel) y el indicador "Interactivo". La barra de controles flotante es una píldora blanca al 90% con borde de 1px y sombra Lift, y sus botones son círculos Arena Guía que pasan a Burdeos Firma al hover. Cuando el visor mide menos de 28rem, la barra oculta la pista "Arrastra" (consulta de contenedor) para no desbordarse. El selector de piezas usa tarjetas de 8px: la seleccionada lleva borde Burdeos Firma, fondo Velo Burdeos y sombra Crisp; al presionar baja a escala 0.98. La lógica WebGL interna (luces, materiales, cámara) no forma parte del sistema visual.

**The Sunlight Rule.** El visor nunca usa fondo oscuro ni blanco puro: el oscuro se pierde con el reflejo del sol y el blanco absorbe las piezas plateadas.

## Do's and Don'ts

### Do:
- **Do** usar exclusivamente tokens de `@theme`; para variaciones, aplicar opacidad o `color-mix(in oklab, <token> N%, transparent)`.
- **Do** separar superficies con líneas de 1px en Línea Cota (#dedad8) antes de recurrir a una sombra.
- **Do** usar `ease-out-precise` (`cubic-bezier(0.23, 1, 0.32, 1)`) con 150–240ms en toda transición de estado, y animar solo transform, opacity y color.
- **Do** dar a todo control `focus-visible` con un contorno de 2px en Burdeos Firma y al menos 44px de área táctil en móvil.
- **Do** usar Tinta Secundaria (#5e5855) o más oscuro para texto secundario sobre fondo claro.
- **Do** mostrar cada cifra técnica con cifras tabulares.

### Don't:
- **Don't** introducir colores fuera de `@theme`, ni los verdes, azules o grises fríos de Tailwind, ni hexadecimales escritos a mano.
- **Don't** usar emojis como iconos; los iconos son SVG de trazo uniforme.
- **Don't** usar `transition: all`, rebotes, `scale(0)` ni hovers que inflen el elemento (`hover:scale-105`).
- **Don't** apilar borde, sombra, fondo translúcido y blur en el mismo contenedor.
- **Don't** usar Gris Polvo ni Gris Viruta para texto sobre papel o blanco.
- **Don't** usar degradados en botones; el CTA es un plano de color sólido.

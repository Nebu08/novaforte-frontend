# Product

<!-- impeccable:product-schema 1 -->

# PRODUCT.md - Novaforte S.A.S.

## Platform

web

## Identidad y Alcance
Empresa de base tecnológica en Bogotá, Colombia especializada en ingeniería biomédica aplicada, manufactura aditiva avanzada (impresión 3D) y educación STEM/Maker.

## Reglas Críticas Regulatorias (NO MODIFICAR)
- Sector Veterinario: Guías quirúrgicas y prótesis totalmente operativas.
- Sector Humano: Biomodelos anatómicos y simuladores prequirúrgicos activos. Guías e implantes intraoperatorios en proceso de acreditación técnica (respetar disclaimers con total transparencia).

## Directiva de Diseño
- Mantener intacta la estructura del DOM, textos en i18n y rutas.
- Modificar exclusivamente la presentación visual (estética de precisión de ingeniería ±0.1 mm).
- PROHIBIDO agregar colores nuevos. Usar exclusivamente la paleta oficial ya declarada en `@theme` en src/app/globals.css.

## Users
- **Prioritario — médicos y pacientes (división Humana):** cirujanos, ortopedistas y médicos tratantes que necesitan prótesis, órtesis, biomodelos anatómicos o simuladores prequirúrgicos a la medida de un paciente concreto; y los pacientes que reciben esos dispositivos. Su trabajo: resolver un caso clínico con un dispositivo personalizado, trazable y entregado a tiempo.
- **Ingeniería biomédica de clínicas e IPS (división Biomédica / Componentes e Insumos):** responsables de mantenimiento con equipos médicos detenidos por repuestos descontinuados.
- **Veterinarios y propietarios de mascotas (división Veterinaria):** perros y gatos que requieren órtesis, prótesis, sillas de ruedas o guías quirúrgicas.
- **Colegios en Colombia (división Academia):** directivos y docentes que contratan el programa maker por niveles.

## Product Purpose
Convertir escaneos, planos y archivos CAD en dispositivos físicos de alta tolerancia geométrica (±0.1 mm), fabricados localmente en Bogotá, para resolver casos clínicos, veterinarios, de continuidad operativa hospitalaria y de formación STEM. El éxito es una cotización iniciada por la división correcta y un caso respondido por un ingeniero en menos de 72 horas hábiles.

## Positioning
Ingeniería biomédica y manufactura aditiva local, con trato directo de ingeniero a cliente: escaneo, modelado, impresión y soporte posventa presencial en Bogotá, sin intermediarios ni demoras de importación. Una sola empresa cubre cuatro frentes (Humana, Biomédica, Veterinaria y Academia) con el mismo proceso digital trazable.

## Operating Context
- **Proceso de trabajo:** recepción y digitalización (muestras físicas, planos 2D o CAD 3D) → modelado y simulación (escaneo óptico, reconstrucción paramétrica, validación de tolerancias) → manufactura aditiva → post-procesado, control dimensional y entrega.
- **Plazos declarados:** respuesta en menos de 72 horas hábiles; repuestos biomédicos en 72 h; dispositivos de Medicina Humana en 5–10 días.
- **Infraestructura declarada:** impresoras FDM industriales, resina de alta precisión (SLA/DLP) y escáneres ópticos 3D de grado metrológico.
- **Materiales:** PETG, PP, Nylon, fibra de carbono, ABS resistente a desinfección y TPU flexible (veterinaria).
- **Canales de contacto:** formularios de cotización por división (con carga de archivos 3D vía backend en `back/`), WhatsApp con mensaje predefinido por división y correo `contacto@novafortesas.com`.
- **Veterinaria:** cada dispositivo se diseña con acompañamiento del veterinario tratante.
- **Academia:** currículo de 3 niveles para primaria y bachillerato con capacitación docente; software oficial confirmado: Tinkercad + Fusion 360.

## Capabilities and Constraints
- **Sitio bilingüe** (`/es`, `/en`) con next-intl; todo texto visible vive en `messages/es.json` y `messages/en.json`.
- **Visor 3D interactivo** (Three.js / STLLoader) por división con modelos reales en `public/models/<división>/`; la lógica WebGL no se modifica desde trabajo de diseño.
- **Stack y restricciones técnicas:** ver `TECH_STACK.md` (Next.js 16 App Router, Tailwind CSS v4 sin `tailwind.config.js`, tokens solo en `@theme`).
- **Inconsistencia pendiente de contenido:** los textos de niveles de Academia mencionan Onshape (y Blender en Nivel 3), pero el software oficial confirmado es Tinkercad + Fusion 360. Hay que corregir el copy en i18n.
- **Dato pendiente:** el NIT en `src/lib/site-config.ts` es un marcador (`900.000.000-0`) y no debe publicarse como real.

## Brand Commitments
- **Nombre:** Novaforte S.A.S. (en el sitio aparece también como "Novaforte sas" y "NOVAFORTE Biomedical Engineering").
- **Logo oficial:** `public/images/logo.svg` (fuente en `MATERIAL/LOGO.svg`).
- **Paleta:** fija; los colores oficiales son exclusivamente los tokens de `@theme` en `src/app/globals.css` (burdeos, oro champagne, gris carbón y gris cálido).
- **Tipografías:** Outfit para titulares e Inter para cuerpo e interfaz.
- **Voz:** técnica, precisa y transparente; rigor de ingeniería con empatía clínica.
- **Transparencia regulatoria:** los disclaimers de acreditación del sector humano son obligatorios (ver Reglas Críticas Regulatorias).

## Evidence on Hand
- **Casos y portafolio:** 6 imágenes en `public/images/portafolio/` y el PDF `public/docs/portafolio-novaforte.pdf` (fuente: `MATERIAL/PORTAFOLIO novaforte sas.pdf`). También hay casos clínicos descritos en i18n, como la prótesis parcial de mano y el protector facial deportivo.
- **Modelos 3D reales:** Humana 1, Biomédica 6, Veterinaria 3, Academia 3 (`public/models/`).
- **Equipo:** 4 fotos en `public/images/equipo/`.
- **Academia:** 3 imágenes de cursos en `public/images/courses/` y el PDF de cursos en `MATERIAL/`.
- **Testimonios:** existen testimonios reales y autorizados, pero aún no se han entregado. Hasta que lleguen, no se publican testimonios ni se usan textos de relleno que lo parezcan.
- **Ausencias que no deben fabricarse:** logos o nombres de clientes, certificaciones (ISO, INVIMA u otras), cifras de pacientes atendidos, premios y menciones de prensa.

## Product Principles
1. **Transparencia regulatoria antes que persuasión:** ningún mensaje insinúa que guías o implantes intraoperatorios humanos ya están acreditados.
2. **Precisión verificable:** toda afirmación técnica (±0.1 mm, 72 h, 20 µm, materiales) debe estar respaldada por la operación real; nada se redondea hacia arriba.
3. **El caso clínico es el centro:** la experiencia prioriza que un médico o paciente encuentre su división y cotice su caso con el menor esfuerzo.
4. **Cercanía local:** soporte directo desde Bogotá, de ingeniero a cliente, como diferencial frente a la importación.
5. **Evidencia real o nada:** el sitio muestra casos, modelos y testimonios reales, y deja vacío lo que todavía no existe.

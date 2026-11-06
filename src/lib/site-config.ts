/**
 * ============================================================
 * NOVAFORTE SAS — CONFIGURACIÓN GLOBAL DEL SITIO
 * ============================================================
 * Este archivo centraliza TODOS los datos editables del sitio:
 * - Información de la empresa (nombre, dirección, teléfono, etc.)
 * - Redes sociales
 * - Mapa de Google Maps
 * - Casos de éxito / portafolio
 * - Archivos 3D y sus configuraciones
 *
 * CÓMO EDITAR:
 * 1. Modifica los valores en este archivo
 * 2. Guarda el archivo
 * 3. El sitio se actualiza automáticamente
 * ============================================================
 */

// ============================================================
// 1. INFORMACIÓN DE LA EMPRESA
// ============================================================
export const COMPANY_INFO = {
  name: "Novaforte sas",
  tagline: "Fabricación Aditiva de Precisión",
  address: "Carrera 16A # 78-75, Edificio Profesional Tempo",
  city: "Bogotá, Colombia",
  fullAddress: "Carrera 16A # 78-75, Edificio Profesional Tempo, Chapinero, Bogotá, D.C., Colombia",
  phone: "+57 323 869 8295",
  phone2: "+57 321 222 6926",
  whatsapp: "573238698295",          // ← Formato: 57 + número sin espacios ni guiones
  whatsappMessage: "¡Hola! Me interesan los servicios de Novaforte y quisiera saber los pasos para realizar una cotización o agendar una cita.",
  email: "contacto@novafortesas.com",
  website: "https://www.novafortesas.com", // ← Dominio de producción (sitemap, canonical, hreflang, schema)
  nit: "900.000.000-0",             // ← Editar con el NIT real
};

// ============================================================
// 1b. MENSAJES PREDEFINIDOS DE WHATSAPP POR DIVISIÓN
// El botón flotante elige el mensaje según la ruta actual.
// ============================================================
export type WhatsAppContext = "default" | "humans" | "biomedica" | "vet" | "academy";

export const WHATSAPP_MESSAGES: Record<WhatsAppContext, { es: string; en: string }> = {
  default: {
    es: COMPANY_INFO.whatsappMessage,
    en: "Hi! I'm interested in Novaforte's services and would like to know how to request a quote.",
  },
  humans: {
    es: "Hola, necesito cotizar una prótesis u órtesis a medida para un paciente. Tipo de dispositivo: ",
    en: "Hi, I need a quote for a custom prosthesis or orthosis for a patient. Device type: ",
  },
  biomedica: {
    es: "Hola, necesito cotizar un repuesto descontinuado para el equipo médico (marca/modelo): ",
    en: "Hi, I need a quote for a discontinued spare part for this medical device (brand/model): ",
  },
  vet: {
    es: "Hola, necesito cotizar una órtesis, prótesis o silla de ruedas para mi mascota (especie/raza/peso): ",
    en: "Hi, I need a quote for an orthosis, prosthesis or wheelchair for my pet (species/breed/weight): ",
  },
  academy: {
    es: "Hola, quiero recibir la propuesta del programa maker para mi colegio (nombre del colegio): ",
    en: "Hi, I'd like to receive the maker program proposal for my school (school name): ",
  },
};

// ============================================================
// 2. REDES SOCIALES
// ← Dejar vacío ("") para ocultar el ícono en el footer
// ============================================================
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/novaforte.sas",  // ← Editar
  linkedin: "https://www.linkedin.com/company/novaforte", // ← Editar
  youtube: "",    // Dejar vacío si no tienen canal
  facebook: "",    // Dejar vacío si no tienen página
  twitter: "",    // Dejar vacío si no tienen cuenta
};

// ============================================================
// 3. GOOGLE MAPS
// ============================================================
export const MAP_CONFIG = {
  // Para obtener este enlace:
  // 1. Ve a Google Maps (maps.google.com)
  // 2. Busca la dirección de Novaforte
  // 3. Haz clic en "Compartir" > "Insertar un mapa"
  // 4. Copia la URL que aparece en el atributo src="" del iframe
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6268048604313!2d-74.0612374!3d4.6656858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a5f4dffa03b%3A0x479a56cd99aeb80f!2sCra.%2016a%20%23%2078-75%2C%20Chapinero%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1717000000000!5m2!1ses!2sco",
  // Zoom del mapa (1-20, donde 20 es el más cercano)
  zoom: 16,
  // Coordenadas del pin (para el fallback sin iframe)
  lat: 4.6656858,
  lng: -74.0590487,
};

// ============================================================
// 4. CASOS DE ÉXITO / PORTAFOLIO
// ============================================================
// CÓMO AGREGAR UN NUEVO CASO:
// 1. Sube la imagen a la carpeta: public/images/portafolio/
// 2. Copia uno de los objetos abajo y modifica sus campos
// 3. Asigna un id único (incrementa el número)
//
// CATEGORÍAS DISPONIBLES: "humans" | "biomedica" | "vet" | "academy"
// ============================================================
export type CaseCategory = "humans" | "biomedica" | "vet" | "academy";

/** Foto o video de una galería antes/después — ej: { type: "video", src: "/images/portafolio/vet/video/koda.mp4", poster: "...jpg" } */
export interface CaseMedia {
  type: "image" | "video";
  /** Ruta desde /public */
  src: string;
  /** Solo videos: cuadro que se muestra mientras carga */
  poster?: string;
  /** Etiqueta corta sobre la foto — ej: "Antes" / "Before" */
  labelEs: string;
  labelEn: string;
  altText: string;
}

export interface PortfolioCase {
  id: number;
  category: CaseCategory;
  titleEs: string;
  titleEn: string;
  descriptionEs: string;
  descriptionEn: string;
  /** Imagen: ruta relativa desde /public — ej: "/images/portafolio/caso-01.jpg" */
  image: string;
  /** Texto alternativo para accesibilidad */
  altText: string;
  /** Etiqueta técnica destacada */
  tagEs: string;
  tagEn: string;
  /** Año del caso */
  year: number;
  /** Ficha técnica resumida */
  specEs: string;
  specEn: string;
  /** Opcional: galería antes/después (2 o 3 fotos o videos). Si existe, reemplaza a `image` */
  media?: CaseMedia[];
}

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    id: 12,
    category: "vet",
    titleEs: "Lola Piña volvió a correr",
    titleEn: "Lola Piña is running again",
    descriptionEs: "Lola Piña, una teckel, tenía una desviación angular radio-ulnar en la pata delantera izquierda. Planeamos la corrección desde su tomografía y fabricamos las guías quirúrgicas. La cirugía la realizó el Dr. Leonel Cardona y su equipo de SURGYPET.",
    descriptionEn: "Lola Piña, a dachshund, had an angular radioulnar deformity in her left foreleg. We planned the correction from her CT scan and manufactured the surgical guides. The surgery was performed by Dr. Leonel Cardona and his team at SURGYPET.",
    image: "/images/portafolio/vet/lola-pina-antes.jpg",
    altText: "Lola Piña, teckel con guías quirúrgicas impresas en 3D — Novaforte",
    tagEs: "Desviación Angular Radio-Ulnar",
    tagEn: "Angular Radioulnar Deformity",
    year: 2026,
    specEs: "Guías quirúrgicas · Planeación desde el TAC",
    specEn: "Surgical guides · CT-based planning",
    media: [
      {
        type: "image",
        src: "/images/portafolio/vet/lola-pina-antes.jpg",
        labelEs: "Antes",
        labelEn: "Before",
        altText: "Pata delantera izquierda de Lola Piña antes de la cirugía, junto al modelo 3D de su hueso",
      },
      {
        type: "image",
        src: "/images/portafolio/vet/lola-pina-despues.jpg",
        labelEs: "Después de la cirugía",
        labelEn: "After surgery",
        altText: "Pata de Lola Piña corregida al terminar la cirugía",
      },
      {
        type: "video",
        src: "/images/portafolio/vet/video/lola-pina-corriendo.mp4",
        poster: "/images/portafolio/vet/video/lola-pina-corriendo.jpg",
        labelEs: "Ahora",
        labelEn: "Now",
        altText: "Lola Piña corriendo por un pasillo después de su recuperación",
      },
    ],
  },
  {
    id: 13,
    category: "vet",
    titleEs: "Koda volvió a caminar",
    titleEn: "Koda is walking again",
    descriptionEs: "Koda quedó con parálisis en las patas traseras por una lesión en la columna, tras un accidente con otro perro. Le diseñamos y fabricamos una silla de ruedas a la medida de su cuerpo.",
    descriptionEn: "Koda's hind legs were paralyzed after a spinal injury caused by an accident with another dog. We designed and built a wheelchair fitted to her body.",
    image: "/images/portafolio/vet/koda-silla.jpg",
    altText: "Koda con su silla de ruedas impresa en 3D — Novaforte",
    tagEs: "Parálisis del Tren Posterior",
    tagEn: "Hind Limb Paralysis",
    year: 2026,
    specEs: "Silla de ruedas a la medida · Diseño 3D",
    specEn: "Custom-fitted wheelchair · 3D design",
    media: [
      {
        type: "video",
        src: "/images/portafolio/vet/video/koda-sin-silla.mp4",
        poster: "/images/portafolio/vet/video/koda-sin-silla.jpg",
        labelEs: "Antes",
        labelEn: "Before",
        altText: "Koda arrastrando las patas traseras antes de tener su silla",
      },
      {
        type: "video",
        src: "/images/portafolio/vet/video/koda-con-silla.mp4",
        poster: "/images/portafolio/vet/video/koda-con-silla.jpg",
        labelEs: "Ahora",
        labelEn: "Now",
        altText: "Koda caminando por la calle con su silla de ruedas",
      },
      {
        type: "image",
        src: "/images/portafolio/vet/koda-silla.jpg",
        labelEs: "Su silla",
        labelEn: "Her wheelchair",
        altText: "Koda de pie en el pasto con su silla de ruedas",
      },
    ],
  },
  {
    id: 10,
    category: "biomedica",
    titleEs: "Estuche Protector de Videolaringoscopio",
    titleEn: "Videolaryngoscope Protective Case",
    descriptionEs: "Diseño y fabricación de un estuche protector de alta resistencia para videolaringoscopio médico, optimizado para soportar impactos y desinfección en Bogotá.",
    descriptionEn: "Design and manufacturing of a high-resistance protective case for a medical videolaryngoscope, optimized to withstand impacts and disinfection in Bogota.",
    image: "/images/portafolio/CASE_PROTECTOR_VIDEOLARINGO.jpg",
    altText: "Estuche protector de videolaringoscopio impreso en 3D — Novaforte",
    tagEs: "Protector Médico",
    tagEn: "Medical Protector",
    year: 2024,
    specEs: "Material: TPU de Alta Resistencia · Tolerancia: ±0.1mm",
    specEn: "Material: Heavy-Duty TPU · Tolerance: ±0.1mm",
  },
  {
    id: 11,
    category: "biomedica",
    titleEs: "Soporte de Fronto-Luz Quirúrgica",
    titleEn: "Surgical Headlight Mount",
    descriptionEs: "Diseño ergonómico y fabricación de soporte ajustable para fronto-luz médica, mejorando la estabilidad y comodidad del especialista en Bogotá.",
    descriptionEn: "Ergonomic design and manufacturing of an adjustable surgical headlight mount, improving stability and comfort for the specialist in Bogota.",
    image: "/images/portafolio/FRONTO_LUZ.jpg",
    altText: "Soporte de frontoluz impreso en 3D — Novaforte",
    tagEs: "Dispositivo Médico",
    tagEn: "Medical Device",
    year: 2024,
    specEs: "Material: PETG / Nylon · Ergonomía Ajustable",
    specEn: "Material: PETG / Nylon · Adjustable Ergonomics",
  },
];

// ============================================================
// 5. ARCHIVOS 3D PARA VISOR INTERACTIVO
// ============================================================
// CÓMO AGREGAR UN MODELO 3D:
// 1. Coloca el archivo .glb o .gltf en: public/models/
// 2. Agrega una entrada nueva en el array de abajo
//
// FORMATOS SOPORTADOS: .glb (recomendado), .gltf, .obj
// ============================================================
export interface Model3D {
  id: number;
  nameEs: string;
  nameEn: string;
  /** Ruta desde /public — ej: "/models/protesis-mano.glb" */
  file: string;
  /** Miniatura del modelo (jpg/png) */
  thumbnail: string;
  /** Categoría a la que pertenece */
  category: CaseCategory;
  /** Rotación inicial personalizada [X, Y, Z] en radianes — ej. [-Math.PI / 2, 0, 0] */
  rotation?: [number, number, number];
}

export const MODELS_3D: Model3D[] = [
  {
    id: 1,
    nameEs: "Socket de Pierna para Prótesis",
    nameEn: "Prosthesis Leg Socket",
    file: "/models/humans/2Socket Pierna.glb",
    thumbnail: "/images/models/socket-thumb.jpg",
    category: "humans",
  },
  {
    id: 2,
    nameEs: "Socket Transtibial",
    nameEn: "Transtibial Socket",
    file: "/models/humans/Socket_Transtibial.stl",
    thumbnail: "/images/models/socket-transtibial-thumb.jpg",
    category: "humans",
    rotation: [-Math.PI / 2, 0, 0],
  },
  {
    id: 3,
    nameEs: "Estuche Protector Médico",
    nameEn: "Medical Protective Case",
    file: "/models/biomedica/Case Protector.glb",
    thumbnail: "/images/models/case-thumb.jpg",
    category: "biomedica",
  },
  {
    id: 4,
    nameEs: "Soporte Ajustable de Fronto-Luz",
    nameEn: "Adjustable Headlight Mount",
    file: "/models/biomedica/Frontoluz.glb",
    thumbnail: "/images/models/frontoluz-thumb.jpg",
    category: "biomedica",
  },
  {
    id: 5,
    nameEs: "Acople Técnico de Resonador",
    nameEn: "Technical Resonator Coupler",
    file: "/models/biomedica/Resonador.glb",
    thumbnail: "/images/models/resonador-thumb.jpg",
    category: "biomedica",
  },
  {
    id: 6,
    nameEs: "Soportes de Laboratorio",
    nameEn: "Laboratory Mounts",
    file: "/models/biomedica/SoportesLab.glb",
    thumbnail: "/images/models/soportes-thumb.jpg",
    category: "biomedica",
  },
  {
    id: 7,
    nameEs: "Férula Anatómica para Felino",
    nameEn: "Anatomical Feline Splint",
    file: "/models/vet/FerulaGato.stl",
    thumbnail: "/images/models/ferulagato-thumb.jpg",
    category: "vet",
    rotation: [-Math.PI / 2, 0, 0],
  },
  {
    id: 8,
    nameEs: "Férula Canina Especializada",
    nameEn: "Specialized Canine Splint",
    file: "/models/vet/Ferula Perro.glb",
    thumbnail: "/images/models/feruladoerman-thumb.jpg",
    category: "vet",
  },
  {
    id: 9,
    nameEs: "Prótesis Carrito de Movilidad Koda",
    nameEn: "Koda Mobility Cart Prosthesis",
    file: "/models/vet/Koda_Carrito.stl",
    thumbnail: "/images/models/kodacarrito-thumb.jpg",
    category: "vet",
    rotation: [-Math.PI / 2, 0, 0],
  },
  {
    id: 13,
    nameEs: "Guía Quirúrgica Radio-Ulnar — Lola Piña",
    nameEn: "Radioulnar Surgical Guide — Lola Piña",
    file: "/models/vet/GuiaQRP1LP.glb",
    thumbnail: "/images/models/guia-lola-thumb.jpg",
    category: "vet",
  },
  {
    id: 10,
    nameEs: "Collar Hollow Knight (Estudiantes Nivel 1)",
    nameEn: "Hollow Knight Duo Pendant (Level 1 Students)",
    file: "/models/academy/collar hollow knight duo.stl",
    thumbnail: "/images/models/hollowknight-thumb.jpg",
    category: "academy",
  },
  {
    id: 11,
    nameEs: "Figura Stantia-Bombul (Estudiantes Nivel 1)",
    nameEn: "Mighty Stantia-Bombul Figure (Level 1 Students)",
    file: "/models/academy/Mighty Stantia-Bombul.stl",
    thumbnail: "/images/models/stantia-thumb.jpg",
    category: "academy",
    rotation: [-Math.PI / 2, 0, 0],
  },
  {
    id: 12,
    nameEs: "Modelo Amur-Snicket (Estudiantes Nivel 1)",
    nameEn: "Smooth Amur-Snicket Model (Level 1 Students)",
    file: "/models/academy/Smooth Amur-Snicket.stl",
    thumbnail: "/images/models/amur-thumb.jpg",
    category: "academy",
  }
];

export interface PastCourse {
  id: number;
  schoolEs: string;
  schoolEn: string;
  courseEs: string;
  courseEn: string;
  certificateEs: string;
  certificateEn: string;
  image: string;
}

export const PAST_COURSES: PastCourse[] = [
  {
    id: 1,
    schoolEs: "Gimnasio Campus Pampuri",
    schoolEn: "Gimnasio Campus Pampuri",
    courseEs: "Grados 10° y 11° - Iniciación al Pensamiento Espacial y Modelado CAD Intuitivo",
    courseEn: "10 and 11 Grade - Introduction to Spatial Thinking and Intuitive CAD Modeling",
    certificateEs: "Certificado en: Pensamiento Espacial y Lógica de Adición (Nivel 1)",
    certificateEn: "Certified in: Spatial Thinking and Addition Logic (Level 1)",
    image: "/images/courses/curso_basico_tinkercad.png",
  },
  {
    id: 2,
    schoolEs: "Colegio Glenn Doman",
    schoolEn: "Glenn Doman School",
    courseEs: "Grados 10° (con enfoque en educación especial) Iniciación al Pensamiento Espacial y Modelado CAD Intuitivo",
    courseEn: "10 Grade (with focus on special education) - Introduction to Spatial Thinking and Intuitive CAD Modeling",
    certificateEs: "Certificado en: Pensamiento Espacial y Lógica de Adición (Nivel 1)",
    certificateEn: "Certified in:Spatial Thinking and Addition Logic (Level 1)",
    image: "/images/courses/curso_basico_tinkercad.png",
  },
  {
    id: 3,
    schoolEs: "Colegio Calandaima IED",
    schoolEn: "Colegio Calandaima IED",
    courseEs: "Grado 11° - Iniciación al Pensamiento Espacial y Modelado CAD Intuitivo",
    courseEn: "11 Grade - Introduction to Spatial Thinking and Intuitive CAD Modeling",
    certificateEs: "Certificado en: Pensamiento Espacial y Lógica de Adición (Nivel 1)",
    certificateEn: "Certified in:Spatial Thinking and Addition Logic (Level 1)",
    image: "/images/courses/curso_basico_tinkercad.png",
  }
];

// ============================================================
// 6. EQUIPO / NOSOTROS
// ============================================================
export interface TeamMember {
  name: string;
  roleEs: string;
  roleEn: string;
  descEs: string;
  descEn: string;
  initials: string;
  /** Foto del integrante: ruta relativa desde /public — ej: "/images/equipo/cristian.jpg" */
  photo: string;
  linkedIn?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ing. Cristian David González Peñarete",
    roleEs: "FUNDADOR/CEO",
    roleEn: "CEO",
    descEs: "Gerente General.",
    descEn: "General Director.",
    initials: "CG",
    photo: "/images/equipo/cristian.jpeg",
    linkedIn: "",
  },
  {
    name: "Ing. Daniel Mateo Guerrero Restrepo",
    roleEs: "FUNDADOR/COO",
    roleEn: "COO",
    descEs: "Gerente de operaciones.",
    descEn: "Chief Operating Officer",
    initials: "DG",
    photo: "/images/equipo/mateo.jpeg",
    linkedIn: "",
  },
  {
    name: "Julian Esteban Gutierrez Rodriguez",
    roleEs: "Gerente Relacionamiento",
    roleEn: "Relationship Manager",
    descEs: "Liderazgo de equipos.",
    descEn: "Team Leadership.",
    initials: "JG",
    photo: "/images/equipo/julian.jpeg",
    linkedIn: "",
  },
  {
    name: "Ing. Andres Jacob Rodríguez Orjuela",
    roleEs: "Director Academy",
    roleEn: "Head of Design",
    descEs: "Líder de la formación de nuevos talentos en diseño y manufactura 3D.",
    descEn: "Leader of new talent training.",
    initials: "JR",
    photo: "/images/equipo/jacob.jpeg",
    linkedIn: "",
  },
];

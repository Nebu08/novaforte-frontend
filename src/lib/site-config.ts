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
  phone: "+57 310 329 4869",
  phone2: "+57 321 222 6926",
  whatsapp: "573103294869",          // ← Formato: 57 + número sin espacios ni guiones
  email: "novafortesas@gmail.com",
  website: "https://novaforte.com",
  nit: "900.000.000-0",             // ← Editar con el NIT real
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
}

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    id: 1,
    category: "humans",
    titleEs: "Órtesis Craneal Personalizada",
    titleEn: "Custom Cranial Orthosis",
    descriptionEs: "Diseño y fabricación de una órtesis craneal de plástico biocompatible para un paciente pediátrico en Bogotá.",
    descriptionEn: "Design and fabrication of a biocompatible plastic cranial orthosis for a pediatric patient in Bogota.",
    image: "/images/portafolio/caso-01.jpg",   // ← Sube la imagen aquí
    altText: "Órtesis craneal impresa en 3D — Novaforte",
    tagEs: "Órtesis Craneal",
    tagEn: "Cranial Orthosis",
    year: 2024,
    specEs: "Material: PETG Grado Médico · Precisión: ±0.1mm",
    specEn: "Material: Medical-Grade PETG · Precision: ±0.1mm",
  },
  {
    id: 2,
    category: "humans",
    titleEs: "Protector Facial Deportivo",
    titleEn: "Custom Sports Face Guard",
    descriptionEs: "Protector facial de alta resistencia fabricado a la medida de un deportista profesional para protección post-fractura nasal en Bogotá.",
    descriptionEn: "High-resistance facial guard custom-made for a professional athlete for post-nasal fracture protection in Bogota.",
    image: "/images/portafolio/caso-02.jpg",   // ← Sube la imagen aquí
    altText: "Protector facial deportivo — Novaforte",
    tagEs: "Órtesis Protectora",
    tagEn: "Protective Orthosis",
    year: 2024,
    specEs: "Material: Fibra de Carbono · Tolerancia: ±0.1mm",
    specEn: "Material: Carbon Fiber · Tolerance: ±0.1mm",
  },
  {
    id: 3,
    category: "humans",
    titleEs: "Prótesis Funcional de Mano",
    titleEn: "Functional Hand Prosthesis",
    descriptionEs: "Prótesis de mano activa con articulaciones impresas en 3D para un paciente adulto, ajustada a su anatomía exacta en Bogotá.",
    descriptionEn: "Active hand prosthesis with 3D-printed joints for an adult patient, fitted to their exact anatomy in Bogota.",
    image: "/images/portafolio/caso-03.jpg",   // ← Sube la imagen aquí
    altText: "Prótesis de mano 3D — Novaforte",
    tagEs: "Prótesis Funcional",
    tagEn: "Functional Prosthesis",
    year: 2023,
    specEs: "Material: Nylon + PP · Precisión: ±0.1mm",
    specEn: "Material: Nylon + PP · Precision: ±0.1mm",
  },
  {
    id: 4,
    category: "biomedica",
    titleEs: "Repuesto de Ventilador UCI",
    titleEn: "ICU Ventilator Spare Part",
    descriptionEs: "Ingeniería inversa y remanufactura de pieza plástica descontinuada para ventilador mecánico crítico en una UCI de Bogotá.",
    descriptionEn: "Reverse engineering and remanufacturing of a discontinued plastic part for a critical mechanical ventilator in an ICU in Bogota.",
    image: "/images/portafolio/caso-04.jpg",   // ← Sube la imagen aquí
    altText: "Repuesto de ventilador UCI — Novaforte",
    tagEs: "Equipo Descontinuado",
    tagEn: "Discontinued Equipment",
    year: 2024,
    specEs: "Material: ABS Resistente · Desinfección Química · Tolerancia ±0.1mm",
    specEn: "Material: Heavy-duty ABS · Chemical Disinfection · Tolerance ±0.1mm",
  },
  {
    id: 5,
    category: "biomedica",
    titleEs: "Carcasa de Monitor Cardíaco",
    titleEn: "Cardiac Monitor Housing",
    descriptionEs: "Reproducción exacta de carcasa plástica rota de monitor cardíaco portátil en Bogotá, con materiales resistentes a químicos.",
    descriptionEn: "Exact reproduction of a broken plastic housing for a portable cardiac monitor in Bogota, using chemical-resistant materials.",
    image: "/images/portafolio/caso-05.jpg",   // ← Sube la imagen aquí
    altText: "Carcasa monitor cardíaco — Novaforte",
    tagEs: "Monitor Cardíaco",
    tagEn: "Cardiac Monitor",
    year: 2023,
    specEs: "Material: PETG / ABS · Resistencia a Desinfectantes · Tolerancia ±0.1mm",
    specEn: "Material: PETG / ABS · Disinfectant Resistant · Tolerance ±0.1mm",
  },
  {
    id: 6,
    category: "vet",
    titleEs: "Órtesis Pata Delantera — Canino",
    titleEn: "Front Leg Orthosis — Canine",
    descriptionEs: "Órtesis a medida para Border Collie con displasia de codo severa en Bogotá, diseñada con acompañamiento de veterinario especialista.",
    descriptionEn: "Custom orthosis for a Border Collie with severe elbow dysplasia in Bogota, designed under specialist veterinary guidance.",
    image: "/images/portafolio/caso-06.jpg",   // ← Sube la imagen aquí
    altText: "Órtesis canina 3D — Novaforte",
    tagEs: "Displasia de Codo",
    tagEn: "Elbow Dysplasia",
    year: 2024,
    specEs: "Material: TPU Flexible y Cómodo · Confort Ajustable",
    specEn: "Material: Flexible & Comfortable TPU · Adjustable Comfort",
  },
  {
    id: 7,
    category: "vet",
    titleEs: "Prótesis Posterior — Felino",
    titleEn: "Rear Limb Prosthesis — Feline",
    descriptionEs: "Prótesis de extremidad posterior para gato en Bogotá con amputación traumática, fabricada en elastómeros cómodos y flexibles.",
    descriptionEn: "Rear limb prosthesis for a cat in Bogota with traumatic amputation, manufactured in comfortable and flexible elastomers.",
    image: "/images/portafolio/caso-07.jpg",   // ← Sube la imagen aquí
    altText: "Prótesis felina 3D — Novaforte",
    tagEs: "Amputación Traumática",
    tagEn: "Traumatic Amputation",
    year: 2024,
    specEs: "Material: TPU Confortable · Acompañamiento Veterinario",
    specEn: "Material: Comfortable TPU · Veterinary Guidance",
  },
  {
    id: 8,
    category: "academy",
    titleEs: "Programa de Formación — Colegio Montessori",
    titleEn: "Training Program — Montessori School",
    descriptionEs: "Implementación del programa formativo estructurado por niveles (Nivel 1 Tinkercad, Niveles 2-4 Autodesk Fusion 360) en Bogotá.",
    descriptionEn: "Implementation of the structured level-based training program (Level 1 Tinkercad, Levels 2-4 Autodesk Fusion 360) in Bogota.",
    image: "/images/portafolio/caso-08.jpg",   // ← Sube la imagen aquí
    altText: "Programa Academy — Novaforte",
    tagEs: "Formación Maker",
    tagEn: "Maker Training",
    year: 2024,
    specEs: "Cursos por Niveles · Tinkercad & Fusion 360",
    specEn: "Level-Based Courses · Tinkercad & Fusion 360",
  },
  {
    id: 9,
    category: "academy",
    titleEs: "Emprendimiento Escolar — IED Simón Bolívar",
    titleEn: "School Entrepreneurship — IED Simón Bolívar",
    descriptionEs: "Estudiantes en Bogotá diseñaron llaveros y figuras personalizadas en Nivel 4 (Emprendedor), aplicando costeo y ventas escolares.",
    descriptionEn: "Students in Bogota designed custom keychains and figures in Level 4 (Entrepreneur), applying costing and school sales.",
    image: "/images/portafolio/caso-09.jpg",   // ← Sube la imagen aquí
    altText: "Emprendimiento Academy — Novaforte",
    tagEs: "Emprendimiento Maker",
    tagEn: "Maker Entrepreneurship",
    year: 2023,
    specEs: "Modelado 3D → Costos → Ventas",
    specEn: "3D Modeling → Costs → Sales",
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
    nameEs: "Prótesis de Carpo Anatómica",
    nameEn: "Anatomical Carpal Prosthesis",
    file: "/models/humans/Carpo.glb",
    thumbnail: "/images/models/carpo-thumb.jpg",
    category: "humans",
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
  },
  {
    id: 8,
    nameEs: "Férula Canina Especializada",
    nameEn: "Specialized Canine Splint",
    file: "/models/vet/Ferula_Doerman.stl",
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
  },
  {
    id: 8,
    nameEs: "Engranaje Helicoidal Técnico",
    nameEn: "Technical Helical Gear",
    file: "/models/academy/Engranajes.glb",
    thumbnail: "/images/models/engranajes-thumb.jpg",
    category: "academy",
  },
  {
    id: 9,
    nameEs: "Mecanismo Didáctico CAD",
    nameEn: "Didactic CAD Mechanism",
    file: "/models/academy/mecanismo.glb",
    thumbnail: "/images/models/mecanismo-thumb.jpg",
    category: "academy",
  },
  {
    id: 10,
    nameEs: "Componente de Relojería",
    nameEn: "Watchmaking Component",
    file: "/models/academy/Reloj.glb",
    thumbnail: "/images/models/reloj-thumb.jpg",
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

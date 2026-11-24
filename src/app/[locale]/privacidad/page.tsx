import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/site-config";

// Política de tratamiento de datos personales (Ley 1581 de 2012 y Decreto 1074 de 2015).
// La pide Meta para la app de WhatsApp. Debe revisarla la asesoría legal de NOVAFORTE.
const ACTUALIZADA = "24 de noviembre de 2026";
const ACTUALIZADA_EN = "November 24, 2026";

type Seccion = { titulo: string; antes?: string; lista?: string[]; parrafos?: string[] };

const ES: { titulo: string; intro: string; secciones: Seccion[] } = {
  titulo: "Política de privacidad y tratamiento de datos personales",
  intro:
    `${COMPANY_INFO.name.toUpperCase()} (en adelante, NOVAFORTE) respeta la privacidad de sus clientes, pacientes y visitantes. ` +
    "Esta política explica qué datos personales recogemos, para qué los usamos y cómo puedes ejercer tus derechos, " +
    "de acuerdo con la Ley 1581 de 2012, el Decreto 1074 de 2015 y demás normas de protección de datos de Colombia.",
  secciones: [
    {
      titulo: "1. Responsable del tratamiento",
      lista: [
        `Razón social: ${COMPANY_INFO.name.toUpperCase()}`,
        `Dirección: ${COMPANY_INFO.fullAddress}`,
        `Correo: ${COMPANY_INFO.email}`,
        `Teléfono y WhatsApp: ${COMPANY_INFO.phone}`,
      ],
    },
    {
      titulo: "2. Qué datos recogemos",
      lista: [
        "Datos de contacto: nombre, teléfono, WhatsApp, correo electrónico, ciudad y empresa o institución.",
        "Información de tu solicitud: el producto o servicio que necesitas, descripciones, fotos o archivos que nos envíes.",
        "Mensajes que intercambias con nosotros por el chat de la página web y por WhatsApp.",
        "Cuando aplica a prótesis, órtesis o dispositivos médicos: datos de salud del paciente necesarios para diseñar y fabricar el dispositivo. Son datos sensibles y solo los tratamos con tu autorización expresa.",
        "Datos técnicos de navegación (dirección IP, tipo de navegador, páginas visitadas) con fines estadísticos.",
      ],
    },
    {
      titulo: "3. Para qué los usamos",
      lista: [
        "Responder tus consultas y preparar cotizaciones.",
        "Ponerte en contacto con el asesor del área que corresponde a tu solicitud.",
        "Diseñar, fabricar, entregar y hacer seguimiento a los productos y servicios contratados.",
        "Informarte el estado de tus pedidos.",
        "Facturar y cumplir obligaciones legales y contables.",
        "Mejorar nuestros servicios y la atención al cliente.",
      ],
      parrafos: ["No vendemos ni alquilamos tus datos personales a terceros."],
    },
    {
      titulo: "4. Chat de la página web y WhatsApp",
      parrafos: [
        "Nuestro chat y nuestra línea de WhatsApp los atiende en primer lugar Nova, un asistente virtual que usa inteligencia artificial para entender tu solicitud y recoger los datos necesarios. Después, una persona de nuestro equipo continúa la conversación.",
        "Para prestar este servicio usamos proveedores que tratan los datos por cuenta nuestra y bajo nuestras instrucciones: Meta Platforms (WhatsApp Business), Google (modelos de inteligencia artificial Gemini) y Resend (envío de correos). Las conversaciones se guardan en nuestros propios sistemas.",
        "Si prefieres hablar desde el inicio con una persona, escríbelo en el chat y te pasamos con un asesor.",
      ],
    },
    {
      titulo: "5. Tus derechos",
      antes: "Como titular de los datos puedes, en cualquier momento:",
      lista: [
        "Conocer, actualizar y rectificar tus datos.",
        "Pedir prueba de la autorización que nos diste.",
        "Saber qué uso le hemos dado a tus datos.",
        "Revocar la autorización o pedir que eliminemos tus datos, cuando no exista un deber legal o contractual de conservarlos.",
        "Presentar quejas ante la Superintendencia de Industria y Comercio.",
      ],
    },
    {
      titulo: "6. Cómo ejercer tus derechos o pedir que borremos tus datos",
      parrafos: [
        `Escríbenos a ${COMPANY_INFO.email} o por WhatsApp al ${COMPANY_INFO.phone} indicando tu nombre, tu número de contacto y lo que solicitas. ` +
          "Responderemos las consultas en un máximo de 10 días hábiles y los reclamos, incluidas las solicitudes de eliminación, en un máximo de 15 días hábiles, según la ley.",
      ],
    },
    {
      titulo: "7. Seguridad y conservación",
      parrafos: [
        "Aplicamos medidas técnicas y administrativas para proteger tus datos contra acceso no autorizado, pérdida o alteración. El acceso a datos de salud está restringido al personal que los necesita y queda registrado.",
        "Conservamos los datos mientras sean necesarios para las finalidades descritas y para cumplir obligaciones legales.",
      ],
    },
    {
      titulo: "8. Cambios a esta política",
      parrafos: [
        "Podemos actualizar esta política. La versión vigente siempre estará publicada en esta página, con su fecha de actualización.",
      ],
    },
  ],
};

const EN: typeof ES = {
  titulo: "Privacy and personal data policy",
  intro:
    `${COMPANY_INFO.name.toUpperCase()} ("NOVAFORTE") respects the privacy of its customers, patients and visitors. ` +
    "This policy explains which personal data we collect, how we use it and how you can exercise your rights, " +
    "under Colombian Law 1581 of 2012, Decree 1074 of 2015 and other applicable data protection rules.",
  secciones: [
    {
      titulo: "1. Data controller",
      lista: [
        `Company: ${COMPANY_INFO.name.toUpperCase()}`,
        `Address: ${COMPANY_INFO.fullAddress}`,
        `Email: ${COMPANY_INFO.email}`,
        `Phone and WhatsApp: ${COMPANY_INFO.phone}`,
      ],
    },
    {
      titulo: "2. Data we collect",
      lista: [
        "Contact data: name, phone, WhatsApp, email, city and company or institution.",
        "Details of your request: the product or service you need, descriptions, photos or files you send us.",
        "Messages you exchange with us through the website chat and WhatsApp.",
        "For prostheses, orthoses or medical devices: the patient's health data needed to design and manufacture the device. This is sensitive data and we only process it with your express consent.",
        "Technical browsing data (IP address, browser type, pages visited) for statistical purposes.",
      ],
    },
    {
      titulo: "3. How we use it",
      lista: [
        "To answer your questions and prepare quotes.",
        "To put you in touch with the advisor for your request.",
        "To design, manufacture, deliver and follow up on the products and services you order.",
        "To keep you informed about the status of your orders.",
        "To invoice and comply with legal and accounting obligations.",
        "To improve our services and customer care.",
      ],
      parrafos: ["We do not sell or rent your personal data to third parties."],
    },
    {
      titulo: "4. Website chat and WhatsApp",
      parrafos: [
        "Our chat and WhatsApp line are first answered by Nova, a virtual assistant that uses artificial intelligence to understand your request and collect the necessary details. A member of our team then continues the conversation.",
        "To provide this service we use processors acting on our behalf and under our instructions: Meta Platforms (WhatsApp Business), Google (Gemini AI models) and Resend (email delivery). Conversations are stored in our own systems.",
        "If you would rather talk to a person from the start, just say so in the chat and we will connect you with an advisor.",
      ],
    },
    {
      titulo: "5. Your rights",
      antes: "As the data subject you may, at any time:",
      lista: [
        "Access, update and correct your data.",
        "Request proof of the consent you gave us.",
        "Know how we have used your data.",
        "Withdraw your consent or ask us to delete your data, unless we are legally or contractually required to keep it.",
        "File complaints with the Colombian Superintendence of Industry and Commerce (SIC).",
      ],
    },
    {
      titulo: "6. How to exercise your rights or request deletion",
      parrafos: [
        `Write to ${COMPANY_INFO.email} or via WhatsApp at ${COMPANY_INFO.phone} with your name, contact number and request. ` +
          "We answer queries within 10 business days and claims, including deletion requests, within 15 business days, as required by law.",
      ],
    },
    {
      titulo: "7. Security and retention",
      parrafos: [
        "We apply technical and administrative measures to protect your data against unauthorized access, loss or alteration. Access to health data is restricted to the staff who need it and is logged.",
        "We keep data for as long as needed for the purposes above and to meet legal obligations.",
      ],
    },
    {
      titulo: "8. Changes to this policy",
      parrafos: ["We may update this policy. The current version will always be published on this page with its update date."],
    },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = locale === "en" ? EN : ES;
  return {
    title: `${c.titulo} | Novaforte`,
    description: c.intro.slice(0, 155),
    alternates: {
      canonical: `/${locale}/privacidad`,
      languages: { es: "/es/privacidad", en: "/en/privacidad" },
    },
  };
}

export default async function PrivacidadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const en = locale === "en";
  const c = en ? EN : ES;

  return (
    <main className="flex-1 bg-[#f7f5f4] dark:bg-dark-900 px-6 py-16 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
          {en ? `Last updated: ${ACTUALIZADA_EN}` : `Actualizada: ${ACTUALIZADA}`}
        </p>
        <h1
          className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-dark-900 dark:text-white"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          {c.titulo}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">{c.intro}</p>

        {c.secciones.map((s) => (
          <section key={s.titulo} className="mt-10">
            <h2 className="text-lg font-bold text-dark-900 dark:text-white">{s.titulo}</h2>
            {s.antes && <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">{s.antes}</p>}
            {s.lista && (
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-gray-700 dark:text-gray-300">
                {s.lista.map((l) => <li key={l}>{l}</li>)}
              </ul>
            )}
            {s.parrafos?.map((p) => (
              <p key={p} className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">{p}</p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}

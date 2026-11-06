import type { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/site-config";

// Política de tratamiento de datos personales (Ley 1581 de 2012 y Decreto 1074 de 2015).
// Texto base para revisión jurídica. La fecha de vigencia debe coincidir con PRIVACY_VERSION (src/lib/leads.ts).
const VIGENCIA = "6 de noviembre de 2026";
const NIT_REAL = COMPANY_INFO.nit && !COMPANY_INFO.nit.startsWith("900.000.000") ? COMPANY_INFO.nit : "";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const es = locale !== "en";
  return {
    title: es ? "Política de Privacidad y Habeas Data | Novaforte" : "Privacy Policy | Novaforte",
    description: es
      ? "Cómo Novaforte S.A.S. trata los datos personales y los datos de salud que recibe, conforme a la Ley 1581 de 2012."
      : "How Novaforte S.A.S. processes personal and health data, under Colombian Law 1581 of 2012.",
    alternates: { canonical: `/${locale}/privacidad`, languages: { es: "/es/privacidad", en: "/en/privacidad" } },
  };
}

const H2 = "mt-10 mb-3 text-xl font-bold text-dark-900 dark:text-white";
const P = "mb-3 leading-relaxed";
const UL = "mb-3 list-disc space-y-1.5 pl-6 leading-relaxed";

export default async function PrivacidadPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const es = locale !== "en";
  const responsable = `${COMPANY_INFO.name.toUpperCase()}${NIT_REAL ? `, NIT ${NIT_REAL}` : ""}`;

  return (
    <main className="flex-1 bg-[#f7f5f4] dark:bg-dark-900">
      <article className="mx-auto max-w-3xl px-6 py-14 text-[15px] text-gray-700 dark:text-gray-300">
        <h1 className="mb-2 text-3xl sm:text-4xl font-black text-dark-900 dark:text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
          {es ? "Política de Privacidad y Habeas Data" : "Privacy Policy"}
        </h1>
        <p className="mb-8 text-sm text-gray-500">{es ? `Vigente desde el ${VIGENCIA}` : "Effective November 6, 2026"}</p>

        {es ? (
          <>
            <h2 className={H2}>1. Responsable del tratamiento</h2>
            <p className={P}>
              {responsable}, con domicilio en {COMPANY_INFO.fullAddress}. Correo: {COMPANY_INFO.email}. Teléfono: {COMPANY_INFO.phone}.
            </p>

            <h2 className={H2}>2. Marco legal</h2>
            <p className={P}>
              Esta política se expide conforme a la Ley 1581 de 2012, el Decreto 1074 de 2015 (que compila el Decreto 1377 de 2013) y
              demás normas que los modifiquen o complementen.
            </p>

            <h2 className={H2}>3. Datos que recolectamos</h2>
            <ul className={UL}>
              <li>Datos de contacto: nombre, correo, teléfono, institución o empresa y cargo.</li>
              <li>
                Información de la solicitud: equipo médico o dispositivo requerido, descripción del caso y archivos de diseño (.stl, .obj)
                que usted adjunte.
              </li>
              <li>
                <strong>Datos sensibles de salud</strong>: cuando usted describe un caso clínico (por ejemplo, para una prótesis u
                órtesis) o datos de su mascota. Su entrega es <strong>facultativa</strong>: usted no está obligado a suministrarlos.
              </li>
              <li>Datos de navegación agregados (Google Analytics), solo si usted acepta las cookies de analítica.</li>
            </ul>

            <h2 className={H2}>4. Finalidades</h2>
            <ul className={UL}>
              <li>Responder solicitudes de cotización, contacto, registro en Academy y descarga del portafolio.</li>
              <li>Evaluar la viabilidad técnica del dispositivo o repuesto solicitado.</li>
              <li>Gestionar la relación comercial: cotización, fabricación, entrega, garantía y facturación.</li>
              <li>Cumplir obligaciones legales, contables y tributarias.</li>
              <li>Medir y mejorar el sitio web, si usted aceptó las cookies de analítica.</li>
            </ul>
            <p className={P}>Los datos de salud se usan exclusivamente para evaluar y fabricar el dispositivo solicitado.</p>

            <h2 className={H2}>5. Autorización</h2>
            <p className={P}>
              Al marcar la casilla de autorización en nuestros formularios usted autoriza de forma previa, expresa e informada el
              tratamiento de sus datos para las finalidades anteriores. Conservamos la fecha y la versión del texto que aceptó como
              prueba de la autorización.
            </p>

            <h2 className={H2}>6. Encargados y transferencias</h2>
            <p className={P}>
              Para operar el sitio usamos proveedores que tratan datos por cuenta nuestra: alojamiento web (Vercel, Render y
              Cloudflare), envío de correos (Resend) y analítica (Google Analytics). Algunos de estos servicios almacenan información
              fuera de Colombia, con medidas de seguridad acordes con la ley. No vendemos ni cedemos sus datos a terceros.
            </p>

            <h2 className={H2}>7. Derechos del titular</h2>
            <ul className={UL}>
              <li>Conocer, actualizar y rectificar sus datos.</li>
              <li>Solicitar prueba de la autorización otorgada.</li>
              <li>Ser informado sobre el uso que se ha dado a sus datos.</li>
              <li>Revocar la autorización o pedir la supresión de sus datos cuando no exista un deber legal de conservarlos.</li>
              <li>Acceder gratuitamente a sus datos.</li>
              <li>Presentar quejas ante la Superintendencia de Industria y Comercio.</li>
            </ul>

            <h2 className={H2}>8. Consultas y reclamos</h2>
            <p className={P}>
              Escríbanos a <a className="font-semibold text-primary-600 underline" href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>{" "}
              indicando su nombre, identificación, la solicitud y un dato de contacto. Las consultas se responden en máximo diez (10)
              días hábiles, prorrogables cinco (5) días más. Los reclamos se responden en máximo quince (15) días hábiles,
              prorrogables ocho (8) días más, informándole el motivo de la prórroga.
            </p>

            <h2 className={H2}>9. Cookies</h2>
            <p className={P}>
              Usamos Google Analytics solo si usted pulsa «Aceptar» en el aviso de cookies. No usamos cookies de publicidad. Puede
              cambiar su decisión en cualquier momento con el enlace «Preferencias de cookies» al pie de cada página.
            </p>

            <h2 className={H2}>10. Seguridad y conservación</h2>
            <p className={P}>
              Aplicamos medidas técnicas y administrativas para proteger sus datos (conexión cifrada HTTPS, acceso restringido,
              límites de envío). Conservamos los datos mientras sean necesarios para la finalidad y durante los plazos que exija la ley.
              Los archivos de diseño adjuntos se eliminan una vez se envían al equipo técnico.
            </p>

            <h2 className={H2}>11. Vigencia</h2>
            <p className={P}>Esta política rige desde el {VIGENCIA}. Publicaremos aquí cualquier cambio.</p>
          </>
        ) : (
          <>
            <p className={P}>
              The Spanish version of this policy is the legally binding one. In summary: {responsable} ({COMPANY_INFO.fullAddress},{" "}
              {COMPANY_INFO.email}) processes the contact details, request information and, only if you choose to share it, health
              data you send through our forms, solely to answer and fulfil your request. You may access, update, correct or delete
              your data, revoke your authorization, or file a complaint with Colombia&apos;s Superintendencia de Industria y Comercio by
              writing to {COMPANY_INFO.email}. We use Google Analytics only if you accept analytics cookies, and you can change that
              choice at any time from the footer.
            </p>
          </>
        )}
      </article>
    </main>
  );
}

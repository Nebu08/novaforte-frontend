import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { COMPANY_INFO } from "@/lib/site-config";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.academy" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/academy`,
      languages: {
        es: "/es/academy",
        en: "/en/academy",
      },
    },
  };
}

export default async function AcademyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = COMPANY_INFO.website.replace(/\/+$/, "");

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Programa Formativo Maker en Diseño e Impresión 3D",
    description:
      locale === "es"
        ? "Cursos estructurados por niveles en Tinkercad, Onshape y Blender con capacitación docente para colegios en Colombia."
        : "Level-based 3D design and printing courses in Tinkercad, Onshape, and Blender with teacher training for schools in Colombia.",
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: baseUrl,
    },
    educationalCredentialAwarded: "Certificado de Competencias Novaforte Maker",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "blended",
      location: "Bogotá, Colombia",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}

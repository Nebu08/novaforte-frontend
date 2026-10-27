import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { COMPANY_INFO } from "@/lib/site-config";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.vet" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/vet`,
      languages: {
        es: "/es/vet",
        en: "/en/vet",
      },
    },
  };
}

export default async function VetLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = COMPANY_INFO.website.replace(/\/+$/, "");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Órtesis y Prótesis Veterinarias 3D",
    provider: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: baseUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    description:
      locale === "es"
        ? "Diseño y fabricación de órtesis, prótesis y sillas de ruedas 3D a medida para perros y gatos, y guías quirúrgicas autoclavables planeadas desde la tomografía del paciente."
        : "Design and fabrication of custom 3D orthoses, prostheses and wheelchairs for pets, plus autoclavable surgical guides planned from the patient's CT scan.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}

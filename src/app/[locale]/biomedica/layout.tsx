import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { COMPANY_INFO } from "@/lib/site-config";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.biomedica" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/biomedica`,
      languages: {
        es: "/es/biomedica",
        en: "/en/biomedica",
      },
    },
  };
}

export default async function BiomedicaLayout({
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
    serviceType: "Ingeniería Inversa y Reconstrucción 3D de Repuestos Médicos",
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
        ? "Reconstrucción 3D e ingeniería inversa de repuestos y componentes plásticos descontinuados para equipos médicos en Colombia."
        : "3D reconstruction and reverse engineering of discontinued plastic spare parts and components for medical devices in Colombia.",
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

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { COMPANY_INFO } from "@/lib/site-config";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.humans" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/humans`,
      languages: {
        es: "/es/humans",
        en: "/en/humans",
      },
    },
  };
}

export default async function HumansLayout({
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
    serviceType: "Prótesis y Órtesis 3D Personalizadas",
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
        ? "Diseño y manufactura digital de prótesis y órtesis personalizadas a medida en polímeros biocompatibles en Bogotá."
        : "Digital design and manufacturing of custom prostheses and orthoses in biocompatible polymers in Bogota.",
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

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.portafolio" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/portafolio`,
      languages: {
        es: "/es/portafolio",
        en: "/en/portafolio",
      },
    },
  };
}

export default function PortafolioLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

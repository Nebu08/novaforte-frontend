import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.academy" });
  return {
    title: t("title"),
    description: t("description")
  };
}

export default function AcademyLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

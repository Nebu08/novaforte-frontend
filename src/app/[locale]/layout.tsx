import type { Metadata } from "next";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { COMPANY_INFO, SOCIAL_LINKS, MAP_CONFIG } from "@/lib/site-config";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.home" });
  const baseUrl = COMPANY_INFO.website.replace(/\/+$/, "");

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: "%s",
    },
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}/${locale}`,
      siteName: COMPANY_INFO.name,
      locale: locale === "es" ? "es_CO" : "en_US",
      type: "website",
    },
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const { locale } = await params;
  // Load internationalization messages for the current locale
  const messages = await getMessages();
  const baseUrl = COMPANY_INFO.website.replace(/\/+$/, "");

  const organizationAndLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: COMPANY_INFO.name,
        url: baseUrl,
        logo: `${baseUrl}/icon.svg`,
        email: COMPANY_INFO.email,
        telephone: COMPANY_INFO.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Carrera 16A # 78-75, Edificio Profesional Tempo",
          addressLocality: "Chapinero, Bogotá",
          addressRegion: "Bogotá, D.C.",
          addressCountry: "CO",
        },
        sameAs: [
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.linkedin,
        ].filter(Boolean),
      },
      {
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "@id": `${baseUrl}/#localbusiness`,
        name: COMPANY_INFO.name,
        image: `${baseUrl}/icon.svg`,
        url: baseUrl,
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Carrera 16A # 78-75, Edificio Profesional Tempo",
          addressLocality: "Chapinero",
          addressRegion: "Bogotá, D.C.",
          postalCode: "110221",
          addressCountry: "CO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: MAP_CONFIG.lat,
          longitude: MAP_CONFIG.lng,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
        ],
      },
    ],
  };

  return (
    <html lang={locale} className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationAndLocalBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground antialiased flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          {/* Global Header Navigation */}
          <Header currentLocale={locale} />
          
          {/* Main Layout Content Container */}
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          
          {/* Global Footer Section */}
          <Footer />

          {/* Botón flotante directo a WhatsApp */}
          <FloatingWhatsApp />
        </NextIntlClientProvider>

        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.home" });
  return {
    title: t("title"),
    description: t("description")
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

  return (
    <html lang={locale} className="h-full">
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Supported locales
const locales = ["es", "en"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  const activeLocale = locale || "es";

  // Validate that the incoming `locale` parameter is supported
  if (!locales.includes(activeLocale)) notFound();

  return {
    locale: activeLocale,
    messages: (await import(`../../messages/${activeLocale}.json`)).default
  };
});

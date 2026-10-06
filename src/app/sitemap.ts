import type { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/lib/site-config";

const PATHS = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/biomedica", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/biomedica/cotizar", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/humans", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/humans/cotizar", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/vet", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/vet/cotizar", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/academy", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/academy/contacto", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/portafolio", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/nosotros", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/contacto", changeFrequency: "monthly" as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_INFO.website.replace(/\/+$/, "");
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const { path, changeFrequency, priority } of PATHS) {
    for (const locale of ["es", "en"]) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency,
        priority: locale === "es" ? priority : Math.max(0.1, Number((priority - 0.1).toFixed(1))),
        alternates: {
          languages: {
            es: `${baseUrl}/es${path}`,
            en: `${baseUrl}/en${path}`,
          },
        },
      });
    }
  }

  return entries;
}

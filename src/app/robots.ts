import type { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = COMPANY_INFO.website.replace(/\/+$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/gracias"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

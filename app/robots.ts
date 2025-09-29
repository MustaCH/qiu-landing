import type { MetadataRoute } from "next";

export const BASE_URL = "https://qiuautomations.com" as const;

export default function robots(): MetadataRoute.Robots {
  const origin = new URL(BASE_URL);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", origin).toString(),
    host: origin.origin,
  };
}

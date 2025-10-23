import type { MetadataRoute } from "next";
import process from "process";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}

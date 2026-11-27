import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/products/campus-comfort/", "/services/", "/about/", "/contact/"].map((p) => ({
    url: `${site.url}${p || "/"}`,
    lastModified: new Date(),
  }));
}

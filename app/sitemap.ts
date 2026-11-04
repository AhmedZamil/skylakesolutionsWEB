import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = ["", "/services", "/work", "/process", "/book", "/about", "/contact", "/faq", "/careers", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date("2026-11-01"),
  }));
}

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { studies } from "@/lib/work";

const paths = ["", "/services", "/work", "/process", "/book", "/about", "/contact", "/faq", "/careers", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const dated = new Date("2026-11-05");
  return [
    ...paths.map((path) => ({
      url: `${site.domain}${path}`,
      lastModified: dated,
    })),
    ...studies.map((study) => ({
      url: `${site.domain}/work/${study.slug}`,
      lastModified: dated,
    })),
  ];
}

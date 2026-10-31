import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ProjectGrid } from "@/components/project-grid";

export const metadata: Metadata = {
  title: "Work",
  description: "The shapes of web, mobile, cloud, data, and design work Sky Lake Solutions takes on.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHero
        kicker="Work"
        title="Products we are"
        italic="built to ship."
        lede="Named case studies go up when a client is ready to tell the story. Until then, these are the shapes of work the studio takes."
      />
      <section className="border-b border-line px-6 py-16 sm:px-8">
        <ProjectGrid />
      </section>
      <CtaBand title="Want a product in this shape?" italic="Tell us the constraint." />
    </main>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "How to write to Sky Lake Solutions about working with the studio.",
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        kicker="Careers"
        title="The studio grows"
        italic="with the work."
        lede="There is no open board on this page yet. If you build software carefully and like written scope, send a note."
      />
      <section className="border-b border-line px-6 py-16 sm:px-8">
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Write to <a className="text-cyan" href={`mailto:${site.email}`}>{site.email}</a> with what you have shipped and the kind of product you want to be responsible for. We read every note.
        </p>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "FAQ",
  description: "How Sky Lake Solutions scopes, prices, builds, and supports a product.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHero
        kicker="FAQ"
        title="Straight answers"
        italic="before you commit."
        lede="Pricing, ownership, process, and what happens after launch."
      />
      <section className="border-b border-line px-6 py-16 sm:px-8">
        <FaqList />
      </section>
      <CtaBand title="Still have a question?" italic="Ask us directly." />
    </main>
  );
}

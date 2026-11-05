import type { Metadata } from "next";
import { BrandName } from "@/components/brand-name";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms",
  description: "The ground rules for using the Sky Lake Solutions website.",
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        kicker="Terms"
        title="Ground rules"
        italic="for this website."
        lede="A short draft. A signed proposal, not this page, governs any paid engagement."
      />
      <article className="max-w-3xl space-y-6 border-b border-line px-6 py-16 text-[15px] leading-relaxed text-muted sm:px-8">
        <p>
          This website describes how <BrandName /> works. It is not an offer. Scope, price, timeline, and ownership are set in a written proposal. If that document and this page disagree, the signed document wins.
        </p>
        <p>
          You own the custom code we create for a paid project, once it is paid for. Our pre-existing tools stay ours, licensed as part of your product. Open-source components keep their own licenses.
        </p>
        <p>
          The site is provided as it stands. To the extent the law allows, we are not liable for indirect loss from using these pages.
        </p>
      </article>
    </main>
  );
}

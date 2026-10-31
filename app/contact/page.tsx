import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Sky Lake Solutions. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Tell us what you"
        italic="are building."
        lede="A short note is enough. We reply within one business day with a time to talk, or with the questions we still need answered."
      />
      <section className="grid gap-12 border-b border-line px-6 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6 text-sm text-muted">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan uppercase">Email</p>
            <a href={`mailto:${site.email}`} className="mt-2 block text-lg text-ink hover:text-cyan">
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan uppercase">Studio</p>
            <p className="mt-2 text-lg text-ink">Remote. We work where the product is.</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan uppercase">First call</p>
            <p className="mt-2 leading-relaxed">
              Discovery is free. You leave with a sense of scope, even if we are not the right team.
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}

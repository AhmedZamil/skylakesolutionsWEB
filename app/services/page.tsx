import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { engagements, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Web, mobile, cloud, design, data, and care after launch from one Sky Lake team.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        kicker="Services"
        title="One team for the"
        italic="whole product."
        lede="Strategy, design, engineering, and operations under one roof, so nothing is lost between handoffs."
      />

      <section className="border-b border-line px-6 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="border border-line bg-card p-8">
              <h2 className="font-display text-3xl text-cyan italic">{service.title}</h2>
              <p className="mt-3 text-muted">{service.text}</p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Pick the model that fits.
          <span className="mt-1 block font-display font-normal text-cyan italic">Every one starts with a written scope.</span>
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {engagements.map((model) => (
            <article key={model.title} className="border border-line p-7">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan uppercase">{model.kicker}</p>
              <h3 className="mt-3 font-display text-2xl italic">{model.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{model.text}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {model.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-10 text-muted">
          Not sure which one? <Link href="/contact" className="text-cyan">Book a discovery call</Link> and we will help shape the scope.
        </p>
      </section>

      <CtaBand />
    </main>
  );
}

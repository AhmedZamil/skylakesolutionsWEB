import type { Metadata } from "next";
import { BookPanel } from "@/components/book-panel";

export const metadata: Metadata = {
  title: "Book a call",
  description: "Request a 30-minute intro call with Sky Lake Solutions. We reply within one business day.",
};

const points = [
  "The goal, and who the product is for",
  "Scope, timeline, and a real cost",
  "Whether we are the right team",
];

const facts = [
  ["Duration", "30 minutes"],
  ["Format", "Video call"],
  ["Cost", "Free"],
];

export default function BookPage() {
  return (
    <main>
      <section className="relative overflow-x-clip border-b border-line px-6 py-16 sm:px-8 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(ellipse 80% 55% at 70% 40%, rgba(0, 216, 240, 0.08), transparent 60%)" }}
        />
        <div className="relative grid items-start gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-3 text-xs tracking-[0.2em] text-muted uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              Schedule
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[0.9] tracking-tight text-ink sm:text-6xl">
              Book a 30-minute
              <span className="mt-2 block text-muted italic">intro call.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              Tell us the product, what is hard about it, and when you need it. We reply within{" "}
              <span className="text-cyan">one business day</span> to confirm.
            </p>
            <ul className="mt-10 space-y-3 border-t border-line pt-6">
              {points.map((point, index) => (
                <li key={point} className="flex items-baseline gap-4 text-[11px] tracking-[0.14em] text-muted uppercase">
                  <span className="text-faint">0{index + 1}</span>
                  <span className="text-ink">{point}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-10 space-y-2 text-[11px] tracking-[0.18em] text-muted uppercase">
              {facts.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-t border-line pt-3">
                  <dt>{label}</dt>
                  <dd className={label === "Cost" ? "text-cyan" : "text-ink"}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-7">
            <BookPanel />
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FounderCard } from "@/components/founder-card";
import { founders } from "@/lib/about";
import { upwork } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Team",
  description: "Raihana Fardous, Sabber Ahammed, and Ahmed Zamil. Reviews, profiles, and the work, in one place.",
};

const doors = [
  { href: "/reviews", label: "Reviews", text: "The studio account of the work, and the live Upwork profile." },
  { href: "#profiles", label: "Profiles", text: "Three co-founders, with the skills on the card and more behind Adding more." },
  { href: "/work", label: "Projects", text: "Aerotake and Premier School ERP, the products a client can open." },
];

export default function TeamPage() {
  return (
    <main>
      <section className="border-b border-line px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Team</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">
            Three people.
            <span className="mt-2 block font-display font-normal text-cyan italic">One team you can hire.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-cyan italic sm:text-3xl">
            These three take a product from the first call to a release the company can run.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {doors.map((door) => (
              <Link key={door.label} href={door.href} className="border border-line bg-card px-5 py-5 hover:border-cyan">
                <span className="text-[11px] tracking-[0.18em] text-cyan uppercase">{door.label}</span>
                <span className="mt-3 block text-sm leading-relaxed text-muted">{door.text}</span>
              </Link>
            ))}
          </div>
          <a href={upwork.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-sm font-semibold text-cyan hover:text-ink">
            Open the live Upwork profile
          </a>
        </div>
      </section>

      <section id="profiles" className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-8">
          {founders.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>
      </section>

      <CtaBand title="Have a product to staff?" italic="Hire the three." />
    </main>
  );
}

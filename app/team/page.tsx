import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FounderCard } from "@/components/founder-card";
import { SeeProfile } from "@/components/see-profile";
import { TeamStory } from "@/components/team-story";
import { founders } from "@/lib/about";
import { upwork } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Team",
  description: "Three senior developers. Ahmed Zamil, Raihana Fardous, and Sabber Ahammed take a software product from the first call to a release the company can run.",
};

export default function TeamPage() {
  return (
    <main>
      <section className="border-b border-line px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Team</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">
            Three Senior Developers
            <span className="mt-2 block font-display font-normal text-cyan italic">One team you can hire.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-cyan italic sm:text-3xl">
            These three take a Software Product from the first call to a release the company can run.
          </p>
          <div className="mt-10 flex items-center justify-between gap-6 border border-line bg-card px-6 py-6">
            <span>
              <span className="text-[11px] tracking-[0.18em] text-cyan uppercase">Meet the team</span>
              <span className="mt-3 block max-w-xl text-sm leading-relaxed text-muted">
                <a href="#ahmed-zamil" className="font-semibold text-cyan hover:text-ink">
                  Ahmed Zamil
                </a>
                , Raihana Fardous, and Sabber Ahammed. Skills, the Upwork record, and why hire are already open on each card.
              </span>
            </span>
            <a href="#ahmed-zamil" className="text-cyan" aria-label="Go to Ahmed Zamil">
              →
            </a>
          </div>
          <a href={upwork.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-sm font-semibold text-cyan hover:text-ink">
            Open the live Upwork profile
          </a>
          <SeeProfile />
        </div>
      </section>

      <TeamStory />

      <section id="profiles" className="scroll-mt-28 border-b border-line px-6 py-16 sm:px-8 sm:py-20">
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

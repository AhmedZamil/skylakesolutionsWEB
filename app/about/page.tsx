import type { Metadata } from "next";
import Image from "next/image";
import { ArchitectureGraph, BuildWindow, DhakaClock, ExperienceTimeline, StatRow, YearFigure } from "@/components/about-stage";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { TeamBoard } from "@/components/team-board";
import { capabilities, founders, values } from "@/lib/about";

export const metadata: Metadata = {
  title: "About",
  description: "A Senior Developers team building software from Dhaka for the world. SKY LAKE SOLUTIONS.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-line px-6 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-4xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">About</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">
            <span className="block text-ink">A Senior Developers team building software</span>
            <span className="mt-2 block font-display text-[1.02em] font-normal text-cyan italic">from Dhaka for the world.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            SKY LAKE SOLUTIONS designs, builds, and runs web, mobile, and cloud products. The people who scope the work are the people who review the code.
          </p>
        </Reveal>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">SKY LAKE SOLUTIONS</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Software a senior team can stand behind.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              We build the systems a business actually runs on: the API, the services behind it, and the interface people open. .NET Core, microservices, Docker, and Next.js, carried through the full stack.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {[".NET Core", "Microservices", "Docker", "Next.js"].map((chip) => (
                <li key={chip} className="border border-line px-3 py-1 text-[11px] tracking-[0.14em] text-ink uppercase">
                  {chip}
                </li>
              ))}
            </ul>
            <ArchitectureGraph />
          </Reveal>
          <Reveal delay={0.12}>
            <BuildWindow />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="border-t-2 border-cyan pt-5">
              <h2 className="text-2xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Our story</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Why SKY LAKE SOLUTIONS</h2>
            <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-muted">
              <p>SKY LAKE SOLUTIONS is a senior developers team in Dhaka. You talk to the people writing the code. There is no second team hidden behind the call.</p>
              <p>
                Clients come to us when a product has outgrown a handoff between a deck, a design file, and a build nobody will maintain. We stay from the first conversation through release, and after, if you want us there.
              </p>
              <p>We build from Dhaka. The software is for teams anywhere.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="border border-line bg-card p-8">
            <p className="font-display text-3xl text-cyan italic">“You talk to the engineers.”</p>
            <p className="mt-4 text-sm text-muted">SKY LAKE SOLUTIONS · Dhaka, Bangladesh</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">The people behind the code</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Meet the team</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Three co-founders. A small senior team. Open a live profile to read the full record.
          </p>
        </Reveal>
        <div className="mt-10 space-y-8">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="overflow-hidden rounded-2xl border border-line bg-[#070d16] shadow-[0_40px_120px_-40px_rgba(0,216,240,0.25)]"
            >
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#35506e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                <span className="ml-3 text-[11px] tracking-[0.16em] text-faint uppercase">{founder.name}</span>
                <span className="ml-auto text-[11px] tracking-[0.14em] text-cyan/80 uppercase">Profile</span>
              </div>
              <div className="grid lg:grid-cols-[minmax(240px,320px)_1fr]">
                <div className="flex flex-col items-center justify-center bg-black py-10 lg:py-16">
                  <p className="year-glow font-display text-4xl text-cyan italic sm:text-5xl">Co-Founder</p>
                  <div className="relative mt-6 h-56 w-56 overflow-hidden rounded-full border border-cyan/30 shadow-[0_0_40px_rgba(0,216,240,0.18)] sm:h-64 sm:w-64">
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      sizes="256px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="bg-black px-6 py-6 sm:px-8 sm:py-8">
                  <YearFigure years={founder.yearsCount} />
                  <h3 className="mt-4 font-display text-4xl text-ink italic sm:text-5xl">{founder.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink">{founder.title}</p>
                  <p className="mt-2 text-sm text-muted">{founder.place}</p>
                  {founder.stats.length > 0 ? <StatRow stats={founder.stats} /> : null}
                  {founder.highlight ? (
                    <p className="mt-6 border border-cyan/40 bg-cyan/5 px-4 py-4 text-sm leading-relaxed text-ink">{founder.highlight}</p>
                  ) : null}
                  {founder.timeline.length > 0 ? <ExperienceTimeline items={founder.timeline} /> : null}
                  <ul className="mt-6 space-y-4">
                    {founder.points.map((point) => (
                      <li key={point} className="border-l border-cyan/40 pl-4 text-sm leading-relaxed text-muted">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {founder.chips.map((chip) => (
                      <li key={chip} className="border border-line px-3 py-1 text-[11px] tracking-[0.12em] text-ink uppercase">
                        {chip}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={founder.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex h-11 items-center border border-cyan px-5 text-sm font-semibold text-cyan transition-colors hover:bg-cyan hover:text-black"
                  >
                    {founder.link}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">The team</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">The people beside the founders.</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Eight of the bench, with the stacks the studio hires for. The counts are the full roster.
          </p>
        </Reveal>
        <TeamBoard />
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What we stand for</h2>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.05}>
              <h3 className="font-display text-2xl text-cyan italic">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{value.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-line px-6 py-8 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[11px] tracking-[0.18em] text-faint uppercase">Status</p>
            <p className="mt-2 text-sm text-ink">Open for a new product</p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.18em] text-faint uppercase">Studio</p>
            <p className="mt-2 text-sm text-ink">Dhaka, BD</p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.18em] text-faint uppercase">Dhaka time</p>
            <p className="mt-2 font-mono text-sm text-cyan">
              <DhakaClock />
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.18em] text-faint uppercase">Replies</p>
            <p className="mt-2 text-sm text-ink">Within one business day</p>
          </div>
        </div>
      </section>

      <CtaBand title="Have an idea?" italic="Let’s build it." />
    </main>
  );
}

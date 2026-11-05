import Link from "next/link";
import { CapabilityGrid, LiveWindow } from "@/components/diagrams";
import { PartnerMarquee } from "@/components/partner-marquee";
import { Comparison } from "@/components/comparison";
import { ProcessRail } from "@/components/process-rail";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { BrandName } from "@/components/brand-name";
import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/timeline";
import { pillars, practices, promises, stack } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line px-6 py-16 sm:px-8 sm:py-24">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <Reveal className="text-center lg:text-left">
            <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Software engineering studio</p>
            <h1 className="mt-5 text-4xl leading-[1.02] font-semibold tracking-[-0.035em] sm:text-6xl">
              Every product is particular.
              <span className="mt-2 block font-display font-normal text-cyan italic">The software should be too.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
              <BrandName /> designs, builds, and runs web, mobile, and cloud products for teams that need software they can trust, from the first release onward.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link href="/contact" className="inline-flex h-12 items-center border border-line-strong px-6 text-sm font-semibold hover:border-cyan hover:text-cyan">
                Start a project
              </Link>
              <Link href="/work" className="inline-flex h-12 items-center border border-line-strong px-6 text-sm font-semibold hover:border-cyan hover:text-cyan">
                See the work
              </Link>
            </div>
          </Reveal>
          <LiveWindow />
        </div>
      </section>

      <section className="grid border-b border-line sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
        {promises.map((item) => (
          <div key={item.title} className="border-b border-line px-6 py-8 sm:px-8 lg:border-b-0">
            <h2 className="font-display text-2xl text-cyan italic">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
          </div>
        ))}
      </section>

      <Comparison />

      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Process</p>
        <h2 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">
          A clear path from
          <span className="mt-2 block font-display font-normal text-cyan italic">idea to launch.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          The line travels across the four stages, then into the trophy, on its own.
        </p>
        <div className="mt-10">
          <ProcessRail />
        </div>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">How the work runs</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Four things we do not skip</h2>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className="lg:px-7">
              <p className="text-sm font-semibold text-blue">0{index + 1}</p>
              <h3 className="mt-3 font-display text-2xl italic">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <PartnerMarquee logos={false} />
      <CapabilityGrid />
      <Timeline />

      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">How we work with you</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Engineering habits
            <span className="mt-1 block font-display font-normal text-cyan italic">you can check.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {practices.map((item) => (
            <article key={item.n} className="border border-line bg-card p-7">
              <p className="font-display text-4xl text-blue italic">{item.n}</p>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8">
        <h2 className="text-sm font-semibold tracking-[0.18em] text-faint uppercase">Tools we build with</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {stack.map((item) => (
            <li key={item} className="border border-line-strong px-4 py-2 text-sm font-medium text-ink">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />

      <section className="px-6 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Questions we hear before the first sprint.</h2>
            <Link href="/faq" className="mt-6 inline-flex text-sm font-semibold text-cyan">
              Read the full list
            </Link>
          </div>
          <FaqList />
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArchitectureGraph, BuildWindow, DhakaClock } from "@/components/about-stage";
import { CtaBand } from "@/components/cta-band";
import { BrandName } from "@/components/brand-name";
import { Reveal } from "@/components/reveal";
import { capabilities, values } from "@/lib/about";

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
            <BrandName /> designs, builds, and runs web, mobile, and cloud products. The people who scope the work are the people who review the code.
          </p>
        </Reveal>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="text-[12px] font-semibold tracking-[0.22em] uppercase">
              <BrandName />
            </p>
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
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.text.startsWith("SKY LAKE SOLUTIONS") ? (
                  <>
                    <BrandName />
                    {item.text.slice("SKY LAKE SOLUTIONS".length)}
                  </>
                ) : (
                  item.text
                )}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Our story</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Why <BrandName />
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed text-muted">
              <p>
                <BrandName /> is a senior developers team in Dhaka. You talk to the people writing the code. There is no second team hidden behind the call.
              </p>
              <p>
                Clients come to us when a product has outgrown a handoff between a deck, a design file, and a build nobody will maintain. We stay from the first conversation through release, and after, if you want us there.
              </p>
              <p>We build from Dhaka. The software is for teams anywhere.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="border border-line bg-card p-8">
            <p className="font-display text-3xl text-cyan italic">“You talk to the engineers.”</p>
            <p className="mt-4 text-sm text-muted">
              <BrandName /> · Dhaka, Bangladesh
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Team</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">The three people who write the software.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Raihana Fardous, Sabber Ahammed, and Ahmed Zamil are on the team page, with the reviews, the profiles, and the work in one place.
          </p>
          <Link href="/team" className="mt-8 inline-flex h-11 items-center border border-cyan px-5 text-sm font-semibold text-cyan hover:bg-cyan hover:text-black">
            Meet the team
          </Link>
        </Reveal>
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

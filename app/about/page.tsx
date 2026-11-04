import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { processSteps, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Sky Lake Solutions is a software studio built on clear communication and careful delivery.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About"
        title="Engineers who care about"
        italic="clear thinking."
        lede="Sky Lake Solutions is a software studio built on a simple idea: good software starts with clear communication."
      />

      <section className="border-b border-line px-6 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl space-y-5 text-lg leading-relaxed text-muted">
            <p>
              The studio exists for teams that are tired of a handoff between a slide deck, a design file, and a build that nobody will maintain.
            </p>
            <p>
              We stay with the product from the first conversation through release, and after, if you want us there. The people who scoped the work are the people who review the code.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Written", "scope before a sprint starts"],
              ["Owned", "repository, from the first commit"],
              ["Visible", "staging you can open"],
              ["Present", "after the launch note"],
            ].map(([title, text]) => (
              <div key={title} className="border border-line p-5">
                <p className="font-display text-2xl text-cyan italic">{title}</p>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How we think about the work</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article key={value.title}>
              <h3 className="font-display text-2xl text-cyan italic">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A clear path from idea to launch</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.n} className="border-t-2 border-blue pt-5">
              <p className="font-display text-4xl text-blue italic">{step.n}</p>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand title="Let’s build something together." italic="Tell us the product." />
    </main>
  );
}

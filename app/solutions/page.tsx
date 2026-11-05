import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Sky Lake Solutions by industry: school systems, travel, SaaS, energy, healthcare, commerce, and foundations.",
};

export default function SolutionsPage() {
  return (
    <main>
      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Solutions</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">
            Built for the industry
            <span className="mt-2 block font-display font-normal text-cyan italic">in front of you.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The process is the same. The product is not. Pick an industry to see how an engagement runs, and the work we can show.
          </p>
        </div>
      </section>
      <section className="px-6 py-16 sm:px-8">
        <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {industries.map((industry, index) => (
            <li key={industry.slug}>
              <Link href={`/solutions/${industry.slug}`} className="block border border-line bg-card p-6 transition-colors hover:border-cyan">
                <p className="text-[11px] tracking-[0.18em] text-faint">0{index + 1}</p>
                <h2 className="mt-3 font-display text-2xl text-cyan italic">{industry.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{industry.lede}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

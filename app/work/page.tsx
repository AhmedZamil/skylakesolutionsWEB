import type { Metadata } from "next";
import Link from "next/link";
import { StudyFrame } from "@/components/study-frame";
import { studies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from Sky Lake Solutions. The first entries are placeholders until the real stories are ready.",
};

export default function WorkPage() {
  return (
    <main>
      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Work</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">
            Case studies from
            <span className="mt-2 block font-display font-normal text-cyan italic">Sky Lake Solutions.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Each study is a product Sky Lake designed, built, and shipped. Aerotake is live. The other entries hold the same shape until their real stories, and their screenshots, are ready.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 md:gap-7">
          {studies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group overflow-hidden rounded-2xl border border-line bg-card transition-colors duration-300 hover:border-cyan"
            >
              <div className="relative">
                <StudyFrame src={study.cardImage} alt={study.name} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue/25 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
              <div className="p-6 md:p-7">
                <p className="flex items-center gap-3 text-[12px] tracking-[0.16em] text-faint uppercase">
                  <span>{study.status}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.year}</span>
                </p>
                <h2 className="mt-3 font-display text-[26px] leading-tight tracking-tight">{study.name}</h2>
                <p className="mt-2 text-sm font-medium text-cyan">{study.subtitle}</p>
                <p className="mt-4 line-clamp-4 text-[15px] leading-relaxed text-muted">{study.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {(study.tags ?? study.stack).map((tool) => (
                    <li key={tool} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-muted">
                      {tool}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-cyan">
                  Read the case study
                  <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" aria-hidden="true">
                    <path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

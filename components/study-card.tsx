import Link from "next/link";
import { StudyFrame } from "@/components/study-frame";
import type { Study } from "@/lib/work";

export function StudyCard({ study }: { study: Study }) {
  return (
    <Link
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
  );
}

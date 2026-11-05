import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookPanel } from "@/components/book-panel";
import { Comparison } from "@/components/comparison";
import { ProcessRail } from "@/components/process-rail";
import { StudyCard } from "@/components/study-card";
import { industries } from "@/lib/site";
import { studiesIn } from "@/lib/work";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return { title: "Solutions" };
  return { title: industry.name, description: industry.lede };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  const work = studiesIn(industry.slug);

  return (
    <main>
      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Solutions</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">{industry.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{industry.lede}</p>
          <Link href="/book" className="mt-8 inline-flex h-12 items-center border border-line-strong px-6 text-sm font-semibold hover:border-cyan hover:text-cyan">
            Book a call
          </Link>
        </div>
      </section>

      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Process</p>
        <h2 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-5xl">{industry.path}</h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          The line travels across the four stages, then into the trophy, on its own.
        </p>
        <div className="mt-10">
          <ProcessRail />
        </div>
      </section>

      <Comparison />

      <section className="border-b border-line px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">In this industry</h2>
          {work.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-7">
              {work.map((study) => (
                <StudyCard key={study.slug} study={study} />
              ))}
            </div>
          ) : (
            <div className="mt-8 max-w-xl border border-line bg-card p-7">
              <p className="text-muted">No public study in this industry yet.</p>
              <Link href="/book" className="mt-5 inline-flex text-sm font-semibold text-cyan">
                Book a call
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Book a call</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">Pick a time for this work.</h2>
          <div className="mt-10">
            <BookPanel />
          </div>
        </div>
      </section>
    </main>
  );
}

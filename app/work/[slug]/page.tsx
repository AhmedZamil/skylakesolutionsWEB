import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SchoolCharts } from "@/components/school-charts";
import { StudyFrame } from "@/components/study-frame";
import { studies, studyBySlug } from "@/lib/work";

export function generateStaticParams() {
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = studyBySlug(slug);
  if (!study) return { title: "Work" };
  return {
    title: study.name,
    description: study.summary,
  };
}

export default async function StudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studyBySlug(slug);
  if (!study) notFound();

  const facts = [
    ["Client", study.client],
    ["Role", study.role],
    ["Timeline", study.timeline],
    ["Status", study.statusLine],
  ] as const;

  return (
    <main>
      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-faint" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cyan">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/work" className="hover:text-cyan">
              Work
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">{study.name}</span>
          </nav>
          <p className="mt-8 text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Case study</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">{study.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{study.summary}</p>
          {study.url ? (
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center gap-2 border border-line-strong px-5 text-sm font-semibold hover:border-cyan hover:text-cyan"
            >
              View live site
              <Arrow />
            </a>
          ) : null}
          <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="text-[11px] tracking-[0.18em] text-faint uppercase">{label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-line px-6 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-line bg-white">
            {study.heroImage ? (
              <Image
                src={study.heroImage}
                alt={study.heroAlt ?? study.name}
                width={study.heroSize?.width ?? 1887}
                height={study.heroSize?.height ?? 856}
                className="h-auto w-full"
                priority
              />
            ) : (
              <StudyFrame src={study.cardImage} alt={study.name} pending={study.frameLabel} fit={study.frameFit} />
            )}
          </div>
          {study.gallery?.length ? (
            study.galleryLayout === "stack" ? (
              <div className="mt-6 grid gap-6">
                {study.gallery.map((shot) => (
                  <figure key={shot.src}>
                    <div className="overflow-hidden rounded-2xl border border-line bg-white">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={shot.width ?? 1900}
                        height={shot.height ?? 860}
                        className="h-auto w-full"
                      />
                    </div>
                    {shot.caption ? <figcaption className="px-1 pt-3 text-sm leading-relaxed text-muted">{shot.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {study.gallery.map((shot) => (
                  <div key={shot.src} className="overflow-hidden rounded-2xl border border-line">
                    <StudyFrame src={shot.src} alt={shot.alt} />
                  </div>
                ))}
              </div>
            )
          ) : null}
        </div>
      </section>

      <article className="px-6 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Section label="Problem" text={study.problem} />
          <Section label="Approach" text={study.approach} />
          {study.slug === "premier-school-erp" ? <SchoolCharts /> : null}
          <section className="border-b border-line py-12">
            <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Stack</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {study.stack.map((tool) => (
                <li key={tool} className="rounded-full border border-line-strong px-3 py-1.5 text-sm text-ink">
                  {tool}
                </li>
              ))}
            </ul>
          </section>
          <section className="border-b border-line py-12">
            <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">What shipped</p>
            <h2 className="mt-3 font-display text-3xl text-cyan italic sm:text-4xl">The surface area we built.</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {study.shipped.map((item) => (
                <div key={item.title} className="border border-line bg-card p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
          <Section label="Outcome" text={study.outcome} />
        </div>
      </article>

      <section className="px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl border border-line bg-card px-6 py-10 sm:px-10">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Next</p>
          <h2 className="mt-3 font-display text-3xl text-cyan italic sm:text-4xl">Want something like this?</h2>
          <p className="mt-4 max-w-xl text-muted">Tell us the product. We will say what it takes before the work starts.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {study.url ? (
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 border border-line-strong px-5 text-sm font-semibold hover:border-cyan hover:text-cyan"
              >
                View live site
                <Arrow />
              </a>
            ) : null}
            <Link href="/contact" className="inline-flex h-12 items-center bg-blue px-5 text-sm font-semibold text-white hover:bg-[#3c86f5]">
              Start a project
            </Link>
          </div>
          <Link href="/work" className="mt-6 inline-flex text-sm font-semibold text-cyan">
            ← Back to all work
          </Link>
        </div>
      </section>
    </main>
  );
}

function Section({ label, text }: { label: string; text: string }) {
  return (
    <section className="border-b border-line py-12">
      <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">{label}</p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{text}</p>
    </section>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

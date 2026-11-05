import type { Metadata } from "next";
import { BrandName } from "@/components/brand-name";
import { StudyCard } from "@/components/study-card";
import { studies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from Sky Lake Solutions. Aerotake and Premier School ERP are live.",
};

export default function WorkPage() {
  return (
    <main>
      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Work</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">
            Case studies from
            <span className="mt-2 block">
              <BrandName />.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Each study is a product Sky Lake designed, built, and shipped. Aerotake and Premier School ERP are live. The other entries hold the same shape until their real stories, and their screenshots, are ready.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 md:gap-7">
          {studies.map((study) => (
            <StudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>
    </main>
  );
}

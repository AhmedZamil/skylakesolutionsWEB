import type { Metadata } from "next";
import { ProcessRail } from "@/components/process-rail";

export const metadata: Metadata = {
  title: "Process",
  description: "How a Sky Lake engagement runs, from the first week of discovery through launch.",
};

export default function ProcessPage() {
  return (
    <main>
      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Process</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">
          A clear path from
          <span className="mt-2 block font-display font-normal text-cyan italic">idea to launch.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          The line travels across the four stages, then into the trophy, on its own.
        </p>
        <div className="mt-10">
          <ProcessRail />
        </div>
      </section>
    </main>
  );
}

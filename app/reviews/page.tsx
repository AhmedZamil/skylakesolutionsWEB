import type { Metadata } from "next";
import { PartnerMarquee } from "@/components/partner-marquee";
import { ReviewStage, UpworkPanel } from "@/components/review-stage";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What Sky Lake has shipped for Aerotake, Premier School, and the partners on the line, plus eight completed Upwork jobs.",
};

export default function ReviewsPage() {
  return (
    <main>
      <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
        <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Reviews</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">
          The work,
          <span className="mt-2 block font-display font-normal text-cyan italic">in the clients’ names.</span>
        </h1>
      </section>
      <ReviewStage />
      <UpworkPanel />
      <PartnerMarquee />
    </main>
  );
}

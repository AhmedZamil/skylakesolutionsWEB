import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function CtaBand({
  title = "Have a product in mind?",
  italic = "Let’s build it.",
  text = "Tell us what you are working on. We reply within one business day.",
}: {
  title?: string;
  italic?: string;
  text?: string;
}) {
  return (
    <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-24">
      <Reveal className="relative overflow-hidden bg-blue px-6 py-10 sm:px-12 sm:py-14">
        <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rotate-12 border border-white/20" />
        <div className="relative flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-white sm:text-5xl">
              {title} <span className="font-display font-normal italic">{italic}</span>
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-white/85">{text}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center bg-black px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Book a call
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

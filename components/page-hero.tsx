import { Reveal } from "@/components/reveal";

export function PageHero({
  kicker,
  title,
  italic,
  lede,
}: {
  kicker: string;
  title: string;
  italic: string;
  lede: string;
}) {
  return (
    <section className="border-b border-line px-6 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-4xl">
        <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">{kicker}</p>
        <h1 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">
          <span className="block text-ink">{title}</span>
          <span className="mt-2 block font-display text-[1.02em] font-normal text-cyan italic">{italic}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{lede}</p>
      </Reveal>
    </section>
  );
}

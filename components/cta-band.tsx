import { BookPanel } from "@/components/book-panel";

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
    <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
      <div className="grid items-center gap-10 border border-cyan/40 bg-[#070d16] px-6 py-10 sm:px-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
            {title} <span className="font-display font-normal text-cyan italic">{italic}</span>
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted">{text}</p>
          <p className="mt-4 text-sm text-faint">The week steps forward on its own until you hold a day.</p>
        </div>
        <BookPanel live />
      </div>
    </section>
  );
}

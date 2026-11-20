"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ExperienceTimeline, YearFigure } from "@/components/about-stage";
import { BrandName } from "@/components/brand-name";
import { GlowLine } from "@/components/glow-line";
import { founderHire, founders, visibleChips, type GlowPart } from "@/lib/about";

type Founder = (typeof founders)[number];

export function FounderCard({ founder }: { founder: Founder }) {
  const hire = founderHire[founder.name];
  const chips = visibleChips(founder.name, founder.chips);
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-[#070d16] shadow-[0_40px_120px_-40px_rgba(0,216,240,0.25)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#35506e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-blue" />
        <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
        <span className="ml-3 text-[11px] tracking-[0.16em] text-faint uppercase">{founder.name}</span>
        <span className="ml-auto text-[11px] tracking-[0.14em] text-cyan/80 uppercase">Profile</span>
      </div>
      <div className="grid lg:grid-cols-[minmax(240px,320px)_1fr]">
        <div className="flex flex-col items-center justify-center bg-black py-10 lg:py-16">
          <p className="year-glow font-display text-4xl text-cyan italic sm:text-5xl">Co-Founder</p>
          <div className="relative mt-6 h-56 w-56 overflow-hidden rounded-full border border-cyan/30 shadow-[0_0_40px_rgba(0,216,240,0.18)] sm:h-64 sm:w-64">
            <Image src={founder.photo} alt={founder.name} fill sizes="256px" className="object-cover object-top" />
          </div>
        </div>
        <div className="bg-black px-6 py-6 sm:px-8 sm:py-8">
          <YearFigure years={founder.yearsCount} />
          <h3 className="mt-4 font-display text-4xl text-ink italic sm:text-5xl">{founder.name}</h3>
          <p className="mt-4 text-lg leading-snug sm:text-xl">
            <GlowLine parts={hire.line as readonly GlowPart[]} />
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink">{founder.title}</p>
          <p className="mt-2 text-sm text-muted">
            <BrandName />
            {founder.place.slice("SKY LAKE SOLUTIONS".length)}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li key={chip} className="border border-line px-3 py-1 text-[11px] tracking-[0.12em] text-ink uppercase">
                {chip}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={founder.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center border border-cyan px-5 text-sm font-semibold text-cyan transition-colors hover:bg-cyan hover:text-black"
            >
              {founder.link}
            </a>
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 items-center border border-line px-5 text-sm font-semibold text-ink hover:border-cyan hover:text-cyan"
            >
              {open ? "Show less" : "Adding more"}
            </button>
          </div>
          <div className={`more-band ${open ? "is-open" : ""} ${reduce ? "is-still" : ""}`}>
            <div className="more-band-inner">
              <MoreBand founder={founder} chips={chips} open={open} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function MoreBand({ founder, chips, open }: { founder: Founder; chips: string[]; open: boolean }) {
  const hire = founderHire[founder.name];
  return (
    <div className="border-t border-line pt-6">
      <div className="more-rule" aria-hidden="true" />
      <div className="mt-6">
        <p className="text-[11px] tracking-[0.18em] text-cyan uppercase">Skills</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {chips.map((chip, index) => (
            <li key={chip} className="more-chip border border-cyan/40 px-3 py-1 text-[11px] tracking-[0.12em] text-cyan uppercase" style={{ animationDelay: `${120 + index * 40}ms` }}>
              {chip}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <p className="text-[11px] tracking-[0.18em] text-cyan uppercase">Projects</p>
        <ul className="mt-3 grid gap-3 sm:grid-cols-3">
          {hire.projects.map((project, index) => (
            <li key={project.title} className="more-project" style={{ animationDelay: `${280 + index * 90}ms` }}>
              <a href={project.href} className="block border border-line px-4 py-4 hover:border-cyan" {...(project.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
                <span className="font-display text-xl text-ink italic">{project.title}</span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">{project.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <p className="text-[11px] tracking-[0.18em] text-cyan uppercase">Contribution</p>
        <Contribution founder={founder} open={open} />
        {founder.highlight ? <p className="more-project mt-4 border border-cyan/40 bg-cyan/5 px-4 py-4 text-sm leading-relaxed text-ink">{founder.highlight}</p> : null}
        <ul className="mt-4 space-y-4">
          {founder.points.map((point) => (
            <li key={point} className="more-project border-l border-cyan/40 pl-4 text-sm leading-relaxed text-muted">
              {point}
            </li>
          ))}
        </ul>
        {founder.timeline.length > 0 ? <ExperienceTimeline items={founder.timeline} /> : null}
      </div>
    </div>
  );
}

function Contribution({ founder, open }: { founder: Founder; open: boolean }) {
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(reduce ? 1 : 0);
  const figures =
    founder.stats.length > 0
      ? founder.stats
      : [{ value: founder.yearsCount, prefix: "", suffix: "", label: "Years" }];

  useEffect(() => {
    if (!open || reduce) {
      setProgress(reduce ? 1 : 0);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const next = Math.min(1, (now - start) / 900);
      setProgress(next);
      if (next < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [open, reduce]);

  return (
    <dl className="mt-4 grid grid-cols-3 gap-3">
      {figures.map((figure) => (
        <div key={figure.label} className="border border-line bg-[#070d16] px-3 py-4">
          <dt className="year-glow font-display text-2xl text-cyan italic sm:text-3xl">
            {figure.prefix}
            {Math.round(figure.value * progress).toLocaleString("en-US")}
            {figure.suffix}
          </dt>
          <dd className="mt-1 text-[10px] tracking-[0.14em] text-faint uppercase">{figure.label}</dd>
        </div>
      ))}
    </dl>
  );
}

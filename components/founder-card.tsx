"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ExperienceTimeline, YearFigure } from "@/components/about-stage";
import { BrandName } from "@/components/brand-name";
import { GlowLine } from "@/components/glow-line";
import { founderHire, founders, skillGroups, visibleChips, type GlowPart } from "@/lib/about";

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
          {hire.groupedOnCard ? (
            <SkillGroups groups={skillGroups(founder.name, founder.chips)} />
          ) : (
            <ul className="mt-6 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li key={chip} className="border border-line px-3 py-1 text-[11px] tracking-[0.12em] text-ink uppercase">
                  {chip}
                </li>
              ))}
            </ul>
          )}
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
              data-open={open ? "" : undefined}
              onClick={() => setOpen((value) => !value)}
              className="more-glow"
            >
              <span>{open ? "Show less" : "Adding more"}</span>
            </button>
          </div>
          <div className={`more-band ${open ? "is-open" : ""} ${reduce ? "is-still" : ""}`}>
            <div className="more-band-inner">
              <MoreBand founder={founder} open={open} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function MoreBand({ founder, open }: { founder: Founder; open: boolean }) {
  const hire = founderHire[founder.name];
  return (
    <div className="border-t border-line pt-6">
      <div className="more-rule" aria-hidden="true" />
      <div className="mt-6">
        <p className="text-[11px] tracking-[0.18em] text-cyan uppercase">Skills</p>
        <SkillGroups groups={skillGroups(founder.name, founder.chips)} animated />
      </div>
      {hire.upworkCard ? <UpworkCard /> : null}
      <div className="mt-8">
        <p className="text-[11px] tracking-[0.18em] text-cyan uppercase">Why hire</p>
        <ul className="mt-3 space-y-3">
          {hire.whyHire.map((point, index) => (
            <li key={point} className="more-project flex gap-3 text-sm leading-relaxed text-ink" style={{ animationDelay: `${200 + index * 70}ms` }}>
              <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan shadow-[0_0_8px_#00d8f0]" />
              {point}
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

function SkillGroups({ groups, animated = false }: { groups: { label: string; chips: readonly string[] }[]; animated?: boolean }) {
  let chipIndex = 0;
  return (
    <div className="mt-4 space-y-4">
      {groups.map((group) => (
        <div key={group.label}>
          <p className="text-[10px] tracking-[0.16em] text-faint uppercase">{group.label}</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {group.chips.map((chip) => {
              const delay = 80 + chipIndex * 35;
              chipIndex += 1;
              return (
                <li
                  key={`${group.label}-${chip}`}
                  className={`${animated ? "more-chip border-cyan/40 text-cyan" : "border-line text-ink"} border px-3 py-1 text-[11px] tracking-[0.12em] uppercase`}
                  style={animated ? { animationDelay: `${delay}ms` } : undefined}
                >
                  {chip}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

function UpworkCard() {
  return (
    <div className="upwork-card mt-8 px-5 py-5">
      <p className="text-[11px] tracking-[0.18em] text-cyan uppercase">Upwork</p>
      <dl className="mt-4 grid grid-cols-3 gap-3">
        {[
          ["$60K+", "Total earnings"],
          ["8", "Total jobs"],
          ["3,108", "Total hours"],
        ].map(([value, label]) => (
          <div key={label}>
            <dt className="font-display text-2xl text-cyan italic sm:text-3xl">{value}</dt>
            <dd className="mt-1 text-[10px] tracking-[0.14em] text-faint uppercase">{label}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 flex items-center gap-2" aria-label="All 5 star rating">
        {Array.from({ length: 5 }, (_, star) => (
          <svg key={star} viewBox="0 0 20 20" className="hire-star h-5 w-5" style={{ animationDelay: `${star * 0.32}s` }} fill="currentColor" aria-hidden="true">
            <path d="m10 1.8 2.1 4.6 5 .6-3.7 3.4.9 5-4.3-2.4L5.7 15.4l.9-5L2.9 7l5-.6L10 1.8Z" />
          </svg>
        ))}
        <span className="ml-2 text-[11px] tracking-[0.14em] text-[#ffb020] uppercase">All 5 star rating</span>
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

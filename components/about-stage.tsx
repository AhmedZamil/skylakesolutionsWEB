"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { buildLines } from "@/lib/about";

const nodes = ["Client", "API", "Services", "Database"];

export function ArchitectureGraph() {
  return (
    <div className="mt-10">
      <p className="text-[11px] tracking-[0.18em] text-faint uppercase">Distributed by design</p>
      <div className="relative mt-6">
        <div className="pointer-events-none absolute top-7 right-[6%] left-[6%] h-0.5 -translate-y-1/2 overflow-hidden">
          <div className="arch-line h-full w-full" />
        </div>
        <span aria-hidden="true" className="arch-pulse pointer-events-none absolute z-20 h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_14px_#00d8f0]" />
        <ol className="grid grid-cols-4 gap-6 sm:gap-10">
          {nodes.map((node) => (
            <li key={node} className="flex flex-col items-center gap-3">
              <span className="relative z-10 flex h-14 w-full items-center justify-center rounded-2xl border border-line bg-card px-2 text-[11px] font-semibold tracking-[0.12em] text-ink uppercase shadow-[0_0_24px_rgba(0,216,240,0.08)] sm:text-xs">
                {node}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function paint(line: string) {
  const parts = line.split(/(\b(?:import|export|async|function|const|await|return|from)\b|'[^']*'|\.\.\.)/g);
  return parts.map((part, index) => {
    const keyword = /^(import|export|async|function|const|await|return|from)$/.test(part);
    const quoted = part.startsWith("'");
    const color = keyword ? "text-cyan" : quoted ? "text-blue" : "text-ink/90";
    return (
      <span key={`${index}-${part}`} className={color}>
        {part}
      </span>
    );
  });
}

export function BuildWindow() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [count, setCount] = useState(reduce ? buildLines.length : 0);

  useEffect(() => {
    if (reduce) {
      setCount(buildLines.length);
      return;
    }
    if (!inView) return;
    let next = 0;
    setCount(0);
    const timer = window.setInterval(() => {
      next += 1;
      setCount(next);
      if (next >= buildLines.length) window.clearInterval(timer);
    }, 260);
    return () => window.clearInterval(timer);
  }, [inView, reduce]);

  const done = count >= buildLines.length;
  const shown = buildLines.slice(0, count);

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border border-line bg-[#070d16] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#35506e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-blue" />
        <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
        <span className="ml-3 font-mono text-[11px] text-faint">build.ts</span>
        <span className="ml-auto font-mono text-[11px] text-cyan/80">TypeScript</span>
      </div>
      <div className="flex min-h-64 px-4 py-4 font-mono text-[13px] leading-6">
        <div className="mr-4 w-5 shrink-0 text-right text-faint select-none" aria-hidden="true">
          {buildLines.map((_, index) => (
            <div key={index}>{index + 1}</div>
          ))}
        </div>
        <pre className="overflow-x-auto whitespace-pre">
          {shown.map((line, index) => (
            <div key={index}>{line ? paint(line) : "\u00a0"}</div>
          ))}
          {done ? null : <span className="inline-block h-4 w-1.5 translate-y-0.5 bg-cyan" />}
        </pre>
      </div>
      <div className="flex items-center gap-2 border-t border-line px-4 py-2.5 font-mono text-[11px]">
        <span className={`h-1.5 w-1.5 rounded-full ${done ? "bg-cyan" : "bg-faint"}`} />
        <span className="text-muted">{done ? "Deployed · 0 errors · 1.2s" : "Compiling…"}</span>
        <span className="ml-auto text-cyan/80">main ✓</span>
      </div>
    </div>
  );
}

export function StatRow({
  stats,
}: {
  stats: readonly { value: number; prefix: string; suffix: string; label: string }[];
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [progress, setProgress] = useState(reduce ? 1 : 0);

  useEffect(() => {
    if (reduce) {
      setProgress(1);
      return;
    }
    if (!inView) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const next = Math.min(1, (now - start) / 1100);
      setProgress(next);
      if (next < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, reduce]);

  return (
    <dl ref={ref} className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
      {stats.map((stat) => {
        const current = Math.round(stat.value * progress);
        const shown = current.toLocaleString("en-US");
        return (
          <div key={stat.label} className="border border-line bg-black px-2 py-3 text-center sm:px-3">
            <dt className="font-display text-2xl text-cyan italic sm:text-3xl">
              {stat.prefix}
              {shown}
              {stat.suffix}
            </dt>
            <dd className="mt-1 text-[10px] tracking-[0.12em] text-faint uppercase">{stat.label}</dd>
          </div>
        );
      })}
    </dl>
  );
}

export function ExperienceTimeline({
  items,
}: {
  items: readonly { when: string; title: string; detail: string }[];
}) {
  return (
    <ol className="relative mt-6 space-y-5 border-l border-cyan/40 pl-5">
      {items.map((item, index) => (
        <li key={item.when + item.title} className="rise relative" style={{ animationDelay: `${index * 0.12}s` }}>
          <span aria-hidden="true" className="absolute top-1.5 -left-[1.45rem] h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_#00d8f0]" />
          <p className="text-[11px] tracking-[0.14em] text-cyan uppercase">{item.when}</p>
          <p className="mt-1 text-sm font-semibold text-ink">{item.title}</p>
          <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
        </li>
      ))}
    </ol>
  );
}

export function YearFigure({ years }: { years: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(reduce ? years : 0);

  useEffect(() => {
    if (reduce) {
      setValue(years);
      return;
    }
    if (!inView) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const next = Math.min(1, (now - start) / 900);
      setValue(Math.round(years * next));
      if (next < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, reduce, years]);

  return (
    <p ref={ref} className="mt-4 flex items-end gap-3">
      <span className="year-glow font-display text-7xl leading-none text-cyan italic sm:text-8xl">{value}</span>
      <span className="mb-2 text-sm tracking-[0.2em] text-cyan uppercase">years</span>
    </p>
  );
}

export function DhakaClock() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
    const paintClock = () => setTime(format());
    paintClock();
    const timer = window.setInterval(paintClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <time dateTime={time}>{time}</time>;
}

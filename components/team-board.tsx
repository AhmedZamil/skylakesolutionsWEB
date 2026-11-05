"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { bench, roster } from "@/lib/about";

export function TeamBoard() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
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
      const next = Math.min(1, (now - start) / 1000);
      setProgress(next);
      if (next < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, reduce]);

  return (
    <div ref={ref}>
      <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {roster.map((item) => (
          <div key={item.role} className="border border-line bg-card px-5 py-4">
            <dt className="text-[11px] tracking-[0.16em] text-faint uppercase">{item.role}</dt>
            <dd className="year-glow mt-2 font-display text-5xl text-cyan italic">{Math.round(item.count * progress)}</dd>
          </div>
        ))}
      </dl>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {bench.map((person) => (
          <li key={person.name} className="border border-line bg-black p-5">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan/40 font-display text-2xl text-cyan italic">
                {person.name.slice(0, 1)}
              </span>
              <div>
                <p className="text-[11px] tracking-[0.16em] text-cyan uppercase">{person.role}</p>
                <p className="mt-1 font-display text-2xl text-ink italic">{person.name}</p>
              </div>
            </div>
            <p className="mt-4">
              <span className="year-glow font-display text-4xl text-cyan italic">{person.years}</span>
              <span className="ml-2 text-[11px] tracking-[0.16em] text-cyan uppercase">years</span>
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {person.stack.map((tool) => (
                <li key={tool} className="border border-line px-2 py-1 text-[10px] tracking-[0.12em] text-ink uppercase">
                  {tool}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

const WORD = [
  { ch: "S", accent: false },
  { ch: "K", accent: false },
  { ch: "Y", accent: false },
  { ch: "L", accent: true },
  { ch: "A", accent: true },
  { ch: "K", accent: true },
  { ch: "E", accent: true },
];

export function IntroName() {
  const [gone, setGone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const skip =
      document.documentElement.dataset.intro === "skip" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (skip) {
      setGone(true);
      return;
    }

    document.documentElement.classList.add("intro-lock");
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const next = Math.min(100, Math.round(((now - started) / 1800) * 100));
      setCount(next);
      if (next < 100) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);

    const finish = window.setTimeout(() => {
      try {
        sessionStorage.setItem("skylake-intro", "1");
      } catch {
        // Private browsing can block storage. The cover still leaves.
      }
      document.documentElement.classList.remove("intro-lock");
      setGone(true);
    }, 3200);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(finish);
      document.documentElement.classList.remove("intro-lock");
    };
  }, []);

  if (gone) return null;

  return (
    <div className="intro-cover fixed inset-0 z-[80] overflow-hidden bg-[#05070c]" aria-hidden="true">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 55%, rgba(0, 216, 240, 0.08), transparent 60%)" }}
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="intro-corner absolute top-5 left-5 md:top-10 md:left-10">
        <p className="flex items-center gap-2 text-[10px] tracking-[0.22em] text-muted uppercase md:text-xs">
          <span className="relative flex h-1.5 w-1.5">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          Sky Lake Solutions
        </p>
        <p className="mt-2 text-[9px] tracking-[0.2em] text-faint uppercase">Software studio</p>
      </div>

      <div className="intro-corner absolute top-5 right-5 text-right md:top-10 md:right-10" style={{ animationDelay: "80ms" }}>
        <p className="text-[9px] tracking-[0.2em] text-faint uppercase">Opening</p>
        <p className="mt-1 text-[9px] tracking-[0.2em] text-faint/70 uppercase">First visit</p>
      </div>

      <div className="intro-corner absolute bottom-5 left-5 md:bottom-10 md:left-10" style={{ animationDelay: "140ms" }}>
        <p className="text-[9px] tracking-[0.2em] text-faint uppercase">Status</p>
        <p className="mt-1 flex items-center gap-2 text-[11px] tracking-[0.18em] text-ink uppercase">
          <span className="h-[5px] w-[5px] rounded-full bg-cyan" />
          Preparing the studio
        </p>
      </div>

      <div className="intro-corner absolute right-5 bottom-5 text-right md:right-10 md:bottom-10" style={{ animationDelay: "200ms" }}>
        <p className="flex items-baseline justify-end gap-2 text-[10px] tracking-[0.2em] text-muted uppercase">
          <span className="text-faint">Loading</span>
          <span className="text-lg text-ink tabular-nums">{String(count).padStart(3, "0")}</span>
          <span className="text-cyan">%</span>
        </p>
        <div className="mt-3 ml-auto h-px w-40 overflow-hidden bg-line md:w-56">
          <div className="intro-bar h-full w-full bg-cyan" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="relative">
          <p className="flex items-baseline font-display leading-none">
            {WORD.slice(0, 3).map((letter, index) => (
              <span
                key={`${letter.ch}-${index}`}
                className="intro-letter inline-block text-ink"
                style={{ fontSize: "clamp(54px, 15vw, 220px)", animationDelay: `${index * 80}ms` }}
              >
                {letter.ch}
              </span>
            ))}
            {WORD.slice(3).map((letter, index) => (
              <span
                key={`${letter.ch}-lake-${index}`}
                className="intro-letter inline-block text-cyan"
                style={{
                  fontSize: "clamp(54px, 15vw, 220px)",
                  animationDelay: `${(index + 3) * 80}ms`,
                  marginLeft: index === 0 ? "0.24em" : undefined,
                }}
              >
                {letter.ch}
              </span>
            ))}
          </p>
          <div className="intro-line absolute right-0 -bottom-4 left-0 h-[3px] bg-cyan md:-bottom-6" />
        </div>
      </div>
    </div>
  );
}

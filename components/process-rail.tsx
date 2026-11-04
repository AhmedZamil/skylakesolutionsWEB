"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { processSteps } from "@/lib/site";

const tones = {
  blue: "#1f6bff",
  cyan: "#00d8f0",
} as const;

function wavePath() {
  const width = processSteps.length * 1000;
  const mid = 230;
  const amp = 70;
  let d = `M 0 ${mid}`;
  const segments = processSteps.length * 2;
  const seg = width / segments;
  for (let i = 0; i < segments; i += 1) {
    const x1 = seg * i + seg / 2;
    const x2 = seg * (i + 1);
    const y1 = mid + (i % 2 === 0 ? -amp : amp);
    d += ` Q ${x1} ${y1} ${x2} ${mid}`;
  }
  return { d, width };
}

function StepCard({ step, peek }: { step: (typeof processSteps)[number]; peek?: boolean }) {
  const color = tones[step.tone];
  return (
    <article className="relative z-10 flex h-full flex-col justify-center px-6 py-10 sm:px-8 md:px-[6vw] md:py-16">
      <span
        aria-hidden="true"
        className="absolute top-8 left-6 hidden h-24 w-px md:left-[6vw] md:block"
        style={{ background: `linear-gradient(to bottom, ${color}, transparent)`, boxShadow: `0 0 16px ${color}80` }}
      />
      <div className="flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.22em] text-faint uppercase md:text-xs">
        <span className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
          {step.week}
        </span>
        <span>
          {step.n} / 0{processSteps.length}
        </span>
      </div>
      <div className="mt-6 grid items-end gap-6 md:grid-cols-[auto_1fr] md:gap-10">
        <div
          className="font-display leading-[0.8] tracking-[-0.03em]"
          style={{
            color,
            fontSize: peek ? undefined : "clamp(7rem, 14vw, 16rem)",
            textShadow: `0 0 60px ${color}40`,
          }}
        >
          <span className={peek ? "text-7xl md:text-[10rem]" : undefined}>{step.n}</span>
        </div>
        <div className="md:pb-4">
          <h2 className="font-display text-4xl leading-none tracking-tight sm:text-5xl md:text-[4.6vw]">{step.title}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:mt-6 md:text-lg">{step.text}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-8 border-t border-line pt-8 md:grid-cols-[1.5fr_1fr] md:gap-14">
        <div>
          <p className="text-[10px] tracking-[0.22em] text-faint uppercase">Deliverables</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {step.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink md:text-base">
                <span className="mt-[0.6em] h-px w-4 shrink-0" style={{ background: color }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.22em] text-faint uppercase">Tools</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {step.tools.map((tool) => (
              <span key={tool} className="border border-line px-3 py-1 text-[10px] tracking-[0.18em] text-muted uppercase">
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-8 hidden items-center gap-3 text-[10px] tracking-[0.22em] text-faint uppercase md:flex">
            <span className="h-px w-8 bg-line" />
            Next · {step.next}
            <span aria-hidden="true">→</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export function ProcessRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const stepRef = useRef(0);
  const dragRef = useRef<{ pointer: number; startX: number; startOffset: number } | null>(null);
  const [step, setStep] = useState(0);
  const wave = wavePath();

  useEffect(() => {
    const rail = railRef.current;
    const track = trackRef.current;
    if (!rail || !track) return;

    const panel = () => rail.clientWidth * 0.8;
    const max = () => panel() * (processSteps.length - 1);

    const paint = (x: number, animate: boolean) => {
      const nextX = Math.min(max(), Math.max(0, x));
      xRef.current = nextX;
      track.style.transition = animate ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" : "none";
      track.style.transform = `translate3d(${-nextX}px, 0, 0)`;
      if (barRef.current) {
        const span = max();
        barRef.current.style.width = `${span === 0 ? 0 : (nextX / span) * 100}%`;
      }
      const index = Math.min(processSteps.length - 1, Math.max(0, Math.round(nextX / Math.max(panel(), 1))));
      stepRef.current = index;
      setStep((current) => (current === index ? current : index));
    };

    const onWheel = (event: WheelEvent) => {
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (delta === 0) return;
      if (xRef.current <= 0 && delta < 0) return;
      if (xRef.current >= max() - 1 && delta > 0) return;
      event.preventDefault();
      paint(xRef.current + delta, false);
    };

    const onResize = () => paint(stepRef.current * panel(), false);
    paint(0, false);
    rail.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", onResize);
    return () => {
      rail.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const go = (index: number) => {
    const rail = railRef.current;
    const track = trackRef.current;
    if (!rail || !track) return;
    const panel = rail.clientWidth * 0.8;
    const clamped = Math.min(processSteps.length - 1, Math.max(0, index));
    const x = clamped * panel;
    xRef.current = x;
    track.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    track.style.transform = `translate3d(${-x}px, 0, 0)`;
    if (barRef.current) barRef.current.style.width = `${(clamped / (processSteps.length - 1)) * 100}%`;
    stepRef.current = clamped;
    setStep(clamped);
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const target = event.target as HTMLElement;
    if (target.closest("button, a")) return;
    dragRef.current = { pointer: event.pointerId, startX: event.clientX, startOffset: xRef.current };
    event.currentTarget.setPointerCapture(event.pointerId);
    if (trackRef.current) trackRef.current.style.transition = "none";
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const rail = railRef.current;
    const track = trackRef.current;
    if (!drag || drag.pointer !== event.pointerId || !rail || !track) return;
    const panel = rail.clientWidth * 0.8;
    const max = panel * (processSteps.length - 1);
    const x = Math.min(max, Math.max(0, drag.startOffset - (event.clientX - drag.startX)));
    xRef.current = x;
    track.style.transform = `translate3d(${-x}px, 0, 0)`;
    if (barRef.current) barRef.current.style.width = `${(x / max) * 100}%`;
    const index = Math.min(processSteps.length - 1, Math.max(0, Math.round(x / panel)));
    stepRef.current = index;
    setStep((current) => (current === index ? current : index));
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current || dragRef.current.pointer !== event.pointerId) return;
    dragRef.current = null;
    const rail = railRef.current;
    if (!rail) return;
    const panel = rail.clientWidth * 0.8;
    go(Math.round(xRef.current / panel));
  };

  return (
    <div>
      <div className="process-stack space-y-12 md:hidden">
        {processSteps.map((item) => (
          <StepCard key={item.n} step={item} peek />
        ))}
      </div>

      <div className="process-rail hidden md:block">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="flex items-center gap-3 text-xs tracking-[0.2em] text-muted uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            Process
          </p>
          <div className="flex items-center gap-4 text-[10px] tracking-[0.22em] text-faint uppercase">
            <span>Drag · scroll →</span>
            <span className="text-line" aria-hidden="true">
              |
            </span>
            <span>
              Step <span className="text-cyan">{processSteps[step].n}</span> / 0{processSteps.length}
            </span>
            <button
              type="button"
              className="border border-line px-2 py-1 hover:border-cyan hover:text-cyan"
              onClick={() => go(step - 1)}
              aria-label="Previous step"
            >
              ←
            </button>
            <button
              type="button"
              className="border border-line px-2 py-1 hover:border-cyan hover:text-cyan"
              onClick={() => go(step + 1)}
              aria-label="Next step"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative mb-8 h-[2px] bg-line" aria-hidden="true">
          <div
            ref={barRef}
            className="h-full w-0 bg-gradient-to-r from-blue via-cyan to-blue"
            style={{ boxShadow: "0 0 12px rgba(31, 107, 255, 0.45)" }}
          />
          {processSteps.map((item, index) => (
            <span
              key={item.n}
              className="absolute top-1/2 h-2 w-px -translate-y-1/2 bg-line-strong"
              style={{ left: `${(index / (processSteps.length - 1)) * 100}%` }}
            >
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.2em] text-faint">
                {item.n}
              </span>
            </span>
          ))}
        </div>

        <div
          ref={railRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="How a Sky Lake engagement runs"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              go(step + 1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              go(step - 1);
            }
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="relative cursor-grab touch-pan-y overflow-hidden outline-none focus-visible:outline focus-visible:outline-cyan active:cursor-grabbing"
        >
          <div
            ref={trackRef}
            className="relative flex will-change-transform"
            style={{ width: `${processSteps.length * 80}%` }}
          >
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox={`0 0 ${wave.width} 460`}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="process-wave" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#1f6bff" />
                  <stop offset="0.55" stopColor="#00d8f0" />
                  <stop offset="1" stopColor="#1f6bff" />
                </linearGradient>
              </defs>
              <path d={wave.d} fill="none" stroke="url(#process-wave)" strokeWidth="3" />
            </svg>
            {processSteps.map((item) => (
              <div key={item.n} className="h-full shrink-0" style={{ width: `${100 / processSteps.length}%` }}>
                <StepCard step={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

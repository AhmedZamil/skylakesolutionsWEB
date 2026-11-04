"use client";

import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/lib/site";

const tones = {
  blue: "#1f6bff",
  cyan: "#00d8f0",
} as const;

const frames = processSteps.length + 1;

function wavePath() {
  const width = frames * 1000;
  const travel = width * 0.9;
  const mid = 230;
  const amp = 78;
  let d = `M 0 ${mid}`;
  const segments = frames * 2;
  const seg = travel / segments;
  for (let i = 0; i < segments; i += 1) {
    const x1 = seg * i + seg / 2;
    const x2 = seg * (i + 1);
    const y1 = mid + (i % 2 === 0 ? -amp : amp);
    d += ` Q ${x1} ${y1} ${x2} ${mid}`;
  }
  return { d, width, mid, amp, segments };
}

const wave = wavePath();

function starPath(cx: number, cy: number, radius: number) {
  const inner = radius * 0.28;
  return `M ${cx} ${cy - radius} L ${cx + inner} ${cy - inner} L ${cx + radius} ${cy} L ${cx + inner} ${cy + inner} L ${cx} ${cy + radius} L ${cx - inner} ${cy + inner} L ${cx - radius} ${cy} L ${cx - inner} ${cy - inner} Z`;
}

function StepCard({ step }: { step: (typeof processSteps)[number] }) {
  const color = tones[step.tone];
  return (
    <article className="relative z-10 flex h-full flex-col justify-center px-6 py-6 sm:px-8 md:px-[5vw]">
      <span
        aria-hidden="true"
        className="absolute top-6 left-6 hidden h-16 w-px md:left-[5vw] md:block"
        style={{ background: `linear-gradient(to bottom, ${color}, transparent)`, boxShadow: `0 0 16px ${color}80` }}
      />
      <div className="flex items-center justify-between gap-4 text-[10px] tracking-[0.22em] text-faint uppercase md:text-xs">
        <span className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
          {step.week}
        </span>
        <span>
          {step.n} / 0{processSteps.length}
        </span>
      </div>
      <div className="mt-4 grid items-end gap-4 md:grid-cols-[auto_1fr] md:gap-8">
        <div
          className="font-display leading-[0.8] tracking-[-0.03em]"
          style={{ color, fontSize: "clamp(5.5rem, 11vw, 12rem)", textShadow: `0 0 48px ${color}55` }}
        >
          {step.n}
        </div>
        <div className="md:pb-2">
          <h2 className="font-display text-4xl leading-none tracking-tight sm:text-5xl">{step.title}</h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted md:text-lg">{step.text}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-6 border-t border-line pt-6 md:grid-cols-[1.5fr_1fr] md:gap-10">
        <div>
          <p className="text-[10px] tracking-[0.22em] text-faint uppercase">Deliverables</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {step.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <span className="mt-[0.6em] h-px w-4 shrink-0" style={{ background: color }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.22em] text-faint uppercase">Tools</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {step.tools.map((tool) => (
              <span key={tool} className="border border-line px-3 py-1 text-[10px] tracking-[0.18em] text-muted uppercase">
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-6 hidden items-center gap-3 text-[10px] tracking-[0.22em] text-faint uppercase md:flex">
            <span className="h-px w-8 bg-line" />
            Next · {step.next}
            <span aria-hidden="true">→</span>
          </p>
        </div>
      </div>
    </article>
  );
}

function Trophy({ lit = false, mark }: { lit?: boolean; mark: string }) {
  const stars = [
    [54, 48, 11],
    [300, 36, 14],
    [28, 150, 8],
    [332, 168, 10],
    [176, 18, 7],
    [70, 330, 9],
    [292, 348, 12],
    [180, 390, 6],
  ] as const;

  return (
    <div
      data-success=""
      className="flex h-full flex-col items-center justify-center px-6 text-center"
      style={{ ["--light" as string]: lit ? 1 : 0 }}
    >
      <svg viewBox="0 0 360 430" className="h-[min(52vh,420px)] w-auto" aria-hidden="true">
        <defs>
          <linearGradient id={mark} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1f6bff" />
            <stop offset="1" stopColor="#00d8f0" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke={`url(#${mark})`}
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{
            filter: "drop-shadow(0 0 calc(var(--light, 0) * 10px) #1f6bff) drop-shadow(0 0 calc(var(--light, 0) * 22px) #00d8f0)",
          }}
        >
          {[
            "M118 78 H242 C252 78 258 90 258 108 V168 C258 230 222 258 180 258 C138 258 102 230 102 168 V108 C102 90 108 78 118 78 Z",
            "M102 114 C58 112 50 176 102 178",
            "M258 114 C302 112 310 176 258 178",
            "M158 258 V304 H202 V258",
            "M116 304 H244 L262 346 H98 Z",
          ].map((d) => (
            <path
              key={d}
              d={d}
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: "calc(1 - var(--light, 0))",
              }}
            />
          ))}
        </g>
        {stars.map(([cx, cy, radius]) => (
          <path
            key={`${cx}-${cy}`}
            d={starPath(cx, cy, radius)}
            fill="#00d8f0"
            style={{
              opacity: "var(--light, 0)",
              transformBox: "fill-box",
              transformOrigin: "center",
              transform: "scale(var(--light, 0))",
            }}
          />
        ))}
      </svg>
      <p
        className="mt-2 text-[11px] tracking-[0.28em] text-muted uppercase"
        style={{ opacity: "var(--light, 0)" }}
      >
        End of process
      </p>
      <p className="font-display text-3xl text-cyan italic" style={{ opacity: "var(--light, 0)" }}>
        Shipped.
      </p>
      <p
        className="mt-3 text-sm tracking-[0.55em] text-cyan"
        style={{ opacity: "var(--light, 0)", textShadow: "0 0 18px rgba(0, 216, 240, 0.8)" }}
      >
        SUCCESS
      </p>
    </div>
  );
}

export function ProcessRail() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const scene = sceneRef.current;
    const view = viewRef.current;
    const track = trackRef.current;
    if (!scene || !view || !track) return;

    let frame = 0;

    const paint = () => {
      frame = 0;
      if (getComputedStyle(scene).display === "none") return;
      const total = Math.max(1, scene.offsetHeight - window.innerHeight);
      const scrolled = Math.min(total, Math.max(0, -scene.getBoundingClientRect().top));
      const progress = scrolled / total;
      const panel = view.clientWidth * 0.8;
      const maxX = panel * (frames - 1);
      track.style.transform = `translate3d(${-progress * maxX}px, 0, 0)`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;

      const trail = trailRef.current;
      if (trail) {
        const length = trail.getTotalLength();
        const drawn = length * progress;
        trail.style.strokeDasharray = `${length}`;
        trail.style.strokeDashoffset = `${length - drawn}`;
        if (dotRef.current && track.offsetWidth > 0 && length > 0) {
          const point = trail.getPointAtLength(drawn);
          const x = (point.x / wave.width) * track.offsetWidth - progress * maxX;
          const y = (point.y / 460) * view.clientHeight;
          dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
          dotRef.current.style.opacity = progress > 0.004 ? "1" : "0";
        }
      }

      const index = Math.min(frames - 1, Math.max(0, Math.round(progress * (frames - 1))));
      if (index !== stepRef.current) {
        stepRef.current = index;
        setStep(index);
      }

      const lightStart = (frames - 2) / (frames - 1);
      const light = Math.min(1, Math.max(0, (progress - lightStart) / (1 - lightStart)));
      const finale = track.querySelector<HTMLElement>("[data-success]");
      if (finale) finale.style.setProperty("--light", light.toFixed(4));
    };

    const requestPaint = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(paint);
    };

    paint();
    const observer = new ResizeObserver(requestPaint);
    observer.observe(view);
    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", requestPaint);
      window.removeEventListener("resize", requestPaint);
    };
  }, []);

  const onSuccess = step >= processSteps.length;

  return (
    <div>
      <div className="process-stack space-y-16 md:hidden">
        {processSteps.map((item) => (
          <StepCard key={item.n} step={item} />
        ))}
        <Trophy lit mark="trophy-stroke-stack" />
      </div>

      <div ref={sceneRef} className="process-rail relative hidden md:block" style={{ height: "520vh" }}>
        <div className="sticky top-0 flex h-dvh flex-col overflow-hidden px-6 pt-20 pb-8 sm:px-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <p className="flex items-center gap-3 text-xs tracking-[0.2em] text-muted uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              Process
            </p>
            <p className="text-[10px] tracking-[0.22em] text-faint uppercase" aria-live="polite">
              Scroll
              <span className="mx-3 text-line" aria-hidden="true">
                |
              </span>
              {onSuccess ? (
                <span className="text-cyan">Success</span>
              ) : (
                <>
                  Step <span className="text-cyan">{processSteps[step].n}</span> / 0{processSteps.length}
                </>
              )}
            </p>
          </div>

          <div className="relative mb-10 h-[3px] bg-line" aria-hidden="true">
            <div
              ref={barRef}
              className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-blue via-cyan to-blue"
              style={{ boxShadow: "0 0 14px #1f6bff, 0 0 22px rgba(0, 216, 240, 0.85)" }}
            />
            {processSteps.map((item, index) => (
              <span
                key={item.n}
                className="absolute top-1/2 h-2 w-px -translate-y-1/2 bg-line-strong"
                style={{ left: `${(index / (frames - 1)) * 100}%` }}
              >
                <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.2em] text-faint">
                  {item.n}
                </span>
              </span>
            ))}
            <span className="absolute top-1/2 right-0 h-2 w-px -translate-y-1/2 bg-line-strong">
              <span className="absolute top-3 right-0 text-[9px] tracking-[0.2em] text-faint">End</span>
            </span>
          </div>

          <div ref={viewRef} className="relative min-h-0 flex-1 overflow-hidden">
            <div
              ref={trackRef}
              className="flex h-full will-change-transform"
              style={{ width: `${frames * 80}%` }}
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
                    <stop offset="0.5" stopColor="#00d8f0" />
                    <stop offset="1" stopColor="#1f6bff" />
                  </linearGradient>
                </defs>
                <filter id="trail-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <path d={wave.d} fill="none" stroke="#1f6bff" strokeWidth="3" opacity="0.18" />
                <path
                  ref={trailRef}
                  d={wave.d}
                  fill="none"
                  stroke="url(#process-wave)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#trail-glow)"
                  style={{ strokeDasharray: 8000, strokeDashoffset: 8000 }}
                />
              </svg>
              {processSteps.map((item) => (
                <div key={item.n} className="h-full shrink-0" style={{ width: `${100 / frames}%` }}>
                  <StepCard step={item} />
                </div>
              ))}
              <div className="h-full shrink-0" style={{ width: `${100 / frames}%` }}>
                <Trophy mark="trophy-stroke-rail" />
              </div>
            </div>
            <div
              ref={dotRef}
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 z-20 h-4 w-4 rounded-full bg-cyan opacity-0 shadow-[0_0_8px_#fff,0_0_18px_#00d8f0,0_0_32px_#1f6bff]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

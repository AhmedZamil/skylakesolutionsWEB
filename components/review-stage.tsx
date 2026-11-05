"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { reviews, upwork, upworkJob } from "@/lib/reviews";

const radius = 52;
const circumference = 2 * Math.PI * radius;

export function ReviewStage() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = reviews[index];
  const turn = (index + 1) / reviews.length;

  useEffect(() => {
    if (reduce || paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [paused, reduce]);

  function step(direction: -1 | 1) {
    setIndex((current) => (current + direction + reviews.length) % reviews.length);
  }

  return (
    <section
      className="border-b border-line px-6 py-16 sm:px-8 sm:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_180px]">
        <div>
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Now reading</p>
          <blockquote className="mt-6">
            <p className="font-display text-4xl leading-[1.05] text-ink italic sm:text-6xl">“{slide.line}”</p>
          </blockquote>
          <p className="mt-8 text-lg font-semibold">{slide.name}</p>
          <p className="mt-1 text-sm text-muted">{slide.role}</p>
          <div className="mt-6 flex gap-1" aria-hidden="true">
            {Array.from({ length: 5 }, (_, star) => (
              <Star key={star} />
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => step(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink hover:border-cyan hover:text-cyan"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => step(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink hover:border-cyan hover:text-cyan"
            >
              →
            </button>
          </div>
        </div>
        <div className="mx-auto w-36">
          <svg viewBox="0 0 120 120" className="h-36 w-36" role="img" aria-label={`Review ${index + 1} of ${reviews.length}`}>
            <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="3" />
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#00d8f0"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - turn)}
              transform="rotate(-90 60 60)"
              style={{ transition: reduce ? "none" : "stroke-dashoffset 700ms ease" }}
            />
            <text x="60" y="56" textAnchor="middle" fill="#00d8f0" fontSize="11" letterSpacing="1.5">
              {index + 1} / {reviews.length}
            </text>
            <text x="60" y="74" textAnchor="middle" fill="#93a0b5" fontSize="8" letterSpacing="1.4">
              REVIEWS
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

export function UpworkPanel() {
  return (
    <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">Upwork · Ahmed Zamil</p>
          <h2 className="mt-3 font-display text-4xl text-cyan italic sm:text-5xl">
            <a href={upwork.href} target="_blank" rel="noreferrer" className="hover:text-ink">
              {upwork.jobs} completed jobs
            </a>
          </h2>
          <p className="mt-4 max-w-md text-muted">
            The public profile shows {upwork.earnings} earned and {upwork.hours} hours across those jobs. This card is the review we can quote. The other seven comments stay on the live profile.
          </p>
          <a
            href={upwork.href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-11 items-center border border-cyan px-5 text-sm font-semibold text-cyan hover:bg-cyan hover:text-black"
          >
            Open the live Upwork profile
          </a>
        </div>
        <JobCard />
      </div>
    </section>
  );
}

function JobCard() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
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
      const next = Math.min(1, (now - start) / 1400);
      setProgress(next);
      if (next < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, reduce]);

  const earned = (upworkJob.earned * progress).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const rate = (upworkJob.rate * progress).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const hours = Math.round(upworkJob.hours * progress).toLocaleString("en-US");

  return (
    <div className="job-slide-wrap overflow-hidden">
      <article ref={ref} className="job-slide border border-cyan/40 bg-card px-6 py-8 shadow-[0_0_40px_rgba(0,216,240,0.08)] sm:px-8">
        <p className="text-[12px] font-semibold tracking-[0.18em] text-cyan uppercase">Client review</p>
        <h3 className="mt-3 font-display text-2xl leading-tight text-ink italic sm:text-3xl">{upworkJob.title}</h3>
        <div className="mt-5 flex items-center gap-3">
          <p className="font-display text-4xl text-cyan italic">{upworkJob.rating}</p>
          <div className="flex gap-1" aria-label="Five stars">
            {Array.from({ length: 5 }, (_, star) => (
              <Star key={star} delay={`${0.4 + star * 0.18}s`} />
            ))}
          </div>
        </div>
        <p className="mt-3 text-sm text-muted">
          {upworkJob.from} – {upworkJob.to}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-ink sm:text-xl">{upworkJob.quote}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {upworkJob.chips.map((chip) => (
            <li key={chip} className="border border-cyan/40 px-3 py-1 text-[12px] tracking-[0.04em] text-cyan">
              {chip}
            </li>
          ))}
        </ul>
        <dl className="mt-8 grid grid-cols-3 gap-3">
          <Metric value={`$${earned}`} label="Earned" />
          <Metric value={`$${rate}/hr`} label="Rate" />
          <Metric value={hours} label="Hours" />
        </dl>
      </article>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-line bg-black px-3 py-4">
      <dt className="font-display text-xl text-cyan italic sm:text-2xl">{value}</dt>
      <dd className="mt-1 text-[10px] tracking-[0.14em] text-faint uppercase">{label}</dd>
    </div>
  );
}

function Star({ delay }: { delay?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={delay ? "star-pop h-5 w-5 text-cyan" : "h-4 w-4 text-cyan"}
      style={delay ? { animationDelay: delay } : undefined}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m10 1.8 2.1 4.6 5 .6-3.7 3.4.9 5-4.3-2.4L5.7 15.4l.9-5L2.9 7l5-.6L10 1.8Z" />
    </svg>
  );
}

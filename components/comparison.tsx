"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const loose = [
  { label: "Tickets", linked: false },
  { label: "Sheets", linked: false },
  { label: "Chat", linked: true },
  { label: "Template", linked: false },
  { label: "Scripts", linked: false },
  { label: "Slides", linked: true },
];

const gaps = ["Misses exceptions", "Low adoption", "No one owns it"];

const steps = [
  "Listen to the workflow",
  "Map the real system",
  "Build the product",
  "Ship in short cycles",
  "Stay on after launch",
];

function Fan({
  seen,
  delay,
  up,
  accent,
}: {
  seen: boolean;
  delay: number;
  up?: boolean;
  accent: string;
}) {
  const xs = [36, 96, 156, 216, 276, 336];
  const d = (x: number) =>
    up ? `M ${x} 78 C ${x} 46, 186 36, 186 6` : `M ${x} 6 C ${x} 34, 186 28, 186 78`;

  return (
    <motion.svg
      viewBox="0 0 372 84"
      className="h-16 w-full"
      fill="none"
      initial={{ opacity: 0 }}
      animate={seen ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay, duration: 0.45 }}
      aria-hidden
    >
      {xs.map((x) => (
        <path key={`base-${x}`} d={d(x)} stroke="rgba(231,238,248,0.16)" strokeWidth="1.2" />
      ))}
      {seen
        ? xs.map((x, index) => (
            <path
              key={`flow-${x}`}
              d={d(x)}
              stroke={accent}
              strokeWidth="1.7"
              className="flow-dash"
              style={{ animationDelay: `${index * 0.16}s` }}
              opacity="0.9"
            />
          ))
        : null}
    </motion.svg>
  );
}

function Chip({
  label,
  linked,
  seen,
  delay,
}: {
  label: string;
  linked: boolean;
  seen: boolean;
  delay: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1.5"
      initial={{ opacity: 0, y: 10 }}
      animate={seen ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease }}
    >
      <motion.span
        className="grid size-5 place-items-center"
        initial={{ scale: 0 }}
        animate={seen ? { scale: 1 } : {}}
        transition={{ delay: delay + 0.12, type: "spring", stiffness: 420, damping: 20 }}
        aria-hidden
      >
        {linked ? (
          <svg viewBox="0 0 20 20" className="size-5 text-cyan">
            <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="M6 10.2l2.4 2.4L14 7.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" className="size-5 text-faint">
            <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="M7 7l6 6M13 7l-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        )}
      </motion.span>
      <div className="flex aspect-square w-full max-w-16 flex-col items-center justify-center border border-line-strong px-1">
        <span className="text-center text-[11px] font-medium text-ink">{label}</span>
      </div>
    </motion.div>
  );
}

export function Comparison() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section ref={ref} className="border-b border-line px-6 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-line">
        <div className="lg:pr-12">
          <h2 className="text-center font-display text-3xl text-[#8ea0b8] italic">A pile of tools</h2>
          <p className="mx-auto mt-3 max-w-sm text-center text-sm leading-relaxed text-muted">
            They sit beside the work. They never quite become the product.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {loose.map((item, index) => (
              <Chip key={item.label} {...item} seen={inView} delay={0.08 * index} />
            ))}
          </div>
          <Fan seen={inView} delay={0.55} accent="#8ea0b8" />
          <motion.div
            className="mx-auto flex w-fit items-center gap-3 border border-line-strong px-4 py-2.5"
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.45 }}
          >
            <span className="text-sm font-semibold text-ink">Tools, not a product</span>
            <span className="text-[13px] text-faint">Stops at the handoff</span>
          </motion.div>
          <ul className="mx-auto mt-6 flex max-w-md flex-col gap-2">
            {gaps.map((gap, index) => (
              <motion.li
                key={gap}
                className="border border-line px-4 py-3 text-sm text-muted"
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.85 + index * 0.08, duration: 0.4 }}
              >
                {gap}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-12">
          <h2 className="text-center font-display text-3xl text-cyan italic">The Sky Lake approach</h2>
          <p className="mx-auto mt-3 max-w-sm text-center text-sm leading-relaxed text-muted">
            We learn how the work actually runs, then build software that fits it.
          </p>
          <ul className="mx-auto mt-6 flex max-w-md flex-col">
            {steps.map((step, index) => (
              <motion.li
                key={step}
                className="flex items-center gap-3 border-b border-line py-3 text-sm text-ink"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.12 * index, duration: 0.45, ease }}
              >
                <span className="grid size-6 place-items-center bg-cyan text-[11px] font-bold text-black">
                  {index + 1}
                </span>
                {step}
              </motion.li>
            ))}
          </ul>
          <div className="mt-4">
            <Fan seen={inView} delay={0.7} accent="#00d8f0" />
          </div>
          <motion.div
            className="mx-auto -mt-1 flex w-fit items-center gap-3 px-4 py-2.5 text-white"
            style={{ background: "linear-gradient(135deg, #1f6bff 0%, #00d8f0 100%)" }}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.85, duration: 0.45 }}
          >
            <span className="font-display text-[15px] italic">Sky Lake builds the product</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const traditional = [
  "A long specification",
  "A quiet build",
  "A reveal at the end",
  "A handover document",
];

const parallel = [
  { title: "Discover", width: "72%" },
  { title: "Design", width: "64%" },
  { title: "Build", width: "88%" },
  { title: "Release", width: "56%" },
];

export function Timeline() {
  return (
    <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-24">
      <div className="max-w-3xl">
        <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Value in releases,
          <span className="mt-1 block font-display font-normal text-cyan italic">not in a long silent build.</span>
        </h2>
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-line">
        <div className="lg:pr-12">
          <h3 className="text-sm font-semibold tracking-[0.16em] text-faint uppercase">One long sequence</h3>
          <p className="mt-2 font-display text-2xl text-muted italic">Months before anyone can use it</p>
          <ol className="mt-8 space-y-4">
            {traditional.map((item, index) => (
              <li key={item} className="flex items-center gap-4 text-muted">
                <span className="w-8 text-sm text-faint">0{index + 1}</span>
                <span className="h-px flex-1 bg-line" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:pl-12">
          <h3 className="text-sm font-semibold tracking-[0.16em] text-cyan uppercase">Sky Lake, in parallel</h3>
          <p className="mt-2 font-display text-2xl text-ink italic">A working slice every sprint</p>
          <ul className="mt-8 space-y-5">
            {parallel.map((item, index) => (
              <li key={item.title}>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{item.title}</span>
                  <span className="text-faint">track {index + 1}</span>
                </div>
                <div className="h-2 bg-line">
                  <motion.div
                    className="h-full origin-left bg-cyan"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, delay: index * 0.12, ease }}
                    style={{ width: item.width }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

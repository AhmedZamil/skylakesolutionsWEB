"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";

const builds = [
  {
    n: "01",
    title: "OTA",
    text: "Search, compare, and book. The fares come from the airlines' own systems, and the price already includes taxes and fees.",
    stack: ["Next.js", ".NET Core", "PostgreSQL"],
    image: "/work/aerotake-results.png",
    alt: "Aerotake flight comparison",
    href: "/work/aerotake",
  },
  {
    n: "02",
    title: "School ERP",
    text: "Students, classes, exams, and attendance, in the education dashboard a school opens after sign-in.",
    stack: ["Odoo", "Python", "PostgreSQL"],
    image: "/work/premier-education.png",
    alt: "Premier School Dhaka education dashboard",
    href: "/work/premier-school-erp",
  },
  {
    n: "03",
    title: "SaaS",
    text: "A product a school can sign in to and run, with the exam window as its own screen.",
    stack: ["Odoo", "Python", "PostgreSQL"],
    image: "/work/premier-exam.png",
    alt: "Premier School exam dashboard",
    href: "/work/premier-school-erp",
  },
] as const;

export function BuildStage() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const active = builds[index];

  return (
    <section className="border-b border-line px-6 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">What we build</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-5xl text-ink italic sm:text-7xl">What we build.</h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted">Move across a line and its screen opens. On a phone, the screen sits under the line.</p>
        </div>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr_0.7fr]">
          <div>
            {builds.map((item, itemIndex) => {
              const on = itemIndex === index;
              return (
                <div key={item.n} className="border-b border-line">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setIndex(itemIndex)}
                    onFocus={() => setIndex(itemIndex)}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="text-[11px] tracking-[0.18em] text-faint">{item.n}</span>
                    <span className={`font-display text-4xl italic sm:text-6xl ${on ? "text-cyan" : "text-ink/70"}`}>{item.title}</span>
                    <span className={`hidden h-px bg-cyan sm:block ${on ? "w-16" : "w-0"}`} style={{ transition: reduce ? "none" : "width 400ms ease" }} />
                  </Link>
                  <div className="overflow-hidden border border-line bg-white lg:hidden">
                    <Image src={item.image} alt={item.alt} width={1200} height={560} className="h-auto w-full" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hidden overflow-hidden rounded-xl border border-line bg-[#070b12] shadow-[0_28px_80px_rgba(0,0,0,0.45)] lg:block">
            <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-[#ff5f57]" />
                <span className="size-2 rounded-full bg-[#febc2e]" />
                <span className="size-2 rounded-full bg-[#28c840]" />
              </span>
              <p className="text-[11px] tracking-[0.22em] text-muted uppercase">{active.title} / Preview</p>
            </div>
            <div className="relative aspect-[16/10] bg-white">
              <Image
                key={active.image}
                src={active.image}
                alt={active.alt}
                fill
                sizes="420px"
                className="object-cover object-top"
                style={{ transition: reduce ? "none" : "opacity 400ms ease" }}
              />
            </div>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-muted">{active.text}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {active.stack.map((tool) => (
                <li key={tool} className="rounded-full border border-line-strong px-3 py-1 text-[11px] tracking-[0.14em] text-ink uppercase">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

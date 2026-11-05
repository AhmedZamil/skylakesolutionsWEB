"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const bars = ["Students", "Teachers", "Classes", "Attendance", "Exams", "Accounts"];
const slices = ["#00d8f0", "#1f6bff", "#7ee7f5", "#3c86f5", "#1248c7", "#9fb4cc"];

export function SchoolCharts() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const [gathered, setGathered] = useState(false);
  const draw = Boolean(reduce) || inView;

  useEffect(() => {
    if (reduce) {
      setGathered(true);
      return;
    }
    if (!inView) return;
    const timer = window.setTimeout(() => setGathered(true), 1600);
    return () => window.clearTimeout(timer);
  }, [inView, reduce]);

  const pie = slices.map((color, index) => `${color} ${index * 60}deg ${(index + 1) * 60}deg`).join(", ");

  return (
    <section ref={ref} className="border-b border-line py-12">
      <p className="text-[12px] font-semibold tracking-[0.22em] text-cyan uppercase">What one ERP holds</p>
      <h2 className="mt-3 font-display text-3xl text-cyan italic sm:text-4xl">The books a school can close.</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        The screens above are Premier School Dhaka. These charts are the benefit of gathering that same work into one ERP. They are not a second copy of the school's totals.
      </p>
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          {bars.map((name, index) => (
            <div key={name} className="mt-4">
              <div className="flex items-center justify-between text-[11px] tracking-[0.14em] text-faint uppercase">
                <span>{name}</span>
                <span>In one register</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden bg-line">
                <div
                  className="h-full bg-cyan transition-[width] duration-700 ease-out"
                  style={{ width: draw ? "100%" : "0%", transitionDelay: `${index * 90}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="relative h-52 w-52">
            <div
              className="absolute inset-0 rounded-full transition-opacity duration-700"
              style={{ background: `conic-gradient(${pie})`, opacity: gathered ? 0 : 1 }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 rounded-full bg-cyan shadow-[0_0_32px_rgba(0,216,240,0.35)] transition-opacity duration-700"
              style={{ opacity: gathered ? 1 : 0 }}
              aria-hidden="true"
            />
            <div className="absolute inset-[22%] flex items-center justify-center rounded-full bg-bg px-3 text-center">
              <p className="font-display text-2xl text-cyan italic">{gathered ? "One ERP" : "Six books"}</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-center text-sm leading-relaxed text-muted">
            {gathered ? "Gathered into one ERP." : "Split across separate books."}
          </p>
        </div>
      </div>
    </section>
  );
}

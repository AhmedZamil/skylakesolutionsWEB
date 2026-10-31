"use client";

import { useState } from "react";
import { filters, projects } from "@/lib/site";

export function ProjectGrid() {
  const [active, setActive] = useState("all");
  const visible = projects.filter((project) => active === "all" || project.cat === active);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label="Filter work" className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const pressed = filter.id === active;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={pressed}
                onClick={() => setActive(filter.id)}
                className={`h-11 cursor-pointer border px-5 text-sm font-semibold transition-colors ${
                  pressed ? "border-cyan bg-cyan text-black" : "border-line-strong text-ink hover:border-cyan"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
        <p className="text-sm text-faint">
          Showing {visible.length} {visible.length === 1 ? "shape" : "shapes"} of work
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <article key={project.title} className="border border-line bg-card transition-colors hover:border-blue">
            <div className="relative h-40 overflow-hidden border-b border-line bg-[#070d16]">
              <div className="absolute top-8 left-8 h-16 w-16 rotate-45 bg-blue/80" />
              <div className="absolute top-14 left-20 h-10 w-10 rotate-12 bg-cyan/90" />
              <p className="absolute right-4 bottom-3 text-[11px] font-semibold tracking-[0.16em] text-faint">STUDIO SHAPE</p>
            </div>
            <div className="space-y-2 p-6">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan">{project.label}</p>
              <h2 className="font-display text-2xl italic">{project.title}</h2>
              <p className="text-sm leading-relaxed text-muted">{project.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LikeNote } from "@/components/like-note";

export function HomeActions() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div ref={ref} className="mt-8">
      <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
        <button type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="chase-link">
          <span className="relative z-[1] m-px inline-flex h-12 items-center bg-bg px-6 text-sm font-semibold text-ink">One Click To Us</span>
        </button>
        <Link href="/team" className="inline-flex h-12 items-center border border-line-strong px-6 text-sm font-semibold hover:border-cyan hover:text-cyan">
          Meet the team
        </Link>
        <Link href="/work" className="inline-flex h-12 items-center border border-line-strong px-6 text-sm font-semibold hover:border-cyan hover:text-cyan">
          Co-founded projects
        </Link>
      </div>
      {open ? <LikeNote inline /> : null}
    </div>
  );
}

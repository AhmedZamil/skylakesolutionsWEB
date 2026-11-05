"use client";

import { useEffect, useRef, useState } from "react";

const hotQuery = "a, button, summary, input, textarea, select, label, [role='button']";

export function SiteCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const hotRef = useRef(false);
  const [active, setActive] = useState(false);
  const [hot, setHot] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const wide = window.matchMedia("(min-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      const next = fine.matches && wide.matches && !reduce.matches;
      setActive(next);
      document.documentElement.classList.toggle("custom-cursor", next);
    };
    sync();
    fine.addEventListener("change", sync);
    wide.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      wide.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let frame = 0;

    const paint = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = window.requestAnimationFrame(paint);
    };

    const move = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      const node = event.target instanceof Element ? event.target : null;
      const nextHot = Boolean(node?.closest(hotQuery));
      if (nextHot !== hotRef.current) {
        hotRef.current = nextHot;
        setHot(nextHot);
      }
    };

    const hide = () => {
      if (dot.current) dot.current.style.opacity = "0";
      if (ring.current) ring.current.style.opacity = "0";
    };
    const show = () => {
      if (dot.current) dot.current.style.opacity = "1";
      if (ring.current) ring.current.style.opacity = "1";
    };

    frame = window.requestAnimationFrame(paint);
    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", hide);
    document.documentElement.addEventListener("mouseenter", show);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", hide);
      document.documentElement.removeEventListener("mouseenter", show);
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <div ref={ring} aria-hidden="true" className="pointer-events-none fixed top-0 left-0 z-[200]">
        <div
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan transition-[width,height] duration-300 ${hot ? "h-16 w-16" : "h-12 w-12"}`}
        />
      </div>
      <div ref={dot} aria-hidden="true" className="pointer-events-none fixed top-0 left-0 z-[201]">
        <div className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_12px_rgba(0,216,240,0.7),0_0_4px_rgba(0,216,240,0.95)]" />
      </div>
    </>
  );
}

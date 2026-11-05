"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const words = "Sky Lake Solutions";

export function BrandName({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const [progress, setProgress] = useState(reduce ? 1 : 0);
  const [done, setDone] = useState(Boolean(reduce));

  useEffect(() => {
    if (reduce) {
      setProgress(1);
      setDone(true);
      return;
    }
    if (!inView || done) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const next = Math.min(1, (now - start) / 1400);
      setProgress(next);
      if (next < 1) frame = window.requestAnimationFrame(tick);
      else setDone(true);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [done, inView, reduce]);

  return (
    <span ref={ref} className={`brand-name ${className}`}>
      <span className="brand-name-text" style={done ? undefined : { clipPath: `inset(0 ${((1 - progress) * 100).toFixed(2)}% 0 0)` }}>
        {words}
      </span>
      {done ? null : (
        <span className="brand-name-bar" style={{ width: `${progress * 100}%` }} aria-hidden="true">
          <span className="brand-name-head" />
        </span>
      )}
    </span>
  );
}

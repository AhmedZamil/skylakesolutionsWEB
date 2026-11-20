"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { GlowPart } from "@/lib/about";

const writeMs = 1400;
const restMs = 15000;

export function GlowLine({ parts }: { parts: readonly GlowPart[] }) {
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(reduce ? 1 : 0);
  const [cycle, setCycle] = useState(0);
  const holding = reduce || progress >= 1;

  useEffect(() => {
    if (reduce) {
      setProgress(1);
      return;
    }
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const elapsed = now - started;
      const turn = Math.floor(elapsed / (writeMs + restMs));
      const into = elapsed % (writeMs + restMs);
      setCycle(turn);
      setProgress(into < writeMs ? into / writeMs : 1);
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [reduce]);

  return (
    <span className={`glow-line ${holding ? "is-holding" : ""}`}>
      <span className="glow-line-text" style={holding ? undefined : { clipPath: `inset(0 ${((1 - progress) * 100).toFixed(2)}% 0 0)` }}>
        {parts.map((part, index) =>
          part.blink === undefined ? (
            <span key={`${part.text}-${index}`}>{part.text}</span>
          ) : (
            <span key={`${cycle}-${part.blink}`} className="glow-blink" style={{ animationDelay: `${part.blink * 0.35}s` }}>
              {part.text}
            </span>
          ),
        )}
      </span>
      {holding ? null : (
        <span className="brand-name-bar" style={{ width: `${progress * 100}%` }} aria-hidden="true">
          <span className="brand-name-head" />
        </span>
      )}
    </span>
  );
}

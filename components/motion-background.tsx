"use client";

import { useEffect, useRef } from "react";

const LIGHTS = [
  { ox: 0.22, oy: 0.28, radius: 0.62, color: "31,107,255", alpha: 0.42, speed: 1, phase: 0.4 },
  { ox: 0.78, oy: 0.42, radius: 0.5, color: "0,216,240", alpha: 0.22, speed: 0.75, phase: 1.7 },
  { ox: 0.48, oy: 0.78, radius: 0.46, color: "18,72,199", alpha: 0.34, speed: 0.55, phase: 2.8 },
];

export function MotionBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let scroll = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const readScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll = max > 0 ? window.scrollY / max : 0;
    };

    const paint = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const motion = media.matches ? 0 : time * 0.00012;
      context.fillStyle = "#05070c";
      context.fillRect(0, 0, width, height);

      for (const light of LIGHTS) {
        const x = (light.ox + Math.sin(motion * light.speed + light.phase) * 0.07 + scroll * 0.12) * width;
        const y = (light.oy + Math.cos(motion * light.speed * 0.8 + light.phase) * 0.06 - scroll * 0.08) * height;
        const radius = light.radius * Math.max(width, height);
        const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${light.color},${light.alpha})`);
        gradient.addColorStop(1, "rgba(5,7,12,0)");
        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);
      }

      if (!media.matches) frame = window.requestAnimationFrame(paint);
    };

    resize();
    readScroll();
    paint(0);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", readScroll, { passive: true });
    const onMotion = () => {
      window.cancelAnimationFrame(frame);
      if (media.matches) paint(0);
      else frame = window.requestAnimationFrame(paint);
    };
    media.addEventListener("change", onMotion);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", readScroll);
      media.removeEventListener("change", onMotion);
    };
  }, []);

  return (
    <div className="motion-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="motion-grain" />
      <div className="motion-wash" />
    </div>
  );
}

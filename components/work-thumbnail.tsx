"use client";

import { useEffect, useRef, useState } from "react";

const SIM_W = 120;
const SIM_H = 60;
const DAMP = 0.9;
const SPLASH_RADIUS = 6;
const SPLASH_POWER = 2.1;

function drawStill(ctx: CanvasRenderingContext2D, width: number, height: number, fontFamily: string) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#070d16";
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.translate(32 + 32, 32 + 32);
  ctx.rotate(Math.PI / 4);
  ctx.fillStyle = "rgba(31, 107, 255, 0.8)";
  ctx.fillRect(-32, -32, 64, 64);
  ctx.restore();

  ctx.save();
  ctx.translate(80 + 20, 56 + 20);
  ctx.rotate((12 * Math.PI) / 180);
  ctx.fillStyle = "rgba(0, 216, 240, 0.9)";
  ctx.fillRect(-20, -20, 40, 40);
  ctx.restore();

  ctx.fillStyle = "#66758c";
  ctx.font = `600 11px ${fontFamily}`;
  ctx.letterSpacing = "0.16em";
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  ctx.fillText("STUDIO SHAPE", width - 16, height - 12);
}

function blendPixel(
  src: Uint8ClampedArray,
  bitmapWidth: number,
  bitmapHeight: number,
  x: number,
  y: number,
  dst: Uint8ClampedArray,
  to: number,
) {
  const maxX = bitmapWidth - 1;
  const maxY = bitmapHeight - 1;
  const cx = x < 0 ? 0 : x > maxX ? maxX : x;
  const cy = y < 0 ? 0 : y > maxY ? maxY : y;
  const x0 = Math.floor(cx);
  const y0 = Math.floor(cy);
  const x1 = x0 < maxX ? x0 + 1 : maxX;
  const y1 = y0 < maxY ? y0 + 1 : maxY;
  const tx = cx - x0;
  const ty = cy - y0;
  const w00 = (1 - tx) * (1 - ty);
  const w10 = tx * (1 - ty);
  const w01 = (1 - tx) * ty;
  const w11 = tx * ty;
  const i00 = (y0 * bitmapWidth + x0) * 4;
  const i10 = (y0 * bitmapWidth + x1) * 4;
  const i01 = (y1 * bitmapWidth + x0) * 4;
  const i11 = (y1 * bitmapWidth + x1) * 4;
  dst[to] = src[i00] * w00 + src[i10] * w10 + src[i01] * w01 + src[i11] * w11;
  dst[to + 1] = src[i00 + 1] * w00 + src[i10 + 1] * w10 + src[i01 + 1] * w01 + src[i11 + 1] * w11;
  dst[to + 2] = src[i00 + 2] * w00 + src[i10 + 2] * w10 + src[i01 + 2] * w01 + src[i11 + 2] * w11;
  dst[to + 3] = 255;
}

function sample(field: Float32Array, x: number, y: number) {
  const cx = Math.min(SIM_W - 1, Math.max(0, x));
  const cy = Math.min(SIM_H - 1, Math.max(0, y));
  const x0 = Math.floor(cx);
  const y0 = Math.floor(cy);
  const x1 = Math.min(SIM_W - 1, x0 + 1);
  const y1 = Math.min(SIM_H - 1, y0 + 1);
  const tx = cx - x0;
  const ty = cy - y0;
  const i00 = y0 * SIM_W + x0;
  const i10 = y0 * SIM_W + x1;
  const i01 = y1 * SIM_W + x0;
  const i11 = y1 * SIM_W + x1;
  return (
    field[i00] * (1 - tx) * (1 - ty) +
    field[i10] * tx * (1 - ty) +
    field[i01] * (1 - tx) * ty +
    field[i11] * tx * ty
  );
}

export function WorkThumbnail() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setLive(fine && !reduce);
  }, []);

  useEffect(() => {
    if (!live) return;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const view = canvas.getContext("2d", { willReadFrequently: true });
    if (!view) return;

    const source = document.createElement("canvas");
    const sourceCtx = source.getContext("2d", { willReadFrequently: true });
    if (!sourceCtx) return;

    let current = new Float32Array(SIM_W * SIM_H);
    let previous = new Float32Array(SIM_W * SIM_H);
    let pointer: { x: number; y: number } | null = null;
    let frame = 0;
    let running = false;
    let sourceData: ImageData | null = null;

    const fontFamily = getComputedStyle(document.body).fontFamily || "sans-serif";

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = wrap.clientWidth;
      const height = wrap.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      source.width = canvas.width;
      source.height = canvas.height;
      sourceCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
      drawStill(sourceCtx, width, height, fontFamily);
      sourceData = sourceCtx.getImageData(0, 0, source.width, source.height);
      paintStill();
    };

    const paintStill = () => {
      if (!sourceData) return;
      view.putImageData(sourceData, 0, 0);
    };

    const splash = (u: number, v: number) => {
      const cx = u * (SIM_W - 1);
      const cy = v * (SIM_H - 1);
      for (let y = Math.floor(cy - SPLASH_RADIUS); y <= Math.ceil(cy + SPLASH_RADIUS); y += 1) {
        if (y < 1 || y >= SIM_H - 1) continue;
        for (let x = Math.floor(cx - SPLASH_RADIUS); x <= Math.ceil(cx + SPLASH_RADIUS); x += 1) {
          if (x < 1 || x >= SIM_W - 1) continue;
          const dist = Math.hypot(x - cx, y - cy);
          if (dist >= SPLASH_RADIUS) continue;
          const falloff = 1 - dist / SPLASH_RADIUS;
          current[y * SIM_W + x] += falloff * falloff * SPLASH_POWER;
        }
      }
    };

    const step = () => {
      const next = previous;
      for (let y = 1; y < SIM_H - 1; y += 1) {
        const row = y * SIM_W;
        for (let x = 1; x < SIM_W - 1; x += 1) {
          const index = row + x;
          next[index] =
            ((current[index - 1] + current[index + 1] + current[index - SIM_W] + current[index + SIM_W]) / 2 -
              previous[index]) *
            DAMP;
        }
      }
      previous = current;
      current = next;
    };

    const displace = () => {
      if (!sourceData) return;
      const bitmapWidth = source.width;
      const bitmapHeight = source.height;
      const src = sourceData.data;
      const out = view.createImageData(bitmapWidth, bitmapHeight);
      const dst = out.data;
      const scale = bitmapWidth / Math.max(wrap.clientWidth, 1);
      const strength = 18 * scale;
      const limit = 14 * scale;

      for (let y = 0; y < bitmapHeight; y += 1) {
        const gy = (y / bitmapHeight) * (SIM_H - 1);
        for (let x = 0; x < bitmapWidth; x += 1) {
          const gx = (x / bitmapWidth) * (SIM_W - 1);
          let shiftX = (sample(current, gx + 1, gy) - sample(current, gx - 1, gy)) * strength;
          let shiftY = (sample(current, gx, gy + 1) - sample(current, gx, gy - 1)) * strength;
          if (shiftX > limit) shiftX = limit;
          else if (shiftX < -limit) shiftX = -limit;
          if (shiftY > limit) shiftY = limit;
          else if (shiftY < -limit) shiftY = -limit;
          blendPixel(src, bitmapWidth, bitmapHeight, x - shiftX, y - shiftY, dst, (y * bitmapWidth + x) * 4);
        }
      }
      view.putImageData(out, 0, 0);
    };

    const energy = () => {
      let max = 0;
      for (let i = 0; i < current.length; i += 6) max = Math.max(max, Math.abs(current[i]));
      return max;
    };

    const tick = () => {
      if (pointer) {
        splash(pointer.x, pointer.y);
        pointer = null;
      }
      step();
      displace();
      if (energy() > 0.02) {
        frame = window.requestAnimationFrame(tick);
      } else {
        running = false;
        current.fill(0);
        previous.fill(0);
        paintStill();
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = window.requestAnimationFrame(tick);
    };

    const local = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      return {
        x: Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)),
        y: Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height)),
      };
    };

    const onMove = (event: PointerEvent) => {
      pointer = local(event);
      start();
    };
    const onLeave = () => {
      pointer = null;
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(wrap);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [live]);

  return (
    <div ref={wrapRef} className="relative h-40 overflow-hidden border-b border-line bg-[#070d16]">
      <div className={live ? "invisible" : undefined} aria-hidden={live}>
        <div className="absolute top-8 left-8 h-16 w-16 rotate-45 bg-blue/80" />
        <div className="absolute top-14 left-20 h-10 w-10 rotate-12 bg-cyan/90" />
        <p className="absolute right-4 bottom-3 text-[11px] font-semibold tracking-[0.16em] text-faint">STUDIO SHAPE</p>
      </div>
      {live ? <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" /> : null}
    </div>
  );
}

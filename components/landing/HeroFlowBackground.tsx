"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { BRAND_GREEN } from "./hero-theme";

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

const brandRgb = hexToRgb(BRAND_GREEN);

type LineDef = {
  base: number;
  amp: number;
  f1: number;
  f2: number;
  speed: number;
  w: number;
  amp2: number;
};

type Particle = {
  line: number;
  u: number;
  speed: number;
  r: number;
  ember: boolean;
};

type FlowVariant = "light" | "dark";

export function HeroFlowBackground({ variant = "light" }: { variant?: FlowVariant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const surface = canvasRef.current;
    if (!surface) return;
    const gl = surface.getContext("2d");
    if (!gl) return;
    const ctx: CanvasRenderingContext2D = gl;

    const lines: LineDef[] = [
      { base: 0.16, amp: 26, f1: 0.006, f2: 0.003, speed: 1.1, w: 0, amp2: 14 },
      { base: 0.36, amp: 34, f1: 0.005, f2: 0.0022, speed: 0.85, w: 1.1, amp2: 18 },
      { base: 0.54, amp: 30, f1: 0.007, f2: 0.0025, speed: 0.95, w: 2, amp2: 12 },
      { base: 0.7, amp: 38, f1: 0.0045, f2: 0.0018, speed: 0.75, w: 0.6, amp2: 16 },
    ];

    const particles: Particle[] = Array.from({ length: 56 }, (_, i) => ({
      line: i % lines.length,
      u: (i * 0.09) % 1,
      speed: 0.35 + (i % 7) * 0.06,
      r: 1 + (i % 5) * 0.45,
      ember: i % 4 === 0,
    }));

    let w = 0;
    let h = 0;
    let raf = 0;
    let start = 0;

    const curveY = (x: number, L: LineDef, t: number) => {
      const y0 = L.base * h;
      return (
        y0 +
        L.amp * Math.sin(x * L.f1 + t * L.speed + L.w) +
        L.amp2 * Math.sin(x * L.f2 - t * L.speed * 0.9 + L.w * 2)
      );
    };

    function setSize(cnv: HTMLCanvasElement, c: CanvasRenderingContext2D) {
      const el = cnv.parentElement;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      cnv.width = w * dpr;
      cnv.height = h * dpr;
      cnv.style.width = `${w}px`;
      cnv.style.height = `${h}px`;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function paint(c: CanvasRenderingContext2D, elapsedMs: number) {
      const t = elapsedMs * 0.001;
      c.clearRect(0, 0, w, h);
      if (!w || !h) return;

      const isLight = variant === "light";
      const lineA = isLight ? 0.48 : 0.42;
      const glowA = isLight ? 0.55 : 0.85;
      const glowBlur = isLight ? 12 : 16;
      const orangeA = isLight ? 0.34 : 0.3;
      const orangeGlow = isLight ? 0.38 : 0.45;
      const particleBoost = isLight ? 1.08 : 1;

      const { r: br, g: bg, b: bb } = brandRgb;

      for (let li = 0; li < lines.length; li++) {
        const L = lines[li];
        c.save();
        c.beginPath();
        for (let x = -24; x <= w + 24; x += 3) {
          const y = curveY(x, L, t);
          if (x <= -24) c.moveTo(x, y);
          else c.lineTo(x, y);
        }
        c.strokeStyle = `rgba(${br}, ${bg}, ${bb}, ${lineA})`;
        c.lineWidth = 1.2;
        c.shadowColor = `rgba(${br}, ${bg}, ${bb}, ${glowA})`;
        c.shadowBlur = glowBlur;
        c.stroke();
        c.restore();
      }

      const Lm = lines[1];
      c.save();
      c.beginPath();
      for (let x = -24; x <= w + 24; x += 4) {
        const y = curveY(x, Lm, t + 2.5) + 18;
        if (x <= -24) c.moveTo(x, y);
        else c.lineTo(x, y);
      }
      c.strokeStyle = `rgba(251, 146, 60, ${orangeA})`;
      c.shadowColor = `rgba(251, 146, 60, ${orangeGlow})`;
      c.shadowBlur = 12;
      c.lineWidth = 1;
      c.stroke();
      c.restore();

      for (const p of particles) {
        p.u += p.speed * 0.00045;
        if (p.u > 1.12) p.u = -0.08;
        const x = p.u * w;
        const Lt = lines[p.line];
        const y = curveY(x, Lt, t) + Math.sin(t * 2 + p.line + p.u * 8) * 2.5;
        const alpha =
          (0.22 + (Math.sin(t * 3 + p.u * 12) * 0.5 + 0.5) * 0.58) * particleBoost;
        const pr = p.ember ? { r: 251, g: 146, b: 60 } : brandRgb;
        c.beginPath();
        c.arc(x, y, p.r, 0, Math.PI * 2);
        c.fillStyle = `rgba(${pr.r}, ${pr.g}, ${pr.b}, ${alpha})`;
        c.shadowColor = `rgba(${pr.r}, ${pr.g}, ${pr.b}, 0.75)`;
        c.shadowBlur = 10;
        c.fill();
      }
    }

    function frame(now: number) {
      if (!start) start = now;
      const elapsed = now - start;
      paint(ctx, elapsed);
      raf = requestAnimationFrame(frame);
    }

    const onResize = () => {
      setSize(surface, ctx);
      if (reduce) paint(ctx, 0);
    };

    setSize(surface, ctx);
    start = 0;
    if (reduce) {
      paint(ctx, 0);
    } else {
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener("resize", onResize);
    const parent = surface.parentElement;
    const ro = parent ? new ResizeObserver(onResize) : null;
    if (parent && ro) ro.observe(parent);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
  }, [reduce, variant]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}

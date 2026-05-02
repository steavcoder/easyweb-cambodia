"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const VIEW_W = 1200;
const TILE_H = 640;

function buildWavyLinePaths(): string[] {
  const lines: string[] = [];
  const count = 52;
  const spacing = TILE_H / count;

  for (let i = 0; i < count; i++) {
    const base = i * spacing + spacing * 0.5;
    const amp = 1.8 + (i % 6) * 0.55;
    const freq = 0.0038 + (i % 9) * 0.00035;
    const phase = i * 0.31;

    let d = "";
    for (let x = 0; x <= VIEW_W; x += 16) {
      const y = base + Math.sin(phase + freq * x) * amp;
      d += x === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    }
    lines.push(d);
  }
  return lines;
}

export function HeroWaterfallBackground() {
  const reduce = useReducedMotion();
  const paths = useMemo(() => buildWavyLinePaths(), []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-white dark:bg-zinc-950" />
      <motion.div
        className="absolute left-0 right-0 top-0 will-change-transform"
        style={{ height: TILE_H * 2 }}
        initial={false}
        animate={reduce ? { y: 0 } : { y: [0, -TILE_H] }}
        transition={
          reduce
            ? undefined
            : { duration: 42, repeat: Infinity, ease: "linear" }
        }
      >
        <svg
          className="h-full w-full text-zinc-200 dark:text-zinc-700/55"
          viewBox={`0 0 ${VIEW_W} ${TILE_H * 2}`}
          preserveAspectRatio="none"
        >
          <g stroke="currentColor" strokeWidth={1} fill="none" strokeLinecap="round">
            {paths.map((d, i) => (
              <path key={`a-${i}`} d={d} />
            ))}
            <g transform={`translate(0 ${TILE_H})`}>
              {paths.map((d, i) => (
                <path key={`b-${i}`} d={d} />
              ))}
            </g>
          </g>
        </svg>
      </motion.div>
      <motion.div
        className="absolute left-0 right-0 top-0 opacity-40 will-change-transform dark:opacity-25"
        style={{ height: TILE_H * 2 }}
        initial={false}
        animate={reduce ? { y: 0 } : { y: [0, -TILE_H] }}
        transition={
          reduce
            ? undefined
            : { duration: 68, repeat: Infinity, ease: "linear" }
        }
      >
        <svg
          className="h-full w-full text-zinc-300/90 dark:text-zinc-600/50"
          viewBox={`0 0 ${VIEW_W} ${TILE_H * 2}`}
          preserveAspectRatio="none"
        >
          <g stroke="currentColor" strokeWidth={0.75} fill="none" strokeLinecap="round">
            {paths.map((d, i) => (
              <path
                key={`c-${i}`}
                d={d}
                transform={`translate(${((i % 5) - 2) * 3}, ${((i % 3) - 1) * 2})`}
              />
            ))}
            <g transform={`translate(0 ${TILE_H})`}>
              {paths.map((d, i) => (
                <path
                  key={`d-${i}`}
                  d={d}
                  transform={`translate(${((i % 5) - 2) * 3}, ${((i % 3) - 1) * 2})`}
                />
              ))}
            </g>
          </g>
        </svg>
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-white dark:from-zinc-950 dark:via-zinc-950/30 dark:to-zinc-950"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      />
    </div>
  );
}

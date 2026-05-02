"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BRAND_GREEN } from "./hero-theme";

const circles = [
  { cx: 52, cy: 48, r: 18, o: 0.95 },
  { cx: 400, cy: 72, r: 12, o: 0.35 },
  { cx: 420, cy: 280, r: 28, o: 0.2 },
  { cx: 80, cy: 300, r: 22, o: 0.25 },
  { cx: 340, cy: 340, r: 14, o: 0.5 },
  { cx: 180, cy: 60, r: 8, o: 0.4 },
  { cx: 260, cy: 320, r: 10, o: 0.35 },
  { cx: 48, cy: 180, r: 6, o: 0.55 },
  { cx: 388, cy: 160, r: 9, o: 0.45 },
];

export function HeroIllustration() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-lg lg:max-w-none">
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {circles.map((c, i) => (
          <motion.circle
            key={i}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            fill={BRAND_GREEN}
            fillOpacity={c.o}
            stroke={BRAND_GREEN}
            strokeOpacity={c.o * 0.9}
            strokeWidth={c.o < 0.4 ? 1.5 : 0}
            initial={false}
            animate={
              reduce
                ? {}
                : {
                    cy: [c.cy, c.cy - 6, c.cy],
                    cx: [c.cx, c.cx + 4, c.cx],
                  }
            }
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          />
        ))}

        <ellipse cx="140" cy="290" rx="88" ry="28" fill="#E8D5C4" opacity="0.85" />
        <ellipse cx="320" cy="300" rx="92" ry="30" fill={BRAND_GREEN} opacity="0.35" />

        <ellipse cx="130" cy="250" rx="48" ry="42" fill="#F4DCC8" />
        <circle cx="130" cy="210" r="36" fill="#FDBA74" />
        <path
          d="M104 214c8-18 22-28 38-28s30 10 38 28"
          stroke="#0f766e"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <rect x="118" y="228" width="44" height="52" rx="10" fill={BRAND_GREEN} />
        <path d="M136 248h28l4 36h-36l4-36z" fill="#115e59" opacity="0.35" />

        <ellipse cx="310" cy="258" rx="52" ry="46" fill="#FDE68A" opacity="0.35" />
        <circle cx="305" cy="195" r="34" fill="#FFEDD5" />
        <path d="M286 188h38c10 0 18 8 18 18v30h-54v-48z" fill="#0d9488" />
        <ellipse cx="305" cy="175" rx="36" ry="32" fill="#1F2937" opacity="0.15" />

        <rect
          x="268"
          y="218"
          width="88"
          height="54"
          rx="8"
          fill="#E5E7EB"
          stroke="#D1D5DB"
        />
        <rect x="278" y="226" width="68" height="34" rx="4" fill="#3B82F6" opacity="0.2" />

        <motion.g
          animate={reduce ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="98" cy="120" r="22" fill="#5EEAD4" opacity="0.95" />
          <path
            d="M98 102v36M84 116l14-10 14 10"
            stroke="#0f766e"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.g>

        <motion.g
          animate={reduce ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <rect x="352" y="108" width="36" height="36" rx="10" fill="#99f6e4" opacity="0.95" />
          <path
            d="M362 128l8 8 16-16"
            stroke="#115e59"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      </svg>
    </div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BRAND_GREEN } from "./hero-theme";
import { HeroFlowBackground } from "./HeroFlowBackground";

type Props = {
  tagline: string;
  line1: string;
  line2: string;
  line3Prefix: string;
  rotatingWords: readonly string[];
  subline: string;
  trustLine?: string;
};

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero({
  tagline,
  line1,
  line2,
  line3Prefix,
  rotatingWords,
  subline,
  trustLine,
}: Props) {
  const reduce = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let cancelled = false;
    const word = rotatingWords[wordIndex % rotatingWords.length] ?? "Inspire";

    const loop = async () => {
      setTyped("");
      await sleep(320);
      if (cancelled) return;

      for (let i = 1; i <= word.length; i++) {
        if (cancelled) return;
        await sleep(78);
        setTyped(word.slice(0, i));
      }

      await sleep(2100);
      if (cancelled) return;

      for (let i = word.length - 1; i >= 0; i--) {
        if (cancelled) return;
        await sleep(42);
        setTyped(word.slice(0, i));
      }

      await sleep(380);
      if (cancelled) return;
      setWordIndex((n) => n + 1);
    };

    void loop();
    return () => {
      cancelled = true;
    };
  }, [wordIndex, rotatingWords]);

  const fadeUp = useMemo(
    () => ({
      hidden: {
        opacity: reduce ? 1 : 0,
        y: reduce ? 0 : 18,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reduce ? 0 : 0.55,
          ease: easeOut,
        },
      },
    }),
    [reduce],
  );

  const headlineStagger = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: reduce ? 0 : 0.1,
          delayChildren: reduce ? 0 : 0.06,
        },
      },
    }),
    [reduce],
  );

  const rootStagger = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: reduce ? 0 : 0.11,
          delayChildren: reduce ? 0 : 0.05,
        },
      },
    }),
    [reduce],
  );

  return (
    <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center overflow-hidden bg-white dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 z-0 min-h-full">
        <HeroFlowBackground variant="light" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(0,150,137,0.09),transparent_55%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(0,150,137,0.16),transparent_55%)]"
        aria-hidden
      />
      <div
        className="hero-noise pointer-events-none absolute inset-0 z-[1] opacity-[0.14] mix-blend-multiply dark:opacity-[0.22] dark:mix-blend-overlay"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white via-transparent to-zinc-50/50 dark:from-black/25 dark:via-transparent dark:to-black/55"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
        <motion.div
          className="max-w-2xl text-left"
          initial="hidden"
          animate="visible"
          variants={rootStagger}
        >
          <motion.p
            className="text-sm font-normal lowercase tracking-wide text-zinc-500 dark:text-zinc-400"
            variants={fadeUp}
          >
            {tagline}
          </motion.p>

          <motion.h1
              className="mt-5 text-balance font-bold tracking-tight text-zinc-900 dark:text-white"
              variants={headlineStagger}
            >
              <motion.span
                className="block text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.05]"
                variants={fadeUp}
              >
                {line1}
              </motion.span>
              <motion.span
                className="mt-1 block text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.05] sm:mt-1.5"
                variants={fadeUp}
              >
                {line2}
              </motion.span>
              <motion.span
                className="mt-1 block min-h-[1.1em] text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.05] sm:mt-1.5"
                variants={fadeUp}
              >
                <span className="text-zinc-900 dark:text-white">{line3Prefix}</span>
                <span className="font-bold" style={{ color: BRAND_GREEN }}>
                  {typed}
                </span>
                <span
                  className="our-process-cursor-blink ml-0.5 inline-block w-[3px] align-middle sm:w-1"
                  style={{
                    height: "0.75em",
                    maxHeight: "0.9em",
                    backgroundColor: BRAND_GREEN,
                  }}
                  aria-hidden
                />
                <span className="font-bold" style={{ color: BRAND_GREEN }}>
                  .
                </span>
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-lg text-pretty text-base leading-relaxed text-zinc-600 sm:mt-10 sm:text-lg dark:text-zinc-400"
              variants={fadeUp}
            >
              {subline}
            </motion.p>
            <motion.div
              className="mt-9 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center sm:max-w-none"
              variants={fadeUp}
            >
              <Link
                href="#service-showcase"
                className="inline-flex h-12 w-full items-center justify-center rounded-full px-8 text-base font-semibold text-white shadow-[0_14px_40px_-12px_rgba(0,150,137,0.45)] transition hover:brightness-110 sm:h-14 sm:w-auto sm:min-w-[180px] sm:px-10"
                style={{ backgroundColor: BRAND_GREEN }}
              >
                Get Started
              </Link>
              <Link
                href="#contact"
                className="btn-contact-outline group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-8 text-base font-semibold shadow-sm sm:h-14 sm:w-auto sm:min-w-[180px] sm:px-10 dark:shadow-none"
              >
                Contact Now
                <ArrowRight
                  className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2.25}
                  aria-hidden
                />
              </Link>
            </motion.div>
            {trustLine ? (
              <motion.p
                className="mt-6 text-sm text-zinc-400 dark:text-zinc-500"
                variants={fadeUp}
              >
                {trustLine}
              </motion.p>
            ) : null}
        </motion.div>
      </div>
    </section>
  );
}

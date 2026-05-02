"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BRAND_GREEN } from "./hero-theme";
import { siteConfig } from "./site-config";

const cfg = siteConfig.process;

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

type Props = {
  /** Where the bottom-right arrow navigates */
  scrollTargetHref?: string;
};

export function Process({ scrollTargetHref = "/#services" }: Props) {
  const words = cfg.rotatingWords;
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let cancelled = false;
    const word = words[wordIndex % words.length];

    const loop = async () => {
      setText("");
      await sleep(320);
      if (cancelled) return;

      for (let i = 1; i <= word.length; i++) {
        if (cancelled) return;
        await sleep(78);
        setText(word.slice(0, i));
      }

      await sleep(2100);
      if (cancelled) return;

      for (let i = word.length - 1; i >= 0; i--) {
        if (cancelled) return;
        await sleep(42);
        setText(word.slice(0, i));
      }

      await sleep(380);
      if (cancelled) return;
      setWordIndex((n) => n + 1);
    };

    void loop();
    return () => {
      cancelled = true;
    };
  }, [wordIndex]);

  return (
    <section
      id="our-process"
      className="relative scroll-mt-20 bg-zinc-50 px-4 py-12 dark:bg-zinc-950 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-5xl pr-12 sm:pr-14">
        <h2
          className="text-sm font-semibold uppercase tracking-wider dark:opacity-90"
          style={{ color: BRAND_GREEN }}
        >
          {cfg.eyebrow}
        </h2>
        <p className="mt-2 max-w-2xl text-pretty text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {cfg.title}
        </p>
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-zinc-600 dark:text-zinc-400">
          {cfg.helper}
        </p>

        <div className="mt-8 max-w-4xl space-y-2 text-left sm:mt-10">
          <p className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            {cfg.line1}
          </p>
          <p className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            {cfg.line2}
          </p>
          <p className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-zinc-900 dark:text-white">We </span>
            <span className="font-bold" style={{ color: BRAND_GREEN }}>
              {text}
            </span>
            <span
              className="our-process-cursor-blink ml-0.5 inline-block w-[3px] align-middle md:w-1"
              style={{
                height: "0.85em",
                backgroundColor: BRAND_GREEN,
              }}
              aria-hidden
            />
            <span className="font-bold" style={{ color: BRAND_GREEN }}>
              .
            </span>
          </p>
        </div>
      </div>

      <Link
        href={scrollTargetHref}
        className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center"
        style={{ color: BRAND_GREEN }}
        aria-label="Continue to services"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" strokeWidth={2} />
      </Link>
    </section>
  );
}

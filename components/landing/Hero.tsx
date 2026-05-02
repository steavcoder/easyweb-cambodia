import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BRAND_GREEN } from "./hero-theme";
import { HeroIllustration } from "./HeroIllustration";

type Props = {
  headlineBefore: string;
  headlineHighlight: string;
  headlineAfter: string;
  subline: string;
  trustLine?: string;
};

export function Hero({
  headlineBefore,
  headlineHighlight,
  headlineAfter,
  subline,
  trustLine,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-xl">
            <h1 className="text-balance text-4xl font-bold leading-[1.15] tracking-tight text-zinc-900 sm:text-5xl lg:text-[2.75rem] xl:text-[3.15rem] dark:text-white">
              <span>{headlineBefore}</span>
              <span style={{ color: BRAND_GREEN }}>{headlineHighlight}</span>
              <span>{headlineAfter}</span>
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
              {subline}
            </p>
            <div className="mt-9 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center sm:max-w-none">
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
            </div>
            {trustLine ? (
              <p className="mt-6 text-sm text-zinc-400 dark:text-zinc-500">{trustLine}</p>
            ) : null}
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

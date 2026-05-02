import { ArrowRight, Laptop, LayoutDashboard, Smartphone, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { BRAND_GREEN } from "./hero-theme";

type IconName = "laptop" | "smartphone" | "sparkles" | "layout";

type Item = {
  title: string;
  description?: string;
  bullets?: readonly string[];
  icon: IconName;
  iconBg: string;
};

type Props = {
  titleBefore: string;
  titleHighlight: string;
  subtitle: string;
  items: readonly Item[];
};

const iconMap: Record<IconName, LucideIcon> = {
  laptop: Laptop,
  smartphone: Smartphone,
  sparkles: Sparkles,
  layout: LayoutDashboard,
};

export function ServiceShowcase({ titleBefore, titleHighlight, subtitle, items }: Props) {
  return (
    <section
      id="service-showcase"
      className="scroll-mt-20 border-b border-zinc-100 bg-white px-4 py-16 sm:px-6 sm:py-20 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          <span>{titleBefore}</span>
          <span style={{ color: BRAND_GREEN }}>{titleHighlight}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-zinc-500 sm:text-lg dark:text-zinc-400">
          {subtitle}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.12)] dark:border-zinc-800 dark:bg-zinc-900/80"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  {item.title}
                </h3>
                {item.bullets && item.bullets.length > 0 ? (
                  <ul className="mt-3 flex-1 space-y-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {item.bullets.map((line) => (
                      <li key={line} className="flex gap-2.5">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: BRAND_GREEN }}
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {item.description ?? ""}
                  </p>
                )}
                <Link
                  href="#contact"
                  className="group mt-6 inline-flex w-fit items-center justify-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                  style={{ backgroundColor: BRAND_GREEN }}
                >
                  Read More
                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

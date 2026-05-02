import {
  BadgePercent,
  Handshake,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BRAND_GREEN } from "./hero-theme";

type IconName = "thumbsUp" | "handshake" | "badgePercent" | "shield";

type Card = {
  title: string;
  detail: string;
  icon: IconName;
};

type Props = {
  heading: string;
  subtitle: string;
  cards: readonly Card[];
};

const iconMap: Record<IconName, LucideIcon> = {
  thumbsUp: ThumbsUp,
  handshake: Handshake,
  badgePercent: BadgePercent,
  shield: ShieldCheck,
};

export function WhyUs({ heading, subtitle, cards }: Props) {
  return (
    <section
      id="why"
      className="scroll-mt-20 border-t border-zinc-200/80 bg-zinc-50/90 px-4 py-16 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-zinc-500 sm:text-base dark:text-zinc-400">
          {subtitle}
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <li
                key={item.title}
                className="flex flex-col items-center rounded-3xl border-2 border-teal-200/90 bg-teal-50/90 px-5 pb-8 pt-8 text-center shadow-sm dark:border-teal-800/55 dark:bg-teal-950/35"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)] dark:bg-zinc-900 dark:shadow-none">
                  <Icon
                    className="h-8 w-8"
                    strokeWidth={1.75}
                    style={{ color: BRAND_GREEN }}
                    aria-hidden
                  />
                </span>
                <h3 className="mt-5 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.detail}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

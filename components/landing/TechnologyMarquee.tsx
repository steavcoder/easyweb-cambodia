import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { BRAND_SURFACE_GRADIENT } from "./hero-theme";

export type TechnologyStackItem = {
  name: string;
  /** e.g. Simple Icons CDN URL */
  icon: string;
};

export type TechnologySectionConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  rowTowardRight: readonly TechnologyStackItem[];
  rowTowardLeft: readonly TechnologyStackItem[];
};

type Props = {
  config: TechnologySectionConfig;
};

function MarqueeDots() {
  return (
    <div className="flex justify-center gap-2 pt-4" aria-hidden>
      <span className="h-2 w-2 rounded-full bg-white/35" />
      <span className="h-2 w-2 rounded-full bg-white" />
      <span className="h-2 w-2 rounded-full bg-white/35" />
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: readonly TechnologyStackItem[];
  direction: "right" | "left";
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative px-2 sm:px-4">
      <ChevronLeft
        className="pointer-events-none absolute left-0 top-1/2 z-10 h-8 w-8 -translate-y-1/2 text-white/90 sm:h-9 sm:w-9"
        strokeWidth={2.25}
        aria-hidden
      />
      <ChevronRight
        className="pointer-events-none absolute right-0 top-1/2 z-10 h-8 w-8 -translate-y-1/2 text-white/90 sm:h-9 sm:w-9"
        strokeWidth={2.25}
        aria-hidden
      />

      <div className="tech-marquee-fade overflow-hidden py-1 sm:py-2">
        <div
          className={`tech-marquee-track ${
            direction === "right" ? "tech-marquee-row--right" : "tech-marquee-row--left"
          }`}
        >
          {doubled.map((item, i) => (
            <div
              key={`${item.name}-${item.icon}-${i}`}
              className="flex h-[104px] min-w-[140px] shrink-0 flex-col items-center justify-center gap-2 rounded-2xl bg-white px-3 py-3 text-center shadow-[0_8px_30px_-8px_rgba(0,0,0,0.25)] sm:h-[118px] sm:min-w-[160px] sm:px-4"
            >
              <Image
                src={item.icon}
                alt=""
                width={40}
                height={40}
                unoptimized
                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
              />
              <span className="line-clamp-2 text-xs font-semibold leading-tight tracking-tight text-zinc-800 sm:text-sm">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <MarqueeDots />
    </div>
  );
}

export function TechnologyMarquee({ config }: Props) {
  return (
    <section
      id="technology"
      className="scroll-mt-20 px-4 py-14 text-white sm:px-6 sm:py-16"
      style={{ background: BRAND_SURFACE_GRADIENT }}
    >
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-100/95">
            {config.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {config.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-white/85 sm:text-base">
            {config.subtitle}
          </p>
        </header>

        <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
          <MarqueeRow items={config.rowTowardRight} direction="right" />
          <MarqueeRow items={config.rowTowardLeft} direction="left" />
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_SURFACE_GRADIENT } from "./hero-theme";

type Stat = { value: string; label: string };

type Props = {
  headline: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  stats: readonly Stat[];
  cta: { label: string; href: string };
};

export function About({ headline, body, imageSrc, imageAlt, stats, cta }: Props) {
  return (
    <section
      id="about"
      className="scroll-mt-20 px-4 py-16 text-white sm:px-6 sm:py-20"
      style={{ background: BRAND_SURFACE_GRADIENT }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white/10 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.35)] ring-2 ring-white/25">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {headline}
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
            {body}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="text-3xl font-bold tabular-nums text-white sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-white/80 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <Link
            href={cta.href}
            className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full border-2 border-white bg-white/10 px-7 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-[color:var(--brand-green)]"
          >
            {cta.label}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2.25}
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { BRAND_GREEN } from "./hero-theme";

type Item = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: readonly Item[];
};

export function Portfolio({ eyebrow, title, subtitle, items }: Props) {
  return (
    <section id="portfolio" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-sm font-semibold uppercase tracking-wider dark:opacity-90"
          style={{ color: BRAND_GREEN }}
        >
          {eyebrow}
        </h2>
        <p className="mt-2 max-w-2xl text-pretty text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
          {subtitle}
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {items.map((item) => (
            <figure
              key={item.title}
              className="overflow-hidden rounded-2xl border border-teal-950/10 bg-zinc-50 shadow-sm dark:border-teal-500/10 dark:bg-zinc-900/50"
            >
              <div className="relative aspect-[1200/750] w-full bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

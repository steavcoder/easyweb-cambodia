import { BRAND_GREEN } from "./hero-theme";

type Package = {
  name: string;
  price: number;
  description: string;
  highlights: readonly string[];
  featured?: boolean;
};

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  packages: readonly Package[];
};

export function Services({ eyebrow, title, subtitle, packages }: Props) {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-y border-teal-950/10 bg-teal-50/40 px-4 py-16 dark:border-teal-500/10 dark:bg-teal-950/20 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <header className="text-center">
          <h2
            className="text-sm font-semibold uppercase tracking-wider dark:opacity-90"
            style={{ color: BRAND_GREEN }}
          >
            {eyebrow}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-pretty text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </header>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={
                pkg.featured
                  ? "relative flex flex-col rounded-2xl border-2 border-teal-600 bg-white p-6 shadow-lg dark:border-teal-500 dark:bg-teal-950/60"
                  : "flex flex-col rounded-2xl border border-teal-800/10 bg-white p-6 shadow-sm dark:border-teal-500/15 dark:bg-zinc-900/80"
              }
            >
              {pkg.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-3 py-0.5 text-xs font-semibold text-white dark:bg-teal-500">
                  Popular
                </span>
              ) : null}
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{pkg.name}</h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-sm font-medium text-zinc-500">USD</span>
                <span className="text-4xl font-bold tracking-tight text-teal-800 dark:text-teal-300">
                  ${pkg.price}
                </span>
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {pkg.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-teal-600 dark:text-teal-400">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

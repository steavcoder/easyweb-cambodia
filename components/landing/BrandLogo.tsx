import Link from "next/link";
import { BRAND_GREEN } from "./hero-theme";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span
      className={`relative flex shrink-0 items-center justify-center ${className}`}
      aria-hidden
    >
      <span
        className="absolute h-5 w-5 rounded-full opacity-90"
        style={{ backgroundColor: BRAND_GREEN, transform: "translate(-4px, 2px)" }}
      />
      <span
        className="absolute h-5 w-5 rounded-full opacity-80"
        style={{ backgroundColor: BRAND_GREEN, transform: "translate(4px, -2px)" }}
      />
      <span
        className="absolute h-5 w-5 rounded-full opacity-100"
        style={{ backgroundColor: BRAND_GREEN, transform: "translate(0, -4px)" }}
      />
    </span>
  );
}

export function BrandLockup({
  brand,
  className,
}: {
  brand: string;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`flex min-w-0 items-center gap-2 text-zinc-900 dark:text-zinc-50 sm:gap-2.5 ${className ?? ""}`}
    >
      <LogoMark className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
      <span className="truncate text-sm font-bold tracking-tight sm:text-base" title={brand}>
        {brand}
      </span>
    </Link>
  );
}

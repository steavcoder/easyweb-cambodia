import Image from "next/image";
import Link from "next/link";

export type LogoAssets = {
  webSrc: string;
  mobileSrc: string;
  alt?: string;
};

/**
 * @param priority - set true in the sticky header for LCP (first paint)
 * @param variant - `header` = nav bar lockup (capped width to avoid overlapping centered menus); `default` = footer / inline
 */
export function BrandLockup({
  brand,
  logo,
  className,
  priority = false,
  variant = "default",
}: {
  brand: string;
  logo: LogoAssets;
  className?: string;
  priority?: boolean;
  variant?: "default" | "header";
}) {
  const alt = logo.alt ?? brand;
  const isHeader = variant === "header";

  return (
    <Link
      href="/"
      className={`flex min-w-0 items-center text-zinc-900 dark:text-zinc-50 ${className ?? ""}`}
    >
      <span className="block md:hidden">
        <Image
          src={logo.mobileSrc}
          alt={alt}
          width={isHeader ? 360 : 320}
          height={isHeader ? 80 : 72}
          className={
            isHeader
              ? "h-12 w-auto max-w-[min(320px,calc(100vw-9.5rem))] object-contain object-left sm:h-14"
              : "h-12 w-auto max-w-[min(320px,calc(100vw-9rem))] object-contain object-left sm:h-14"
          }
          sizes={
            isHeader
              ? "(max-width: 767px) min(320px, calc(100vw - 9.5rem)), 0"
              : "(max-width: 767px) min(320px, calc(100vw - 9rem)), 0"
          }
          priority={priority}
        />
      </span>
      <span className="hidden md:block">
        <Image
          src={logo.webSrc}
          alt={alt}
          width={isHeader ? 600 : 440}
          height={isHeader ? 110 : 80}
          className={
            isHeader
              ? "h-14 w-auto max-w-full object-contain object-left md:h-16 lg:h-[4.5rem] lg:max-w-[min(480px,100%)] xl:h-20 xl:max-w-[min(520px,100%)]"
              : "h-14 w-auto max-w-[min(400px,44vw)] object-contain object-left md:h-16 lg:max-w-[min(460px,38vw)]"
          }
          sizes={
            isHeader
              ? "(min-width: 1280px) 520px, (min-width: 768px) min(480px, 32vw), 0"
              : "(min-width: 768px) min(460px, 38vw), 0"
          }
          priority={priority}
        />
      </span>
      <span className="sr-only">{brand}</span>
    </Link>
  );
}

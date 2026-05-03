import Image from "next/image";
import Link from "next/link";

/** Match `public/easyweb-mobile.png` (square mark) */
const MOBILE_LOGO_PX = { w: 402, h: 404 } as const;
/** Match `public/easyweb-logo.png` (horizontal wordmark) */
const WEB_LOGO_PX = { w: 912, h: 226 } as const;

export type LogoAssets = {
  webSrc: string;
  mobileSrc: string;
  alt?: string;
};

/**
 * @param priority - set true in the sticky header for LCP (first paint)
 * @param variant - `header` enables LCP `priority` on the sticky nav; sizing matches `default` (footer)
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

  /** Same scale as footer — header only adds `priority` for LCP */
  const mobileClass =
    "h-11 w-auto max-h-11 max-w-[min(11rem,calc(100vw-9rem))] object-contain object-left sm:h-12 sm:max-h-12";
  const webClass =
    "h-14 w-auto max-w-[min(400px,44vw)] object-contain object-left md:h-16 lg:max-w-[min(460px,38vw)]";

  return (
    <Link
      href="/"
      className={`flex w-fit max-w-full min-w-0 shrink-0 items-center text-zinc-900 dark:text-zinc-50 ${className ?? ""}`}
    >
      <span className="block md:hidden">
        <Image
          src={logo.mobileSrc}
          alt={alt}
          width={MOBILE_LOGO_PX.w}
          height={MOBILE_LOGO_PX.h}
          className={mobileClass}
          sizes="(max-width: 767px) 144px, 0px"
          priority={isHeader && priority}
        />
      </span>
      <span className="hidden md:block">
        <Image
          src={logo.webSrc}
          alt={alt}
          width={WEB_LOGO_PX.w}
          height={WEB_LOGO_PX.h}
          className={webClass}
          sizes="(min-width: 768px) min(460px, 38vw), 0px"
          priority={isHeader && priority}
        />
      </span>
      <span className="sr-only">{brand}</span>
    </Link>
  );
}

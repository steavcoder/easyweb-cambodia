"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLockup, type LogoAssets } from "./BrandLogo";
import { BRAND_GREEN } from "./hero-theme";

type Props = { brand: string; logo: LogoAssets };

const nav: { href: string; label: string; activeOn?: (path: string) => boolean }[] = [
  { href: "/", label: "Home", activeOn: (p) => p === "/" },
  { href: "/about", label: "About Us", activeOn: (p) => p === "/about" },
  { href: "/services", label: "Services", activeOn: (p) => p === "/services" },
  { href: "/portfolio", label: "Portfolio", activeOn: (p) => p === "/portfolio" },
  {
    href: "/pricing",
    label: "Pricing",
    activeOn: (p) => p === "/pricing" || p === "/packages",
  },
  { href: "/contact", label: "Contact Us", activeOn: (p) => p === "/contact" },
];

export function SiteHeader({ brand, logo }: Props) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95">
      {/* Mobile: logo | actions. md+: three columns — logo | nav | CTA (no overlap) */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 px-4 py-3.5 sm:gap-x-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-6 md:py-5">
        <div className="min-w-0 justify-self-start">
          <BrandLockup variant="header" brand={brand} logo={logo} priority />
        </div>

        <nav className="hidden md:col-start-2 md:flex md:items-center md:justify-self-center md:gap-1 lg:gap-2">
          {nav.map((item) => {
            const active = item.activeOn ? item.activeOn(pathname) : false;
            return (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={
                  active
                    ? "rounded-full px-3 py-2 text-sm font-semibold"
                    : "rounded-full px-3 py-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
                }
                style={active ? { color: BRAND_GREEN } : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="col-start-2 flex shrink-0 items-center justify-self-end gap-2 md:col-start-3">
          <Link
            href="/contact"
            className="btn-contact-outline group inline-flex items-center justify-center gap-1 rounded-full px-3 py-2 text-xs font-semibold shadow-sm whitespace-nowrap sm:gap-1.5 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Get a Quote
            <ArrowRight
              className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 sm:h-4 sm:w-4"
              strokeWidth={2.25}
              aria-hidden
            />
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-800 transition hover:bg-zinc-50 md:hidden dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-zinc-100 bg-white px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = item.activeOn ? item.activeOn(pathname) : false;
              return (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className={`block rounded-xl px-3 py-3 text-base font-medium ${
                      active
                        ? "bg-teal-50 font-semibold dark:bg-teal-950/50"
                        : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-900"
                    }`}
                    style={active ? { color: BRAND_GREEN } : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { BRAND_GREEN } from "./hero-theme";

type Props = {
  title: string;
  body: string;
  buttonLabel: string;
  href: string;
};

export function CtaSection({ title, body, buttonLabel, href }: Props) {
  return (
    <section
      id="cta"
      className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20"
      style={{ backgroundColor: BRAND_GREEN }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
          {body}
        </p>
        <Link
          href={href}
          className="mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-10 text-base font-semibold shadow-lg transition hover:bg-zinc-100"
          style={{ color: BRAND_GREEN }}
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2} aria-hidden />
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

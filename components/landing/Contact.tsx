import { Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { BRAND_GREEN } from "./hero-theme";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const btnOutline =
  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border-2 bg-white px-4 text-sm font-semibold shadow-sm transition hover:bg-zinc-50 sm:h-14 sm:min-h-[3.5rem] sm:min-w-[200px] sm:w-auto sm:flex-1 sm:px-6 dark:bg-zinc-900 dark:hover:bg-zinc-800";

const btnSolid =
  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-white shadow-md transition hover:brightness-110 sm:h-14 sm:min-h-[3.5rem] sm:min-w-[200px] sm:w-auto sm:flex-1 sm:px-6";

type Props = {
  title: string;
  subtitle: string;
  email: string;
  telegram: string;
  phoneDisplay: string;
  phoneTel: string;
  facebook: string;
};

export function Contact({
  title,
  subtitle,
  email,
  telegram,
  phoneDisplay,
  phoneTel,
  facebook,
}: Props) {
  const telHref = phoneTel.replace(/[^\d+]/g, "");

  return (
    <section id="contact" className="scroll-mt-20 px-4 pb-16 pt-8 sm:px-6 sm:pb-28 sm:pt-10">
      <div className="mx-auto w-full max-w-5xl">
        <h2
          className="text-sm font-semibold uppercase tracking-wider dark:opacity-90"
          style={{ color: BRAND_GREEN }}
        >
          Contact
        </h2>
        <p className="mt-2 max-w-xl text-pretty text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
          {title}
        </p>
        <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
          {subtitle}
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href={`mailto:${email}`}
            className={btnOutline}
            style={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }}
          >
            <Mail className="h-5 w-5 shrink-0" aria-hidden />
            Email
          </a>
          <Link
            href={telegram}
            target="_blank"
            rel="noopener noreferrer"
            className={btnSolid}
            style={{ backgroundColor: BRAND_GREEN }}
          >
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
            Telegram
          </Link>
          <Link
            href={`tel:${telHref}`}
            className={`${btnOutline} tabular-nums tracking-tight`}
            style={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }}
          >
            <Phone className="h-5 w-5 shrink-0" aria-hidden />
            <span className="min-w-0 text-center">{phoneDisplay}</span>
          </Link>
          <Link
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={btnSolid}
            style={{ backgroundColor: BRAND_GREEN }}
          >
            <FacebookIcon className="h-5 w-5 shrink-0 text-white" />
            <span className="sm:hidden">Facebook</span>
            <span className="hidden sm:inline">Facebook page</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

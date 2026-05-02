import { Process } from "@/components/landing/Process";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { siteConfig } from "@/components/landing/site-config";

type Props = {
  /** Default: scroll to pricing packages on the homepage */
  scrollTargetHref?: string;
};

export function ProcessPage({ scrollTargetHref = "/#services" }: Props) {
  return (
    <div className="flex min-h-full flex-col bg-white dark:bg-zinc-950">
      <SiteHeader brand={siteConfig.brand} />
      <main className="flex-1">
        <Process scrollTargetHref={scrollTargetHref} />
      </main>
      <SiteFooter
        brand={siteConfig.brand}
        tagline={siteConfig.footer.tagline}
        quickLinks={siteConfig.footer.quickLinks}
        email={siteConfig.contact.email}
        telegram={siteConfig.contact.telegram}
        whatsapp={siteConfig.contact.whatsapp}
        facebook={siteConfig.contact.facebook}
      />
    </div>
  );
}

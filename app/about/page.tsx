import { About } from "@/components/landing/About";
import { CtaSection } from "@/components/landing/CtaSection";
import { siteConfig } from "@/components/landing/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — EasyWeb Cambodia",
  description:
    "Discovery to launch: clear scope, modern tooling, and outcomes you can measure for teams in Cambodia and beyond.",
};

export default function AboutPage() {
  return (
    <>
      <About
        headline={siteConfig.about.headline}
        body={siteConfig.about.body}
        imageSrc={siteConfig.about.imageSrc}
        imageAlt={siteConfig.about.imageAlt}
        stats={siteConfig.about.stats}
        cta={siteConfig.about.cta}
      />
      <CtaSection
        title={siteConfig.ctaBand.title}
        body={siteConfig.ctaBand.body}
        buttonLabel={siteConfig.ctaBand.buttonLabel}
        href={siteConfig.ctaBand.href}
      />
    </>
  );
}

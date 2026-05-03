import { CtaSection } from "@/components/landing/CtaSection";
import { Portfolio } from "@/components/landing/Portfolio";
import { siteConfig } from "@/components/landing/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — EasyWeb Cambodia",
  description:
    "Sample layouts and demos — replace with real project screenshots and case studies as you ship work.",
};

export default function PortfolioPage() {
  return (
    <>
      <Portfolio
        eyebrow={siteConfig.portfolioSection.eyebrow}
        title={siteConfig.portfolioSection.title}
        subtitle={siteConfig.portfolioSection.subtitle}
        items={siteConfig.portfolio}
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

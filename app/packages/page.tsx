import { CtaSection } from "@/components/landing/CtaSection";
import { Services } from "@/components/landing/Services";
import { siteConfig } from "@/components/landing/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages — EasyWeb Cambodia",
  description:
    "Fixed website tiers that launch fast. Need apps, AI, or custom systems? Start a project and we’ll scope it together.",
};

export default function PackagesPage() {
  return (
    <>
      <Services
        eyebrow={siteConfig.pricingSection.eyebrow}
        title={siteConfig.pricingSection.title}
        subtitle={siteConfig.pricingSection.subtitle}
        packages={siteConfig.pricing}
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

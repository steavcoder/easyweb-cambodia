import { ServiceShowcase } from "@/components/landing/ServiceShowcase";
import { WhyUs } from "@/components/landing/WhyUs";
import { siteConfig } from "@/components/landing/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — EasyWeb Cambodia",
  description:
    "Web development, mobile apps, AI solutions, and custom systems — built for clarity, speed, and measurable outcomes.",
};

export default function ServicesPage() {
  return (
    <>
      <ServiceShowcase
        titleBefore={siteConfig.serviceShowcase.titleBefore}
        titleHighlight={siteConfig.serviceShowcase.titleHighlight}
        subtitle={siteConfig.serviceShowcase.subtitle}
        items={siteConfig.serviceShowcase.items}
      />
      <WhyUs
        heading={siteConfig.whyUs.heading}
        subtitle={siteConfig.whyUs.subtitle}
        cards={siteConfig.whyUs.cards}
      />
    </>
  );
}

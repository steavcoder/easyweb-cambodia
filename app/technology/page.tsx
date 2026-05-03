import { TechnologyMarquee } from "@/components/landing/TechnologyMarquee";
import { siteConfig } from "@/components/landing/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology — EasyWeb Cambodia",
  description:
    "Frameworks and platforms we use for modern websites, apps, and systems — Next.js, React, mobile, cloud, and more.",
};

export default function TechnologyPage() {
  return <TechnologyMarquee config={siteConfig.portfolioSection.technology} />;
}

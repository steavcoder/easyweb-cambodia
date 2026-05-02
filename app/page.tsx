import { About } from "@/components/landing/About";
import { Contact } from "@/components/landing/Contact";
import { CtaSection } from "@/components/landing/CtaSection";
import { Hero } from "@/components/landing/Hero";
import { Process } from "@/components/landing/Process";
import { Portfolio } from "@/components/landing/Portfolio";
import { ServiceShowcase } from "@/components/landing/ServiceShowcase";
import { Services } from "@/components/landing/Services";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { WhyUs } from "@/components/landing/WhyUs";
import { siteConfig } from "@/components/landing/site-config";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-[var(--surface)]">
      <SiteHeader brand={siteConfig.brand} />
      <Hero
        headlineBefore={siteConfig.hero.headlineBefore}
        headlineHighlight={siteConfig.hero.headlineHighlight}
        headlineAfter={siteConfig.hero.headlineAfter}
        subline={siteConfig.hero.subline}
        trustLine={siteConfig.hero.trustLine}
      />
      <ServiceShowcase
        titleBefore={siteConfig.serviceShowcase.titleBefore}
        titleHighlight={siteConfig.serviceShowcase.titleHighlight}
        subtitle={siteConfig.serviceShowcase.subtitle}
        items={siteConfig.serviceShowcase.items}
      />
      <About
        headline={siteConfig.about.headline}
        body={siteConfig.about.body}
        imageSrc={siteConfig.about.imageSrc}
        imageAlt={siteConfig.about.imageAlt}
        stats={siteConfig.about.stats}
        cta={siteConfig.about.cta}
      />
      <Process scrollTargetHref="#services" />
      <Services
        eyebrow={siteConfig.pricingSection.eyebrow}
        title={siteConfig.pricingSection.title}
        subtitle={siteConfig.pricingSection.subtitle}
        packages={siteConfig.pricing}
      />
      <Portfolio
        eyebrow={siteConfig.portfolioSection.eyebrow}
        title={siteConfig.portfolioSection.title}
        subtitle={siteConfig.portfolioSection.subtitle}
        items={siteConfig.portfolio}
      />
      <WhyUs
        heading={siteConfig.whyUs.heading}
        subtitle={siteConfig.whyUs.subtitle}
        cards={siteConfig.whyUs.cards}
      />
      <CtaSection
        title={siteConfig.ctaBand.title}
        body={siteConfig.ctaBand.body}
        buttonLabel={siteConfig.ctaBand.buttonLabel}
        href={siteConfig.ctaBand.href}
      />
      <Contact
        title={siteConfig.contactSection.title}
        subtitle={siteConfig.contactSection.subtitle}
        email={siteConfig.contact.email}
        telegram={siteConfig.contact.telegram}
        phoneDisplay={siteConfig.contact.phoneDisplay}
        phoneTel={siteConfig.contact.phoneTel}
        facebook={siteConfig.contact.facebook}
      />
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

/**
 * Site copy and links — single source of truth for the landing page.
 * Update phone, WhatsApp, and email before going live if placeholders remain.
 */
export const siteConfig = {
  brand: "EasyWeb Cambodia",
  hero: {
    headlineBefore: "Build, Grow, and ",
    headlineHighlight: "Scale Your Business Online",
    headlineAfter: "",
    subline:
      "We help businesses in Cambodia and beyond create modern websites, systems, and digital solutions that drive real results.",
    trustLine: "Trusted by startups, SMEs, and local businesses across Cambodia.",
  },
  serviceShowcase: {
    titleBefore: "We Provide The Best ",
    titleHighlight: "Services",
    subtitle:
      "Websites, mobile apps, AI tools, and custom systems — built for clarity, speed, and outcomes you can measure.",
    items: [
      {
        title: "Web Development",
        bullets: [
          "Modern business websites",
          "Fast, SEO-friendly delivery",
          "Next.js / React solutions",
        ] as const,
        icon: "laptop" as const,
        iconBg: "#EAB308",
      },
      {
        title: "Mobile Apps",
        bullets: ["Android & iOS apps", "Business & field tracking apps"] as const,
        icon: "smartphone" as const,
        iconBg: "#009689",
      },
      {
        title: "AI Solutions",
        bullets: ["Chatbots for customer support", "Workflow automation", "Smart assistants"] as const,
        icon: "sparkles" as const,
        iconBg: "#A855F7",
      },
      {
        title: "System Development",
        bullets: ["Custom dashboards", "CRM / ERP-style tools", "Business automation"] as const,
        icon: "layout" as const,
        iconBg: "#F97316",
      },
    ],
  },
  about: {
    headline: "We provide you the best experience",
    body:
      "From discovery to launch, we focus on clear scope, modern tooling, and outcomes you can measure. Whether it’s a marketing site, mobile app, or internal system — we ship work that looks sharp and runs reliably for teams in Cambodia and beyond.",
    imageSrc: "/about-hero.svg",
    imageAlt: "EasyWeb Cambodia — digital projects and collaboration",
    stats: [
      { value: "15+", label: "Projects delivered" },
      { value: "1+", label: "Years of focus" },
      { value: "25+", label: "Businesses served" },
    ] as const,
    cta: { label: "Learn more", href: "/our-process" },
  },
  pricingSection: {
    eyebrow: "Packages",
    title: "Website pricing — clear tiers",
    subtitle:
      "Fixed packages for sites that launch fast. Need apps, AI, or custom systems? Use Start a Project and we’ll scope it together.",
  },
  pricing: [
    {
      name: "Starter Website",
      price: 79,
      description: "Single-page or simple multi-section site, contact info, and social links.",
      highlights: ["1–3 sections", "Mobile-friendly", "Hosting guidance"],
    },
    {
      name: "Standard Website",
      price: 109,
      description: "Ideal for service businesses and small catalogs with more structure.",
      highlights: ["Up to 5 pages", "Gallery or services grid", "Basic SEO setup"],
      featured: true,
    },
    {
      name: "Premium Website",
      price: 149,
      description: "More polish, more sections, and room to grow as your business grows.",
      highlights: ["Rich layouts", "Motion & polish", "Priority turnaround"],
    },
  ],
  portfolioSection: {
    eyebrow: "Work",
    title: "Demos & portfolio",
    subtitle:
      "Sample layouts you can replace with real screenshots — update paths in this file and add images under /public.",
  },
  portfolio: [
    {
      title: "Local café — demo",
      description: "Single-page menu, hours, and map — optimized for phones.",
      image: "/portfolio-demo-1.svg",
    },
    {
      title: "Service business — demo",
      description: "Clear packages, Telegram / WhatsApp CTAs, trust-focused layout.",
      image: "/portfolio-demo-2.svg",
    },
  ],
  whyUs: {
    heading: "Why choose us?",
    subtitle:
      "We combine clear communication with delivery you can count on — for startups, SMEs, and local businesses across Cambodia.",
    cards: [
      {
        title: "Experienced Professionals",
        detail:
          "Modern stacks and sane workflows — so your website or system stays fast, secure, and easy to evolve after launch.",
        icon: "thumbsUp" as const,
      },
      {
        title: "Satisfaction Guarantee",
        detail:
          "Transparent scope and checkpoints at every step — you always know what ships, when, and what it costs.",
        icon: "handshake" as const,
      },
      {
        title: "Affordable Rates",
        detail:
          "Packages sized for real budgets — clear tiers without enterprise overhead or surprise invoices.",
        icon: "badgePercent" as const,
      },
      {
        title: "Reliable & Trustworthy",
        detail:
          "Easy channels (Telegram, phone, Facebook) and timelines you can plan around — with local context baked in.",
        icon: "shield" as const,
      },
    ],
  },
  process: {
    eyebrow: "Our process",
    title: "How we work — from first message to launch",
    helper:
      "Clear steps from brief to launch — we keep communication simple so you always know what happens next.",
    line1: "We Design.",
    line2: "We Develop.",
    rotatingWords: ["Inspire", "Innovate", "Impact", "Deliver"] as const,
  },
  ctaBand: {
    title: "Ready to grow your business online?",
    body: "Let's build your website or system today. We'll help you from idea to launch.",
    buttonLabel: "Start a Project",
    href: "#contact",
  },
  contactSection: {
    title: "Reach out the easy way",
    subtitle: "Telegram, phone, or Facebook — no long forms. Prefer email? We read every message.",
  },
  footer: {
    tagline: "Websites, apps, and systems for growing businesses in Cambodia.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#service-showcase" },
      { label: "Packages", href: "/#services" },
      { label: "About", href: "/#about" },
      { label: "Our process", href: "/our-process" },
      { label: "Contact", href: "/#contact" },
    ] as const,
  },
  contact: {
    email: "hello@easywebcambodia.com",
    telegram: "https://t.me/sopheak_dev",
    whatsapp: "https://wa.me/85593620246",
    phoneDisplay: "+855 93 620 246",
    phoneTel: "+85593620246",
    facebook: "https://web.facebook.com/profile.php?id=61588913470658",
  },
} as const;

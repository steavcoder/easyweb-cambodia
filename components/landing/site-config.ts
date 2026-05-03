/**
 * Site copy and links — single source of truth for the landing page.
 * Update phone, WhatsApp, and email before going live if placeholders remain.
 */

/** Hero line 3 — rotating typewriter words */
const ROTATING_HEADLINE_WORDS = ["Inspire", "Innovate", "Impact", "Deliver"] as const;

export const siteConfig = {
  brand: "EasyWeb Cambodia",
  /** Header/footer — paths under `public/`; mobile below `md`, web from `md` up */
  logo: {
    webSrc: "/easyweb-logo.png",
    mobileSrc: "/easyweb-mobile.png",
    alt: "EasyWeb Cambodia",
  },
  hero: {
    tagline: "what happens next.",
    line1: "We Design",
    line2: "We Develop",
    line3Prefix: "We ",
    rotatingWords: ROTATING_HEADLINE_WORDS,
    subline:
      "We help businesses in Cambodia and beyond create modern websites, systems, and digital solutions that drive real results.",
    trustLine: "Trusted by startups, SMEs, and local businesses across Cambodia.",
  },
  serviceShowcase: {
    titleBefore: "What We Do To Help Your ",
    titleHighlight: "Business Grow",
    subtitle:
      "We help small businesses go online, attract more customers, and grow faster with simple, effective digital solutions.",
  
    items: [
      {
        title: "Business Websites",
        bullets: [
          "Professional website in 2–3 days",
          "Mobile-friendly & fast loading",
          "Built to attract more customers",
        ] as const,
        icon: "laptop" as const,
      },
      {
        title: "Landing Pages",
        bullets: [
          "Perfect for promotions & campaigns",
          "Simple and high-converting design",
          "Quick setup for fast results",
        ] as const,
        icon: "layout" as const,
      },
      {
        title: "Social Media Setup",
        bullets: [
          "Facebook & Telegram business setup",
          "Customer contact optimization",
          "Ready-to-use online presence",
        ] as const,
        icon: "smartphone" as const,
      },
      {
        title: "Custom Solutions",
        bullets: [
          "Simple business tools & systems",
          "Automation for daily tasks",
          "Built based on your needs",
        ] as const,
        icon: "sparkles" as const,
      },
    ],
  },
  about: {
    headline: "We provide you the best experience",
    body:
      "From discovery to launch, we focus on clear scope, modern tooling, and outcomes you can measure. Whether it’s a marketing site, mobile app, or internal system — we ship work that looks sharp and runs reliably for teams in Cambodia and beyond.",
    imageSrc: "/placeholder.png",
    imageAlt: "EasyWeb Cambodia — digital projects and collaboration",
    stats: [
      { value: "15+", label: "Projects delivered" },
      { value: "1+", label: "Years of focus" },
      { value: "25+", label: "Businesses served" },
    ] as const,
    cta: { label: "Learn more", href: "/packages" },
  },
  pricingSection: {
    eyebrow: "Packages",
    title: "Simple Pricing. Fast Results.",
    subtitle:
      "Get your business online in just 2–3 days with affordable, professional websites. No confusion, no hidden costs — just results.",
  },
  
  pricing: [
    {
      name: "Starter Website",
      price: 79,
      description:
        "Perfect for new businesses that need a simple online presence to start getting customers.",
      highlights: [
        "1-page professional website",
        "Mobile-friendly design",
        "Contact + Telegram/WhatsApp button",
        "Fast delivery (2–3 days)",
      ],
    },
    {
      name: "Standard Website",
      price: 109,
      description:
        "Best for growing businesses that want a stronger brand and more content to attract customers.",
      highlights: [
        "Up to 5 pages (Home, About, Services, Contact)",
        "Clean modern design",
        "Services or gallery section",
        "Basic SEO setup",
        "2 revisions included",
      ],
      featured: true,
    },
    {
      name: "Premium Website",
      price: 149,
      description:
        "For businesses ready to stand out with a premium look and more advanced features.",
      highlights: [
        "Custom design with better UI/UX",
        "Animations & smooth interactions",
        "Contact form (email integration)",
        "Priority delivery (1–2 days)",
        "Analytics setup",
      ],
    },
  ],
  portfolioSection: {
    eyebrow: "Work",
    title: "Demos & portfolio",
    subtitle:
      "Sample layouts you can replace with real screenshots — update paths in this file and add images under /public.",
    /** Shown below portfolio on the home page; also used on `/technology` */
    technology: {
      eyebrow: "Technology",
      title: "Stack we build with",
      subtitle:
        "Languages, frameworks, and platforms we use across web, mobile, and backend work — swap labels anytime in this file.",
    
      rowTowardRight: [
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
        { name: "Express.js", icon: "https://cdn.simpleicons.org/express" },
        { name: "Angular", icon: "https://cdn.simpleicons.org/angular" },
        { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
      ] as const,
    
      rowTowardLeft: [
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
        { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
      ] as const,
    },
  },
  portfolio: [
    {
      title: "Sunrise Café Phnom Penh",
      description:
        "Mobile-friendly website with menu, opening hours, and Google Maps integration. Helps customers quickly find and visit the café.",
      image: "/placeholder.png",
    },
    {
      title: "Sokha Car Repair Service",
      description:
        "Service website with clear offerings, Telegram contact, and location map to attract nearby customers.",
      image: "/placeholder.png",
    },
    {
      title: "Modern Barber Shop",
      description:
        "Clean landing page with services, pricing, and gallery. Optimized for mobile booking via Telegram.",
      image: "/placeholder.png",
    },
  ],
  whyUs: {
    heading: "Why Choose EasyWeb Cambodia?",
    subtitle:
      "We help small businesses get online quickly, affordably, and without confusion. Simple process. Fast results.",
  
    cards: [
      {
        title: "Fast Delivery",
        detail:
          "Get your website ready in just 2–3 days so you can start attracting customers immediately.",
        icon: "zap" as const,
      },
      {
        title: "Affordable & Clear Pricing",
        detail:
          "No hidden fees. Simple packages designed for small business budgets.",
        icon: "badgePercent" as const,
      },
      {
        title: "Easy Communication",
        detail:
          "Contact us بسهولة through Telegram, phone, or Facebook. We keep everything simple and clear.",
        icon: "messageCircle" as const,
      },
      {
        title: "Built for Real Results",
        detail:
          "We don’t just build websites — we help your business get more customers online.",
        icon: "trendingUp" as const,
      },
    ],
  },
  ctaBand: {
    title: "Ready to grow your business online?",
    body: "Let's build your website or system today. We'll help you from idea to launch.",
    buttonLabel: "Start a Project",
    href: "/contact",
  },
  contactSection: {
    title: "Reach out the easy way",
    subtitle: "Telegram, phone, or Facebook — no long forms. Prefer email? We read every message.",
  },
  footer: {
    tagline: "Websites, apps, and systems for growing businesses in Cambodia.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Packages", href: "/packages" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
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

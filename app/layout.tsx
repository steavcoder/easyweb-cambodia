import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { siteConfig } from "@/components/landing/site-config";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EasyWeb Cambodia — Websites, apps & systems",
  description:
    "EasyWeb Cambodia builds modern websites, mobile apps, AI solutions, and business systems for startups and SMEs — clear packages, local support, delivery you can plan around.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="flex min-h-full flex-col bg-[var(--surface)]">
          <SiteHeader brand={siteConfig.brand} logo={siteConfig.logo} />
          {children}
          <SiteFooter
            brand={siteConfig.brand}
            logo={siteConfig.logo}
            tagline={siteConfig.footer.tagline}
            quickLinks={siteConfig.footer.quickLinks}
            email={siteConfig.contact.email}
            telegram={siteConfig.contact.telegram}
            whatsapp={siteConfig.contact.whatsapp}
            facebook={siteConfig.contact.facebook}
          />
        </div>
      </body>
    </html>
  );
}

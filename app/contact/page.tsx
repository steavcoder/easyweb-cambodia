import { Contact } from "@/components/landing/Contact";
import { siteConfig } from "@/components/landing/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — EasyWeb Cambodia",
  description:
    "Reach EasyWeb Cambodia via Telegram, phone, Facebook, or email — local support for your website or system project.",
};

export default function ContactPage() {
  return (
    <Contact
      title={siteConfig.contactSection.title}
      subtitle={siteConfig.contactSection.subtitle}
      email={siteConfig.contact.email}
      telegram={siteConfig.contact.telegram}
      phoneDisplay={siteConfig.contact.phoneDisplay}
      phoneTel={siteConfig.contact.phoneTel}
      facebook={siteConfig.contact.facebook}
    />
  );
}

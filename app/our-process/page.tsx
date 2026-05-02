import type { Metadata } from "next";
import { ProcessPage } from "@/components/landing/ProcessPage";

export const metadata: Metadata = {
  title: "Our process — EasyWeb Cambodia",
  description:
    "Design, develop, and deliver — how we build modern websites and systems for businesses in Cambodia.",
};

export default function OurProcessRoute() {
  return <ProcessPage />;
}

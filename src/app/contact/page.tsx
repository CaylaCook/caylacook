import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageFrame } from "@/components/page-frame";
import { PresenceBand } from "@/components/presence-band";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cayla Cook — (615) 618-9499 · cayla@caylacook.com — Middle Tennessee realtor.",
};

export default function ContactPage() {
  return (
    <PageFrame>
      <ContactForm />
      <PresenceBand />
    </PageFrame>
  );
}

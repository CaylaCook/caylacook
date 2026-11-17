import { Approach } from "@/components/approach";
import { ContactForm } from "@/components/contact-form";
import { Hero } from "@/components/hero";
import { Listings } from "@/components/listings";
import { MeetCayla } from "@/components/meet-cayla";
import { PresenceBand } from "@/components/presence-band";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <MeetCayla />
        <Listings />
        <Approach />
        <PresenceBand />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  );
}

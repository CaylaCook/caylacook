import { Logo } from "@/components/logo";
import { CONTACT } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-14 text-center sm:px-8">
        <Logo className="h-20 w-auto max-w-[16rem] opacity-95 sm:h-24 sm:max-w-[20rem]" />
        <p className="font-sans text-xs tracking-[0.28em] text-cream/60 uppercase">
          Your realtor for life · Middle Tennessee
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans text-sm text-cream/70">
          <a
            href={CONTACT.phoneHref}
            className="transition-colors hover:text-cream"
          >
            {CONTACT.phoneDisplay}
          </a>
          <span className="hidden text-cream/30 sm:inline" aria-hidden>
            ·
          </span>
          <a
            href={CONTACT.emailHref}
            className="transition-colors hover:text-cream"
          >
            {CONTACT.email}
          </a>
          <span className="hidden text-cream/30 sm:inline" aria-hidden>
            ·
          </span>
          <a
            href={`https://${CONTACT.domain}`}
            className="transition-colors hover:text-cream"
          >
            {CONTACT.domain}
          </a>
        </div>
        <div className="max-w-md space-y-1 font-sans text-sm leading-relaxed text-cream/65">
          <p className="tracking-wide">{CONTACT.brokerage.name}</p>
          <p>
            {CONTACT.brokerage.street}
            <br />
            {CONTACT.brokerage.cityStateZip}
          </p>
        </div>
        <p className="max-w-2xl font-sans text-[0.7rem] leading-relaxed tracking-wide text-cream/40">
          Serving Nashville, Franklin, Brentwood, Mount Juliet, Lebanon,
          Gallatin, Hermitage, Hendersonville, Spring Hill, Thompson&apos;s
          Station, College Grove, Springfield, and surrounding Middle Tennessee
          communities.
        </p>
        <p className="font-sans text-[0.7rem] tracking-wide text-cream/40">
          © 2026 Cayla Cook. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

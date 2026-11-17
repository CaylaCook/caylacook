"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#meet", label: "Meet" },
  { href: "#buyer", label: "Buyer" },
  { href: "#seller", label: "Seller" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500",
        scrolled
          ? "border-b border-cream/10 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <a
          href="#top"
          className="group flex shrink-0 items-center"
          aria-label="Cayla Cook home"
        >
          <Logo className="h-10 w-auto max-w-[10.5rem] transition-transform duration-500 group-hover:scale-[1.02] sm:h-12 sm:max-w-[13rem]" />
        </a>

        <nav
          className="flex flex-wrap items-center justify-end gap-x-0.5 gap-y-1 sm:gap-1"
          aria-label="Primary"
        >
          {links.map((link, index) => (
            <span key={link.href} className="flex items-center">
              {index > 0 ? (
                <span
                  className="hidden px-1 font-sans text-[0.65rem] text-cream/35 sm:inline sm:px-1.5"
                  aria-hidden
                >
                  |
                </span>
              ) : null}
              <a
                href={link.href}
                className="px-1.5 py-2 font-sans text-[0.65rem] tracking-[0.18em] text-cream/80 uppercase transition-colors hover:text-cream sm:px-2 sm:text-[0.7rem] sm:tracking-[0.22em]"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}

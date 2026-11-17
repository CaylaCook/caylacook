"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#meet", label: "Meet" },
  { href: "#homes", label: "Homes" },
  { href: "#approach", label: "Approach" },
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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a
          href="#top"
          className="group flex items-center"
          aria-label="Cayla Cook home"
        >
          {/* Full lockup — avoids the clipped monogram crop */}
          <Logo className="h-10 w-auto max-w-[10.5rem] transition-transform duration-500 group-hover:scale-[1.02] sm:h-12 sm:max-w-[13rem]" />
        </a>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-2 font-sans text-[0.7rem] tracking-[0.22em] text-cream/80 uppercase transition-colors hover:text-cream sm:px-3 sm:text-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

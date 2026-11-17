"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/meet", label: "Meet" },
  { href: "/buyer", label: "Buyer" },
  { href: "/seller", label: "Seller" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500",
        scrolled || !isHome
          ? "border-b border-cream/10 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center"
          aria-label="Cayla Cook home"
        >
          <Logo className="h-10 w-auto max-w-[10.5rem] transition-transform duration-500 group-hover:scale-[1.02] sm:h-12 sm:max-w-[13rem]" />
        </Link>

        <nav
          className="flex flex-wrap items-center justify-end gap-x-0.5 gap-y-1 sm:gap-1"
          aria-label="Primary"
        >
          {links.map((link, index) => {
            const active = pathname === link.href;
            return (
              <span key={link.href} className="flex items-center">
                {index > 0 ? (
                  <span
                    className="hidden px-1 font-sans text-[0.65rem] text-cream/35 sm:inline sm:px-1.5"
                    aria-hidden
                  >
                    |
                  </span>
                ) : null}
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "px-1.5 py-2 font-sans text-[0.65rem] tracking-[0.18em] uppercase transition-colors sm:px-2 sm:text-[0.7rem] sm:tracking-[0.22em]",
                    active
                      ? "text-cream"
                      : "text-cream/80 hover:text-cream",
                  )}
                >
                  {link.label}
                </Link>
              </span>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Cayla Cook in a modern Nashville home dining and kitchen space"
          fill
          priority
          sizes="100vw"
          className="animate-ken-slow scale-105 object-cover object-[70%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/35" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-5 pb-16 pt-28 text-left sm:px-8 sm:pb-24 sm:pt-32">
        <div className="animate-rise">
          <Logo
            priority
            className="h-28 w-auto max-w-[min(100%,22rem)] sm:h-36 sm:max-w-[28rem] md:h-44 md:max-w-[34rem]"
          />
        </div>

        <div className="mt-8 max-w-xl animate-rise-delay space-y-4">
          <p className="font-display text-2xl leading-snug tracking-tight text-cream sm:text-3xl md:text-[2rem]">
            Your Home. Your Next Chapter. Your Realtor for Life.
          </p>
          <p className="max-w-md font-sans text-sm leading-relaxed text-cream/85 sm:text-base">
            Helping buyers and sellers make moves across Middle Tennessee—with
            12+ years of experience, a personal touch, and relationships that
            last long after closing.
          </p>
        </div>

        <div className="mt-10 flex animate-rise-delay-2 flex-wrap items-center justify-start gap-4">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center border border-cream bg-cream px-7 font-sans text-xs tracking-[0.28em] text-ink uppercase transition-[background-color,color,transform] duration-300 hover:bg-transparent hover:text-cream"
          >
            Start a conversation
          </Link>
          <Link
            href="/buyer"
            className="inline-flex h-11 items-center justify-center border border-cream/45 px-7 font-sans text-xs tracking-[0.28em] text-cream uppercase transition-[border-color,background-color] duration-300 hover:border-cream hover:bg-cream/5"
          >
            Work with Cayla
          </Link>
        </div>
      </div>
    </section>
  );
}

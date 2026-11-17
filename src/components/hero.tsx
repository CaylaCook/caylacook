import Image from "next/image";
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
          alt="Contemporary residence at dusk with warm interior light"
          fill
          priority
          sizes="100vw"
          className="animate-ken-slow scale-105 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-16 pt-28 text-center sm:px-8 sm:pb-24 sm:pt-32">
        <div className="animate-rise">
          <Logo
            priority
            className="mx-auto h-28 w-auto max-w-[min(100%,22rem)] sm:h-36 sm:max-w-[28rem] md:h-44 md:max-w-[34rem]"
          />
        </div>

        <p className="mt-8 max-w-md animate-rise-delay font-sans text-sm leading-relaxed text-cream/85 sm:text-base">
          Your realtor for life across Middle Tennessee — Nashville, Franklin,
          Brentwood, and the communities around them.
        </p>

        <div className="mt-10 flex animate-rise-delay-2 flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center border border-cream bg-cream px-7 font-sans text-xs tracking-[0.28em] text-ink uppercase transition-[background-color,color,transform] duration-300 hover:bg-transparent hover:text-cream"
          >
            Start a conversation
          </a>
          <a
            href="#buyer"
            className="inline-flex h-11 items-center justify-center border border-cream/45 px-7 font-sans text-xs tracking-[0.28em] text-cream uppercase transition-[border-color,background-color] duration-300 hover:border-cream hover:bg-cream/5"
          >
            Work with Cayla
          </a>
        </div>
      </div>
    </section>
  );
}

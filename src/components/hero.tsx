import Image from "next/image";
import { Logo } from "@/components/logo";

export function Hero() {
  return (
    <section id="top" className="relative bg-ink">
      <div className="absolute inset-x-0 top-0 h-[100svh] overflow-hidden">
        <Image
          src="/images/cayla-hero.jpg"
          alt="Cayla Cook, Middle Tennessee Realtor"
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          // She stands right of center; 62% keeps her face in the mobile crop.
          className="animate-ken-slow object-cover object-[62%_34%]"
        />
        <div className="hero-scrim pointer-events-none absolute inset-0" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        {/* Holds the lockup below her face; extra viewport height stays on the photo. */}
        <div className="min-h-[44svh] flex-1 md:min-h-[40svh]" aria-hidden />
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-12 text-center sm:px-8 sm:pb-20">
          <div className="animate-rise">
            <Logo
              priority
              className="mx-auto h-24 w-auto max-w-[18rem] sm:h-36 sm:max-w-[28rem] md:h-44 md:max-w-[34rem]"
            />
          </div>

          <div className="mt-5 max-w-xl animate-rise-delay space-y-4 sm:mt-8">
            <p className="font-display text-2xl leading-snug tracking-tight text-cream sm:text-3xl md:text-[2rem]">
              Your Home. Your Next Chapter. Your Realtor for Life.
            </p>
            <p className="mx-auto max-w-md font-sans text-sm leading-relaxed text-cream/85 sm:text-base">
              Helping buyers and sellers make moves across Middle Tennessee—with
              12+ years of experience, a personal touch, and relationships that
              last long after closing.
            </p>
          </div>

          <div className="mt-6 flex animate-rise-delay-2 flex-wrap items-center justify-center gap-4">
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
      </div>
    </section>
  );
}

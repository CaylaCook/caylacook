import Image from "next/image";

export function MeetCayla() {
  return (
    <section id="meet" className="bg-parchment text-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-14">
        <div className="relative aspect-[3/4] overflow-hidden lg:col-span-5">
          <Image
            src="/images/cayla-portrait.jpg"
            alt="Cayla Cook, realtor"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-[center_15%]"
            priority
          />
        </div>

        <div className="lg:col-span-7">
          <p className="font-sans text-[0.7rem] tracking-[0.32em] text-ink/55 uppercase">
            Meet Cayla
          </p>
          <h2 className="mt-4 max-w-lg font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            A clear guide for every move you make
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-ink/70">
            Cayla Cook helps buyers and sellers across Middle Tennessee — from
            Nashville and Franklin to Brentwood, Mount Juliet, Hendersonville,
            Spring Hill, and nearby communities. Expect honest advice, calm
            negotiation, and a relationship that lasts long after closing.
          </p>
          <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-ink/70">
            Buy. Sell. Repeat — with someone who stays.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex h-11 items-center justify-center border border-ink bg-ink px-7 font-sans text-xs tracking-[0.28em] text-cream uppercase transition-colors hover:bg-ink/90"
          >
            Work with Cayla
          </a>
        </div>
      </div>
    </section>
  );
}

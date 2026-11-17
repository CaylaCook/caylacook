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
            People first. Homes that follow.
          </h2>
          <div className="mt-6 max-w-xl space-y-5 font-sans text-base leading-relaxed text-ink/70">
            <p>
              With over 12 years of experience in Middle Tennessee real estate,
              Cayla Cook knows a thing or two about buying, selling, and
              everything in between. But for her, real estate is about so much
              more than houses—it&apos;s about people, relationships, and making
              the process a whole lot less stressful (and a lot more fun!).
            </p>
            <p>
              Known for her down-to-earth personality, honesty, and a little
              sense of humor, Cayla believes her clients should feel more like
              friends than transactions. Whether you&apos;re buying your first
              home, selling your fifth, or just figuring out your next move,
              she&apos;s here to guide you every step of the way.
            </p>
            <p>
              Because the best part of real estate isn&apos;t the closing
              table—it&apos;s the relationships that last long after the keys
              are handed over.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-10 inline-flex h-11 items-center justify-center border border-ink bg-ink px-7 font-sans text-xs tracking-[0.28em] text-cream uppercase transition-colors hover:bg-ink/90"
          >
            Work with Cayla
          </a>
        </div>
      </div>
    </section>
  );
}

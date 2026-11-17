import Image from "next/image";

export function Approach() {
  return (
    <section id="approach" className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6] lg:order-2">
          <Image
            src="/images/cayla-kitchen.jpg"
            alt="Cayla Cook in a modern kitchen"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_20%]"
          />
        </div>

        <div className="lg:order-1">
          <p className="font-sans text-[0.7rem] tracking-[0.32em] text-cream/55 uppercase">
            The approach
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Buy. Sell. Repeat — with someone who stays.
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-cream/75">
            From Nashville and Franklin to Brentwood, Gallatin, Lebanon,
            Hermitage, Thompson&apos;s Station, College Grove, Springfield, and
            beyond — the focus stays on strategy, timing, and a relationship
            built to last beyond closing day.
          </p>

          <ul className="mt-10 space-y-6 border-t border-cream/15 pt-8">
            {[
              {
                title: "Buying",
                copy: "Market reads, private tours, and offers shaped around how you actually live.",
              },
              {
                title: "Selling",
                copy: "Presentation, pricing, and negotiation that protect value without the noise.",
              },
              {
                title: "Lifelong advice",
                copy: "A realtor for life — available when plans change, years after the keys change hands.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-6"
              >
                <span className="font-sans text-[0.7rem] tracking-[0.24em] text-cream/55 uppercase">
                  {item.title}
                </span>
                <span className="font-sans text-sm leading-relaxed text-cream/80">
                  {item.copy}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

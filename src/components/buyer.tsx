import Image from "next/image";

const steps = [
  {
    title: "Listen first",
    copy: "Budget, commute, schools, and the feel of a place — we map what matters before touring.",
  },
  {
    title: "Tour with purpose",
    copy: "Private showings across Nashville, Franklin, Brentwood, and nearby communities — no wasted weekends.",
  },
  {
    title: "Offer with clarity",
    copy: "Pricing strategy, contingencies, and negotiation that protect your position without the drama.",
  },
];

export function Buyer() {
  return (
    <section id="buyer" className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
          <Image
            src="/images/cayla-kitchen.jpg"
            alt="Cayla Cook helping clients explore a Middle Tennessee home"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_20%]"
          />
        </div>

        <div>
          <p className="font-sans text-[0.7rem] tracking-[0.32em] text-cream/55 uppercase">
            Buyer
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Find the home that fits how you live
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-cream/75">
            Buying in Middle Tennessee takes local timing and a steady guide.
            Cayla keeps the process clear from first search to closing day.
          </p>

          <ul className="mt-10 space-y-6 border-t border-cream/15 pt-8">
            {steps.map((item) => (
              <li
                key={item.title}
                className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-6"
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

          <a
            href="/contact"
            className="mt-10 inline-flex h-11 items-center justify-center border border-cream bg-cream px-7 font-sans text-xs tracking-[0.28em] text-ink uppercase transition-colors hover:bg-transparent hover:text-cream"
          >
            Start your search
          </a>
        </div>
      </div>
    </section>
  );
}

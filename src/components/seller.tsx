const steps = [
  {
    title: "Prepare",
    copy: "Staging guidance, light fixes, and a presentation plan that photographs and shows well.",
  },
  {
    title: "Price",
    copy: "Comparable sales and neighborhood demand — priced to attract the right buyers, not sit.",
  },
  {
    title: "Negotiate",
    copy: "Offers, inspections, and timelines handled with calm focus so you keep leverage through closing.",
  },
];

export function Seller() {
  return (
    <section id="seller" className="bg-parchment text-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-xl">
          <p className="font-sans text-[0.7rem] tracking-[0.32em] text-ink/55 uppercase">
            Seller
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            Sell with presence — and a plan
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-ink/70">
            From first conversation to sold, Cayla protects your time and your
            price across Nashville and the surrounding Middle Tennessee market.
          </p>
        </div>

        <ul className="mt-14 grid list-none gap-10 border-t border-ink/10 p-0 pt-12 sm:grid-cols-3 sm:gap-8">
          {steps.map((item) => (
            <li key={item.title}>
              <p className="font-sans text-[0.7rem] tracking-[0.28em] text-ink/50 uppercase">
                {item.title}
              </p>
              <p className="mt-4 font-display text-2xl tracking-tight text-ink">
                {item.title === "Prepare"
                  ? "Ready to show"
                  : item.title === "Price"
                    ? "Priced with intent"
                    : "Closed with care"}
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink/70">
                {item.copy}
              </p>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-12 inline-flex h-11 items-center justify-center border border-ink bg-ink px-7 font-sans text-xs tracking-[0.28em] text-cream uppercase transition-colors hover:bg-ink/90"
        >
          Talk about listing
        </a>
      </div>
    </section>
  );
}

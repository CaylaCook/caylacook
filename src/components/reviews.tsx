const reviews = [
  {
    quote:
      "Cayla made buying in Franklin feel calm and clear. She knew the pockets we should see — and the ones to skip.",
    name: "Jordan & Alexis M.",
    detail: "Buyers · Franklin",
  },
  {
    quote:
      "Our Brentwood listing was prepared, priced, and negotiated without the noise. We felt guided the whole way.",
    name: "Samantha R.",
    detail: "Seller · Brentwood",
  },
  {
    quote:
      "She stayed with us after closing when questions came up. That “realtor for life” line is real.",
    name: "Chris T.",
    detail: "Buyer · Hendersonville",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-xl">
          <p className="font-sans text-[0.7rem] tracking-[0.32em] text-cream/55 uppercase">
            Reviews
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            What clients say
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-cream/70">
            Sample reviews for the site — replace with your live testimonials
            anytime.
          </p>
        </div>

        <ul className="mt-14 grid list-none gap-10 p-0 sm:grid-cols-3 sm:gap-8">
          {reviews.map((review) => (
            <li
              key={review.name}
              className="border-t border-cream/15 pt-8"
            >
              <p className="font-display text-xl leading-snug text-cream sm:text-2xl">
                “{review.quote}”
              </p>
              <p className="mt-6 font-sans text-sm tracking-wide text-cream/80">
                {review.name}
              </p>
              <p className="mt-1 font-sans text-[0.7rem] tracking-[0.2em] text-cream/45 uppercase">
                {review.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

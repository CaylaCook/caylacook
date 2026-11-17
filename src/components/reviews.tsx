const zillowReviewsUrl =
  "https://www.zillow.com/professionals/real-estate-agent-reviews/nashville-tn/?name=Cayla%20Cook";

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
          <a
            href={zillowReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block font-display text-2xl leading-snug tracking-tight text-cream underline decoration-cream/30 underline-offset-4 transition-colors hover:decoration-cream sm:text-3xl"
          >
            4.9 stars from 37 Zillow reviews
          </a>
        </div>
      </div>
    </section>
  );
}

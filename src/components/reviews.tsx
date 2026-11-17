import {
  getFiveStarReviews,
  REVIEW_AGGREGATE,
  ZILLOW_PROFILE_URL,
} from "@/data/reviews";

export function Reviews() {
  const reviews = getFiveStarReviews(6);

  return (
    <section id="reviews" className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="font-sans text-[0.7rem] tracking-[0.32em] text-cream/55 uppercase">
            Reviews
          </p>
          <h2 className="font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl">
            What clients say
          </h2>
          <p className="font-sans text-base leading-relaxed text-cream/70">
            {REVIEW_AGGREGATE.count} five-star reviews on Zillow — a selection
            below. Only overall 5.0 feedback is shown here.
          </p>
          <a
            href={ZILLOW_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border-b border-cream/35 pb-1 font-sans text-xs tracking-[0.24em] text-cream/80 uppercase transition-colors hover:border-cream hover:text-cream"
          >
            See all reviews on Zillow
          </a>
        </div>

        {reviews.length === 0 ? (
          <p className="mt-14 font-sans text-sm text-cream/60">
            Five-star Zillow reviews will appear here once connected.
          </p>
        ) : (
          <ul className="mt-14 grid list-none gap-10 p-0 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {reviews.map((review) => (
              <li
                key={`${review.name}-${review.date || review.quote.slice(0, 24)}`}
                className="border-t border-cream/15 pt-8"
              >
                <p className="font-sans text-[0.65rem] tracking-[0.28em] text-cream/45 uppercase">
                  ★★★★★ 5.0
                </p>
                {review.headline ? (
                  <p className="mt-4 font-sans text-sm font-medium leading-snug text-cream/85">
                    {review.headline}
                  </p>
                ) : null}
                <p
                  className={`font-display text-xl leading-snug text-cream sm:text-2xl ${review.headline ? "mt-3" : "mt-4"}`}
                >
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
        )}
      </div>
    </section>
  );
}

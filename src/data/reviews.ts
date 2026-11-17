import reviewsJson from "./reviews.json";

export type Review = {
  quote: string;
  name: string;
  detail: string;
  rating: number;
  source: string;
  date?: string;
};

export const ZILLOW_PROFILE_URL =
  (reviewsJson as { profileUrl: string }).profileUrl ||
  "https://www.zillow.com/profile/cayla16/";

export const REVIEW_AGGREGATE = (
  reviewsJson as { aggregate: { rating: number; count: number } }
).aggregate;

function displayName(raw: string) {
  const name = raw.trim();
  // Soften anonymous Zillow handles for the site.
  if (
    !name ||
    /^user\d+/i.test(name) ||
    /^zuser/i.test(name) ||
    /\d{4,}/.test(name) ||
    /^[a-z]+\d+$/i.test(name)
  ) {
    return "Zillow client";
  }
  return name;
}

/** Five-star reviews only, newest first when dates exist. */
export function getFiveStarReviews(limit = 6): Review[] {
  const all = (reviewsJson as { reviews: Review[] }).reviews || [];
  return all
    .filter((r) => Number(r.rating) === 5 && r.quote?.trim())
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .slice(0, limit)
    .map((r) => ({
      ...r,
      name: displayName(r.name),
      detail: "5-star review · Zillow",
    }));
}

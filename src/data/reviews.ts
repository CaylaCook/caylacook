import reviewsJson from "./reviews.json";

export type Review = {
  quote: string;
  name: string;
  detail: string;
  rating: number;
  source: string;
  date?: string;
  headline?: string;
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

function formatDetail(date?: string) {
  if (!date) return "5.0 · Zillow";
  const [y, m, d] = date.split("-").map(Number);
  if (!y || !m || !d) return "5.0 · Zillow";
  return `5.0 · ${m}/${d}/${y} · Zillow`;
}

/** Five-star reviews only (overall 5.0). Prefer reviews with Zillow headlines, then newest. */
export function getFiveStarReviews(limit = 6): Review[] {
  const all = (reviewsJson as { reviews: Review[] }).reviews || [];
  return all
    .filter((r) => Number(r.rating) === 5 && r.quote?.trim())
    .sort((a, b) => {
      const head = Number(Boolean(b.headline)) - Number(Boolean(a.headline));
      if (head !== 0) return head;
      return (b.date || "").localeCompare(a.date || "");
    })
    .slice(0, limit)
    .map((r) => ({
      ...r,
      name: displayName(r.name),
      detail: formatDetail(r.date),
    }));
}

import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { Reviews } from "@/components/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Five-star Zillow reviews for Cayla Cook, Middle Tennessee realtor.",
};

export default function ReviewsPage() {
  return (
    <PageFrame>
      <Reviews />
    </PageFrame>
  );
}

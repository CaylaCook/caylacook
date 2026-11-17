import type { Metadata } from "next";
import { Buyer } from "@/components/buyer";
import { Listings } from "@/components/listings";
import { PageFrame } from "@/components/page-frame";

export const metadata: Metadata = {
  title: "Buy with Cayla",
  description:
    "Buy a home in Middle Tennessee with Cayla Cook — local guidance from first tour to closing.",
};

export default function BuyerPage() {
  return (
    <PageFrame>
      <Buyer />
      <Listings />
    </PageFrame>
  );
}

import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { Seller } from "@/components/seller";

export const metadata: Metadata = {
  title: "Sell with Cayla",
  description:
    "Sell your Middle Tennessee home with Cayla Cook — pricing, prep, and negotiation that protect your move.",
};

export default function SellerPage() {
  return (
    <PageFrame>
      <Seller />
    </PageFrame>
  );
}

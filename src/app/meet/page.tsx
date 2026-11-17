import type { Metadata } from "next";
import { MeetCayla } from "@/components/meet-cayla";
import { PageFrame } from "@/components/page-frame";

export const metadata: Metadata = {
  title: "Meet Cayla",
  description:
    "Meet Cayla Cook — Middle Tennessee realtor with 12+ years of experience helping buyers and sellers.",
};

export default function MeetPage() {
  return (
    <PageFrame>
      <MeetCayla />
    </PageFrame>
  );
}

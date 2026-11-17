import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Cayla Cook | Middle Tennessee Realtor",
    template: "%s | Cayla Cook",
  },
  description:
    "Cayla Cook — your realtor for life across Middle Tennessee. Buying and selling in Nashville, Franklin, Brentwood, and nearby communities. Call (615) 618-9499.",
  metadataBase: new URL("https://caylacook.com"),
  openGraph: {
    title: "Cayla Cook | Middle Tennessee Realtor",
    description:
      "Your realtor for life across Nashville, Franklin, Brentwood, and Middle Tennessee. Buy. Sell. Repeat.",
    url: "https://caylacook.com",
    siteName: "Cayla Cook",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        {children}
      </body>
    </html>
  );
}

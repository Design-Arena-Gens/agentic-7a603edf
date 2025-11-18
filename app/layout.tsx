import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accrue Flow | Private Equity Liquidity Intelligence",
  description:
    "Accrue Flow guarantees you'll never miss a capital call and captures hidden yield with AI liquidity intelligence for ultra-high-net-worth investors.",
  twitter: {
    card: "summary_large_image",
    title: "Accrue Flow | Private Equity Liquidity Intelligence",
    description:
      "Accrue Flow guarantees you'll never miss a capital call and captures hidden yield with AI liquidity intelligence for ultra-high-net-worth investors.",
    creator: "@AccrueFlow"
  },
  openGraph: {
    title: "Accrue Flow | Private Equity Liquidity Intelligence",
    description:
      "Guarantee zero capital call defaults and capture hidden yield with AI-powered liquidity orchestration.",
    url: "https://agentic-7a603edf.vercel.app",
    siteName: "Accrue Flow",
    locale: "en_US",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#0A0F16"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#04070c] text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}

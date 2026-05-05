import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Wood Fired Pizza Oven — Tips, Recipes & Buyer's Guides",
    template: "%s | Wood Fired Pizza Oven",
  },
  description:
    "Your ultimate resource for wood-fired pizza ovens. Expert reviews, authentic recipes, building guides, and tips to master the art of wood-fired cooking.",
  metadataBase: new URL("https://www.wood-fired-pizza-oven.us"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wood Fired Pizza Oven",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

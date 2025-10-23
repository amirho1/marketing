import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Growth Key Marketing",
  description:
    "Growth Key Marketing helps businesses unlock their full potential with data-driven marketing strategies, SEO optimization, and creative digital campaigns that convert.",
  keywords: [
    "Growth Key Marketing",
    "digital marketing",
    "SEO",
    "content marketing",
    "branding",
    "social media marketing",
    "performance marketing",
    "growth strategy",
    "online advertising",
    "PPC",
  ],
  authors: [{ name: "Amir Hossein Salighedar" }],
  openGraph: {
    title: "Growth Key Marketing — Accelerate Your Business Growth",
    description:
      "Unlock your business growth with expert marketing solutions. From SEO to brand strategy, Growth Key Marketing drives measurable results.",
    url: "https://growthkeymarketing.com",
    siteName: "Growth Key Marketing",
    images: [
      {
        url: "https://growthkeymarketing.com/icon0.svg",
        width: 100,
        height: 100,
        alt: "Growth Key Marketing - Digital Growth Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Key Marketing — Digital Marketing That Drives Results",
    description:
      "Drive measurable results with Growth Key Marketing’s data-driven strategies and creative campaigns.",
    creator: "@growthkey",
    images: ["https://growthkeymarketing.com/icon0.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}

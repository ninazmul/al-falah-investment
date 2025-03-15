import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Al Falah Investment | Ethical & Community-Focused Investments",
  description:
    "At Al Falah Investment Pty Ltd, we believe in achieving true success by balancing financial growth with positive community impact.",
  keywords: [
    "Al Falah Investment",
    "Ethical Investment",
    "Islamic Finance",
    "Halal Investment",
    "Shariah-compliant Investment",
    "Sustainable Finance",
  ],
  icons: {
    icon: "/assets/images/favicon.ico",
    shortcut: "/assets/images/favicon.ico",
    apple: "/assets/images/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.alfalahinvestment.com.au",
  },
  openGraph: {
    title: "Al Falah Investment | Ethical & Community-Focused Investments",
    description:
      "Al Falah Investment Pty Ltd is dedicated to ethical, Shariah-compliant investment solutions that create a positive impact.",
    url: "https://www.alfalahinvestment.com.au",
    siteName: "Al Falah Investment",
    images: [
      {
        url: "https://www.alfalahinvestment.com.au/assets/images/Al Falah Investment.jpg",
        width: 1200,
        height: 630,
        alt: "Al Falah Investment",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Falah Investment | Ethical & Community-Focused Investments",
    description:
      "We provide ethical and Shariah-compliant investment solutions for sustainable financial growth.",
    images: ["/assets/images/Al Falah Investment.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

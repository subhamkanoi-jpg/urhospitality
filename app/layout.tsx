import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "UR Hospitality | Premium Corporate Catering in Kolkata",
  description:
    "UR Hospitality - Premium corporate catering in Kolkata. Modern Indian hospitality for offices, IT parks, events & conferences. Fresh, hygienic, customized meals that nourish teams and build connections.",
  keywords:
    "corporate catering Kolkata, office cafeteria catering New Town, IT park catering Salt Lake, corporate event catering Kolkata, premium corporate meals West Bengal, healthy office lunch Kolkata",
  authors: [{ name: "UR Hospitality" }],
  openGraph: {
    title: "UR Hospitality | Premium Corporate Catering in Kolkata",
    description:
      "Elevating corporate dining with the warmth of Indian hospitality and modern culinary excellence. Serving Kolkata's leading workplaces.",
    url: "https://urhospitality.in",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

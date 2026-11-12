import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/siteConfig";
import { bookingsReady } from "@/lib/bookingLinks";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Homoeopathy Speaks | Homoeopathic Consultations in Perth",
    template: "%s | Homoeopathy Speaks",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Homoeopathy Speaks",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Homoeopathy Speaks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homoeopathy Speaks",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-xl focus:bg-white focus:p-4 focus:text-teal-950">Skip to main content</a>
        <Header bookingsOpen={bookingsReady} />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

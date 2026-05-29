import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/siteConfig";

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

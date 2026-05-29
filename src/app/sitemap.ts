import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/autism-adhd-gdd",
    "/medicines-conditions",
    "/book-appointment",
    "/patient-guide",
    "/articles",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/health-disclaimer",
    "/booking-cancellation",
    "/telehealth-consent",
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/articles/${article.slug}`,
      lastModified: new Date(article.date),
    })),
  ];
}

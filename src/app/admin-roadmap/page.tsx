import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Admin Roadmap",
  description: "Internal launch roadmap for Homoeopathy Speaks.",
};

const roadmap = [
  "Domain purchase: homoeopathyspeaks.com.au through VentraIP",
  "Hosting/deployment: Vercel for custom Next.js or VentraIP if using WordPress",
  "Professional email: Google Workspace, info@homoeopathyspeaks.com.au",
  "Booking: Cliniko or Halaxy embed",
  "Newsletter/articles: MailerLite",
  "Analytics: Google Analytics 4 and Google Search Console",
  "Security: SSL, secure forms, privacy policy, no sensitive health info through normal forms",
  "SEO: sitemap, robots.txt, metadata, Google Business Profile",
  "Legal pages: privacy, terms, health disclaimer, booking/cancellation, telehealth consent",
  "Content verification: Dr Kumar’s qualifications, ARoH registration wording, phone, address and prices",
];

export default function AdminRoadmapPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Hidden admin page"
          title="Website launch roadmap"
          text="This page is not in the main navigation. Use it as a checklist before launch."
        />
        <div className="mt-12 grid gap-4">
          {roadmap.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
              <p className="text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

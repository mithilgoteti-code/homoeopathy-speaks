import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { DisclaimerBox } from "@/components/common/DisclaimerBox";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";
import { bookingsReady } from "@/lib/bookingLinks";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Homoeopathy Speaks for appointments, general enquiries and information about consultation options.",
};

export default function ContactPage() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch with Homoeopathy Speaks"
          text="Contact the practice for appointments, general enquiries and information about consultation options."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0 rounded-3xl bg-teal-900 p-6 text-white shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold">Practice details</h2>
            <div className="mt-6 grid gap-5 text-teal-50/90">
              <div className="flex gap-3"><UserRound className="h-5 w-5" /> {siteConfig.practitioner} — {siteConfig.registration}</div>
              <div className="flex gap-3"><Mail className="h-5 w-5 shrink-0" /><a href={`mailto:${siteConfig.email}`} className="min-w-0 break-all underline">{siteConfig.email}</a></div>
              <div className="flex gap-3"><Phone className="h-5 w-5 shrink-0" /><a href={siteConfig.phoneHref} className="underline">{siteConfig.phone}</a></div>
              <div className="flex gap-3"><MapPin className="h-5 w-5" /> {siteConfig.location}</div>
              <div className="flex gap-3"><Calendar className="h-5 w-5" /> Stirling clinic and online consultations</div>
            </div>
            <Link href="/book-appointment" className="mt-8 inline-flex rounded-full bg-amber-300 px-6 py-4 font-semibold text-slate-950 hover:bg-amber-200">
              {bookingsReady ? "Book an appointment" : "Consultations and fees"}
            </Link>
          </div>

          <div className="min-w-0 rounded-3xl bg-[#fbfaf6] p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Send an enquiry</h2>
            {!bookingsReady && <p className="mt-4 font-semibold text-teal-900">Online booking is not yet available.</p>}
            <p className="mt-6 leading-8 text-slate-700">Call <a href={siteConfig.phoneHref} className="font-semibold underline">{siteConfig.phone}</a> or email <a href={`mailto:${siteConfig.email}`} className="break-all font-semibold underline">{siteConfig.email}</a> for appointment and administrative enquiries.</p>
            <p className="mt-4 leading-8 text-slate-700">Please do not include detailed medical histories or reports in ordinary email. Ask the practice about a suitable way to share relevant information. An enquiry does not confirm or reserve an appointment.</p>
            <p className="mt-4 leading-8 text-slate-700">For privacy, access or correction requests, use these contact details. We may need to verify your identity and any authority to act for someone else.</p>
            <p className="mt-4"><Link href="/privacy-policy" className="underline">Read the privacy information</Link></p>
          </div>
        </div>

        <div className="mt-10">
          <DisclaimerBox />
        </div>
      </div>
    </section>
  );
}

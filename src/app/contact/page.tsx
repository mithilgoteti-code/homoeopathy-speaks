import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { DisclaimerBox } from "@/components/common/DisclaimerBox";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

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
          <div className="rounded-3xl bg-teal-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-semibold">Practice details</h2>
            <div className="mt-6 grid gap-5 text-teal-50/90">
              <div className="flex gap-3"><UserRound className="h-5 w-5" /> Dr Kumar Goteti, MD Homoeopathy</div>
              <div className="flex gap-3"><Mail className="h-5 w-5" /> {siteConfig.email}</div>
              <div className="flex gap-3"><Phone className="h-5 w-5" /> {siteConfig.phone}</div>
              <div className="flex gap-3"><MapPin className="h-5 w-5" /> {siteConfig.location}</div>
              <div className="flex gap-3"><Calendar className="h-5 w-5" /> In-person, phone and telehealth options can be configured</div>
            </div>
            <Link href="/book-appointment" className="mt-8 inline-flex rounded-full bg-amber-300 px-6 py-4 font-semibold text-slate-950 hover:bg-amber-200">
              Book Appointment
            </Link>
          </div>

          <div className="rounded-3xl bg-[#fbfaf6] p-8 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-2xl font-semibold text-slate-950">Send an enquiry</h2>
            <form className="mt-6 grid gap-4">
              <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Full name" />
              <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Email" />
              <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Phone" />
              <textarea className="min-h-32 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Message. Please do not include detailed medical history here." />
              <button className="rounded-full bg-teal-700 px-6 py-4 font-semibold text-white hover:bg-teal-800">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10">
          <DisclaimerBox />
        </div>
      </div>
    </section>
  );
}

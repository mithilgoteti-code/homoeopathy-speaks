import Link from "next/link";
import { bookingsReady } from "@/lib/bookingLinks";
import { siteConfig } from "@/lib/siteConfig";

// Existing export name retained for the homepage layout. No data collection.
export function BookingMiniForm() {
  return (
    <aside className="self-center rounded-[2rem] border border-teal-100 bg-white p-7 text-slate-900 shadow-2xl shadow-slate-950/20">
      <h2 className="text-2xl font-semibold">Consultations in Stirling and online</h2>
      <p className="mt-4 leading-7 text-slate-700">{bookingsReady ? "Choose your consultation and mode, then check availability and complete your booking in Halaxy." : "Online bookings are not open yet. You can review consultation options and contact the practice for an appointment enquiry."}</p>
      <p className="mt-4 leading-7 text-slate-700">Pay after your consultation. No booking deposit or compulsory card capture. Intake forms follow booking, with paper alternatives at the clinic.</p>
      <Link href="/book-appointment" className="mt-6 inline-flex rounded-full bg-teal-700 px-6 py-3 font-semibold text-white">View consultations and fees</Link>
      <p className="mt-4 text-sm text-slate-700">Enquiries: <a href={siteConfig.phoneHref} className="font-semibold underline">{siteConfig.phone}</a></p>
      <p className="mt-3 text-xs leading-6 text-slate-600">Please keep health histories and reports out of ordinary website or email enquiries. This service does not provide emergency care.</p>
    </aside>
  );
}

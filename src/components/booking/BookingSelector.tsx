import Link from "next/link";
import { services } from "@/lib/services";
import { bookingLinks, bookingsReady } from "@/lib/bookingLinks";
import { siteConfig } from "@/lib/siteConfig";

export function BookingSelector() {
  return (
    <div>
      {!bookingsReady && (
        <div className="mb-8 rounded-3xl border border-teal-200 bg-teal-50 p-6" role="status">
          <h2 className="text-xl font-semibold text-slate-950">Online bookings are not open yet</h2>
          <p className="mt-3 leading-7 text-slate-700">For appointment enquiries, call <a href={siteConfig.phoneHref} className="font-semibold underline">{siteConfig.phone}</a>. An enquiry does not reserve a time; the practice will confirm any appointment separately.</p>
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-950">{service.name}</h2>
            <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
            <p className="mt-4 font-semibold text-teal-900">{service.duration} · {service.price} AUD</p>
            {bookingsReady ? (
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={bookingLinks[service.inPersonKey]} target="_blank" rel="noopener noreferrer" className="rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white">Book in Stirling<span className="sr-only"> — {service.name} (opens Halaxy in a new tab)</span></a>
                <a href={bookingLinks[service.onlineKey]} target="_blank" rel="noopener noreferrer" className="rounded-full border border-teal-700 px-5 py-3 text-sm font-semibold text-teal-900">Book online consultation<span className="sr-only"> — {service.name} (opens Halaxy in a new tab)</span></a>
              </div>
            ) : <p className="mt-5 text-sm text-slate-600">Available in Stirling or by online consultation once bookings open.</p>}
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-3xl bg-white p-7 leading-8 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">Before you book</h2>
        <p className="mt-3">Payment is collected only after your consultation. There is no booking deposit or compulsory card capture. Prescribed remedies are charged separately.</p>
        <p>Intake forms are offered after booking. Paper forms are available at the clinic; contact the practice if you need another way to provide information. Document uploads are disabled.</p>
        <p>For online consultations, check the date and time zone displayed in Halaxy. Your individual video joining instructions will be provided separately. Patients outside Australia should contact the practice before booking so suitability and local requirements can be checked.</p>
        <p>Making a booking for a child or another person does not establish authority to consent or access their information. The practitioner will confirm appropriate arrangements.</p>
        <p>Opening a booking page does not confirm an appointment. Rely on the confirmation issued by Halaxy or the practice.</p>
        <p className="mt-3"><Link href="/privacy-policy" className="underline">Privacy information</Link> · <Link href="/telehealth-consent" className="underline">Online consultation information</Link> · <Link href="/booking-cancellation" className="underline">Booking and cancellation information</Link></p>
      </div>
    </div>
  );
}

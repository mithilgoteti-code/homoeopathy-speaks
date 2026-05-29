import type { Metadata } from "next";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Booking & Cancellation Policy",
  description: "Draft booking and cancellation policy for Homoeopathy Speaks.",
};

export default function BookingCancellationPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <SectionHeading eyebrow="Legal" title="Booking & Cancellation Policy" align="left" />
        <div className="prose-safe mt-8">
          <p><strong>Draft template:</strong> Final cancellation times, deposits and refund terms should be confirmed before launch.</p>
          <h2>Booking confirmation</h2>
          <p>Appointments are confirmed once the practice accepts the booking request or the online booking system confirms the appointment.</p>
          <h2>Cancellations and rescheduling</h2>
          <p>Please provide adequate notice if you need to cancel or reschedule. Cancellation fees may apply depending on the final practice policy.</p>
          <h2>Late arrivals</h2>
          <p>Late arrival may reduce consultation time. The full consultation fee may still apply.</p>
        </div>
      </div>
    </section>
  );
}

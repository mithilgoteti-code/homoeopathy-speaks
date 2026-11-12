import type { Metadata } from "next";
import { BookingSelector } from "@/components/booking/BookingSelector";
import { DisclaimerBox } from "@/components/common/DisclaimerBox";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Consultations and Fees",
  description:
    "Review consultation options, fees and durations at Homoeopathy Speaks. Online booking is not yet available; contact the practice for enquiries.",
};

export default function BookAppointmentPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Appointments"
          title="Consultations and fees"
          text="Review the consultation options below. Online bookings, once open, are completed in Halaxy. Payment is collected after your consultation."
        />
        <div className="mt-12">
          <BookingSelector />
        </div>
        <div className="mt-10">
          <DisclaimerBox />
        </div>
      </div>
    </section>
  );
}

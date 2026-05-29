import type { Metadata } from "next";
import { BookingSelector } from "@/components/booking/BookingSelector";
import { DisclaimerBox } from "@/components/common/DisclaimerBox";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book a homoeopathic consultation with Homoeopathy Speaks. Choose from Autism, ADHD and GDD consultations, general adult care, women’s health, pain and other appointment types.",
};

export default function BookAppointmentPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Appointments"
          title="Book an appointment"
          text="Choose a consultation type, review fees and request an appointment. In the live website, this section can integrate with Cliniko, Halaxy, Acuity, Calendly or Wix Bookings."
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

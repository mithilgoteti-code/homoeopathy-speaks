import type { Metadata } from "next";
import { HoldingInformation } from "@/components/common/HoldingInformation";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Appointments and Changes",
  description: "Appointment enquiries, payment timing and how to contact Homoeopathy Speaks about a change.",
};
export default function BookingCancellationPage() {
  return <HoldingInformation title="Appointments and changes" intro="Contact the practice to discuss appointments while online booking is being prepared.">
    <h2>Appointment enquiries</h2>
    <p>Call <a href={siteConfig.phoneHref}>{siteConfig.phone}</a> or email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. An enquiry or a visit to this website does not reserve an appointment. The practice will confirm any appointment separately.</p>
    <h2>Payment and forms</h2>
    <p>Payment is collected only after consultation. There are no booking deposits or compulsory card capture. Prescribed remedies are charged separately. Intake forms are offered after booking, with paper alternatives available at the clinic.</p>
    <h2>Cancellations, rescheduling and late arrivals</h2>
    <p>Contact the practice as soon as possible if you need to cancel, reschedule or advise that you are running late. Wait for the practice to confirm any requested change. Patient self-service changes are not currently offered through this website.</p>
    <p>No cancellation or rescheduling fee is introduced by this temporary website. The full booking and cancellation arrangements will be communicated before online bookings open.</p>
  </HoldingInformation>;
}

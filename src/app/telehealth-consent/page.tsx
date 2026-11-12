import type { Metadata } from "next";
import Link from "next/link";
import { HoldingInformation } from "@/components/common/HoldingInformation";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = { title: "Online Consultation Information", description: "Current availability and enquiries about future online consultations at Homoeopathy Speaks." };
export default function OnlineConsultationPage() {
  return <HoldingInformation title="Online consultations" intro="Online consultation bookings are not yet available through this website.">
    <h2>Enquire before arranging an online consultation</h2>
    <p>Contact <a href={siteConfig.phoneHref}>{siteConfig.phone}</a> or <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> to discuss the proposed arrangements. The video service, joining instructions and consent information are being finalised. This page is not a consent form and does not record consent.</p>
    <h2>Suitability, children and international enquiries</h2>
    <p>Tell the practice where the patient will be located and whether someone is acting for them. The practitioner needs to consider suitability, consent and any representative’s authority before agreeing to care. Patients outside Australia should contact the practice first; online access does not establish eligibility in every country.</p>
    <h2>Privacy and participation</h2>
    <p>Arrangements for privacy, other participants, connection failures and emergencies must be discussed before an online consultation. Reading this page or making an enquiry does not authorise recording, transcription or AI processing.</p>
    <p>Read the <Link href="/privacy-policy">privacy information</Link> and <Link href="/book-appointment">consultation fees and durations</Link>. Payment is collected after consultation, with no online booking deposit or compulsory card capture.</p>
    <h2>Urgent care</h2>
    <p>This is not an emergency service. In an emergency in Australia call 000; outside Australia use the emergency service where you are located.</p>
  </HoldingInformation>;
}

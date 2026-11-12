import type { Metadata } from "next";
import { HoldingInformation } from "@/components/common/HoldingInformation";

export const metadata: Metadata = { title: "Website Information", description: "Information about using the temporary Homoeopathy Speaks website." };
export default function WebsiteInformationPage() {
  return <HoldingInformation title="About this website" intro="This temporary website provides practice and consultation information.">
    <h2>Availability and enquiries</h2>
    <p>This website does not accept online appointment bookings, payments or newsletter registrations. Enquiries are by telephone or email using the practice contact details; an enquiry does not confirm an appointment.</p>
    <h2>General information</h2>
    <p>Website articles and other information are general information, not a diagnosis or an individual treatment plan. They do not replace advice from an appropriately qualified medical or other healthcare professional.</p>
    <h2>Full practice documents</h2>
    <p>The practice’s detailed policies and online consultation consent arrangements are being reviewed before online bookings open. Contact the practice to discuss arrangements before providing health information or seeking care.</p>
  </HoldingInformation>;
}

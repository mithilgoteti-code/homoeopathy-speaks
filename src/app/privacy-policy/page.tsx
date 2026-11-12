import type { Metadata } from "next";
import { HoldingInformation } from "@/components/common/HoldingInformation";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = { title: "Privacy Information", description: "Privacy information for the temporary Homoeopathy Speaks website and practice enquiries." };
export default function PrivacyPage() {
  return <HoldingInformation title="Privacy information" intro="How this temporary website and practice enquiries handle information.">
    <h2>This website</h2>
    <p>This website provides practice information and consultation fees. It does not accept appointment bookings, health questionnaires, document uploads, contact-form submissions or newsletter registrations.</p>
    <p>Cloudflare hosts and delivers the website. The current live website uses a Cloudflare analytics beacon for visits and performance. Hosting, analytics and security services may process technical information about a visit, such as network and request information. See the <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare privacy policy</a> for its published information-handling arrangements.</p>
    <h2>Contact and privacy enquiries</h2>
    <p>Contact Mr Kumar Goteti at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or <a href={siteConfig.phoneHref}>{siteConfig.phone}</a> about privacy, access, correction or a concern. We may need to verify your identity and any authority to act for someone else.</p>
    <p>The contact mailbox uses Gmail, provided by Google. Email includes message content, contact details and communication metadata. See <a href="https://policies.google.com/privacy">Google’s privacy policy</a>. Please do not send detailed health histories or reports by ordinary email; ask the practice about a suitable way to share them.</p>
    <h2>Practice records and future online bookings</h2>
    <p>The practice uses Halaxy for practice management. Online booking links are not active on this website. Halaxy has its own <a href="https://www.halaxy.com/privacy/au">Australian privacy notice</a>; its use does not mean that all connected services process information only in Australia.</p>
    <p>The full practice Privacy Policy is being reviewed. Before sharing health information or arranging care, contact the practice to discuss the applicable privacy information, including questions about health records and retention.</p>
    <h2>Concerns and further information</h2>
    <p>You can raise a privacy concern with the practice using the contact details above. Information about external privacy complaints is available from the <a href="https://www.oaic.gov.au/privacy/privacy-complaints">Office of the Australian Information Commissioner</a>.</p>
  </HoldingInformation>;
}

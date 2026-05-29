import type { Metadata } from "next";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Draft privacy policy for Homoeopathy Speaks.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <SectionHeading eyebrow="Legal" title="Privacy Policy" align="left" />
        <div className="prose-safe mt-8">
          <p><strong>Draft template:</strong> This page should be reviewed before publication.</p>
          <h2>Information we may collect</h2>
          <p>Homoeopathy Speaks may collect your name, email address, phone number and appointment enquiry details when you contact the practice or request an appointment.</p>
          <h2>Sensitive health information</h2>
          <p>Please do not submit detailed medical history through ordinary website contact forms. Detailed health information should be collected through a secure intake or practice-management system when reasonably necessary and with consent.</p>
          <h2>Third-party systems</h2>
          <p>Booking and patient information may be managed through a secure third-party booking or practice-management system such as Cliniko or Halaxy.</p>
          <h2>Contact</h2>
          <p>For privacy requests, contact info@homoeopathyspeaks.com.au.</p>
        </div>
      </div>
    </section>
  );
}

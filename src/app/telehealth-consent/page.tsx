import type { Metadata } from "next";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Telehealth Consent",
  description: "Draft telehealth consent page for Homoeopathy Speaks.",
};

export default function TelehealthConsentPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <SectionHeading eyebrow="Legal" title="Telehealth Consent" align="left" />
        <div className="prose-safe mt-8">
          <p><strong>Draft template:</strong> This page should be reviewed before publication.</p>
          <h2>Telehealth consultations</h2>
          <p>Telehealth consultations may be offered by phone or video. Patients are responsible for ensuring they have a private location and a stable connection.</p>
          <h2>Limitations</h2>
          <p>Telehealth may not be suitable for urgent, severe or complex medical situations. Homoeopathy Speaks does not provide emergency care.</p>
          <h2>Medical care</h2>
          <p>Patients should continue to access appropriate GP, specialist, allied health or emergency care when needed.</p>
        </div>
      </div>
    </section>
  );
}

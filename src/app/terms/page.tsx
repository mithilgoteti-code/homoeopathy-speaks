import type { Metadata } from "next";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Draft terms of use for Homoeopathy Speaks.",
};

export default function TermsPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <SectionHeading eyebrow="Legal" title="Terms of Use" align="left" />
        <div className="prose-safe mt-8">
          <p><strong>Draft template:</strong> This page should be reviewed before publication.</p>
          <h2>Website information</h2>
          <p>The information on this website is general educational information and does not replace personalised medical advice, diagnosis or treatment.</p>
          <h2>Use of this website</h2>
          <p>By using this website, you agree not to misuse the website, submit false information or use the site for emergency medical communication.</p>
          <h2>Appointments</h2>
          <p>Appointment requests are subject to practitioner availability and confirmation by the practice.</p>
        </div>
      </div>
    </section>
  );
}

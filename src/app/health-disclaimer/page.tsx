import type { Metadata } from "next";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Health Disclaimer",
  description: "Health disclaimer for Homoeopathy Speaks.",
};

export default function HealthDisclaimerPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <SectionHeading eyebrow="Legal" title="Health Disclaimer" align="left" />
        <div className="prose-safe mt-8">
          <p><strong>Draft template:</strong> This page should be reviewed before publication.</p>
          <h2>Complementary care</h2>
          <p>Homoeopathy Speaks provides complementary homoeopathic consultations. Homoeopathy does not replace medical diagnosis, emergency care, prescribed treatment, specialist care, paediatric care, mental health care, fertility care, antibiotics, surgery, vaccinations or allied health therapy.</p>
          <h2>Continue medical treatment</h2>
          <p>Patients should continue prescribed medicines unless advised otherwise by their medical doctor. For children, neurodevelopmental concerns, fertility, infections, renal concerns and chronic disease, patients should remain under appropriate medical or specialist care.</p>
          <h2>Emergencies</h2>
          <p>For urgent symptoms, severe pain, breathing difficulty, allergic reaction, suicidal thoughts, seizures, high fever in a child, chest pain or sudden neurological symptoms, call 000 or attend emergency care.</p>
        </div>
      </div>
    </section>
  );
}

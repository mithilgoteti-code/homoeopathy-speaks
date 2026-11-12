import type { Metadata } from "next";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Health Information",
  description: "The scope and limitations of complementary homoeopathic consultations.",
};

export default function HealthDisclaimerPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <SectionHeading eyebrow="Practice information" title="Important health information" align="left" />
        <div className="prose-safe mt-8">
          <h2>Complementary care</h2>
          <p>Homoeopathy Speaks provides complementary homoeopathic consultations. Homoeopathy does not replace medical diagnosis, emergency care, prescribed treatment, specialist care, paediatric care, mental health care, fertility care, antibiotics, surgery, vaccinations or allied health therapy.</p>
          <p>Mr Kumar Goteti provides homoeopathic consultations. Homoeopathy qualifications are not a representation of Australian medical registration. Current scientific evidence does not establish homoeopathy as an effective treatment for medical conditions. No symptom, developmental or disease-treatment improvement is promised.</p>
          <h2>Continue medical treatment</h2>
          <p>Patients should continue prescribed medicines unless advised otherwise by their medical doctor. For children, neurodevelopmental concerns, fertility, infections, renal concerns and chronic disease, patients should remain under appropriate medical or specialist care.</p>
          <h2>Emergencies</h2>
          <p>This is not an emergency service. For an emergency in Australia, call 000 or attend emergency care. Outside Australia, contact the emergency service where you are located.</p>
        </div>
      </div>
    </section>
  );
}

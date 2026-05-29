import type { Metadata } from "next";
import { Clock, Leaf, ShieldCheck, Stethoscope } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { CTASection } from "@/components/common/CTASection";
import { DisclaimerBox } from "@/components/common/DisclaimerBox";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Patient Guide",
  description:
    "How to take homoeopathic medicines, what to avoid, storage instructions, minute medications and integrating homoeopathy with modern medicine.",
};

const tips = [
  {
    icon: Clock,
    title: "Take as prescribed",
    text: "Use the dose, frequency and timing recommended by your practitioner. Do not change remedies without checking first.",
  },
  {
    icon: ShieldCheck,
    title: "Store correctly",
    text: "Keep medicines away from heat, sunlight, moisture, strong odours and children.",
  },
  {
    icon: Leaf,
    title: "Avoid interference",
    text: "Your practitioner may advise avoiding food, drink, coffee, toothpaste or strong flavours close to the dose.",
  },
  {
    icon: Stethoscope,
    title: "Stay medically supported",
    text: "Continue prescribed medicines unless your medical doctor advises otherwise.",
  },
];

export default function PatientGuidePage() {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Patient guide"
            title="How to take homoeopathic medicines"
            text="Practical guidance for using homoeopathic medicines safely and integrating care with modern medicine."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tips.map((tip) => (
              <InfoCard key={tip.title} {...tip} />
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl bg-teal-900 p-8 text-white shadow-sm">
              <h2 className="text-2xl font-semibold">Minute medications and potency</h2>
              <p className="mt-4 leading-8 text-teal-50/90">
                Homoeopathic medicines are prepared through repeated dilution and succussion,
                traditionally called potentisation. Homoeopathic practitioners believe this process
                produces a remedy that acts gently and individually, although the mechanism and
                clinical effectiveness remain debated in mainstream medical science.
              </p>
            </div>

            <div className="rounded-3xl bg-[#fbfaf6] p-8 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-2xl font-semibold text-slate-950">Integrating with modern medicine</h2>
              <p className="mt-4 leading-8 text-slate-700">
                Homoeopathy Speaks supports an integrative approach. Patients should continue
                prescribed medicines unless advised otherwise by their medical doctor. Homoeopathy
                should not replace emergency care, paediatric care, mental health care, fertility
                care, antibiotics, surgery, vaccinations, diagnostic testing or specialist treatment
                where these are medically required.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <DisclaimerBox />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

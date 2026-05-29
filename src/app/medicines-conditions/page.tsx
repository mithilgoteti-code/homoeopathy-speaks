import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { DisclaimerBox } from "@/components/common/DisclaimerBox";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Homoeopathic Medicines & Conditions",
  description:
    "Learn about individualised homoeopathic medicine selection and complementary support for chronic wellbeing, women’s health, pain, arthritis, respiratory concerns and other conditions.",
};

const groups = [
  {
    title: "Women’s health and fertility-related wellbeing",
    items: [
      "Menstrual wellbeing",
      "Hormonal wellbeing",
      "Fertility-related wellbeing support",
      "Menopause-related wellbeing",
      "General constitutional care",
    ],
  },
  {
    title: "Pain, arthritis and musculoskeletal support",
    items: [
      "Rheumatism",
      "Arthritis-related wellbeing",
      "Pain management support",
      "Joint and muscle concerns",
      "Mobility and constitutional support",
    ],
  },
  {
    title: "Respiratory, sinus and allergy concerns",
    items: [
      "Recurrent sinus concerns",
      "Allergy-related symptoms",
      "Respiratory wellbeing",
      "Seasonal patterns",
      "Immune wellbeing support",
    ],
  },
  {
    title: "Chronic and recurring concerns",
    items: [
      "Migraines and recurrent headaches",
      "Digestive wellbeing",
      "Skin concerns",
      "Renal health concerns under medical care",
      "Lyme disease-related wellbeing support under medical supervision",
    ],
  },
];

export default function MedicinesConditionsPage() {
  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Medicines and conditions"
            title="Homoeopathic medicines and whole-person care"
            text="Homoeopathic medicines are selected individually after detailed case-taking. The remedy choice is based on the person’s overall symptom picture rather than diagnosis alone."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-teal-900 p-8 text-white shadow-sm">
              <h2 className="text-2xl font-semibold">What are homoeopathic medicines?</h2>
              <p className="mt-4 leading-8 text-teal-50/90">
                Homoeopathic medicines may be supplied as pills, drops, granules or tablets depending
                on the practitioner’s advice. In classical homoeopathy, the remedy is selected after
                understanding the person’s individual symptom pattern, constitution, triggers and
                overall health context.
              </p>
              <p className="mt-4 leading-8 text-teal-50/90">
                Homoeopathy Speaks encourages patients to keep their GP, specialist and allied health
                team informed and to continue prescribed treatment unless advised otherwise by their
                medical doctor.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {groups.map((group) => (
                <div key={group.title} className="rounded-3xl bg-[#fbfaf6] p-6 shadow-sm ring-1 ring-slate-100">
                  <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

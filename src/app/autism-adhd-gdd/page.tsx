import type { Metadata } from "next";
import Link from "next/link";
import { Baby, Brain, CheckCircle2, Stethoscope } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { CTASection } from "@/components/common/CTASection";
import { DisclaimerBox } from "@/components/common/DisclaimerBox";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Consultation information for families",
  description:
    "Information for families considering a homoeopathic consultation, including limits of the service and the importance of appropriate medical and allied health care.",
};

export default function NeuroPage() {
  return (
    <>
      <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Children and families"
            title="Consultation information for children and families"
            text="Information for families considering a complementary consultation. Developmental concerns require appropriate assessment and care from qualified professionals."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-2xl font-semibold text-slate-950">Understanding the whole child</h2>
              <p className="mt-4 leading-8 text-slate-700">
                Autism Spectrum Disorder, ADHD and Global Developmental Delay are complex
                neurodevelopmental presentations. Each child may have a different pattern of
                communication, sensory preferences, sleep, digestion, emotional regulation, learning,
                attention, behaviour and family support needs.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                At Homoeopathy Speaks, consultations are designed to understand the child as a whole.
                Mr Kumar Goteti uses detailed case-taking to discuss the child’s physical, emotional,
                behavioural, developmental and family context before selecting an individualised
                homoeopathic remedy.
              </p>
            </div>

            <div className="rounded-3xl bg-teal-900 p-8 text-white shadow-sm">
              <h2 className="text-2xl font-semibold">Scope and limitations</h2>
              <p className="mt-4 leading-8 text-teal-50/90">Mr Kumar Goteti provides homoeopathic consultations. These consultations do not diagnose or assess autism, ADHD or developmental delay, and no developmental or symptom improvement is promised.</p>
              <p className="mt-4 leading-8 text-teal-50/90">Parents should continue paediatric, allied health, behavioural, educational and medical care. Questions about diagnosis or established treatment should be directed to the appropriate qualified professional.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              icon={Baby}
              title="Family-centred appointments"
              text="Parents are invited to share developmental, behavioural, sleep, sensory, eating, emotional and family-context details."
            />
            <InfoCard
              icon={Brain}
              title="Care history and preferences"
              text="The consultation discusses relevant history, existing treatments and care priorities without replacing a diagnostic assessment."
            />
            <InfoCard
              icon={Stethoscope}
              title="Integrated support"
              text="Care should continue alongside paediatricians, GPs, psychologists, speech pathologists, occupational therapists and school supports."
            />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <DisclaimerBox />
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-2xl font-semibold text-slate-950">Review extended consultation options</h2>
              <p className="mt-3 leading-8 text-slate-700">
                Review extended consultation options if more time is needed. Intake forms
                are offered after booking, with paper alternatives at the clinic.
              </p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
                {[
                  "Attention and concentration patterns",
                  "Emotional regulation and behavioural patterns",
                  "Learning, communication and social engagement",
                  "Sleep, digestion and sensory preferences",
                  "Family routines and support needs",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-teal-700" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/book-appointment" className="mt-6 inline-flex rounded-full bg-teal-700 px-6 py-4 font-semibold text-white hover:bg-teal-800">
                View consultations and fees
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

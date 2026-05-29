import type { Metadata } from "next";
import Link from "next/link";
import { Baby, Brain, CheckCircle2, Stethoscope } from "lucide-react";
import { InfoCard } from "@/components/cards/InfoCard";
import { CTASection } from "@/components/common/CTASection";
import { DisclaimerBox } from "@/components/common/DisclaimerBox";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Autism, ADHD & GDD Support",
  description:
    "Individualised homoeopathic consultations for families seeking complementary support for Autism, ADHD and Global Developmental Delay alongside appropriate medical and allied health care.",
};

export default function NeuroPage() {
  return (
    <>
      <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Children and families"
            title="Autism, ADHD & Developmental Support"
            text="Individualised homoeopathic consultations for families seeking complementary support alongside paediatric, allied health, behavioural, educational and conventional medical care."
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
                Dr Kumar Goteti uses detailed case-taking to assess the child’s physical, emotional,
                behavioural, developmental and family context before selecting an individualised
                homoeopathic remedy.
              </p>
            </div>

            <div className="rounded-3xl bg-teal-900 p-8 text-white shadow-sm">
              <h2 className="text-2xl font-semibold">Dr Kumar’s focused work since 2010</h2>
              <p className="mt-4 leading-8 text-teal-50/90">
                For over 15 years, Dr Kumar Goteti has maintained a focused clinical and research
                interest in supporting children and families affected by Autism Spectrum Disorder,
                ADHD and Global Developmental Delay.
              </p>
              <p className="mt-4 leading-8 text-teal-50/90">
                His work has centred on individualised homoeopathic case-taking, long-term follow-up,
                family-centred care and observing changes across attention, emotional regulation,
                learning progress, social engagement, sleep and general wellbeing.
              </p>
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
              title="Individualised remedy selection"
              text="Remedies are selected based on the child’s total symptom picture rather than diagnosis alone."
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
              <h2 className="text-2xl font-semibold text-slate-950">Book a neurodevelopmental consultation</h2>
              <p className="mt-3 leading-8 text-slate-700">
                Choose the Autism / ADHD / GDD consultation option on the booking page. Families may
                be asked to complete a secure intake form before the appointment.
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
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

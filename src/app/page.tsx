import type { Metadata } from "next";
import Link from "next/link";
import { Baby, Brain, CheckCircle2, HeartPulse, Leaf, Stethoscope } from "lucide-react";
import { BookingMiniForm } from "@/components/booking/BookingMiniForm";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { InfoCard } from "@/components/cards/InfoCard";
import { DisclaimerBox } from "@/components/common/DisclaimerBox";
import { SectionHeading } from "@/components/common/SectionHeading";
import { articles } from "@/lib/articles";
import { drKumarShortBio, siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Homoeopathic Consultations in Perth",
  description: siteConfig.description,
};

const supportAreas = [
  {
    icon: Brain,
    title: "Autism, ADHD & GDD",
    text: "Individualised homoeopathic consultations for children and families seeking complementary support alongside medical, allied health and educational care.",
  },
  {
    icon: HeartPulse,
    title: "Chronic Wellbeing",
    text: "Whole-person case-taking for long-term concerns where patients want personalised complementary care integrated with existing healthcare.",
  },
  {
    icon: Leaf,
    title: "Women’s Health & Fertility",
    text: "Supportive consultations for women’s health, menstrual wellbeing, fertility-related wellbeing and broader constitutional care.",
  },
  {
    icon: Stethoscope,
    title: "Pain, Arthritis & Musculoskeletal Care",
    text: "Complementary support for people experiencing rheumatism, arthritis, pain and musculoskeletal concerns while remaining under appropriate medical care.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 text-white">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="container-pad relative grid gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-teal-50 backdrop-blur">
              <Leaf className="h-4 w-4" />
              {siteConfig.tagline}
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              Homoeopathy Speaks
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-teal-50/90">
              Personalised consultations with Dr Kumar Goteti, MD Homoeopathy, for children,
              families and adults seeking complementary support alongside modern medical care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="rounded-full bg-amber-300 px-7 py-4 text-center font-semibold text-slate-950 transition hover:bg-amber-200">
                Book an Appointment
              </Link>
              <Link href="/autism-adhd-gdd" className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10">
                Autism, ADHD & GDD Support
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Autism & ADHD", "GDD", "Women’s Health", "Pain & Arthritis", "Chronic Wellbeing"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-teal-50">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <BookingMiniForm />
        </div>
      </section>

      <section className="bg-[#fbfaf6] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Whole-person care"
            title="Homoeopathy that starts with listening"
            text="Homoeopathy Speaks focuses on careful case-taking, individualised remedy selection and respectful integration with existing medical, allied health and specialist care."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportAreas.map((area) => (
              <InfoCard key={area.title} {...area} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-teal-700 to-teal-950 p-8 text-white shadow-sm">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-4xl font-semibold">
              KG
            </div>
            <h2 className="mt-8 text-3xl font-semibold">Meet Dr Kumar Goteti</h2>
            <p className="mt-3 text-teal-50/90">MD Homoeopathy</p>
            <div className="mt-6 grid gap-3 text-sm text-teal-50/90">
              {[
                "Australian Register of Homoeopaths registered practitioner",
                "Over 30 years of clinical experience",
                "Special interest in Autism, ADHD and GDD",
                "Former Associate Professor and Clinical Supervisor in Homoeopathy",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            {drKumarShortBio.split("\n\n").map((paragraph) => (
              <p key={paragraph} className="mb-5 text-lg leading-9 text-slate-700">
                {paragraph}
              </p>
            ))}
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-appointment" className="rounded-full bg-teal-700 px-6 py-4 text-center font-semibold text-white transition hover:bg-teal-800">
                Book with Dr Kumar
              </Link>
              <Link href="/autism-adhd-gdd" className="rounded-full border border-slate-200 px-6 py-4 text-center font-semibold text-slate-800 transition hover:border-teal-700 hover:text-teal-800">
                Learn about his approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">
                Focused support for Autism, ADHD and GDD
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                Families often seek homoeopathic care when they want a detailed, whole-person
                assessment of the child’s emotional, behavioural, sensory, sleep, digestive and
                developmental patterns. Homoeopathy Speaks presents this care as complementary and
                supportive, not as a replacement for paediatric, psychological, allied health,
                educational or specialist support.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-teal-100">
              <h3 className="text-xl font-semibold text-slate-950">What consultations explore</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
                {[
                  "Attention, concentration and learning patterns",
                  "Emotional regulation and behavioural patterns",
                  "Sleep, digestion and sensory preferences",
                  "Family context and support needs",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-teal-700" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/autism-adhd-gdd" className="mt-6 inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Resources"
            title="Helpful articles for patients and families"
            text="Educational articles can be published here and later sent to registered users through MailerLite, Mailchimp, Brevo or another newsletter system."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <DisclaimerBox />
        </div>
      </section>
    </>
  );
}

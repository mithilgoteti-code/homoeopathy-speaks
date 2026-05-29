import fs from "fs";
import path from "path";

const files = {
  "src/lib/siteConfig.ts": `export const siteConfig = {
  name: "Homoeopathy Speaks",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.homoeopathyspeaks.com.au",
  description:
    "Homoeopathy Speaks offers individualised homoeopathic consultations with Dr Kumar Goteti, MD Homoeopathy, supporting children, families and adults through complementary care alongside modern medical care.",
  tagline: "Individualised homoeopathic care, integrated with modern healthcare.",
  email: "info@homoeopathyspeaks.com.au",
  phone: "Phone number to be added",
  location: "Perth / Stirling WA — address to be confirmed",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Autism, ADHD & GDD", href: "/autism-adhd-gdd" },
  { label: "Medicines & Conditions", href: "/medicines-conditions" },
  { label: "Book Appointment", href: "/book-appointment" },
  { label: "Patient Guide", href: "/patient-guide" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export const drKumarShortBio = \`Dr Kumar Goteti, MD Homoeopathy, is an Australian Register of Homoeopaths registered practitioner with over 30 years of clinical experience. He has a special interest in supporting children and families affected by Autism Spectrum Disorder, ADHD and Global Developmental Delay, with over 15 years of focused clinical and research involvement in this area. His approach is based on classical homoeopathic principles, using individualised remedies selected through detailed case-taking and whole-person assessment.

Dr Goteti has also served as an Associate Professor and Clinical Supervisor in Homoeopathy and currently serves as the Honorary Homeopath for the Indian Consulate in Perth. His broader practice includes chronic health concerns such as rheumatism, arthritis, respiratory concerns, renal health, women’s health and infertility-related wellbeing support.\`;

export const drKumarLongBio = \`Dr Kumar Goteti, MD Homoeopathy, is an Australian Register of Homoeopaths registered practitioner with over 30 years of clinical experience. He has a special clinical interest in supporting children and families affected by neurodevelopmental presentations, particularly Autism Spectrum Disorder, Global Developmental Delay and ADHD.

Dr Goteti is one of the early practitioners to earn a Master’s degree in Homoeopathic Philosophy. For more than 15 years, he has been actively involved in clinical practice and research focused on improving wellbeing and quality of life for children and families navigating developmental and behavioural challenges.

His approach is based on classical homoeopathic principles, using natural, individualised remedies selected after detailed case-taking. Rather than focusing only on a diagnosis, Dr Goteti considers the person’s complete symptom picture, including emotional regulation, attention, sleep, sensory patterns, learning, digestion, behaviour, lifestyle and family context.

Over time, Dr Goteti has observed meaningful improvements in areas such as attention span, emotional regulation, learning progress and social engagement in some children receiving individualised homoeopathic care. Homoeopathy Speaks presents this care as a complementary approach that can be integrated alongside paediatric, allied health, behavioural, educational and conventional medical support.

Alongside his clinical work, Dr Goteti has served as an Associate Professor and Clinical Supervisor in Homoeopathy, mentoring future practitioners and contributing to professional education. He currently serves as the Honorary Homeopath for the Indian Consulate in Perth, providing care and support to communities.

His broader practice also extends to chronic health concerns, including rheumatism, arthritis, respiratory concerns, renal health, women’s health issues and infertility-related wellbeing support.\`;
`,

  "src/lib/services.ts": `export const services = [
  {
    name: "Autism / ADHD / GDD Initial Consultation",
    slug: "autism-adhd-gdd-initial",
    duration: "90–120 min",
    price: "$___",
    category: "Neurodevelopmental support",
    isPackage: false,
    description:
      "Detailed developmental, behavioural, physical and family-context case-taking for children and families.",
  },
  {
    name: "Autism / ADHD / GDD Follow-up",
    slug: "autism-adhd-gdd-follow-up",
    duration: "45–60 min",
    price: "$___",
    category: "Neurodevelopmental support",
    isPackage: false,
    description:
      "Review of progress, symptom pattern changes, remedy response and ongoing support planning.",
  },
  {
    name: "Autism / ADHD / GDD Care Package",
    slug: "autism-adhd-gdd-package",
    duration: "Initial + follow-ups",
    price: "$___",
    category: "Neurodevelopmental support",
    isPackage: true,
    description:
      "Structured package for families wanting continuity of care over a defined support period.",
  },
  {
    name: "General Adult Initial Consultation",
    slug: "general-adult-initial",
    duration: "60–90 min",
    price: "$___",
    category: "General care",
    isPackage: false,
    description:
      "Whole-person consultation for chronic or recurring health concerns and general wellbeing support.",
  },
  {
    name: "General Adult Follow-up",
    slug: "general-adult-follow-up",
    duration: "30–45 min",
    price: "$___",
    category: "General care",
    isPackage: false,
    description:
      "Follow-up appointment to review response and adjust the care plan where appropriate.",
  },
  {
    name: "Women’s Health / Fertility Consultation",
    slug: "womens-health-fertility",
    duration: "60–90 min",
    price: "$___",
    category: "Women’s health",
    isPackage: false,
    description:
      "Supportive consultation for women’s health, menstrual wellbeing and fertility-related wellbeing support.",
  },
  {
    name: "Pain / Arthritis / Musculoskeletal Consultation",
    slug: "pain-arthritis-musculoskeletal",
    duration: "45–60 min",
    price: "$___",
    category: "Pain and musculoskeletal",
    isPackage: false,
    description:
      "Complementary support for pain, arthritis, rheumatism and musculoskeletal wellbeing concerns.",
  },
  {
    name: "Short Acute Consultation",
    slug: "short-acute",
    duration: "15–20 min",
    price: "$___",
    category: "Short consultation",
    isPackage: false,
    description:
      "Short appointment for simple, non-emergency concerns where homoeopathic advice may be appropriate.",
  },
];
`,

  "src/lib/articles.ts": `export const articles = [
  {
    slug: "first-homoeopathic-consultation",
    title: "What to Expect in Your First Homoeopathic Consultation",
    category: "New Patients",
    date: "2026-05-29",
    readingTime: "4 min read",
    excerpt:
      "A simple guide to case-taking, appointment structure and how individualised remedies are selected.",
    sections: [
      {
        heading: "A whole-person appointment",
        body: "Your first consultation is designed to understand you as a whole person. The practitioner may ask about your main concern, general health, sleep, appetite, emotional patterns, family history, lifestyle and previous medical care.",
      },
      {
        heading: "Individualised remedy selection",
        body: "In classical homoeopathy, the remedy is selected based on the person’s overall symptom picture rather than the diagnosis alone.",
      },
      {
        heading: "Complementary care",
        body: "Homoeopathy should be used alongside appropriate medical care and should not replace diagnosis, prescribed treatment or emergency care.",
      },
    ],
  },
  {
    slug: "autism-adhd-gdd-complementary-care",
    title: "Homoeopathy, Autism, ADHD & GDD: A Complementary Care Perspective",
    category: "Children & Families",
    date: "2026-05-29",
    readingTime: "5 min read",
    excerpt:
      "How whole-person consultations can sit alongside paediatric, allied health, behavioural and educational supports.",
    sections: [
      {
        heading: "Understanding the child’s pattern",
        body: "Children with Autism Spectrum Disorder, ADHD or Global Developmental Delay may have unique patterns of attention, sleep, digestion, sensory preferences, emotional regulation, learning and social engagement.",
      },
      {
        heading: "Supporting the family context",
        body: "A detailed consultation can help understand the child’s broader context, including family routines, developmental history and support needs.",
      },
      {
        heading: "Integrated with other supports",
        body: "Homoeopathic care should be integrated alongside paediatricians, GPs, psychologists, speech pathologists, occupational therapists, educators and other appropriate supports.",
      },
    ],
  },
  {
    slug: "taking-homoeopathic-medicines-safely",
    title: "How to Take Homoeopathic Medicines Safely",
    category: "Medicine Guide",
    date: "2026-05-29",
    readingTime: "3 min read",
    excerpt:
      "Practical instructions on dosing, storage, timing and what to do if symptoms change.",
    sections: [
      {
        heading: "Follow your prescription",
        body: "Take your medicine exactly as advised. Do not change the dose, frequency or remedy without checking with your practitioner.",
      },
      {
        heading: "Storage",
        body: "Store medicines away from heat, sunlight, moisture, strong odours and children.",
      },
      {
        heading: "When to seek medical care",
        body: "If symptoms become severe, sudden or concerning, seek appropriate medical care. For emergencies, call 000.",
      },
    ],
  },
  {
    slug: "homoeopathy-alongside-modern-medicine",
    title: "Using Homoeopathy Alongside Modern Medicine",
    category: "Integrative Health",
    date: "2026-05-29",
    readingTime: "4 min read",
    excerpt:
      "Why patients should continue prescribed treatment and use homoeopathy as complementary care.",
    sections: [
      {
        heading: "An integrative approach",
        body: "Homoeopathy Speaks supports the use of homoeopathy as complementary care alongside modern medicine.",
      },
      {
        heading: "Continue prescribed care",
        body: "Patients should continue prescribed medicines unless advised otherwise by their medical doctor.",
      },
      {
        heading: "Keep your care team informed",
        body: "It is helpful to tell your GP, specialist and allied health team about any complementary therapies you use.",
      },
    ],
  },
  {
    slug: "parent-questions-before-booking",
    title: "Questions Parents Commonly Ask Before Booking",
    category: "Children & Families",
    date: "2026-05-29",
    readingTime: "4 min read",
    excerpt:
      "Common questions from parents considering a consultation for children with developmental or behavioural concerns.",
    sections: [
      {
        heading: "What information should I bring?",
        body: "Bring relevant medical history, developmental reports, therapy summaries, current supports and a list of any medicines or supplements.",
      },
      {
        heading: "Is this a replacement for therapy?",
        body: "No. Homoeopathy should not replace paediatric, allied health, behavioural, educational or medical support.",
      },
      {
        heading: "What happens after the first visit?",
        body: "The practitioner reviews the case, provides individualised advice and may recommend follow-up depending on the situation.",
      },
    ],
  },
  {
    slug: "individualised-homoeopathic-remedies",
    title: "Understanding Individualised Homoeopathic Remedies",
    category: "Homoeopathy Basics",
    date: "2026-05-29",
    readingTime: "4 min read",
    excerpt:
      "A clear explanation of how remedies are selected through detailed case-taking.",
    sections: [
      {
        heading: "The individual symptom picture",
        body: "Homoeopathic remedy selection considers the person’s complete pattern, including physical symptoms, triggers, emotional features and general wellbeing.",
      },
      {
        heading: "Not diagnosis-only prescribing",
        body: "Two people with the same diagnosis may receive different remedies because their individual symptom patterns may differ.",
      },
      {
        heading: "Follow-up matters",
        body: "Follow-up appointments help assess changes and guide the next step in care.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
`,

  "src/app/globals.css": `@import "tailwindcss";

:root {
  --background: #fffdf7;
  --foreground: #172124;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--foreground);
}

::selection {
  background: #0f766e;
  color: white;
}

.container-pad {
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}

.prose-safe p {
  @apply mb-5 leading-8 text-slate-700;
}

.prose-safe h2 {
  @apply mb-4 mt-10 text-2xl font-semibold tracking-tight text-slate-950;
}
`,

  "src/components/common/SectionHeading.tsx": `type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h1>
      {text ? <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}
`,

  "src/components/common/DisclaimerBox.tsx": `import { ShieldCheck } from "lucide-react";

export function DisclaimerBoounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-950">
      <div className="mb-2 flex items-center gap-2 font-semibold">
        <ShieldCheck className="h-5 w-5" />
        Important health information
      </div>
      Homoeopathy Speaks provides complementary homoeopathic consultations and does not replace
      medical diagnosis, emergency care, prescribed treatment, specialist care, paediatric care,
      mental health care, fertility care, antibiotics, surgery, vaccinations or allied health therapy.
      For urgent symptoms, call 000 or attend emergency care.
    </div>
  );
}
`,

  "src/components/common/CTASection.tsx": `import Link from "next/link";

type CTASectionProps = {
  title?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function CTASection({
  title = "Ready to book a consultation?",
  text = "Choose the appointment option that best matches your needs. The live website can connect this page to Cliniko, Halaxy, Acuity or another booking calendar.",
  buttonText = "Book an Appointment",
  buttonHref = "/book-appointment",
}: CTASectionProps) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-teal-800 to-teal-950 p-8 text-white md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-4 max-w-3xl text-teal-50/90">{text}</p>
          </div>
          <Link
            href={buttonHref}
            className="inline-flex w-fit items-center justify-center rounded-full bg-amber-300 px-7 py-4 font-semibold text-slate-950 transition hover:bg-amber-200"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
`,

  "src/components/cards/InfoCard.tsx": `import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export function InfoCard({ icon: Icon, title, text }: InfoCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <div className="mb-5 inline-flex rounded-2xl bg-teal-50 p-3 text-teal-800">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}
`,

  "src/components/cards/ArticleCard.tsx": `import Link from "next/link";
import { ChevronRight } from "lucide-react";

type ArticleCardProps = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
};

export function ArticleCard({ slug, title, category, excerpt, readingTime }: ArticleCardProps) {
  return (
    <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
          {category}
        </span>
        <span className="text-xs text-slate-500">{readingTime}</span>
      </div>
      <h3 className="text-lg font-semibold leading-7 text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{excerpt}</p>
      <Link
        href={\`/articles/\${slug}\`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-950"
      >
        Read article <ChevronRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
`,

  "src/components/layout/Header.tsx": `"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/siteConfig";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-pad flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-sm">
            <Leaf className="h-6 w-6" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-950">
              Homoeopathy Speaks
            </div>
            <div className="text-xs font-medium text-slate-500">
              Individualised homoeopathic care
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "rounded-full bg-teal-700 px-4 py-2 text-sm font-medium text-white shadow-sm"
                    : "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-teal-50 hover:text-teal-800"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/book-appointment"
          className="hidden rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 lg:inline-flex"
        >
          Book Now
        </Link>

        <button
          className="rounded-xl p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 lg:hidden">
          <div className="grid gap-2 pt-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    active
                      ? "rounded-xl bg-teal-700 px-4 py-3 text-sm font-medium text-white"
                      : "rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
`,

  "src/components/layout/Footer.tsx": `import Link from "next/link";
import { Leaf } from "lucide-react";
import { navItems, siteConfig } from "@/lib/siteConfig";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Health Disclaimer", href: "/health-disclaimer" },
  { label: "Booking & Cancellation Policy", href: "/booking-cancellation" },
  { label: "Telehealth Consent", href: "/telehealth-consent" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-white">
              <Leaf className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">{siteConfig.name}</div>
              <div className="text-xs text-slate-400">{siteConfig.tagline}</div>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Complementary homoeopathic consultations for children, families and adults.
            Homoeopathy Speaks supports integration with modern medical care and appropriate
            allied health support.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Pages</h4>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Legal</h4>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs leading-5 text-slate-500">
        © {new Date().getFullYear()} Homoeopathy Speaks. Website copy should be reviewed before
        publication. For emergencies, call 000.
      </div>
    </footer>
  );
}
`,

  "src/app/layout.tsx": `import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Homoeopathy Speaks | Homoeopathic Consultations in Perth",
    template: "%s | Homoeopathy Speaks",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Homoeopathy Speaks",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Homoeopathy Speaks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homoeopathy Speaks",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
`,

  "src/components/booking/BookingMiniForm.tsx": `"use client";

import Link from "next/link";
import { Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function BookingMiniForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 text-teal-800">
          <CheckCircle2 className="h-7 w-7" />
          <h3 className="text-xl font-semibold">Booking request received</h3>
        </div>
        <p className="mt-3 text-slate-600">
          In the live site, this form will connect to a secure booking system such as Cliniko,
          Halaxy, Acuity or Wix Bookings.
        </p>
        <Link
          href="/book-appointment"
          className="mt-5 inline-flex rounded-full bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800"
        >
          Continue to Booking Calendar
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-2xl bg-teal-50 p-3 text-teal-800">
          <Calendar className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-950">Request an appointment</h3>
          <p className="text-sm text-slate-500">Short form linked to the full booking calendar.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Full name" required />
        <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Phone" required />
        <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600 md:col-span-2" placeholder="Email" type="email" required />
        <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600">
          <option>Main concern</option>
          <option>Autism</option>
          <option>ADHD</option>
          <option>Global Developmental Delay</option>
          <option>General consultation</option>
          <option>Women’s health / fertility</option>
          <option>Pain / arthritis</option>
          <option>Other</option>
        </select>
        <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600">
          <option>Preferred consultation</option>
          <option>In-person</option>
          <option>Telehealth</option>
          <option>Phone</option>
        </select>
        <textarea className="min-h-28 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600 md:col-span-2" placeholder="Brief message. Please do not include detailed medical history here." />
      </div>

      <label className="mt-4 flex gap-3 text-xs leading-5 text-slate-600">
        <input type="checkbox" required className="mt-1" />
        I understand this form is for appointment enquiries only and is not for emergency medical care.
      </label>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-teal-700 px-6 py-4 font-semibold text-white transition hover:bg-teal-800"
      >
        Submit Booking Request
      </button>
    </form>
  );
}
`,

  "src/components/booking/BookingSelector.tsx": `"use client";

import { services } from "@/lib/services";
import { Calendar, ChevronRight } from "lucide-react";
import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const times = ["9:00 AM", "10:30 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

export function BookingSelector() {
  const [selectedSlug, setSelectedSlug] = useState(services[0].slug);
  const selected = services.find((service) => service.slug === selectedSlug) || services[0];
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="space-y-4">
        {services.map((service) => (
          <button
            key={service.slug}
            onClick={() => setSelectedSlug(service.slug)}
            className={
              selectedSlug === service.slug
                ? "w-full rounded-3xl border border-teal-700 bg-white p-5 text-left shadow-md transition"
                : "w-full rounded-3xl border border-slate-200 bg-white/70 p-5 text-left transition hover:bg-white"
            }
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-slate-950">{service.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{service.description}</p>
              </div>
              <ChevronRight className="mt-1 h-5 w-5 text-teal-700" />
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-teal-50 px-3 py-1 text-teal-800">{service.duration}</span>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-800">{service.price}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-950">Booking calendar</h3>
            <p className="mt-2 text-slate-600">Selected: {selected.name}</p>
          </div>
          <div className="rounded-2xl bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800">
            {bookingUrl ? "Live booking embed" : "Prototype calendar"}
          </div>
        </div>

        {bookingUrl ? (
          <div className="mt-6">
            <iframe
              src={bookingUrl}
              title="Booking calendar"
              className="h-[720px] w-full rounded-2xl border border-slate-200"
            />
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
            >
              Open Booking Calendar
            </a>
          </div>
        ) : (
          <>
            <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
              {days.map((day) => (
                <div key={day} className="rounded-2xl bg-slate-50 p-4 text-center">
                  <div className="text-sm font-semibold text-slate-950">{day}</div>
                  <div className="mt-1 text-xs text-slate-500">Available</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              {times.map((time) => (
                <button
                  key={time}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-teal-700 hover:text-teal-800"
                >
                  {time}
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-teal-50 p-5 text-sm leading-7 text-teal-950">
              <div className="mb-2 flex items-center gap-2 font-semibold">
                <Calendar className="h-5 w-5" />
                Booking integration notice
              </div>
              This is a placeholder. The live website can embed Cliniko, Halaxy, Acuity, Calendly
              or Wix Bookings. Recommended options for a health practice are Cliniko or Halaxy.
            </div>
          </>
        )}

        <form className="mt-8 grid gap-4">
          <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Full name" />
          <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Email" />
          <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Phone" />
          <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600">
            <option>Patient type</option>
            <option>Adult</option>
            <option>Child</option>
            <option>Parent booking for child</option>
          </select>
          <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600">
            <option>Preferred consultation mode</option>
            <option>In-person</option>
            <option>Telehealth</option>
            <option>Phone</option>
          </select>
          <textarea className="min-h-28 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Brief appointment notes. Please do not include detailed medical history here." />
          <label className="flex gap-3 text-xs leading-5 text-slate-600">
            <input type="checkbox" className="mt-1" />
            I understand this is not emergency medical care.
          </label>
          <label className="flex gap-3 text-xs leading-5 text-slate-600">
            <input type="checkbox" className="mt-1" />
            I consent to Homoeopathy Speaks collecting my information to respond to this booking request.
          </label>
          <button className="rounded-full bg-teal-700 px-6 py-4 font-semibold text-white transition hover:bg-teal-800">
            Request Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
`,

  "src/app/page.tsx": `import type { Metadata } from "next";
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
            {drKumarShortBio.split("\\n\\n").map((paragraph) => (
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
`,

  "src/app/autism-adhd-gdd/page.tsx": `import type { Metadata } from "next";
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
`,

  "src/app/medicines-conditions/page.tsx": `import type { Metadata } from "next";
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
`,

  "src/app/book-appointment/page.tsx": `import type { Metadata } from "next";
import { BookingSelector } from "@/components/booking/BookingSelector";
import { DisclaimerBox } from "@/components/common/DisclaimerBox";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book a homoeopathic consultation with Homoeopathy Speaks. Choose from Autism, ADHD and GDD consultations, general adult care, women’s health, pain and other appointment types.",
};

export default function BookAppointmentPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Appointments"
          title="Book an appointment"
          text="Choose a consultation type, review fees and request an appointment. In the live website, this section can integrate with Cliniko, Halaxy, Acuity, Calendly or Wix Bookings."
        />
        <div className="mt-12">
          <BookingSelector />
        </div>
        <div className="mt-10">
          <DisclaimerBox />
        </div>
      </div>
    </section>
  );
}
`,

  "src/app/patient-guide/page.tsx": `import type { Metadata } from "next";
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
`,

  "src/app/articles/page.tsx": `import type { Metadata } from "next";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles & Resources",
  description:
    "Educational articles and resources from Homoeopathy Speaks covering homoeopathy basics, child wellbeing, medicine-taking tips and integrative health.",
};

export default function ArticlesPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Resources"
          title="Articles and patient education"
          text="A resource area for educational articles, clinic updates and patient guidance. In the live website, the administrator can publish articles and send updates to registered users."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-2xl font-semibold text-slate-950">Subscribe for articles</h2>
            <p className="mt-3 leading-8 text-slate-700">
              Registered users can receive educational articles, practice updates and patient
              guidance. The live website can connect this form to MailerLite, Mailchimp, Brevo,
              Wix Email Marketing or FluentCRM.
            </p>
            <form className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_auto]">
              <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Name" />
              <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Email" />
              <button className="rounded-full bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800">
                Subscribe
              </button>
            </form>
            <label className="mt-4 flex gap-3 text-xs leading-5 text-slate-600">
              <input type="checkbox" className="mt-1" />I consent to receiving educational articles and clinic updates and understand I can unsubscribe at any time.
            </label>
          </div>

          <div className="rounded-3xl bg-teal-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-semibold">Admin article features</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-teal-50/90">
              <li>✓ Upload and publish articles</li>
              <li>✓ Send newsletters to registered users</li>
              <li>✓ Segment readers by interest area</li>
              <li>✓ Create patient education sequences</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  "src/app/articles/[slug]/page.tsx": `import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";
import { DisclaimerBox } from "@/components/common/DisclaimerBox";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 md:p-10">
        <Link href="/articles" className="text-sm font-semibold text-teal-800 hover:text-teal-950">
          ← Back to articles
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
            {article.category}
          </span>
          <span className="text-xs text-slate-500">{article.readingTime}</span>
        </div>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950">
          {article.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{article.excerpt}</p>

        <div className="prose-safe mt-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10">
          <DisclaimerBox />
        </div>
      </article>
    </section>
  );
}
`,

  "src/app/contact/page.tsx": `import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { DisclaimerBox } from "@/components/common/DisclaimerBox";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Homoeopathy Speaks for appointments, general enquiries and information about consultation options.",
};

export default function ContactPage() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch with Homoeopathy Speaks"
          text="Contact the practice for appointments, general enquiries and information about consultation options."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-teal-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-semibold">Practice details</h2>
            <div className="mt-6 grid gap-5 text-teal-50/90">
              <div className="flex gap-3"><UserRound className="h-5 w-5" /> Dr Kumar Goteti, MD Homoeopathy</div>
              <div className="flex gap-3"><Mail className="h-5 w-5" /> {siteConfig.email}</div>
              <div className="flex gap-3"><Phone className="h-5 w-5" /> {siteConfig.phone}</div>
              <div className="flex gap-3"><MapPin className="h-5 w-5" /> {siteConfig.location}</div>
              <div className="flex gap-3"><Calendar className="h-5 w-5" /> In-person, phone and telehealth options can be configured</div>
            </div>
            <Link href="/book-appointment" className="mt-8 inline-flex rounded-full bg-amber-300 px-6 py-4 font-semibold text-slate-950 hover:bg-amber-200">
              Book Appointment
            </Link>
          </div>

          <div className="rounded-3xl bg-[#fbfaf6] p-8 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-2xl font-semibold text-slate-950">Send an enquiry</h2>
            <form className="mt-6 grid gap-4">
              <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Full name" />
              <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Email" />
              <input className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Phone" />
              <textarea className="min-h-32 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal-600" placeholder="Message. Please do not include detailed medical history here." />
              <button className="rounded-full bg-teal-700 px-6 py-4 font-semibold text-white hover:bg-teal-800">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10">
          <DisclaimerBox />
        </div>
      </div>
    </section>
  );
}
`,

  "src/app/privacy-policy/page.tsx": `import type { Metadata } from "next";
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
`,

  "src/app/terms/page.tsx": `import type { Metadata } from "next";
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
`,

  "src/app/health-disclaimer/page.tsx": `import type { Metadata } from "next";
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
`,

  "src/app/booking-cancellation/page.tsx": `import type { Metadata } from "next";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Booking & Cancellation Policy",
  description: "Draft booking and cancellation policy for Homoeopathy Speaks.",
};

export default function BookingCancellationPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <SectionHeading eyebrow="Legal" title="Booking & Cancellation Policy" align="left" />
        <div className="prose-safe mt-8">
          <p><strong>Draft template:</strong> Final cancellation times, deposits and refund terms should be confirmed before launch.</p>
          <h2>Booking confirmation</h2>
          <p>Appointments are confirmed once the practice accepts the booking request or the online booking system confirms the appointment.</p>
          <h2>Cancellations and rescheduling</h2>
          <p>Please provide adequate notice if you need to cancel or reschedule. Cancellation fees may apply depending on the final practice policy.</p>
          <h2>Late arrivals</h2>
          <p>Late arrival may reduce consultation time. The full consultation fee may still apply.</p>
        </div>
      </div>
    </section>
  );
}
`,

  "src/app/telehealth-consent/page.tsx": `import type { Metadata } from "next";
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
`,

  "src/app/admin-roadmap/page.tsx": `import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Admin Roadmap",
  description: "Internal launch roadmap for Homoeopathy Speaks.",
};

const roadmap = [
  "Domain purchase: homoeopathyspeaks.com.au through VentraIP",
  "Hosting/deployment: Vercel for custom Next.js or VentraIP if using WordPress",
  "Professional email: Google Workspace, info@homoeopathyspeaks.com.au",
  "Booking: Cliniko or Halaxy embed",
  "Newsletter/articles: MailerLite",
  "Analytics: Google Analytics 4 and Google Search Console",
  "Security: SSL, secure forms, privacy policy, no sensitive health info through normal forms",
  "SEO: sitemap, robots.txt, metadata, Google Business Profile",
  "Legal pages: privacy, terms, health disclaimer, booking/cancellation, telehealth consent",
  "Content verification: Dr Kumar’s qualifications, ARoH registration wording, phone, address and prices",
];

export default function AdminRoadmapPage() {
  return (
    <section className="bg-[#fbfaf6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Hidden admin page"
          title="Website launch roadmap"
          text="This page is not in the main navigation. Use it as a checklist before launch."
        />
        <div className="mt-12 grid gap-4">
          {roadmap.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
              <p className="text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  "src/app/sitemap.ts": `import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/autism-adhd-gdd",
    "/medicines-conditions",
    "/book-appointment",
    "/patient-guide",
    "/articles",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/health-disclaimer",
    "/booking-cancellation",
    "/telehealth-consent",
  ];

  return [
    ...routes.map((route) => ({
      url: \`\${siteConfig.url}\${route}\`,
      lastModified: new Date(),
    })),
    ...articles.map((article) => ({
      url: \`\${siteConfig.url}/articles/\${article.slug}\`,
      lastModified: new Date(article.date),
    })),
  ];
}
`,

  "src/app/robots.ts": `import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: \`\${siteConfig.url}/sitemap.xml\`,
  };
}
`,

  ".env.example": `NEXT_PUBLIC_SITE_URL=https://www.homoeopathyspeaks.com.au
NEXT_PUBLIC_BOOKING_URL=
NEXT_PUBLIC_MAILERLITE_FORM_URL=
`,

  "README.md": `# Homoeopathy Speaks Website

A professional Next.js website for Homoeopathy Speaks.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- lucide-react icons
- Static article system
- Booking placeholder ready for Cliniko, Halaxy, Acuity, Calendly or Wix Bookings

## Run locally

\`\`\`bash
npm install
npm run dev
\`\`\`

Open:

\`\`\`text
http://localhost:3000
\`\`\`

## Edit main website content

- Site config: \`src/lib/siteConfig.ts\`
- Services/prices: \`src/lib/services.ts\`
- Articles: \`src/lib/articles.ts\`

## Important pages

- Home: \`src/app/page.tsx\`
- Autism/ADHD/GDD: \`src/app/autism-adhd-gdd/page.tsx\`
- Medicines & Conditions: \`src/app/medicines-conditions/page.tsx\`
- Booking: \`src/app/book-appointment/page.tsx\`
- Patient Guide: \`src/app/patient-guide/page.tsx\`
- Articles: \`src/app/articles/page.tsx\`
- Contact: \`src/app/contact/page.tsx\`

## Booking integration

Add a live booking URL in \`.env.local\`:

\`\`\`bash
NEXT_PUBLIC_BOOKING_URL=https://your-booking-url-here
\`\`\`

Recommended booking systems:

- Cliniko
- Halaxy
- Acuity
- Calendly
- Wix Bookings

## Before launch

Confirm:

- Domain: homoeopathyspeaks.com.au
- Phone number
- Clinic address
- Consultation prices
- Dr Kumar’s qualification wording
- ARoH registration wording
- Privacy policy
- Health disclaimer
- Booking/cancellation terms
- Telehealth consent
- Booking system
- Newsletter system
- Google Analytics
- Google Search Console
- Google Business Profile

## Deployment

Recommended deployment for this custom Next.js version:

- Vercel
- Domain purchased via VentraIP
- Professional email through Google Workspace
`,
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(process.cwd(), filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log(`created ${filePath}`);
}

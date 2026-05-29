export const articles = [
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

export const siteConfig = {
  name: "Homoeopathy Speaks",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://homoeopathyspeaks.com.au",
  description:
    "Homoeopathy Speaks offers individualised homoeopathic consultations with Mr Kumar Goteti, MD Homoeopathy, supporting children, families and adults through complementary care alongside modern medical care.",
  tagline: "Individualised homoeopathic care, integrated with modern healthcare.",
  practitioner: "Mr Kumar Goteti",
  registration: "AROH-11-153",
  phoneHref: "tel:+61413259078",
  email: "homoeopathyspeaks@gmail.com",
  phone: "0413 259 078",
  location: "2A Mapleton Street, Stirling WA 6021, Australia",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Children & families", href: "/autism-adhd-gdd" },
  { label: "Medicines", href: "/medicines-conditions" },
  { label: "Consultations", href: "/book-appointment" },
  { label: "Guide", href: "/patient-guide" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

export const kumarShortBio = `Mr Kumar Goteti provides individualised homoeopathic consultations through Homoeopathy Speaks, in person in Stirling and online. Consultations involve discussion of health history, current treatments and care priorities. He is registered with the Australian Register of Homoeopaths (AROH-11-153).

His qualifications are MD — Doctor of Homoeopathy and DHMS — five-year Diploma in Homoeopathy, Medicine and Surgery. These are homoeopathy qualifications; they are not a representation of Australian medical registration. The services described here are homoeopathic consultations. Homoeopathy does not replace medical assessment or evidence-based care.`;

export const kumarLongBio = kumarShortBio;

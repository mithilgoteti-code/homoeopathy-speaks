import Link from "next/link";
import { Leaf } from "lucide-react";
import { navItems, siteConfig } from "@/lib/siteConfig";

const legalLinks = [
  { label: "Privacy information", href: "/privacy-policy" },
  { label: "Website information", href: "/terms" },
  { label: "Health information", href: "/health-disclaimer" },
  { label: "Appointments and changes", href: "/booking-cancellation" },
  { label: "Online consultations", href: "/telehealth-consent" },
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
          <p className="mt-4 text-sm leading-7 text-slate-400">{siteConfig.practitioner} · {siteConfig.registration}<br />{siteConfig.location}<br /><a href={siteConfig.phoneHref} className="underline">{siteConfig.phone}</a><br /><a href={`mailto:${siteConfig.email}`} className="break-words underline">{siteConfig.email}</a></p>
        </div>

        <div>
          <h4 className="font-semibold">Pages</h4>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Practice information</h4>
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
        © {new Date().getFullYear()} Homoeopathy Speaks. In an emergency in Australia call 000;
        overseas, contact local emergency services.
      </div>
    </footer>
  );
}

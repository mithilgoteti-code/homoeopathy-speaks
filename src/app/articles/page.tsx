import type { Metadata } from "next";
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

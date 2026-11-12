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
          text="Educational articles and patient guidance. Articles do not replace individual medical advice."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>

        <p className="mt-10 text-sm leading-7 text-slate-600">Newsletter subscriptions are not currently available. Any future subscription will be optional and separate from care and booking consent.</p>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
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

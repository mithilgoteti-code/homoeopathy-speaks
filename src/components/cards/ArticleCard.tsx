import Link from "next/link";
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
        href={`/articles/${slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-950"
      >
        Read article <ChevronRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

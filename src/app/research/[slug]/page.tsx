import Link from 'next/link';
import ArticleImage from '@/components/ArticleImage';
import { getArticleBySlug, researchArticles } from '../articles';
import ShareBar from '@/components/ShareBar';
import { Footer } from '@/components/FAQs';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return researchArticles.map((a) => ({ slug: a.slug }));
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(new Date(date));
}

export default async function ResearchArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-white text-[#1d2e4a]">
        <div className="mx-auto max-w-3xl px-4 py-28">
          <h1 className="text-2xl font-semibold">Article not found</h1>
          <p className="mt-2 text-gray-600">The article you are looking for does not exist.</p>
          <Link href="/research" className="mt-6 inline-block text-[#0caeb8]">Back to Research</Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-white text-[#1d2e4a]">
        <article className="mx-auto max-w-3xl px-4 py-28">
        <Link
          href="/research"
          className="inline-flex items-center gap-2 text-sm text-[#1d2e4a] border border-gray-200 rounded-full px-3 py-1.5 hover:bg-gray-50"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          Back
        </Link>
        <div className="mt-4 text-xs text-gray-500 uppercase tracking-wide">{article.category}</div>
        <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">{article.title}</h1>
        <div className="mt-3 text-sm text-gray-500">{formatDate(article.date)}</div>
          <div className="mt-6 relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
            <ArticleImage title={article.title} slug={article.slug} imageId={article.imageId} sizes="(max-width: 768px) 100vw, 800px" priority />
          </div>
        <ShareBar title={article.title} />

        <div className="prose mt-8 max-w-none">
          {(article.content ?? 'Full article content coming soon.')
            .split('\n\n')
            .map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
        </div>
        </article>
      </main>
      <div className="bg-gray-50">
        <Footer />
      </div>
    </>
  );
}



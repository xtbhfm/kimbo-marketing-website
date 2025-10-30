import Link from 'next/link';
import ArticleImage from '@/components/ArticleImage';
import ResearchNavbar from '@/components/ResearchNavbar';
import { Footer } from '@/components/FAQs';
import { researchArticles } from './articles';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(new Date(date));
}

export default function ResearchPage() {
  const featured = researchArticles.filter((a) => a.featured);
  const nonFeatured = researchArticles.filter((a) => !a.featured);

  return (
    <>
      <main className="min-h-screen bg-white text-[#1d2e4a]">
        <ResearchNavbar />
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs uppercase tracking-widest text-gray-500">Research</span>
              <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">Discover our latest insights</h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600">
                Learning science briefs, product notes, and research articles from the Kimbo team.
              </p>
            </header>

            {/* Add generous spacing between hero and content */}
            <div className="mt-14" />

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
              <div className="lg:col-span-2 space-y-6">
                {featured.map((a) => (
                  <Link key={a.slug} href={`/research/${a.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-[#0caeb8] rounded-xl">
                    <article className="rounded-xl border border-gray-200 bg-white p-6 hover:bg-gray-50 transition-colors">
                      <div className="mb-4 relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
                        <ArticleImage
                          title={a.title}
                          slug={a.slug}
                          imageId={a.imageId}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                          priority={a.featured}
                        />
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">{a.category}</div>
                      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold leading-snug">{a.title}</h2>
                      <p className="mt-3 text-gray-600">{a.summary}</p>
                      <div className="mt-4 text-xs text-gray-500">{formatDate(a.date)}</div>
                    </article>
                  </Link>
                ))}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {nonFeatured.map((a) => (
                    <Link key={a.slug} href={`/research/${a.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-[#0caeb8] rounded-xl">
                      <article className="h-full rounded-xl border border-gray-200 bg-white p-5 hover:bg-gray-50 transition-colors">
                        <div className="mb-3 relative w-full aspect-[16/9] overflow-hidden rounded-md bg-gray-100">
                          <ArticleImage
                            title={a.title}
                            slug={a.slug}
                            imageId={a.imageId}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">{a.category}</div>
                        <h3 className="mt-2 text-xl font-semibold leading-snug">{a.title}</h3>
                        <p className="mt-2 text-gray-600 line-clamp-3">{a.summary}</p>
                        <div className="mt-4 text-xs text-gray-500">{formatDate(a.date)}</div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>

              <aside className="space-y-8">
                <section>
                  <h4 className="text-lg font-semibold">Featured</h4>
                  <ul className="mt-4 space-y-4">
                    {featured.map((a) => (
                      <li key={a.slug}>
                        <Link href={`/research/${a.slug}`} className="group block">
                          <div className="text-xs text-gray-500">{formatDate(a.date)}</div>
                          <div className="group-hover:text-[#0caeb8] transition-colors text-[#1d2e4a]">{a.title}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h4 className="text-lg font-semibold">Latest</h4>
                  <ul className="mt-4 space-y-4">
                    {researchArticles
                      .slice()
                      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
                      .slice(0, 6)
                      .map((a) => (
                        <li key={a.slug}>
                        <Link href={`/research/${a.slug}`} className="group flex items-start gap-3">
                            <div className="mt-1 relative h-12 w-16 overflow-hidden rounded bg-gray-100">
                              <ArticleImage title={a.title} slug={a.slug} imageId={a.imageId} sizes="64px" />
                            </div>
                            <div>
                              <div className="text-xs text-gray-500">{formatDate(a.date)}</div>
                              <div className="group-hover:text-[#0caeb8] transition-colors text-[#1d2e4a]">{a.title}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </section>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <div className="bg-gray-50">
        <Footer />
      </div>
    </>
  );
}



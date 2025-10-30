import ResearchNavbar from '@/components/ResearchNavbar';
import { Footer } from '@/components/FAQs';

export default function ResearchAboutPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-[#1d2e4a]">
        <ResearchNavbar />
        {/* Hero */}
        <section className="relative pt-28 pb-10 sm:pt-36 sm:pb-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About Kimbo Research</h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Advancing research and awareness in education through practical insights and learning science.
            </p>
          </div>
        </section>

        {/* Body copy */}
        <section className="mt-12 sm:mt-16 pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-gray-700">
              Kimbo Research translates robust evidence into classroom-ready ideas. We focus on retrieval practice,
              equitable assessment, interpretable feedback, accessibility, and motivational design—so schools can
              move quickly from insight to impact.
            </p>
            <p className="text-gray-700">
              Articles are concise, implementation-oriented, and grounded in active collaborations with educators.
              We care about what works—and how to make it work in real classrooms.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="pb-16 sm:pb-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold">What We Publish</h3>
              <p className="mt-2 text-gray-700">Briefs, implementation guides, and pilot summaries tied to learning outcomes.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold">How We Work</h3>
              <p className="mt-2 text-gray-700">Co-create with teachers, test small, measure impact, and share playbooks.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Focus Areas</h3>
              <p className="mt-2 text-gray-700">Retrieval, adaptive practice, equity in assessment, accessibility, and SEL.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold">For Educators</h3>
              <p className="mt-2 text-gray-700">Concrete strategies you can try next week, with minimal prep time.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold">For Researchers</h3>
              <p className="mt-2 text-gray-700">Field partners and rapid pilots to translate findings into practice.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold">For Partners</h3>
              <p className="mt-2 text-gray-700">Collaborate on studies, content, or feature pilots that advance learning.</p>
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



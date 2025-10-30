import ResearchNavbar from '@/components/ResearchNavbar';
import { Footer } from '@/components/FAQs';
import Link from 'next/link';

export default function ResearchPartnerPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-[#1d2e4a]">
        <ResearchNavbar />
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Partner with Kimbo</h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              We collaborate with schools, districts, researchers, and nonprofits to validate ideas and
              scale what works. Let’s explore pilots, studies, and content partnerships.
            </p>
          </div>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-10 grid gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Pilot a Feature</h2>
              <p className="mt-2 text-gray-700">Run a time-boxed pilot and share outcomes to inform product direction.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Research Collaboration</h2>
              <p className="mt-2 text-gray-700">Co-design small studies to test learning science hypotheses in practice.</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Content + Dissemination</h2>
              <p className="mt-2 text-gray-700">Publish briefs and guides to help educators adopt evidence-based practices.</p>
            </div>
            <div className="text-center mt-2">
              <Link href="/join-waitlist" className="inline-block px-5 py-2 rounded-full border border-[#0caeb8] text-[#0caeb8] hover:bg-[#0caeb8] hover:text-white transition-colors">
                Get in touch
              </Link>
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



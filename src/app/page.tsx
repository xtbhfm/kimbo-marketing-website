import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import FAQs, { Footer } from '@/components/FAQs';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* HERO BACKGROUND GRADIENT - OUTSIDE ALL CONTAINERS */}
      <div className="absolute top-0 left-0 w-full h-[800px] z-0 bg-gradient-to-r from-white via-[#0caeb8] to-white" style={{ opacity: 0.2 }} />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 bg-gradient-to-b from-white to-blue-50">
        <UseCases />
      </section>

      {/* Features Section */}
      <section id="features" className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-blue-150">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1d2e4a] sm:text-4xl">
              Learning changed forever
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#1d2e4a]">
              Kimbo understands how each student learns best, personalizes every lesson, and makes mastery possible for every mind.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Feature 1 */}
              <div className="text-center md:text-left p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-blue-100">
                <div className="w-16 h-16 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1d2e4a] mb-4">Understands every learner</h3>
                <p className="text-lg leading-7 text-[#1d2e4a] opacity-80">
                  Kimbo adapts to each student&apos;s age, grade, and pace, crafting stories and questions that fit their world.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center md:text-left p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-blue-100">
                <div className="w-16 h-16 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1d2e4a] mb-4">Brings learning to life</h3>
                <p className="text-lg leading-7 text-[#1d2e4a] opacity-80">
                  Every subject becomes an adventure — math, reading, and more — with vivid, story-driven lessons that keep students engaged and motivated.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center md:text-left p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-blue-100">
                <div className="w-16 h-16 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1d2e4a] mb-4">Guides with precision</h3>
                <p className="text-lg leading-7 text-[#1d2e4a] opacity-80">
                  Kimbo isn&apos;t just another app; it&apos;s an AI-powered coach that grows with your student, supporting them from first questions to confident mastery.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center md:text-left p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-blue-100">
                <div className="w-16 h-16 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1d2e4a] mb-4">Learning journey</h3>
                <p className="text-lg leading-7 text-[#1d2e4a] opacity-80">
                  From first steps to advanced concepts, Kimbo creates a personalized path that adapts to your student&apos;s progress and interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pt-12 pb-12 bg-gradient-to-b from-blue-150 to-blue-200">
        <Pricing />
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="pt-12 pb-0 bg-gradient-to-b from-blue-200 to-blue-250">
        <FAQs />
      </section>

      {/* Footer */}
      <div className="bg-white border-t-4 border-[#0caeb8]">
        <Footer />
      </div>
    </main>
  );
}

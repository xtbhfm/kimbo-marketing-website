import Navbar from '@/components/Navbar';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import GlowButton from '@/components/GlowButton';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Footer } from '@/components/FAQs';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* HERO BACKGROUND GRADIENT - OUTSIDE ALL CONTAINERS */}
      <div className="absolute top-0 left-0 w-full h-[800px] z-0 bg-gradient-to-r from-white via-[#0caeb8] to-white" style={{ opacity: 0.2 }} />
      {/* Hero section */}
      <section className="relative z-10 pt-64 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className={`text-4xl font-bold tracking-tight text-black sm:text-6xl leading-[1.2] pb-4 ${plusJakarta.className}`}>
              <span>Personalized </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0caeb8] via-[#1d2e4a] to-[#0caeb8]">Learning</span>
              <span className="block">One Click Away.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#1d2e4a]">
              A powerful AI engine that crafts lessons and adapts to your student's pace, understands their unique learning style, and delivers engaging lessons on demand.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <GlowButton href="#">
                Try it for free
              </GlowButton>
              <GlowButton href="#" variant="secondary">
                Learn more
              </GlowButton>
            </div>
          </div>
          {/* Hero Image */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-[90rem] bg-transparent perspective-[1000px]">
              <div className="transform-style-3d will-change-transform transition-transform duration-500 hover:translate-z-10 hover:rotate-x-5 hover:rotate-y-5">
                <Image
                  src="/images/website image one.png"
                  alt="AI Learning Platform"
                  width={3000}
                  height={2250}
                  className="w-full h-auto mix-blend-normal rounded-xl shadow-2xl"
                  priority
                  style={{ background: 'transparent' }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 via-white/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        {/* Floating elements */}
        <div className="absolute inset-0 -z-10 overflow-visible">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#0caeb8] to-[#294266] opacity-50"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        {/* How it works section */}
        <div className="py-48 sm:py-64">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1d2e4a] sm:text-4xl">
                Learning changed forever
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#1d2e4a]">
                A new era in learning. Kimbo understands how each student learns best, personalizes every lesson, and makes mastery possible for every mind.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* First Row */}
                <div className="flex flex-col">
                  <div className="relative w-full h-[400px] mb-6 rounded-xl overflow-hidden">
                    <Image
                      src="/images/placeholder1.jpg"
                      alt="Understands every learner"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-[#1d2e4a] mb-4">Understands every learner</h3>
                    <p className="text-base leading-7 text-[#1d2e4a]">
                      Kimbo adapts to each student's age, grade, and pace, crafting stories and questions that fit their world.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="relative w-full h-[400px] mb-6 rounded-xl overflow-hidden">
                    <Image
                      src="/images/placeholder2.jpg"
                      alt="Brings learning to life"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-[#1d2e4a] mb-4">Brings learning to life</h3>
                    <p className="text-base leading-7 text-[#1d2e4a]">
                      Every subject becomes an adventure — math, reading, and more — with vivid, story-driven lessons that keep students engaged and motivated.
                    </p>
                  </div>
                </div>

                {/* Second Row */}
                <div className="flex flex-col">
                  <div className="relative w-full h-[400px] mb-6 rounded-xl overflow-hidden">
                    <Image
                      src="/images/placeholder3.jpg"
                      alt="Guides with precision"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-[#1d2e4a] mb-4">Guides with precision</h3>
                    <p className="text-base leading-7 text-[#1d2e4a]">
                      Kimbo isn't just another app; it's an AI-powered coach that grows with your student, supporting them from first questions to confident mastery.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="relative w-full h-[400px] mb-6 rounded-xl overflow-hidden">
                    <Image
                      src="/images/placeholder4.jpg"
                      alt="Learning journey"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-[#1d2e4a] mb-4">Learning journey</h3>
                    <p className="text-base leading-7 text-[#1d2e4a]">
                      From first steps to advanced concepts, Kimbo creates a personalized path that adapts to your student's progress and interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases section */}
        <UseCases />

        {/* Pricing section */}
        <Pricing />
        <Footer />
      </div>
    </main>
  );
}

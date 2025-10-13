'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ParallaxComparison from '@/components/ParallaxComparison';
import { Footer } from '@/components/FAQs';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Promo Video Section */}
      <section id="promo-video" className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 md:pb-10 lg:pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d2e4a] sm:text-4xl mb-4">
                See Kimbo in Action
              </h2>
              <p className="text-base sm:text-lg text-[#1d2e4a] opacity-80">
                Watch how Kimbo transforms learning into personalized adventures
              </p>
            </div>
            <div className="w-full h-80 sm:h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl bg-black">
              <video 
                className="w-full h-full object-contain"
                controls
                poster="/images/logo_blue_transparent_big.png"
              >
                <source src="/videos/Kimbo Promo Final Version.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax With/Without Kimbo Comparison */}
      <section id="comparison" className="relative z-20">
        <ParallaxComparison />
      </section>

      {/* Learning Changed Forever Section */}
      <section id="learning-changed" className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-[#1d2e4a] sm:text-4xl">
              Learning changed forever
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#1d2e4a]">
              Kimbo understands how each student learns best, personalizes every lesson, and makes mastery possible for every mind.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="text-center md:text-left p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-gray-100 shadow-sm">
                <h3 className="text-xl font-light text-gray-800 mb-4">Understands every learner</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Kimbo adapts to each student&apos;s age, grade, and pace, crafting stories and questions that fit their world.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center md:text-left p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-gray-100 shadow-sm">
                <h3 className="text-xl font-light text-gray-800 mb-4">Brings learning to life</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Every subject becomes an adventure — math, reading, and more — with vivid, story-driven lessons that keep students engaged and motivated.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center md:text-left p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-gray-100 shadow-sm">
                <h3 className="text-xl font-light text-gray-800 mb-4">Guides with precision</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Kimbo isn&apos;t just another app; it&apos;s an AI-powered coach that grows with your student, supporting them from first questions to confident mastery.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center md:text-left p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-gray-100 shadow-sm">
                <h3 className="text-xl font-light text-gray-800 mb-4">Learning journey</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  From first steps to advanced concepts, Kimbo creates a personalized path that adapts to your student&apos;s progress and interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d2e4a] sm:text-4xl mb-4 sm:mb-6">
              Join the Waitlist
            </h2>
            <p className="text-base sm:text-lg text-[#1d2e4a] opacity-80">
              Be the first to experience Kimbo&apos;s personalized learning adventures
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4 sm:space-y-6" onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              
              try {
                const response = await fetch('/api/waitlist', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ name, email }),
                });

                if (response.ok) {
                  alert(`Thanks ${name}! We'll notify you when Kimbo is ready.`);
                  e.currentTarget.reset();
                } else {
                  alert('Something went wrong. Please try again.');
                }
              } catch (error) {
                console.error('Error:', error);
                alert('Something went wrong. Please try again.');
              }
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#0caeb8] focus:border-[#0caeb8] text-black placeholder-gray-500 bg-white text-sm sm:text-base"
                  style={{ color: 'black' }}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#0caeb8] focus:border-[#0caeb8] text-black placeholder-gray-500 bg-white text-sm sm:text-base"
                  style={{ color: 'black' }}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-2 sm:py-3 bg-[#0caeb8] text-white font-semibold rounded-lg hover:bg-[#0891b2] transition-colors text-sm sm:text-base"
              >
                Join Waitlist
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="mt-12 text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-[#1d2e4a] mb-6">
              Connect With Us
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://instagram.com/kimbo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-full text-white hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H7.721c-.49 0-.875.385-.875.875v8.958c0 .49.385.875.875.875h8.558c.49 0 .875-.385.875-.875V8.582c0-.49-.385-.875-.875-.875z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/kimbo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-full text-white hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/kimbo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-full text-white hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-gray-50">
        <Footer />
      </div>
    </main>
  );
}

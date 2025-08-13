'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import UseCases from '@/components/UseCases';
import FAQs, { Footer } from '@/components/FAQs';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* HERO BACKGROUND GRADIENT - OUTSIDE ALL CONTAINERS */}
      <div className="absolute top-0 left-0 w-full h-[600px] sm:h-[700px] md:h-[800px] z-0 bg-gradient-to-r from-white via-[#0caeb8] to-white" style={{ opacity: 0.2 }} />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50">
        <UseCases />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 bg-gradient-to-b from-blue-50 to-blue-150">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d2e4a] sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#1d2e4a]">
              Three simple steps to personalized learning adventures
            </p>
          </div>
          
          {/* Three Steps */}
          <div className="mx-auto max-w-6xl mt-12 sm:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1d2e4a] mb-3 sm:mb-4">Pick a Story Path</h3>
                <p className="text-base sm:text-lg text-[#1d2e4a] opacity-80 leading-7">
                  Choose interest-based adventures with the option to include math challenges woven into the plot.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1d2e4a] mb-3 sm:mb-4">Adaptive Storytelling</h3>
                <p className="text-base sm:text-lg text-[#1d2e4a] opacity-80 leading-7">
                  Vocabulary, pacing, and math complexity adjust in real time to your learner&apos;s needs.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1d2e4a] mb-3 sm:mb-4">Watch Them Grow</h3>
                <p className="text-base sm:text-lg text-[#1d2e4a] opacity-80 leading-7">
                  Skills advance seamlessly while keeping learning fun and engaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 bg-gradient-to-b from-blue-150 to-blue-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d2e4a] sm:text-4xl">
              Learning Changed Forever
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[#1d2e4a]">
              Kimbo understands how each student learns best, personalizes every lesson, and makes mastery possible for every mind.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="mx-auto max-w-6xl mt-12 sm:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Feature 1 */}
              <div className="text-center md:text-left p-6 sm:p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-blue-100">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto md:mx-0 mb-4 sm:mb-6 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1d2e4a] mb-3 sm:mb-4">Adapts to your skill level in real time</h3>
                <p className="text-base sm:text-lg leading-7 text-[#1d2e4a] opacity-80">
                  Kimbo adapts to each student&apos;s age, grade, and pace, crafting stories and questions that fit their world.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center md:text-left p-6 sm:p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-blue-100">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto md:mx-0 mb-4 sm:mb-6 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1d2e4a] mb-3 sm:mb-4">Blends reading and math seamlessly</h3>
                <p className="text-base sm:text-lg leading-7 text-[#1d2e4a] opacity-80">
                  Every subject becomes an adventure — math, reading, and more — with vivid, story-driven lessons that keep students engaged and motivated.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center md:text-left p-6 sm:p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-blue-100">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto md:mx-0 mb-4 sm:mb-6 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1d2e4a] mb-3 sm:mb-4">Evolves as you grow</h3>
                <p className="text-base sm:text-lg leading-7 text-[#1d2e4a] opacity-80">
                  Kimbo isn&apos;t just another app; it&apos;s an AI-powered coach that grows with your student, supporting them from first questions to confident mastery.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center md:text-left p-6 sm:p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-blue-100">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto md:mx-0 mb-4 sm:mb-6 bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1d2e4a] mb-3 sm:mb-4">Learning journey</h3>
                <p className="text-base sm:text-lg leading-7 text-[#1d2e4a] opacity-80">
                  From first steps to advanced concepts, Kimbo creates a personalized path that adapts to your student&apos;s progress and interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-8 sm:pt-12 pb-8 sm:pb-12 bg-gradient-to-b from-blue-200 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d2e4a] sm:text-4xl mb-4 sm:mb-6">
              Contact Us
            </h2>
            <p className="text-base sm:text-lg text-[#1d2e4a] opacity-80">
              Have questions? Want to partner with us? Get in touch!
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const phone = formData.get('phone');
              const email = formData.get('email');
              const message = formData.get('message');
              
              const subject = 'New Contact Form Submission - Kimbo';
              const body = `
New contact form submission:

Name: ${name}
Phone: ${phone || 'Not provided'}
Email: ${email}
Message: ${message}

---
Sent from Kimbo Contact Form
              `;
              
              window.location.href = `mailto:kimbolearning@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#0caeb8] focus:border-[#0caeb8] text-black placeholder-gray-500 bg-white text-sm sm:text-base"
                  style={{ color: 'black' }}
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#0caeb8] focus:border-[#0caeb8] text-black placeholder-gray-500 bg-white text-sm sm:text-base"
                style={{ color: 'black' }}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#0caeb8] focus:border-[#0caeb8] text-black placeholder-gray-500 bg-white text-sm sm:text-base"
                style={{ color: 'black' }}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-2 sm:py-3 bg-[#0caeb8] text-white font-semibold rounded-lg hover:bg-[#0891b2] transition-colors text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="pt-8 sm:pt-12 pb-0 bg-white">
        <FAQs />
      </section>

      {/* Footer */}
      <div className="bg-white border-t-4 border-[#0caeb8]">
        <Footer />
      </div>
    </main>
  );
}

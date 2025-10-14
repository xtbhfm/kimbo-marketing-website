'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ParallaxComparison from '@/components/ParallaxComparison';
import { Footer } from '@/components/FAQs';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimbo Learning - Personalized AI-Powered Learning Adventures for Kids</title>
        <meta name="description" content="Kimbo Learning creates personalized choose-your-own-adventure learning stories that adapt to your child's interests and skill level. AI-powered education platform for reading, math, and more." />
        <meta name="keywords" content="kimbo learning, personalized learning, AI education, adaptive learning, educational technology, learning stories, children education, interactive learning" />
        <meta property="og:title" content="Kimbo Learning - Personalized AI-Powered Learning Adventures for Kids" />
        <meta property="og:description" content="AI-powered educational stories that adapt to your child's interests and skill level. Personalized learning adventures for reading, math, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimbolearning.com" />
        <meta property="og:image" content="https://kimbolearning.com/images/kimbo-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kimbo Learning - Personalized AI-Powered Learning Adventures for Kids" />
        <meta name="twitter:description" content="AI-powered educational stories that adapt to your child's interests and skill level." />
        <meta name="twitter:image" content="https://kimbolearning.com/images/kimbo-og-image.jpg" />
      </Head>
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
          
          <div className="max-w-2xl mx-auto text-center">
            <a
              href="/join-waitlist"
              className="inline-block w-full px-6 sm:px-8 py-2 sm:py-3 bg-[#0caeb8] text-white font-semibold rounded-lg hover:bg-[#0891b2] transition-colors text-sm sm:text-base"
            >
              Join the Waitlist
            </a>
          </div>

          {/* Social Media Links */}
          <div className="mt-12 text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-[#1d2e4a] mb-6">
              Connect With Us
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/kimbolearning/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-[#1d2e4a] rounded-full text-[#1d2e4a] hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://x.com/KimboLearning"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-[#1d2e4a] rounded-full text-[#1d2e4a] hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/kimbo-learning/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-[#1d2e4a] rounded-full text-[#1d2e4a] hover:scale-110 transition-transform"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
    </>
  );
}

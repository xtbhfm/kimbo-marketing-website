'use client';

import Navbar from '@/components/Navbar';
import FAQs, { Footer } from '@/components/FAQs';
import Image from 'next/image';
import Head from 'next/head';

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        <title>How Kimbo Learning Works - AI-Powered Personalized Education Platform</title>
        <meta name="description" content="Discover how Kimbo Learning's AI-powered platform creates personalized learning adventures. See our IEP goals tracking, parent dashboard, Kimbo Koin rewards, and math comprehension features." />
        <meta name="keywords" content="how kimbo learning works, AI education platform, personalized learning technology, adaptive learning system, educational AI features" />
        <meta property="og:title" content="How Kimbo Learning Works - AI-Powered Personalized Education Platform" />
        <meta property="og:description" content="Discover how Kimbo Learning's AI-powered platform creates personalized learning adventures for children." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimbolearning.com/how-it-works" />
        <meta property="og:image" content="https://kimbolearning.com/images/kimbo-og-image.jpg" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-gradient-to-br from-[#0caeb8] via-[#1d2e4a] to-[#0caeb8] text-white overflow-hidden flex items-center justify-center">
        {/* Static floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating circles */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full"></div>
          
          {/* Static lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-white/20"></div>
          <div className="absolute top-0 right-0 w-px h-full bg-white/20"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/20"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-white/20"></div>
          
          {/* Static particles */}
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-white/25 rounded-full"></div>
        </div>
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            How Kimbo Works
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            See how our AI creates personalized learning adventures that adapt to your child
          </p>
        </div>
      </section>

      {/* Step 1: IEP Metrics Help */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg bg-white flex items-center justify-center p-6">
                <Image
                  src="/images/IEP Help info 2.png"
                  alt="IEP Metrics Dashboard showing learning progress and goals"
                  width={600}
                  height={400}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <div className="max-w-lg">
                <div className="inline-block px-4 py-2 bg-[#0caeb8]/10 rounded-full mb-6">
                  <span className="text-[#0caeb8] text-sm font-medium">Step 1</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
                  IEP Goals Made Simple
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Kimbo automatically tracks progress toward Individualized Education Program (IEP) goals. Teachers and parents can see real-time progress on specific learning objectives, making IEP meetings more productive and transparent.
                </p>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-gray-700 italic">
                    &quot;Finally, we can show concrete progress on IEP goals. The data speaks for itself and makes our meetings so much more meaningful.&quot;
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- Special Education Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Parent Dashboard */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="max-w-lg">
                <div className="inline-block px-4 py-2 bg-[#0caeb8]/10 rounded-full mb-6">
                  <span className="text-[#0caeb8] text-sm font-medium">Step 2</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
                  Parent Dashboard Insights
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Parents get a comprehensive dashboard showing their child&apos;s learning progress, time spent on different subjects, achievements unlocked, and areas where they&apos;re excelling or need support.
                </p>
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-gray-700 italic">
                    &quot;I love seeing exactly how my daughter is progressing. The dashboard shows me her strengths and where she needs encouragement.&quot;
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- Parent testimonial</p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div>
              <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-lg bg-white flex items-center justify-center p-4">
                <Image
                  src="/images/Parent Dashboard Info.png"
                  alt="Parent Dashboard showing child's learning metrics and progress"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Kimbo Koin */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-lg bg-white flex items-center justify-center p-4">
                <Image
                  src="/images/Kimbo Koin Info.png"
                  alt="Kimbo Koin reward system showing earned coins and achievements"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <div className="max-w-lg">
                <div className="inline-block px-4 py-2 bg-[#0caeb8]/10 rounded-full mb-6">
                  <span className="text-[#0caeb8] text-sm font-medium">Step 3</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
                  Kimbo Koin Rewards
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Kids earn Kimbo Koins for completing learning adventures, mastering new concepts, and showing persistence. These coins can be used to unlock new story themes, characters, and special features, making learning feel like a game.
                </p>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-gray-700 italic">
                    &quot;My son is so motivated to earn Kimbo Koins! He asks to do math problems just to collect more coins and unlock new adventures.&quot;
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- Parent testimonial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Math Comprehension */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="max-w-lg">
                <div className="inline-block px-4 py-2 bg-[#0caeb8]/10 rounded-full mb-6">
                  <span className="text-[#0caeb8] text-sm font-medium">The Science</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
                  Math Comprehension Made Fun
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Kimbo transforms math learning through story-based adventures. Kids solve problems within engaging narratives, making abstract concepts concrete and memorable. Our AI adapts the difficulty and provides hints when needed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#0caeb8] rounded-full"></div>
                    <span className="text-gray-600">Story-based problem solving</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#0caeb8] rounded-full"></div>
                    <span className="text-gray-600">Adaptive difficulty levels</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#0caeb8] rounded-full"></div>
                    <span className="text-gray-600">Visual and interactive learning</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div>
              <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-lg bg-white flex items-center justify-center p-4">
                <Image
                  src="/images/Math Comprehension Info.png"
                  alt="Math comprehension interface showing interactive problem solving"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
            Ready to See It in Action?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of families already experiencing the magic of personalized learning
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/join-waitlist"
              className="px-8 py-4 bg-[#0caeb8] text-white font-light rounded-lg hover:bg-[#0891b2] transition-colors text-lg"
            >
              Join the Waitlist
            </a>
            <a
              href="/demo"
              className="px-8 py-4 border border-gray-300 text-gray-700 font-light rounded-lg hover:bg-gray-50 transition-colors text-lg"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="pt-8 sm:pt-12 pb-0 bg-white">
        <FAQs />
      </section>

      {/* Footer */}
      <div className="bg-gray-50">
        <Footer />
      </div>
      </main>
    </>
  );
}

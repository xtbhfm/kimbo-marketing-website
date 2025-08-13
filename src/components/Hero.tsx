'use client';

import GlowButton from './GlowButton';

export default function Hero() {
  return (
    <section className="relative z-10 pt-20 sm:pt-32 md:pt-48 lg:pt-64 pb-8 sm:pb-12 overflow-hidden min-h-screen">
      {/* Beautiful Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0caeb8] via-[#1d2e4a] to-[#0caeb8]"></div>
      
      {/* Static floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-white/10 rounded-full"></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-1/4 w-10 sm:w-20 h-10 sm:h-20 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-8 sm:w-16 h-8 sm:h-16 bg-white/10 rounded-full"></div>
        
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
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2] pb-2 sm:pb-4">
            <span>Choose-Your-Own-Adventure Stories</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#0caeb8] via-[#ffffff] to-[#0caeb8] mt-2 sm:mt-4">That Grow With Your Child</span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-4xl mt-2 sm:mt-4">in Reading, Math & More</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-200 max-w-3xl mx-auto px-4 sm:px-0">
            Kimbo adapts every story to your learner&apos;s interests, skill level, and pace — blending reading and math into interactive adventures that evolve as they grow.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4 sm:px-0">
            <GlowButton href="/waitlist" className="w-full sm:w-auto">
              Join the Waitlist
            </GlowButton>
            <GlowButton href="#how-it-works" variant="secondary" className="w-full sm:w-auto">
              See How It Works
            </GlowButton>
          </div>
          
          {/* Scroll Cue */}
          <div className="mt-8 sm:mt-16 animate-bounce">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
} 
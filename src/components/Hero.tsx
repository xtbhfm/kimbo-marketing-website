'use client';

import GlowButton from './GlowButton';

export default function Hero() {
  return (
    <section className="relative z-10 pt-64 pb-12 overflow-hidden min-h-screen">
      {/* Beautiful Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0caeb8] via-[#1d2e4a] to-[#0caeb8]"></div>
      
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
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-[1.2] pb-4">
            <span>Choose-Your-Own-Adventure Stories</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#0caeb8] via-[#ffffff] to-[#0caeb8]">That Grow With Your Child</span>
            <span className="block text-3xl sm:text-4xl">in Reading, Math & More</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-3xl mx-auto">
            Kimbo adapts every story to your learner&apos;s interests, skill level, and pace — blending reading and math into interactive adventures that evolve as they grow.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <GlowButton href="#waitlist">
              Join the Waitlist
            </GlowButton>
            <GlowButton href="#how-it-works" variant="secondary">
              See How It Works
            </GlowButton>
          </div>
          
          {/* Scroll Cue */}
          <div className="mt-16 animate-bounce">
            <svg className="w-8 h-8 mx-auto text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
} 
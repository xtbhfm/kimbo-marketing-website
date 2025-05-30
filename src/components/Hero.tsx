'use client';

import Image from 'next/image';
import GlowButton from './GlowButton';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Hero() {
  return (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
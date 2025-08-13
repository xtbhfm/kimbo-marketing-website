'use client';

import React, { useState } from 'react';

export default function FAQs() {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[#0caeb8] font-bold text-lg mb-4">FAQs</h2>
        <p className="text-center font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          Frequently Asked Questions
        </p>
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-2 sm:mb-3">What is Kimbo?</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">Kimbo is an educational platform designed to provide story-driven lessons and personalized adventures for learners.</p>
          </div>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-2 sm:mb-3">How can I get started?</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">You can start by signing up for a free account and exploring the available lessons and adventures.</p>
          </div>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-2 sm:mb-3">What are the pricing plans?</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">We offer Freemium, Pro, and Enterprise plans. Check out the Pricing section for more details.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Modern Footer Component
export function Footer() {
  const links = [
    { href: "#pricing", label: "Pricing" },
    { href: "#features", label: "How it works" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#faqs", label: "Help" },
  ];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <footer className="bg-transparent text-[#1d2e4a] py-8 sm:py-12 mt-0 border-t-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 sm:gap-6">
        <div className="font-bold text-xl sm:text-2xl tracking-wider text-[#0caeb8]">Kimbo</div>
        <nav className="flex gap-4 sm:gap-6 lg:gap-8 flex-wrap justify-center">
          {links.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base sm:text-lg font-medium transition-colors duration-200 cursor-pointer ${
                hovered === idx ? 'text-[#0caeb8]' : 'text-[#1d2e4a]'
              }`}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="text-sm sm:text-base text-gray-500 mt-4 sm:mt-6">
          &copy; {new Date().getFullYear()} Kimbo. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 
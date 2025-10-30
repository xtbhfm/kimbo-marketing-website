'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { name: 'Homesite', href: '/' },
  { name: 'About', href: '/research/about' },
  { name: 'Partner', href: '/research/partner' },
];

export default function ResearchNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current < lastScrollY) {
        setIsVisible(true);
      } else if (current > lastScrollY && current > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }
      setLastScrollY(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 sm:mt-5" />
        <div className="grid grid-cols-3 items-center rounded-2xl bg-white/95 backdrop-blur-md shadow-lg px-5 sm:px-7 py-3 sm:py-4 border border-gray-200">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <Image 
                src="/images/screenshot-removebg-preview.png" 
                alt="Kimbo Logo" 
                width={40} 
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#1d2e4a]">Research</span>
            </Link>
          </div>

          <div className="hidden md:flex md:gap-x-10 justify-center">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-[#1d2e4a] hover:text-[#0caeb8] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0caeb8] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="md:hidden justify-self-end">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2 rounded-md text-[#1d2e4a] hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2 pb-4">
            <div className="bg-white/95 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-3">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-[#1d2e4a] hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}



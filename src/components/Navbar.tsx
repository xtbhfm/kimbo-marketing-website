'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlowButton from './GlowButton';

const navigation = [
  { name: 'Use Cases', href: '/#use-cases' },
  { name: 'How it works', href: '/#how-it-works' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Help', href: '/#faqs' },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
        <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav 
        className={`mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-300 ${
          lastScrollY > 100 ? 'bg-white/80 backdrop-blur-md rounded-full my-4 shadow-lg' : ''
        }`}
        aria-label="Global"
      >
        <div className="flex items-center justify-between py-4">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/images/screenshot-removebg-preview.png" 
                alt="Kimbo Logo" 
                width={50} 
                height={50}
                className="w-12 h-12 object-contain"
              />
              <span className={`text-2xl font-bold ${
                lastScrollY > 100 ? 'text-[#1d2e4a]' : 'text-white'
              }`}>
                Kimbo
              </span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-16">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-all duration-300 relative group ${
                  lastScrollY > 100 ? 'text-[#1d2e4a] hover:text-[#0caeb8]' : 'text-white hover:text-[#0caeb8]'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  lastScrollY > 100 ? 'bg-[#0caeb8]' : 'bg-[#0caeb8]'
                }`}></span>
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                lastScrollY > 100 ? 'text-[#1d2e4a]' : 'text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMounted && isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
            <GlowButton href="/team" variant="secondary">
              Meet the Team
            </GlowButton>
                      <GlowButton href="/waitlist">
            Join Waitlist
          </GlowButton>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMounted && isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                    lastScrollY > 100 ? 'text-[#1d2e4a] hover:bg-gray-100' : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href="/team"
                  className={`block px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                    lastScrollY > 100 ? 'text-[#1d2e4a] hover:bg-gray-100' : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Meet the Team
                </a>
                <a
                  href="#waitlist"
                  className={`block px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                    lastScrollY > 100 ? 'bg-[#0caeb8] text-white hover:bg-[#0891b2]' : 'bg-white text-[#1d2e4a] hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Waitlist
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 
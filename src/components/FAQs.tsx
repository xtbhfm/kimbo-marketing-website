'use client';

import React, { useState } from 'react';

export default function FAQs() {
  return (
    <div style={{ padding: "4rem 0 6rem 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", color: "#0caeb8", fontWeight: 700, fontSize: 18 }}>FAQs</h2>
        <p style={{ textAlign: "center", fontWeight: 700, fontSize: 36, margin: "1rem 0 4rem 0", color: "#000" }}>
          Frequently Asked Questions
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "0.5rem" }}>
            <h3 style={{ color: "#000", fontWeight: 600 }}>What is Kimbo?</h3>
            <p style={{ color: "#000" }}>Kimbo is an educational platform designed to provide story-driven lessons and personalized adventures for learners.</p>
          </div>
          <div style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "0.5rem" }}>
            <h3 style={{ color: "#000", fontWeight: 600 }}>How can I get started?</h3>
            <p style={{ color: "#000" }}>You can start by signing up for a free account and exploring the available lessons and adventures.</p>
          </div>
          <div style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "0.5rem" }}>
            <h3 style={{ color: "#000", fontWeight: 600 }}>What are the pricing plans?</h3>
            <p style={{ color: "#000" }}>We offer Freemium, Pro, and Enterprise plans. Check out the Pricing section for more details.</p>
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
    <footer style={{
      background: 'transparent',
      color: '#1d2e4a',
      padding: '2rem 0',
      marginTop: '0',
      borderTop: 'none',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
      }}>
        <div style={{ fontWeight: 700, fontSize: 24, letterSpacing: 1, color: '#0caeb8' }}>Kimbo</div>
        <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {links.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: hovered === idx ? '#0caeb8' : '#1d2e4a',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div style={{ fontSize: 14, color: '#64748b', marginTop: '1rem' }}>
          &copy; {new Date().getFullYear()} Kimbo. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 
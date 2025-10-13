'use client';

import React, { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Kimbo?",
      answer: "Kimbo is an AI-powered educational platform that creates personalized learning adventures through interactive stories. Our platform adapts to each child's learning pace and interests, making education engaging and effective."
    },
    {
      question: "How does the AI adaptation work?",
      answer: "Our AI analyzes your child's responses, reading speed, and engagement level in real-time. It then adjusts the story's vocabulary, math difficulty, and pacing to match their current abilities, ensuring they're always challenged but never overwhelmed."
    },
    {
      question: "What age groups is Kimbo designed for?",
      answer: "Kimbo is designed for children ages 5-12, covering early elementary through middle school. Our stories and challenges adapt to each child's specific grade level and learning needs."
    },
    {
      question: "How can parents track their child's progress?",
      answer: "Parents receive detailed progress reports showing their child's strengths, areas for growth, and learning milestones. You can see exactly how your child is advancing in reading, math, and critical thinking skills."
    },
    {
      question: "Is Kimbo safe for children?",
      answer: "Absolutely. Kimbo is designed with child safety as our top priority. All content is age-appropriate, and we use advanced privacy protection to keep your child's data secure."
    },
    {
      question: "When will Kimbo be available?",
      answer: "We're currently in development and will be launching soon. Join our waitlist to be the first to know when Kimbo is ready for your family!"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Kimbo
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-light text-gray-800 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Modern Footer Component
export function Footer() {
  const links = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/team", label: "Meet the Team" },
    { href: "#faqs", label: "FAQ" },
  ];

  const socialLinks = [
    { href: "https://instagram.com/kimbolearning", label: "Instagram" },
    { href: "https://www.linkedin.com/company/kimbo-learning", label: "LinkedIn" },
  ];

  return (
    <footer className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="text-2xl font-light text-gray-800 mb-4">Kimbo</div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Personalized learning adventures that grow with your child. AI-powered stories that make education engaging and effective.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#0caeb8] transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-light text-gray-800 mb-6">Navigation</h3>
            <nav className="space-y-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-600 hover:text-[#0caeb8] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-light text-gray-800 mb-6">Get in Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-600">
                Questions about Kimbo? We&apos;d love to hear from you.
              </p>
              <a
                href="mailto:kimbolearning@gmail.com"
                className="block text-[#0caeb8] hover:text-[#0891b2] transition-colors"
              >
                kimbolearning@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Kimbo. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
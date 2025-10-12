'use client';

import Navbar from '@/components/Navbar';
import { Footer } from '@/components/FAQs';

export default function JoinWaitlistPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#0caeb8] via-[#1d2e4a] to-[#0caeb8] text-white overflow-hidden flex items-center justify-center">
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
            Join the Waitlist
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Be among the first to experience Kimbo's revolutionary adaptive learning adventures
          </p>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-[#0caeb8] rounded-full mb-6">
                <svg className="w-6 h-6 text-[#0caeb8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light text-[#1d2e4a] mb-6">
                Get Early Access
              </h2>
              <p className="text-xl text-[#1d2e4a] opacity-80 max-w-2xl mx-auto leading-relaxed">
                Join thousands of parents and educators who are excited about the future of personalized learning
              </p>
            </div>
            
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#0caeb8] rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#1d2e4a] rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-[#0caeb8] rounded-full opacity-30"></div>
              <div className="absolute top-1/4 -right-8 w-4 h-4 bg-[#1d2e4a] rounded-full opacity-30"></div>
              
              {/* Form container with enhanced styling */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <form className="space-y-6" onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const firstName = formData.get('firstName');
                  const lastName = formData.get('lastName');
                  const email = formData.get('email');
                  const role = formData.get('role');
                  const interests = formData.get('interests');
                  
                  try {
                    const response = await fetch('/api/waitlist', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        role,
                        interests,
                      }),
                    });

                    if (response.ok) {
                      alert('Thank you for joining our waitlist! We\'ll be in touch soon.');
                      e.currentTarget.reset();
                    } else {
                      alert('There was an error submitting your information. Please try again.');
                    }
                  } catch (error) {
                    alert('There was an error submitting your information. Please try again.');
                  }
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0caeb8] focus:border-[#0caeb8] text-black placeholder-gray-500 bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0caeb8] focus:border-[#0caeb8] text-black placeholder-gray-500 bg-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0caeb8] focus:border-[#0caeb8] text-black placeholder-gray-500 bg-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      I am a...
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0caeb8] focus:border-[#0caeb8] text-black bg-white"
                      required
                    >
                      <option value="" className="text-gray-800">Select your role</option>
                      <option value="parent" className="text-gray-800">Parent</option>
                      <option value="teacher" className="text-gray-800">Teacher</option>
                      <option value="student" className="text-gray-800">Student</option>
                      <option value="other" className="text-gray-800">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your child's interests (optional)
                    </label>
                    <textarea
                      id="interests"
                      name="interests"
                      placeholder="What topics or activities does your child enjoy?"
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0caeb8] focus:border-[#0caeb8] text-black placeholder-gray-500 bg-white"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full border-2 border-[#0caeb8] text-[#0caeb8] font-light py-4 px-8 rounded-2xl hover:bg-[#0caeb8] hover:text-white transition-all duration-300"
                  >
                    Join Waitlist
                  </button>
                </form>
                
                <p className="text-sm text-gray-500 mt-6 text-center">
                  We'll notify you as soon as Kimbo is ready for early access. No spam, ever.
                </p>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#0caeb8] to-[#1d2e4a] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-gray-50">
        <Footer />
      </div>
    </div>
  )
}

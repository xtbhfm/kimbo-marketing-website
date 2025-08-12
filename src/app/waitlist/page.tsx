'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function WaitlistPage() {
  return (
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
            Join the Waitlist
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Be among the first to experience Kimbo&apos;s revolutionary adaptive learning adventures.
          </p>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="py-24 bg-gradient-to-b from-blue-50 to-blue-150">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-[#1d2e4a] mb-4">Get Early Access</h2>
            <p className="text-xl text-[#1d2e4a] opacity-80 max-w-3xl mx-auto">
              Join thousands of parents and educators who are excited about the future of personalized learning.
            </p>
          </div>
          
          {/* Waitlist Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const firstName = formData.get('firstName');
                const lastName = formData.get('lastName');
                const email = formData.get('email');
                const role = formData.get('role');
                const interests = formData.get('interests');
                
                const subject = 'New Waitlist Signup - Kimbo';
                const body = `
New waitlist signup:

Name: ${firstName} ${lastName}
Email: ${email}
Role: ${role}
Child's Interests: ${interests || 'Not provided'}

---
Sent from Kimbo Waitlist Form
                `;
                
                window.location.href = `mailto:kimbolearning@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
                       style={{ color: 'black' }}
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
                       style={{ color: 'black' }}
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
                     style={{ color: 'black' }}
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
                     style={{ color: 'black' }}
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
                    Tell us about your child&apos;s interests (optional)
                  </label>
                                     <textarea
                     id="interests"
                     name="interests"
                     placeholder="What topics or activities does your child enjoy?"
                     rows={4}
                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0caeb8] focus:border-[#0caeb8] text-black placeholder-gray-500 bg-white"
                     style={{ color: 'black' }}
                   ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#0caeb8] hover:bg-[#0a9ba3] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  Join Waitlist
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-6 text-center">
                We&apos;ll notify you as soon as Kimbo is ready for early access. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-gradient-to-b from-blue-250 to-blue-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1d2e4a] sm:text-4xl mb-6">
            Ready to Transform Learning?
          </h2>
          <p className="text-xl text-[#1d2e4a] opacity-80 mb-8 max-w-3xl mx-auto">
            Join us in our mission to make personalized education accessible to every student.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0caeb8] bg-white hover:bg-blue-50 transition-colors"
            >
              Back to Home
            </Link>
            <Link 
              href="/team"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-[#0caeb8] transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

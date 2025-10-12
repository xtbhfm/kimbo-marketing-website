import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/FAQs';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Noah Muhirwa",
      role: "Co-Founder & COO/CTO",
      bio: "Banking Analyst driven to create meaningful, large-scale change at the intersection of education and technology. With a background spanning investment management and entrepreneurship, Noah's mission is to leverage innovation to make a lasting global impact.",
      image: "/images/noah.jpg",
      email: "kimbolearning@gmail.com",
      linkedin: "https://www.linkedin.com/in/noahmuhirwa/"
    },
    {
      name: "Titus Grimsley",
      role: "Co-Founder & CEO",
      bio: "Venture Capital Analyst and former entrepreneur passionate about technology and impact investing. Inspired by his close relationship with his neurodivergent brother, Titus is dedicated to building solutions that empower and support diverse learning needs.",
      image: "/images/titus.jpg",
      email: "kimbolearning@gmail.com",
      linkedin: "https://www.linkedin.com/in/titus-grimsley/"
    },
    {
      name: "Blake Almanza",
      role: "Lead Software Developer",
      bio: "Full-stack developer focused on building scalable, user-friendly educational platforms that make learning more effective and enjoyable.",
      image: "/images/blake-headshot.jpg",
      email: "kimbolearning@gmail.com",
      linkedin: "https://www.linkedin.com/in/blakealmanza/"
    },
    {
      name: "Dylan Lewis",
      role: "Lead Software Developer",
      bio: "Software developer and AI architect, committed to engineering deterministic, scalable AI-driven platforms that deliver dynamic, emotionally engaging educational experiences.",
      image: "/images/dylan-headshot.jpg",
      email: "kimbolearning@gmail.com",
      linkedin: "https://www.linkedin.com/in/dylanlewisswe/"
    }
  ];

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
            Meet the Team
          </h1>
                      <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The passionate educators, engineers, and innovators behind Kimbo&apos;s mission to transform learning for every student.
            </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The passionate educators, engineers, and innovators behind Kimbo's mission to transform learning for every student.
            </p>
          </div>
          
          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                {/* Image */}
                <div className="mb-6">
                  <div className="relative w-40 h-40 bg-gray-200 rounded-full overflow-hidden shadow-md mx-auto">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-gray-500 text-xl">👤</span>
                          </div>
                          <p className="text-sm font-light">Photo coming soon</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-[#0caeb8] text-lg font-medium">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed text-sm min-h-[4rem] flex items-center justify-center">
                    {member.bio}
                  </p>
                  
                  {/* Contact Links */}
                  <div className="flex justify-center gap-4 pt-4">
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#0caeb8] transition-colors shadow-sm border border-gray-100"
                      title="Send email"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                    
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#0caeb8] transition-colors shadow-sm border border-gray-100"
                      title="View LinkedIn profile"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
            Ready to Transform Learning?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Join us in our mission to make personalized education accessible to every student.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#0caeb8] text-[#0caeb8] font-light rounded-2xl hover:bg-[#0caeb8] hover:text-white transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-gray-50">
        <Footer />
      </div>
    </main>
  );
}

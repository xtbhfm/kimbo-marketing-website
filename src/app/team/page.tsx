import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Noah Muhirwa",
      role: "Co-Founder",
      bio: "Finance professional and tech innovator, dedicated to building systems and tools that transform how every child learns.",
      image: "/images/noah.jpg",
      email: "muhirwanoah@gmail.com",
      linkedin: "https://www.linkedin.com/in/noahmuhirwa/"
    },
    {
      name: "Titus Grimsley",
      role: "Co-Founder",
      bio: "Finance professional and industry specialist, dedicated to building platforms and experiences for every student",
      image: "/images/titus.jpg",
      email: "tpgrimsley@gmail.com",
      linkedin: "https://www.linkedin.com/in/titus-grimsley/"
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
      <section id="team" className="py-24 bg-gradient-to-b from-blue-50 to-blue-150">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#1d2e4a] mb-4">Senior Leadership</h2>
            <p className="text-xl text-[#1d2e4a] opacity-80 max-w-3xl">
              Kimbo has complementary expertise in AI, education technology, and personalized learning solutions.
            </p>
          </div>
          
          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center max-w-md">
                <div className="relative w-96 h-96 bg-gray-200 mb-4 mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Clickable Name with Dropdown */}
                <details className="group mb-4">
                  <summary className="cursor-pointer">
                    <h3 className="text-xl font-bold text-[#1d2e4a] mb-2 hover:text-[#0caeb8] transition-colors inline-block">
                      {member.name}
                      <svg className="w-4 h-4 ml-2 inline-block transform transition-transform group-open:rotate-180" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5z"/>
                      </svg>
                    </h3>
                  </summary>
                  <div className="mt-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>
                </details>
                
                <p className="text-lg text-[#0caeb8] font-semibold mb-4">{member.role}</p>
                
                {/* Contact Links */}
                <div className="flex justify-center space-x-4">
                  {/* Email */}
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-[#0caeb8] transition-colors"
                    title="Send email"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  
                  {/* LinkedIn */}
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    title="View LinkedIn profile"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 3.047v5.569H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
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
          <div className="flex justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0caeb8] bg-white hover:bg-blue-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

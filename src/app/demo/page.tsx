import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/FAQs'

export default function DemoPage() {
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
            Kimbo Demo
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            See Kimbo in action - watch how we transform learning into personalized adventures
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-[#0caeb8] rounded-full mb-6">
                <svg className="w-6 h-6 text-[#0caeb8]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light text-[#1d2e4a] mb-6">
                See Kimbo in Action
              </h2>
              <p className="text-xl text-[#1d2e4a] opacity-80 max-w-2xl mx-auto leading-relaxed">
                Watch how Kimbo transforms learning into personalized adventures that adapt to each child's interests and abilities
              </p>
            </div>
            
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#0caeb8] rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#1d2e4a] rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-[#0caeb8] rounded-full opacity-30"></div>
              <div className="absolute top-1/4 -right-8 w-4 h-4 bg-[#1d2e4a] rounded-full opacity-30"></div>
              
              {/* Video container with enhanced styling */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0caeb8] to-[#1d2e4a] p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="/images/logo_blue_transparent_big.png"
                  >
                    <source src="/videos/Kimbo product demo done.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#0caeb8] to-[#1d2e4a] rounded-full"></div>
            </div>
            
            {/* Call to action */}
            <div className="text-center mt-12">
              <p className="text-lg text-[#1d2e4a] opacity-70 mb-6">
                Ready to experience Kimbo for yourself?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/join-waitlist"
                  className="px-8 py-4 border-2 border-[#0caeb8] text-[#0caeb8] font-light rounded-2xl hover:bg-[#0caeb8] hover:text-white transition-all duration-300"
                >
                  Join the Waitlist
                </a>
                <a
                  href="/use-cases"
                  className="px-8 py-4 border-2 border-[#0caeb8] text-[#0caeb8] font-light rounded-2xl hover:bg-[#0caeb8] hover:text-white transition-all duration-300"
                >
                  See Success Stories
                </a>
              </div>
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

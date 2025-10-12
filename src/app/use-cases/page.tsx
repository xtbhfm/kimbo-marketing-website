'use client';

import Navbar from '@/components/Navbar';
import { Footer } from '@/components/FAQs';
import Image from 'next/image';

const useCases = [
  {
    title: 'Victoria\'s Math Adventure',
    subtitle: 'From frustration to fascination',
    description: 'Victoria, an 8-year-old who doesn\'t fit the traditional SPED demographic, discovered Kimbo\'s magical story-based math lessons. Through interactive adventures, she learned to love numbers and problem-solving in ways that traditional methods never reached.',
    result: '"I never knew math could be this fun! Can we do more problems about the princess and her castle?"',
    features: ['Interest-based learning', 'Story-driven math', 'Engagement focus', 'Confidence building']
  },
  {
    title: 'Chad\'s Learning Adventure',
    subtitle: 'Inclusive education support',
    description: 'Chad, a 12-year-old with Down syndrome, found motivation through Kimbo\'s Willy Wonka stories. He explores the chocolate factory while solving math puzzles about counting golden tickets and reading about the magical world of candy.',
    result: '"Usually I don\'t like math, but this is actually fun!" - Chad',
    features: ['Multi-sensory support', 'Customizable pacing', 'Visual aids', 'Gentle progression']
  }
];

const testimonials = [
  {
    name: 'Natalie',
    role: 'Mother of Victoria (8)',
    content: 'I\'ve never seen Victoria this happy about learning. She used to dread math homework, but now she asks to do "Kimbo time" every day. I truly believe this will revolutionize how children learn - it\'s like magic.',
    image: '/images/victoria-picture.jpg'
  },
  {
    name: 'Naomi',
    role: 'Mother of Chad (12)',
    content: "Me and my husband are excited for the potential this application (kimbo) has to transform the way our child sees learning and accelerate his educational",
    image: '/images/pexels-pixabay-261895.jpg'
  }
];

export default function UseCasesPage() {
  return (
    <main className="min-h-screen">
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
            Real Stories, Real Results
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            See how Kimbo transforms learning for students of all ages and abilities
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From our test runs and early users - see how Kimbo adapts to different learning needs
            </p>
          </div>

          <div className="space-y-24">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="max-w-lg">
                    <div className="mb-6">
                      <h3 className="text-2xl sm:text-3xl font-light text-gray-800 mb-2">{useCase.title}</h3>
                      <p className="text-[#0caeb8] text-lg font-light">{useCase.subtitle}</p>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed mb-6">{useCase.description}</p>
                    
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
                      <p className="text-gray-700 italic leading-relaxed">&quot;{useCase.result}&quot;</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {useCase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#0caeb8] rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {index === 0 ? (
                    <div className="w-full h-80 rounded-3xl overflow-hidden shadow-sm">
                      <Image
                        src="/images/victoria-picture.jpg"
                        alt="Victoria"
                        width={400}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : index === 1 ? (
                    <div className="w-full h-80 rounded-3xl overflow-hidden shadow-sm">
                      <Image
                        src="/images/Chad-Headshot.jpg"
                        alt="Chad"
                        width={400}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-80 bg-gray-200 rounded-3xl flex items-center justify-center shadow-sm">
                      <div className="text-center text-gray-500">
                        <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-2xl flex items-center justify-center">
                          <span className="text-gray-600 text-2xl">📱</span>
                        </div>
                        <p className="text-lg font-light">Product Screenshot</p>
                        <p className="text-sm text-gray-400 mt-2">Image placeholder</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
              What Parents Are Saying
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Real feedback from families who have experienced the Kimbo difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm flex flex-col h-full">
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic flex-1">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="text-center mt-auto">
                  <p className="font-light text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Join the waitlist and be among the first to experience Kimbo&apos;s personalized learning adventures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join-waitlist"
                className="px-8 py-4 bg-[#0caeb8] text-white font-light rounded-2xl hover:bg-[#0891b2] transition-colors text-center shadow-sm"
              >
                Join the Waitlist
              </a>
              <a
                href="/demo"
                className="px-8 py-4 border border-[#0caeb8] text-[#0caeb8] font-light rounded-2xl hover:bg-[#0caeb8] hover:text-white transition-colors text-center"
              >
                Watch Demo
              </a>
            </div>
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

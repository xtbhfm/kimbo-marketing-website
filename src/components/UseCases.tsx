import React, { useState } from 'react';
import Image from 'next/image';

const useCases = [
  {
    title: 'Emma\'s Dinosaur Adventure',
    subtitle: 'Reading Confidence Transformation',
    description: 'Emma, a 7-year-old who struggles with reading, discovered Kimbo\'s dinosaur-themed stories. As she reads about T-Rex learning to count, the story adapts to her reading level, introduces new vocabulary gradually, and weaves in math problems about counting dinosaur eggs.',
    result: 'Her reading confidence soared from "I can\'t read" to "Can we read another dinosaur story?"',
    image: '/images/pexels-pixabay-261895.jpg',
    features: ['Reading level adaptation', 'Interest-based themes', 'Math integration', 'Confidence building'],
    icon: '🦕',
    color: 'from-orange-400 to-red-500'
  },
  {
    title: 'Chad\'s Willy Wonka Adventure',
    subtitle: 'Down Syndrome Learning Support',
    description: 'Chad, a 12-year-old with Down syndrome, struggled to be motivated to learn math and to read, but once he found Kimbo which implemented his interest in Willy Wonka in an interactive story that put him inside the story so he can explore the chocolate factory while solving math puzzles about counting golden tickets and reading about the magical world of candy.',
    result: '&ldquo;Usually I don&apos;t like math, but this is actually fun!&rdquo; - Chad',
    image: '/images/pexels-jonas-mohamadi-1490844.jpg',
    features: ['Multi-sensory support', 'Customizable pacing', 'Visual aids', 'Gentle progression'],
    icon: '🚀',
    color: 'from-blue-400 to-purple-500'
  },
  {
    title: 'The Johnson Family Reading Time',
    subtitle: 'Family Bonding Through Learning',
    description: 'The Johnson family transformed their evening routine with Kimbo. Dad joins 5-year-old Maya\'s fairy tale adventures, where they solve math puzzles together about counting magical creatures.',
    result: 'What was once "screen time" became quality family learning time with weekly progress insights.',
    image: '/images/pexels-olly-3820065.jpg',
    features: ['Family participation', 'Progress tracking', 'Achievement sharing', 'Quality bonding'],
    icon: '👨‍👩‍👧',
    color: 'from-green-400 to-teal-500'
  }
];

export default function UseCases() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0caeb8] to-[#1d2e4a] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>✨</span>
            <span>Real Impact Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
            Use Cases
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Some are from our test runs, others are potential use case examples showing how Kimbo adapts to different learning needs.
          </p>
        </div>

        {/* Mobile-Friendly Case Selector */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 text-sm sm:text-base ${
                activeCase === index
                  ? 'bg-gradient-to-r from-[#0caeb8] to-[#1d2e4a] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="text-lg sm:text-xl">{useCase.icon}</span>
              <span className="font-semibold">{useCase.title.split('\'')[0]}</span>
            </button>
          ))}
        </div>

        {/* Mobile-Optimized Case Display */}
        <div className="max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                activeCase === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute pointer-events-none'
              }`}
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Content Side */}
                <div className="space-y-4 sm:space-y-6 w-full">
                  {/* Header */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`text-3xl sm:text-4xl bg-gradient-to-r ${useCase.color} bg-clip-text text-transparent`}>
                        {useCase.icon}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{useCase.title}</h3>
                        <p className="text-[#0caeb8] font-semibold text-sm sm:text-base">{useCase.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{useCase.description}</p>
                    <div className="bg-gradient-to-r from-[#0caeb8]/10 to-[#1d2e4a]/10 p-3 sm:p-4 rounded-lg border-l-4 border-[#0caeb8]">
                      <p className="text-gray-800 font-medium italic text-sm sm:text-base">&ldquo;{useCase.result}&rdquo;</p>
                    </div>
                  </div>

                  {/* Mobile-Friendly Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 bg-white p-2 sm:p-3 rounded-lg shadow-sm border border-gray-100">
                        <div className="w-2 h-2 bg-[#0caeb8] rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile-Optimized Image Side */}
                <div className="relative w-full">
                  <div className="relative h-[250px] sm:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  {/* Mobile-Friendly Stats */}
                  <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-lg sm:rounded-xl shadow-lg p-2 sm:p-4 border border-gray-100">
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-[#0caeb8]">95%</div>
                      <div className="text-xs text-gray-600">Engagement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
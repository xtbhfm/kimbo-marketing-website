'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const comparisonData = [
  {
    without: {
      title: 'Traditional Learning',
      points: [
        'One-size-fits-all approach',
        'Students get bored or fall behind',
        'Separate subjects, no connection',
        'Limited engagement'
      ]
    },
    with: {
      title: 'With Kimbo',
      points: [
        'Personalized for each child',
        'Perfect pace for every student',
        'Connected learning adventures',
        'Kids love the stories'
      ]
    }
  },
  {
    without: {
      title: 'Static Content',
      points: [
        'Same lessons for everyone',
        'No adaptation',
        'Boring worksheets',
        'No real feedback'
      ]
    },
    with: {
      title: 'Adaptive AI',
      points: [
        'Content adapts to needs',
        'Learning style recognition',
        'Interactive stories',
        'Instant encouragement'
      ]
    }
  },
  {
    without: {
      title: 'Isolated Learning',
      points: [
        'Students learn alone',
        'No family involvement',
        'Limited insights',
        'Disconnected experience'
      ]
    },
    with: {
      title: 'Connected Experience',
      points: [
        'Family adventures',
        'Parent engagement',
        'Clear progress tracking',
        'Real-world connections'
      ]
    }
  }
];

export default function ParallaxComparison() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [1, 1, 0.3, 0]);
  const lineHeight = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['0%', '30%', '70%', '100%']);

  return (
    <div ref={containerRef} className="relative min-h-[250vh] bg-white">
      {/* Removed fixed background that was blocking content */}

      {/* Content Container */}
      <div className="relative z-10">
        {/* Sticky Header */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
          <motion.div 
            className="text-center max-w-4xl mx-auto px-6"
            style={{ opacity: headerOpacity }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#1d2e4a] sm:text-4xl mb-6">
              The Difference is Clear
            </h2>
            <p className="text-lg leading-8 text-[#1d2e4a] opacity-80">
              See how Kimbo transforms the learning experience compared to traditional methods
            </p>
          </motion.div>
        </div>

        {/* Scrollable Content */}
        <div className="relative">
          {comparisonData.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="h-[60vh] flex items-center justify-center"
            >
              <div className="max-w-6xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center relative">
                  {/* Without Kimbo Side */}
                  <div className="relative">
                    <div className="p-10 rounded-3xl bg-white border border-gray-200 shadow-lg">
                      <div className="mb-8 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{comparison.without.title}</h3>
                      </div>
                      <ul className="space-y-4">
                        {comparison.without.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex flex-col items-center text-center">
                            <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center mb-2">
                              <span className="text-white text-sm font-bold">×</span>
                            </div>
                            <span className="text-gray-700 text-base leading-relaxed font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center VS Badge */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div 
                      className="w-px bg-gray-300"
                      style={{ height: lineHeight }}
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-[#0caeb8] rounded-full flex items-center justify-center bg-white">
                      <span className="text-[#0caeb8] font-bold text-lg">VS</span>
                    </div>
                  </div>

                  {/* With Kimbo Side */}
                  <div className="relative">
                    <div className="p-10 rounded-3xl bg-white border border-gray-200 shadow-lg">
                      <div className="mb-8 text-center">
                        <h3 className="text-2xl font-semibold text-[#1d2e4a] mb-2">{comparison.with.title}</h3>
                      </div>
                      <ul className="space-y-4">
                        {comparison.with.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex flex-col items-center text-center">
                            <div className="w-6 h-6 bg-[#0caeb8] rounded-full flex items-center justify-center mb-2">
                              <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <span className="text-gray-800 text-base leading-relaxed font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

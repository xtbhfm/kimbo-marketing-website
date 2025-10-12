'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const useCases = [
  {
    title: 'Personalized Learning',
    description: 'For every student, Kimbo adapts lessons and stories to fit their unique pace, grade, and learning style.',
    image: '/images/use-case-1.jpg',
  },
  {
    title: 'Education',
    description: 'Kimbo helps students, regardless of if they\'re neurodivergent, SPED, or in gen-ed build confidence and skills, turning challenges into strengths.',
    image: '/images/use-case-2.jpg',
  },
  {
    title: 'Parent Engagement',
    description: 'Parents can see their child\'s growth, celebrate wins, and guide their journey with Kimbo\'s insights by their side.',
    image: '/images/use-case-3.jpg',
  },
  {
    title: 'Teacher Tools',
    description: 'Teachers use Kimbo to personalize instruction, track progress, and unlock every student\'s full potential.',
    image: '/images/use-case-4.jpg',
  },
];

export default function ParallaxUseCases() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[300vh]">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-[#f0f9ff] to-white" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Sticky Header */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
          <motion.div 
            className="text-center max-w-2xl mx-auto px-6"
            style={{ opacity }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#1d2e4a] sm:text-4xl">
              Learning changed forever
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#1d2e4a]">
              A new era in learning. Kimbo understands how each student learns best, personalizes every lesson, and makes mastery possible for every mind.
            </p>
          </motion.div>
        </div>

        {/* Scrollable Content */}
        <div className="relative">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="min-h-screen flex items-center justify-center"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#1d2e4a]">{useCase.title}</h3>
                  <p className="text-lg text-[#1d2e4a]">{useCase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 
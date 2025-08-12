import React from 'react';
import Image from 'next/image';

const useCases = [
  {
    title: 'Personalized Learning',
    description: 'For every student, Kimbo adapts lessons and stories to fit their unique pace, grade, and learning style.',
    image: '/images/pexels-pixabay-261895.jpg',
  },
  {
    title: 'Special Education',
    description: 'Kimbo helps neurodivergent and SPED students build confidence and skills, turning challenges into strengths.',
    image: '/images/pexels-jonas-mohamadi-1490844.jpg',
  },
  {
    title: 'Parent Engagement',
    description: "Parents can see their child's growth, celebrate wins, and guide their journey — with Kimbo's insights by their side.",
    image: '/images/pexels-olly-3820065.jpg',
  },
];

export default function UseCases() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-40">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Use Cases
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kimbo empowers students, teachers, and parents in every part of the learning journey.
          </p>
        </div>
        <div className="h-24" />
        <div className="space-y-32">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`flex flex-col-reverse lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center justify-between max-w-5xl mx-auto gap-12 ${index === 0 ? 'mt-24' : ''}`}
            >
              <div className="w-full lg:w-1/2 text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-lg text-gray-600">{useCase.description}</p>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                {useCase.image ? (
                  <div className="relative h-[400px] w-full max-w-[340px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-[400px] w-full max-w-[340px] rounded-xl bg-white shadow-lg border-4 border-blue-300 text-gray-400 text-lg font-semibold">
                    Image Placeholder
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
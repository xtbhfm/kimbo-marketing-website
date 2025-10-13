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
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6">
            The Difference is Clear
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            See how Kimbo transforms the learning experience compared to traditional methods
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="space-y-16">
          {comparisonData.map((comparison, index) => (
            <div key={index} className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
                {/* Without Kimbo Side */}
                <div className="relative">
                  <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm">
                    <div className="mb-6 text-center">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{comparison.without.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {comparison.without.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex flex-col items-center text-center gap-2">
                          <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">×</span>
                          </div>
                          <span className="text-gray-700 text-base leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center VS Badge */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-16 h-16 border-2 border-[#0caeb8] rounded-full flex items-center justify-center bg-white shadow-lg">
                    <span className="text-[#0caeb8] font-bold text-lg">VS</span>
                  </div>
                </div>

                {/* With Kimbo Side */}
                <div className="relative">
                  <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg">
                    <div className="mb-6 text-center">
                      <h3 className="text-2xl font-semibold text-[#1d2e4a] mb-2">{comparison.with.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {comparison.with.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex flex-col items-center text-center gap-2">
                          <div className="w-6 h-6 bg-[#0caeb8] rounded-full flex items-center justify-center">
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
          ))}
        </div>
      </div>
    </section>
  );
}
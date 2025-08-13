'use client';

export default function Pricing() {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-[#0caeb8] font-semibold text-sm sm:text-base uppercase tracking-wider mb-4">
            Coming Soon
          </h2>
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-4 leading-tight">
            Kimbo is Coming
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get ready for adaptive, AI-powered learning adventures.
          </p>
        </div>
        
        <div className="flex justify-center max-w-2xl mx-auto">
          {/* Coming Soon Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 text-center relative border-2 border-[#0caeb8] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-2 w-full">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0caeb8] text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
              Coming Soon
            </div>
            <div className="mb-6 sm:mb-8">
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl text-[#1a1a1a] mb-4">
                Kimbo is Coming Soon
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Get ready for adaptive, AI-powered learning adventures.
              </p>
            </div>
            <button 
              onClick={() => window.location.href = '#contact'}
              className="w-full py-3 sm:py-4 bg-[#0caeb8] text-white border-none rounded-lg text-base sm:text-lg font-semibold cursor-pointer transition-all duration-200 hover:bg-[#0891b2] hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
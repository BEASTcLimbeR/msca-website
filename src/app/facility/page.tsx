'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Facility() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button - Top Left */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => router.push('/')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Back to Home
        </button>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-8 px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            PCMC Yoga Park Facility
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            World-class climbing facility featuring international competition standards for Lead, Speed, and Boulder climbing disciplines.
          </p>
        </div>

        {/* Facility Images Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Boulder Climbing Areas */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                Boulder Climbing Areas
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative group bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <div className="p-2 h-96 flex items-center justify-center">
                    <Image 
                      src="/boulder-left.svg" 
                      alt="Boulder Climbing Area - Left" 
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-300 rounded-lg"></div>
                </div>
                <div className="relative group bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <div className="p-2 h-96 flex items-center justify-center">
                    <Image 
                      src="/boulder-right.svg" 
                      alt="Boulder Climbing Area - Right" 
                      width={500}
                      height={500}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-300 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Speed and Lead Climbing */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                Speed & Lead Climbing
              </h2>
              <div className="space-y-8">
                <div className="relative group bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <div className="p-2 h-80 flex items-center justify-center">
                    <Image 
                      src="/speed-and-lead.svg" 
                      alt="Speed and Lead Climbing Wall" 
                      width={700}
                      height={350}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-300 rounded-lg"></div>
                </div>
                <div className="relative group bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden border border-gray-200">
                  <div className="p-2 h-80 flex items-center justify-center">
                    <Image 
                      src="/lead-climbing-wall.svg" 
                      alt="Lead Climbing Wall" 
                      width={700}
                      height={350}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent group-hover:from-black/10 transition-all duration-300 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Facility Features */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Facility Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">15-meter Lead Wall</h4>
                <p className="text-gray-600">International competition standard height</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Speed Climbing Lane</h4>
                <p className="text-gray-600">Dedicated speed climbing competition area</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Boulder Areas</h4>
                <p className="text-gray-600">Multiple boulder climbing zones</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Safety Equipment</h4>
                <p className="text-gray-600">Professional safety gear and training equipment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional Coaching</h4>
                <p className="text-gray-600">Expert coaching staff available</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Competition Ready</h4>
                <p className="text-gray-600">Meets international competition standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

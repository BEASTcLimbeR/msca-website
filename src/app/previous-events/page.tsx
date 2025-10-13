'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function PreviousEvents() {
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
        {/* Logos Section */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-8 md:space-x-12">
            {/* IMF Logo */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20">
                <Image 
                  src="/imf-logo.svg" 
                  alt="IMF Logo" 
                  width={120}
                  height={80}
                  className="h-16 w-auto mx-auto"
                />
              </div>
            </div>

            {/* MSCA Marathi Logo */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20">
                <Image 
                  src="/msca-logo-marathi.svg" 
                  alt="MSCA Marathi Logo" 
                  width={120}
                  height={80}
                  className="h-16 w-auto mx-auto"
                />
              </div>
            </div>

            {/* PCMC Logo */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20">
                <Image 
                  src="/pcmc-logo.svg" 
                  alt="PCMC Logo" 
                  width={120}
                  height={80}
                  className="h-16 w-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Title - Centered */}
        <div className="flex items-center justify-center min-h-[30vh]">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              29th Indian Mountaineering Foundation West Zone Sport Climbing Championship
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600" style={{ fontFamily: 'Playfair Display, serif' }}>
              2025
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

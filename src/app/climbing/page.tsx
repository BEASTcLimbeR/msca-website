'use client'

import { useRouter } from 'next/navigation'

export default function ClimbingPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen" style={{ backgroundImage: 'url(/white-shader-gradient.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Mobile App Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src="/phone-image-without-bg.svg" 
                alt="MSCA Mobile App Interface" 
                className="w-80 h-auto rounded-3xl shadow-2xl"
                style={{
                  background: 'transparent',
                  mixBlendMode: 'multiply'
                }}
                loading="lazy"
              />
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-800 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Coming Soon
                  </h3>
                  <p className="text-sm text-gray-600 text-center mt-1">
                    Mobile App
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - App Information */}
          <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  MSCA
                </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              A well-connected experience for your climbing journey
            </p>
            
            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-base">Book climbing sessions and classes</p>
              </div>
              
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-base">Make secure online payments</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-base">View your training plan and progress</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-base">Track your climbing achievements</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-base">Provide feedback and reviews</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-base">Refer friends and family</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-base">Contactless check-in and check-out</p>
              </div>
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-transparent hover:opacity-80 transition-all duration-300">
                <img src="/playstore-icon.svg" alt="Google Play" className="h-12 w-auto" />
              </button>
              
              <button className="bg-transparent hover:opacity-80 transition-all duration-300">
                <img src="/appstore-icon.svg" alt="App Store" className="h-12 w-auto" />
              </button>
            </div>
            
            {/* Back Button */}
            <button 
              onClick={() => router.push('/')}
              className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

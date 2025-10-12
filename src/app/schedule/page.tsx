'use client'

import { useRouter } from 'next/navigation'

export default function SchedulePage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            View Schedule
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              BATCHES
            </h2>
            
            <div className="space-y-6">
              {/* Morning Sessions */}
              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                  MORNING SESSIONS
                </h3>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    <div className="px-6 py-4 bg-gray-50">
                      <div className="text-lg font-semibold text-gray-900">6.00 AM TO 8.00</div>
                    </div>
                    <div className="px-6 py-4">
                      <div className="text-lg font-semibold text-gray-900">8.30 to 10.30</div>
                    </div>
                    <div className="px-6 py-4 bg-gray-50">
                      <div className="text-lg font-semibold text-gray-900">11.00 to 1.00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Afternoon Sessions */}
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                  AFTERNOON SESSIONS
                </h3>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="px-6 py-4">
                    <div className="text-lg font-semibold text-gray-900">13.30 to 15.30</div>
                  </div>
                </div>
              </div>

              {/* Evening Sessions */}
              <div>
                <h3 className="text-xl font-bold text-purple-600 mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                  EVENING SESSIONS
                </h3>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    <div className="px-6 py-4 bg-gray-50">
                      <div className="text-lg font-semibold text-gray-900">16.00 to 18.00</div>
                    </div>
                    <div className="px-6 py-4">
                      <div className="text-lg font-semibold text-gray-900">18.30 to 20.30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              onClick={() => router.push('/#join-us')}
              className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-all duration-300"
            >
              Join now
            </button>
            <button 
              onClick={() => router.push('/')}
              className="bg-gray-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

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
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              WEEKLY SCHEDULE
            </h2>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Day</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-orange-600">Morning Sessions</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600">Afternoon Sessions</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-purple-600">Evening Sessions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Monday - Holiday */}
                    <tr className="bg-red-50">
                      <td className="px-6 py-4 text-lg font-semibold text-red-600">Monday</td>
                      <td className="px-6 py-4 text-center text-red-500 font-medium" colSpan={3}>
                        <div className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          HOLIDAY
                        </div>
                      </td>
                    </tr>
                    
                    {/* Tuesday */}
                    <tr>
                      <td className="px-6 py-4 text-lg font-semibold text-gray-900">Tuesday</td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">6.00 AM - 8.00 AM</div>
                          <div className="text-sm text-gray-700">8.30 AM - 10.30 AM</div>
                          <div className="text-sm text-gray-700">11.00 AM - 1.00 PM</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">1.30 PM - 3.30 PM</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">4.00 PM - 6.00 PM</div>
                          <div className="text-sm text-gray-700">6.30 PM - 8.30 PM</div>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Wednesday */}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-lg font-semibold text-gray-900">Wednesday</td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">6.00 AM - 8.00 AM</div>
                          <div className="text-sm text-gray-700">8.30 AM - 10.30 AM</div>
                          <div className="text-sm text-gray-700">11.00 AM - 1.00 PM</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">1.30 PM - 3.30 PM</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">4.00 PM - 6.00 PM</div>
                          <div className="text-sm text-gray-700">6.30 PM - 8.30 PM</div>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Thursday */}
                    <tr>
                      <td className="px-6 py-4 text-lg font-semibold text-gray-900">Thursday</td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">6.00 AM - 8.00 AM</div>
                          <div className="text-sm text-gray-700">8.30 AM - 10.30 AM</div>
                          <div className="text-sm text-gray-700">11.00 AM - 1.00 PM</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">1.30 PM - 3.30 PM</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">4.00 PM - 6.00 PM</div>
                          <div className="text-sm text-gray-700">6.30 PM - 8.30 PM</div>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Friday */}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-lg font-semibold text-gray-900">Friday</td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">6.00 AM - 8.00 AM</div>
                          <div className="text-sm text-gray-700">8.30 AM - 10.30 AM</div>
                          <div className="text-sm text-gray-700">11.00 AM - 1.00 PM</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">1.30 PM - 3.30 PM</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">4.00 PM - 6.00 PM</div>
                          <div className="text-sm text-gray-700">6.30 PM - 8.30 PM</div>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Saturday */}
                    <tr>
                      <td className="px-6 py-4 text-lg font-semibold text-gray-900">Saturday</td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">6.00 AM - 8.00 AM</div>
                          <div className="text-sm text-gray-700">8.30 AM - 10.30 AM</div>
                          <div className="text-sm text-gray-700">11.00 AM - 1.00 PM</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">1.30 PM - 3.30 PM</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">4.00 PM - 6.00 PM</div>
                          <div className="text-sm text-gray-700">6.30 PM - 8.30 PM</div>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Sunday */}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-lg font-semibold text-gray-900">Sunday</td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">6.00 AM - 8.00 AM</div>
                          <div className="text-sm text-gray-700">8.30 AM - 10.30 AM</div>
                          <div className="text-sm text-gray-700">11.00 AM - 1.00 PM</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">1.30 PM - 3.30 PM</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-700">4.00 PM - 6.00 PM</div>
                          <div className="text-sm text-gray-700">6.30 PM - 8.30 PM</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

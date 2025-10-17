'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { getCompetitionById } from '@/data/competitions'
import { notFound } from 'next/navigation'

export default function CompetitionPage() {
  const params = useParams()
  const router = useRouter()
  const competition = getCompetitionById(params.id as string)

  if (!competition) {
    notFound()
  }

  const goldMedals = competition.athletes.filter(athlete => athlete.medal === 'Gold')
  const silverMedals = competition.athletes.filter(athlete => athlete.medal === 'Silver')
  const bronzeMedals = competition.athletes.filter(athlete => athlete.medal === 'Bronze')
  const participatedAthletes = competition.athletes.filter(athlete => athlete.medal === 'Participated')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Achievements
            </button>
            <div className="text-sm text-gray-500">
              Competition Results
            </div>
          </div>
        </div>
      </div>

      {/* Competition Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Image 
                src={competition.logo} 
                alt={competition.type} 
                width={80} 
                height={80} 
                className="w-20 h-20"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {competition.name}
            </h1>
            <p className="text-xl text-blue-700 mb-2">{competition.location} {competition.year}</p>
            <p className="text-lg text-blue-600 max-w-3xl mx-auto">{competition.description}</p>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Medal Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">{goldMedals.length}</div>
              <div className="text-lg font-semibold text-yellow-800">Gold Medals</div>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">{silverMedals.length}</div>
              <div className="text-lg font-semibold text-gray-800">Silver Medals</div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">{bronzeMedals.length}</div>
              <div className="text-lg font-semibold text-orange-800">Bronze Medals</div>
            </div>
          </div>

          {/* Athletes Results */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">Our athletes</h2>
            </div>
            
            <div className="p-6">
              {/* Gold Medals */}
              {goldMedals.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-yellow-600 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Gold Medals
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {goldMedals.map((athlete, index) => (
                      <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{athlete.name}</h4>
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                            {athlete.medal}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{athlete.category} - {athlete.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Silver Medals */}
              {silverMedals.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-600 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Silver Medals
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {silverMedals.map((athlete, index) => (
                      <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{athlete.name}</h4>
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm font-medium">
                            {athlete.medal}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{athlete.category} - {athlete.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bronze Medals */}
              {bronzeMedals.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Bronze Medals
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {bronzeMedals.map((athlete, index) => (
                      <div key={index} className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{athlete.name}</h4>
                          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-medium">
                            {athlete.medal}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{athlete.category} - {athlete.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Participated Athletes */}
              {participatedAthletes.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-600 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Participated Athletes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {participatedAthletes.map((athlete, index) => (
                      <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{athlete.name}</h4>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm font-medium">
                            {athlete.medal}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{athlete.category} - {athlete.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

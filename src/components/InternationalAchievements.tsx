'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { competitions } from '@/data/competitions'

const InternationalAchievements = () => {
  const router = useRouter()

  const handleCompetitionClick = (competitionId: string) => {
    router.push(`/competitions/${competitionId}`)
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          International Achievements
        </h3>
        <p className="text-blue-700 text-lg">Representing India on the global stage</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions.map((competition) => (
          <div 
            key={competition.id}
            onClick={() => handleCompetitionClick(competition.id)}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer group"
          >
            <Image 
              src={competition.logo} 
              alt={competition.type} 
              width={48} 
              height={48} 
              className="w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
            />
            <div className="flex-1">
              <h4 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {competition.name}
              </h4>
              <p className="text-sm text-gray-600">{competition.location} {competition.year}</p>
              <div className="flex items-center mt-2 text-xs text-blue-500 group-hover:text-blue-700">
                <span>View Results</span>
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InternationalAchievements

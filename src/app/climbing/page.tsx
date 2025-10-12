'use client'

import { useRouter } from 'next/navigation'

export default function ClimbingPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <button 
          onClick={() => router.push('/')}
          className="bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300"
        >
          Back to Home
        </button>
      </div>
    </main>
  )
}

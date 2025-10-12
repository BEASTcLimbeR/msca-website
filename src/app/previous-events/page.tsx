'use client'

import { useRouter } from 'next/navigation'

export default function PreviousEvents() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <button
          onClick={() => router.push('/')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

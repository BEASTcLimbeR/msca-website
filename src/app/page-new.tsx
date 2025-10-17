'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Navigation from '@/components/sections/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import InternationalAchievements from '@/components/InternationalAchievements'
import { ScrollToTop } from '@/components/ui/scroll-to-top'

// Lazy load heavy components
const FindUsSection = dynamic(() => import('@/components/FindUsSection'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
        <p className="text-gray-300">Loading Find Us Section...</p>
      </div>
    </div>
  )
})

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2024-12-31T00:00:00').getTime()
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileView={isMobileView}
      />
      
      <HeroSection 
        isMobileView={isMobileView}
        timeLeft={timeLeft}
      />
      
      <AboutSection />
      
      <InternationalAchievements />
      
      <FindUsSection />
      
      <ScrollToTop />
    </main>
  )
}

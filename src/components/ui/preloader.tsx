'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

interface PreloaderProps {
  disabled?: boolean
}

export const Preloader: React.FC<PreloaderProps> = ({ disabled = false }) => {
  const [isLoading, setIsLoading] = useState(!disabled)
  const [animationData, setAnimationData] = useState(null)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    if (disabled) {
      setIsLoading(false)
      return
    }

    // Prevent body scrolling when preloader is active
    document.body.style.overflow = 'hidden'

    // Load animation data dynamically
    const loadAnimation = async () => {
      try {
        const data = await import('../../../public/decending-animation.json')
        setAnimationData(data.default)
      } catch (error) {
        console.error('Failed to load animation:', error)
      }
    }

    loadAnimation()

    // Check if page is fully loaded
    const handleLoad = () => {
      setIsFadingOut(true)
      // Hide preloader after fade out animation
      setTimeout(() => {
        setIsLoading(false)
        // Restore body scrolling
        document.body.style.overflow = 'unset'
      }, 500) // 500ms fade out duration
    }

    // If page is already loaded, start fade out immediately
    if (document.readyState === 'complete') {
      const timer = setTimeout(handleLoad, 4000) // 4 seconds minimum
      return () => {
        clearTimeout(timer)
        document.body.style.overflow = 'unset'
      }
    } else {
      // Wait for page to load
      window.addEventListener('load', handleLoad)
      // Fallback timer in case load event doesn't fire
      const timer = setTimeout(handleLoad, 8000) // 8 seconds maximum
      
      return () => {
        window.removeEventListener('load', handleLoad)
        clearTimeout(timer)
        document.body.style.overflow = 'unset'
      }
    }
  }, [disabled])

  if (!isLoading) return null

  return (
    <div 
      className={`fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      {/* Logo */}
      <div className="mb-6">
        <img 
          src="/msca-logo-marathi.svg" 
          alt="MSCA Logo" 
          className="h-16 sm:h-20 w-auto mx-auto"
        />
      </div>

      <div className="w-64 h-64 sm:w-80 sm:h-80 mb-8" style={{ zoom: '2.0' }}>
        {animationData ? (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500"></div>
          </div>
        )}
      </div>
      
      {/* Loading text */}
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Maharashtra Sports Climbing Association
        </h2>
        <p className="text-gray-600 animate-pulse text-sm sm:text-base">
          Loading...
        </p>
      </div>
    </div>
  )
}

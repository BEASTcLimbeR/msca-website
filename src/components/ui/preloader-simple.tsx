'use client'

import React, { useEffect, useState } from 'react'

interface PreloaderProps {
  disabled?: boolean
}

export const Preloader: React.FC<PreloaderProps> = ({ disabled = false }) => {
  const [isLoading, setIsLoading] = useState(!disabled)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    if (disabled) {
      setIsLoading(false)
      return
    }

    // Prevent body scrolling when preloader is active
    document.body.style.overflow = 'hidden'

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
      const timer = setTimeout(handleLoad, 2000) // 2 seconds minimum
      return () => {
        clearTimeout(timer)
        document.body.style.overflow = 'unset'
      }
    } else {
      // Wait for page to load
      window.addEventListener('load', handleLoad)
      // Fallback timer in case load event doesn't fire
      const timer = setTimeout(handleLoad, 5000) // 5 seconds maximum
      
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
      <div className="mb-8">
        <img 
          src="/msca-logo-marathi.svg" 
          alt="MSCA Logo" 
          className="h-16 sm:h-20 w-auto mx-auto"
        />
      </div>

      {/* Simple Climbing Animation */}
      <div className="w-32 h-32 mb-8 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-orange-200 rounded-full animate-spin">
            <div className="w-12 h-12 border-4 border-orange-500 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
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

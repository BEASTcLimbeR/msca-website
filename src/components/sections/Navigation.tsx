'use client'

import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import Image from 'next/image'

interface NavigationProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  isMobileView: boolean
}

export default function Navigation({ isMobileMenuOpen, setIsMobileMenuOpen, isMobileView }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/msca-white-logo.svg"
              alt="MSCA Logo"
              width={isMobileView ? 120 : 150}
              height={isMobileView ? 40 : 50}
              className="h-8 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('facilities')}
              className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
            >
              Facilities
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
            >
              Contact Us
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-orange-400 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-orange-400 transition-colors duration-200 font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('facilities')}
              className="block w-full text-left text-white hover:text-orange-400 transition-colors duration-200 font-medium py-2"
            >
              Facilities
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className="block w-full text-left text-white hover:text-orange-400 transition-colors duration-200 font-medium py-2"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-left text-white hover:text-orange-400 transition-colors duration-200 font-medium py-2"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-orange-400 transition-colors duration-200 font-medium py-2"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

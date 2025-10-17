'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { GradientText } from '@/components/ui/gradient-text'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import dynamic from 'next/dynamic'
import InternationalAchievements from '@/components/InternationalAchievements'

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
  const router = useRouter()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)
  const [isToggleOn, setIsToggleOn] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  // Contact form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactType: 'individual'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeTab, setActiveTab] = useState<'individual' | 'company'>('individual')

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 640) // sm breakpoint
    }

    checkMobileView()
    window.addEventListener('resize', checkMobileView)
    return () => window.removeEventListener('resize', checkMobileView)
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('November 1, 2025 00:00:00').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        // Trigger animation when numbers change
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 300)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  // Contact form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleTabChange = (tab: 'individual' | 'company') => {
    setActiveTab(tab)
    setFormData(prev => ({
      ...prev,
      contactType: tab,
      firstName: '',
      lastName: '',
      subject: '',
      message: ''
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          contactType: 'individual'
        })
        setActiveTab('individual')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleSwitch = () => {
    // Play sound effect
    const audio = new Audio('/toggle.mp3')
    audio.play().catch(error => {
      console.log('Audio play failed:', error)
    })
    
    setIsToggleOn(!isToggleOn)
    
    // Redirect to climbing page after a short delay
    setTimeout(() => {
      router.push('/climbing')
    }, 500)
  }
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* MSCA Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image 
                  src="/msca-logo-marathi.svg" 
                  alt="MSCA Logo" 
                  width={200}
                  height={64}
                  className="h-8 sm:h-10 md:h-12 lg:h-10 xl:h-16 w-auto max-w-[200px] lg:max-w-[180px] xl:max-w-none"
                  priority
                />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:block flex-1">
              <div className="ml-2 xl:ml-10 flex items-baseline space-x-1 lg:space-x-1 xl:space-x-4 lg:ml-6">
                <a href="#home" className="text-black hover:text-orange-600 px-0.5 py-2 lg:text-xs xl:text-sm font-medium font-sans transition-colors duration-200">Home</a>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-black hover:text-orange-600 px-0.5 py-2 lg:text-xs xl:text-sm font-medium font-sans transition-colors duration-200 whitespace-nowrap"
                >
                    About Us
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    // Scroll to associations section after a short delay
                    setTimeout(() => {
                      const associationsSection = document.querySelector('[data-section="associations"]');
                      if (associationsSection) {
                        associationsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 500);
                  }}
                  className="text-black hover:text-orange-600 px-0.5 py-2 lg:text-xs xl:text-sm font-medium font-sans transition-colors duration-200"
                >
                  Associations
                </a>
                <a 
                  href="#our-athletes" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('our-athletes')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-black hover:text-orange-600 px-0.5 py-2 lg:text-xs xl:text-sm font-medium font-sans transition-colors duration-200"
                >
                  Our Athletes
                </a>
                <a 
                  href="#facility" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('facility')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-black hover:text-orange-600 px-0.5 py-2 lg:text-xs xl:text-sm font-medium font-sans transition-colors duration-200"
                >
                  Facility
                </a>
                <a 
                  href="#events" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-black hover:text-orange-600 px-0.5 py-2 lg:text-xs xl:text-sm font-medium font-sans transition-colors duration-200"
                >
                    Events
                </a>
                <a 
                  href="#achievements" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-black hover:text-orange-600 px-0.5 py-2 lg:text-xs xl:text-sm font-medium font-sans transition-colors duration-200"
                >
                    Achievements
                </a>
                <a 
                  href="#our-team" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('our-team')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-black hover:text-orange-600 px-0.5 py-2 lg:text-xs xl:text-sm font-medium font-sans transition-colors duration-200"
                >
                  Team
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-black hover:text-orange-600 px-0.5 py-2 lg:text-xs xl:text-sm font-medium font-sans transition-colors duration-200 whitespace-nowrap"
                >
                    Contact Us
                  </a>
              </div>
            </div>

            {/* Action Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-2 ml-0 xl:ml-4">
              <button 
                onClick={() => document.getElementById('join-us')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-2 xl:px-2 py-1.5 border border-gray-300 bg-white text-black lg:text-xs xl:text-xs font-medium hover:bg-gray-50 transition-all duration-200 rounded-md whitespace-nowrap"
              >
                Join us
              </button>
              <button 
                onClick={() => router.push('/schedule')}
                className="px-2 xl:px-2 py-1.5 border border-gray-300 bg-white text-black lg:text-xs xl:text-xs font-medium hover:bg-gray-50 transition-all duration-200 rounded-md whitespace-nowrap"
              >
                View Schedule
              </button>
              <button 
                onClick={() => document.getElementById('donate-us')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-2 xl:px-2 py-1.5 border border-gray-300 bg-white text-black lg:text-xs xl:text-xs font-medium hover:bg-gray-50 transition-all duration-200 rounded-md whitespace-nowrap"
              >
                Donate us
              </button>
              {/* Theme Toggle */}
              <div className="ml-2">
                <ThemeToggle size="small" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-black hover:text-orange-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close icon */}
                <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Home</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">About Us</a>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                  setTimeout(() => {
                    const associationsSection = document.querySelector('[data-section="associations"]');
                    if (associationsSection) {
                      associationsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 500);
                }}
                className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Associations
              </a>
              <a 
                href="#our-athletes" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('our-athletes')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Our Athletes
              </a>
              <a 
                href="#facility" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('facility')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Facility
              </a>
              <a 
                href="#events" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Events
              </a>
              <a 
                href="#achievements" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Achievements
              </a>
              <a 
                href="#our-team" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('our-team')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Team
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Contact Us
              </a>
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <div className="space-y-2">
                  <button 
                    onClick={() => {
                      document.getElementById('join-us')?.scrollIntoView({ behavior: 'smooth' })
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full px-3 py-2 border border-gray-300 bg-white text-black text-sm font-medium hover:bg-gray-50 transition-all duration-200 rounded-md text-center"
                  >
                    Join us
                  </button>
                  <button 
                    onClick={() => {
                      router.push('/schedule')
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full px-3 py-2 border border-gray-300 bg-white text-black text-sm font-medium hover:bg-gray-50 transition-all duration-200 rounded-md text-center"
                  >
                    <span className="block leading-tight">View</span>
                    <span className="block leading-tight">Schedule</span>
                  </button>
                  <button 
                    onClick={() => {
                      document.getElementById('donate-us')?.scrollIntoView({ behavior: 'smooth' })
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full px-3 py-2 border border-gray-300 bg-white text-black text-sm font-medium hover:bg-gray-50 transition-all duration-200 rounded-md text-center"
                  >
                    Donate us
                  </button>
                  {/* Mobile Theme Toggle */}
                  <div className="flex justify-center pt-2">
                    <ThemeToggle size="small" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Gradient Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section id="home" className="pt-16 md:pt-20 min-h-screen bg-gray-100 flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/speed-and-lead.svg" 
            alt="Climbing Wall Background" 
            fill
            className="object-cover opacity-10 md:opacity-20"
            priority
          />
        </div>
        
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg -mt-8 sm:mt-0 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              {isMobileView ? (
                <>
                  <GradientText 
                    colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
                    animationSpeed={8}
                    className="block"
                  >
                    Maharashtra Sport
                  </GradientText>
                  <GradientText 
                    colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
                    animationSpeed={8}
                    className="block"
                  >
                    Climbing Association
                  </GradientText>
                </>
              ) : (
                <>
                  <GradientText 
                    colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
                    animationSpeed={8}
                    className="block"
                  >
                    Maharashtra Sport Climbing
                  </GradientText>
                  <GradientText 
                    colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
                    animationSpeed={8}
                    className="block"
                  >
                    Association
                  </GradientText>
                </>
              )}
            </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-8 md:mb-12 px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            United by Climbing – आरोहणेन एकीकृत
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button 
              onClick={() => document.getElementById('join-us')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-button w-full sm:w-auto"
            >
              Join us
            </button>
            <button 
              onClick={() => router.push('/schedule')}
              className="hero-button w-full sm:w-auto"
            >
              View Schedule
            </button>
            <button 
              onClick={() => document.getElementById('donate-us')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-button w-full sm:w-auto"
            >
              Donate us
            </button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section id="events" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-gradient-to-r from-red-300 to-red-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-3/4 right-1/5 w-1.5 h-1.5 bg-red-300 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '2.5s' }}></div>
          <div className="absolute top-1/6 right-1/3 w-2.5 h-2.5 bg-orange-200 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            {/* IFSC Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                  <Image 
                    src="/ifsc-k-champioship-pcmc.svg" 
                    alt="IFSC Asian Kids Championship Logo" 
                    width={160}
                    height={160}
                    className="h-24 md:h-32 lg:h-40 w-auto mx-auto"
                  />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              IFSC Asian Kids Championship
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-600 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pimpri Chinchwad 2025
            </h3>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Join us for the most prestigious climbing championship in Asia, featuring the next generation of climbing champions.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Days */}
              <div className="countdown-item">
                <div className={`countdown-number ${isAnimating ? 'animate-pulse' : ''}`} data-value={timeLeft.days.toString().padStart(2, '0')}>
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="countdown-label">Days</div>
              </div>
              
              {/* Hours */}
              <div className="countdown-item">
                <div className={`countdown-number ${isAnimating ? 'animate-pulse' : ''}`} data-value={timeLeft.hours.toString().padStart(2, '0')}>
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="countdown-label">Hours</div>
              </div>
              
              {/* Minutes */}
              <div className="countdown-item">
                <div className={`countdown-number ${isAnimating ? 'animate-pulse' : ''}`} data-value={timeLeft.minutes.toString().padStart(2, '0')}>
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="countdown-label">Minutes</div>
              </div>
              
              {/* Seconds */}
              <div className="countdown-item">
                <div className={`countdown-number ${isAnimating ? 'animate-pulse' : ''}`} data-value={timeLeft.seconds.toString().padStart(2, '0')}>
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="countdown-label">Seconds</div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="text-center">
            <div className="flex flex-col items-center space-y-3">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-800 font-semibold">November 1, 2025</span>
            </div>
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <span className="text-gray-800 font-semibold">1st November to 4th November 2025</span>
              </div>
            </div>
          </div>

          {/* Instagram Promotional Post */}
          <div className="text-center mt-6">
            <a 
              href="https://www.instagram.com/p/DPwZkmuAZfU/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>View our Instagram post</span>
            </a>
          </div>

          {/* View Previous Events Button */}
          <div className="text-center mt-6">
            <button 
              onClick={() => router.push('/previous-events')}
              className="bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/50 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
            >
              View Previous Events
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-20 lg:py-24 bg-white" style={{ backgroundImage: 'url(/white-shader-gradient.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              About Us
            </h2>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Background of Maharashtra Sport Climbing Association (MSCA)
            </h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
              The Maharashtra Sport Climbing Association (MSCA) was established in 2025 with a mission to promote Sport Climbing across the state, in collaboration with infrastructural support from the Pimpri Chinchwad Municipal Corporation (PCMC). This visionary initiative is the brainchild of Mr. Surendra Shelke, an avid mountaineer and sport climber, and Mr. Sagar Palkar, an Everester and passionate advocate for adventure and sports among the youth. Mr. Shrikrishna Kaduskar has played a pivotal role in translating this vision into action on the ground, making significant strides in taking sport climbing to the next level.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }} data-section="associations">
              Our Associations
            </h3>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex justify-center">
                <div className="text-center">
                  <a 
                    href="https://www.pcmcindia.gov.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity duration-200"
                  >
                    <Image 
                      src="/pcmc-logo.svg" 
                      alt="Pimpri Chinchwad Municipal Corporation Logo" 
                      width={200} 
                      height={120} 
                      className="mx-auto mb-4 h-20 w-auto" 
                    />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-orange-600 transition-colors duration-200">Pimpri Chinchwad Municipal Corporation</h4>
                    <p className="text-gray-600 text-sm">Infrastructural support and partnership for sport climbing promotion</p>
                  </a>
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Foundational Journey: From PCMA to MSCA
            </h3>
            
            {/* Pimpri Wall Photo with First Paragraph Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
              {/* Pimpri Wall Photo (appears first on mobile, first on desktop) */}
              <div className="flex justify-center md:justify-start order-first">
                <Image 
                  src="/pimpri-wall-photo.svg" 
                  alt="Pimpri Wall - First competition-standard climbing wall at Annasaheb Magar Stadium" 
                  width={400} 
                  height={300} 
                  className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg"
                />
              </div>
              
              {/* First Paragraph (appears second on mobile, second on desktop) */}
              <div className="space-y-4 md:space-y-6 order-last">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
              The founders of MSCA — Mr. Surendra Shelke, Mr. Sagar Palkar, and Mr. Shrikrishna Kaduskar — were also the driving force behind the Pimpri Chinchwad Mountaineering Association (PCMA). PCMA proposed the idea of a climbing wall to PCMC in the late 1990s. In a landmark moment, Surendra Shelke and a few associates traveled all the way to Bikaner—not to compete, but to observe the West Zone Sport Climbing Championship firsthand, as part of their preparation for building a climbing wall in PCMC.
            </p>
              </div>
            </div>
            
            {/* Remaining Paragraphs Below */}
            <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg mb-6">
              In 2000, their efforts bore fruit with the construction of the first-ever competition-standard climbing wall at Annasaheb Magar Stadium, built through PCMC&apos;s support. Surendra Shelke, affectionately known as Surya, was the backbone of this project. Without his relentless drive, this wall would not have materialized.
            </p>
            
            {/* Location Information */}
            <div className="bg-white rounded-xl p-8 mb-12 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Annasaheb Magar Stadium</h4>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Trishul Sahakari Housing Society, Yashwantnagar, Pimpri Colony, Pimpri-Chinchwad, Maharashtra 411018
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://www.google.com/maps/dir//Annasaheb+Magar+Stadium,+Trishul+Sahakari+Housing+Society,+Yashwantnagar,+Pimpri+Colony,+Pimpri-Chinchwad,+Maharashtra+411018/@18.6374075,73.7857422,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2b86b8da9164d:0x50c94b93eae37a24!2m2!1d73.8224244!2d18.6364695?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pioneering Competitions and Infrastructure Development
            </h3>
            
            {/* RSCW Wall Photo with Text Layout */}
            <div className="space-y-6 mb-8">
              {/* First two paragraphs with photo side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Text Content (first two paragraphs) */}
                <div className="space-y-4 md:space-y-6 order-last md:order-first">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                    Under the guidance of the late Anil Khaire Sir and Surya, PCMA successfully hosted the first West Zone Sport Climbing Championship in 2002, followed by the National Championship in 2005. The overwhelming success of the 2005 Nationals inspired the team to propose another climbing wall—this time in Pune.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                    Though the proposal was submitted in 2005, it took five years of tireless follow-up to bring the Raje Shivaji Climbing Wall in Shivajinagar, Pune, to life. The journey was not easy—over 150 potential sites were reviewed, with many rejected due to resistance from locals and political representatives unfamiliar with the sport.
                  </p>
                </div>
                
                {/* RSCW Wall Photo */}
                <div className="flex justify-center md:justify-end order-first md:order-last">
                  <Image 
                    src="/rscw-wall-photo.svg" 
                    alt="RSCW Wall - First homologated speed climbing wall in India" 
                    width={400} 
                    height={300} 
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg"
                  />
                </div>
              </div>
              
              {/* Third paragraph below the photo */}
              <div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg mb-6">
                  Nevertheless, perseverance prevailed. The wall was finally built in 2010 and became functional by 2012. It proudly hosted the first homologated speed climbing wall in India, and also introduced the country&apos;s first timing device for speed climbing, setting new national standards.
                </p>
              </div>
            </div>
            
            {/* Location Section for Raje Shivaji Climbing Wall */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Raje Shivaji Climbing Wall</h4>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Ganpathi Chowk, behind Canara Bank ATM, Shivajinagar, Pune, Maharashtra 411005
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://www.instagram.com/rscw_climbingwallpune/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow on Instagram
                </a>
                <a 
                  href="https://www.google.com/maps?sca_esv=1c8d5d75502bf858&biw=1920&bih=945&sxsrf=AE3TifMOftJSBeXFW3QTawF62u_S2qWYig:1760655927559&gs_lp=Egxnd3Mtd2l6LXNlcnAiDXJhamUgc2hpdmFqaSAqAggBMgUQLhiABDIQEC4YgAQYFBiHAhjHARivATIFEC4YgAQyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMhQQLhiABBiXBRjcBBjeBBjgBNgBAUjHNVCoBFirK3ADeACQAQCYAbcBoAGjFKoBBDAuMTa4AQPIAQD4AQGYAhOgAvQcwgIKEAAYsAMY1gQYR8ICChAjGIAEGCcYigXCAgQQIxgnwgILEAAYgAQYkQIYigXCAhAQLhiABBhDGMcBGIoFGK8BwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QABiABBixAxiDARiKBcICCBAAGIAEGLEDwgIKEAAYgAQYQxiKBcICFBAuGIAEGJECGMcBGIoFGI4FGK8BwgIaEC4YgAQYkQIYsQMYgwEYxwEYigUYjgUYrwHCAgsQABiABBixAxiDAcICChAuGIAEGEMYigXCAggQLhiABBixA8ICDRAuGIAEGEMY1AIYigXCAhEQLhiABBiRAhjHARiKBRivAcICCxAuGIAEGJECGIoFwgILEC4YgAQYsQMYgwHCAgoQLhiABBgCGMsBwgIfEC4YgAQYQxjHARiKBRivARiXBRjcBBjeBBjgBNgBAcICChAAGIAEGLEDGA3CAgcQABiABBgNwgIJEC4YgAQYChgNwgINEC4YgAQYxwEYDRivAZgDAIgGAZAGA7oGBggBEAEYFJIHCDMuMTUuNy0xoAfw8gKyBwQwLjE1uAfkE8IHBjAuOS4xMMgHPw&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kb0U3fZ8wMI7MdoHTBwDz_8O&daddr=Ganpathi+Chowk,+behind+Canara+Bank+ATM,+Shivajinagar,+Pune,+Maharashtra+411005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section id="facility" className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Facility
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art climbing wall designed to international standards
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="max-w-4xl mx-auto mb-16">
            {/* Facility Description */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                PCMC Yoga Park Facility
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Our flagship facility at PCMC Yoga Park features a world-class climbing wall that meets international 
                competition standards. The facility is designed to accommodate all three climbing disciplines: 
                Lead, Speed, and Boulder.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">Lead climbing wall</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">Speed climbing 4-lane wall</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">Boulder climbing wall</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">Safety equipment and training gear</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">Professional coaching staff</span>
                </div>
              </div>
              
              <button 
                onClick={() => router.push('/facility')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View our Facility
              </button>
            </div>
            
          </div>

          {/* Climbing Wall Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <Image 
                  src="/lead-climbing-wall.svg" 
                  alt="Lead Climbing Wall" 
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-lg font-bold text-black mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Lead Climbing
              </h4>
              <p className="text-gray-600 text-sm">
                Technical climbing with rope protection, testing endurance and technique.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <Image 
                  src="/speed-and-lead.svg" 
                  alt="Speed Climbing Wall" 
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-lg font-bold text-black mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Speed Climbing
              </h4>
              <p className="text-gray-600 text-sm">
                Fast-paced vertical racing on standardized routes with timing systems.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <Image 
                  src="/boulder-left.svg" 
                  alt="Boulder Climbing Area" 
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-lg font-bold text-black mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Boulder Climbing
              </h4>
              <p className="text-gray-600 text-sm">
                Short, powerful problems without ropes, focusing on strength and problem-solving.
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Follow Our Journey
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay updated with our latest climbing events, training sessions, and community achievements.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/msca_climbingwallpcmc/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors duration-200 group">
                <svg className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61582002545421" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors duration-200 group">
                <svg className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@MSCAOFFICIAL" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors duration-200 group">
                <svg className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 text-white">
            <p className="text-orange-100 mb-6 text-lg">
              Visit our world-class climbing wall and see why we&apos;re training India&apos;s future Olympic champions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a visit
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join-us" className="py-16 md:py-20 lg:py-24 bg-white" style={{ backgroundImage: 'url(/white-shader-gradient.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Join Us
            </h2>
          </div>

          {/* Content */}
          <div className="text-center">
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Be part of India&apos;s premier climbing community and help us build the future of sport climbing.
            </p>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mt-4">
              Join hundreds of climbers who have already discovered their passion for climbing with MSCA.
            </p>
            
            {/* Toggle Switch */}
            <div className="mt-12 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-orange-500 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to start climbing?
              </h3>
              <div className="relative">
                <div 
                  className={`w-48 h-24 rounded-full p-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    isToggleOn ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gray-200'
                  }`}
                  onClick={toggleSwitch}
                >
                  <div 
                    className={`w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
                      isToggleOn ? 'transform translate-x-24' : 'transform translate-x-0'
                    }`}
                  >
                    <Image 
                      src={isToggleOn ? "/climb-icon.svg" : "/sleep-icon.svg"} 
                      alt={isToggleOn ? "Climb Icon" : "Sleep Icon"} 
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-medium mt-4 text-center">
                  {!isToggleOn ? "Switch to climbing mode to join" : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Shaping Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Shaping Policy for Adventure and Sport Climbing
            </h2>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
              In 2010, with news of the Maharashtra Government formulating a Sports Policy, the PCMA saw a major opportunity. While many adventure groups submitted fragmented requests for support (tickets, expedition funds, etc.), PCMA took a different route. After first understanding the government&apos;s intent, two detailed presentations were submitted:
            </p>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border-l-4 border-orange-500 mb-8">
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li className="text-base md:text-lg leading-relaxed">
                  A comprehensive proposal for all adventure sports (Air, Water, and Land), emphasizing mountaineering and rock climbing.
          </li>
                <li className="text-base md:text-lg leading-relaxed">
                  A dedicated proposal for Sport Climbing.
          </li>
        </ol>
            </div>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
              This proactive and structured approach led to a landmark outcome:
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 md:p-8 rounded-lg border border-orange-200 mb-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold text-lg mr-3">●</span>
                  <span className="text-base md:text-lg leading-relaxed">
                    A separate chapter on Adventure Sports was added in the 2012 Maharashtra State Sports Policy.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold text-lg mr-3">●</span>
                  <span className="text-base md:text-lg leading-relaxed">
                    The policy recognized Air, Water, and Land-based adventure sports as distinct disciplines, each meriting individual awards.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold text-lg mr-3">●</span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Sport Climbing was formally recognized, and it was decided to include it in the prestigious Shiv Chhatrapati State Sports Awards.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 md:p-8 rounded-lg mb-8">
              <p className="text-orange-100 leading-relaxed text-base md:text-lg font-medium">
                In a historic acknowledgment, the contributions of Surendra Shelke and Shrikrishna Kaduskar were specifically mentioned in the 2012 Sport Policy.
              </p>
            </div>

            {/* PDF Download Button */}
            <div className="text-center">
              <a 
                href="/sports-policy-2012.pdf" 
            target="_blank"
            rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download 2012 Sports Policy PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* National Climbing Ecosystem Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white" style={{ backgroundImage: 'url(/white-shader-gradient.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Building a National Climbing Ecosystem
            </h2>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-12 text-center">
              Since 2000, PCMA and its successors have worked relentlessly to promote Sport Climbing, creating a robust talent pipeline that includes:
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 md:p-8 rounded-lg border border-orange-200 mb-12">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold text-lg mr-3">●</span>
                  <span className="text-base md:text-lg leading-relaxed">
                    National and International medal winners
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold text-lg mr-3">●</span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Belayers, route setters, and judges who now serve across India
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 font-bold text-lg mr-3">●</span>
                  <span className="text-base md:text-lg leading-relaxed">
                    Elite coaches who have shaped the future of climbing in India
                  </span>
                </li>
              </ul>
            </div>

            {/* Elite Coaches Section */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Elite Coaching Team
              </h3>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                Meet the world-class coaches who have trained champions and continue to shape the future of climbing in India.
              </p>
            </div>

            {/* Coaches Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Amol Jogdand */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl transition-all duration-300">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 group-hover:border-orange-400 transition-colors duration-300">
                      <Image 
                        src="/amol-jogdand.svg" 
                        alt="Amol Jogdand" 
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Amol Jogdand
                    </h4>
                    <p className="text-orange-600 font-semibold text-sm mb-2">
                      National Coach (Asian Competitions)
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Elite coach with extensive experience in training national and international climbing champions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mantu Mantri */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl transition-all duration-300">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 group-hover:border-orange-400 transition-colors duration-300">
                      <Image 
                        src="/mantu-mantri.svg" 
                        alt="Mantu Mantri" 
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Mantu Mantri
                    </h4>
                    <p className="text-orange-600 font-semibold text-sm mb-2">
                      Elite Coach
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated coach specializing in developing climbing techniques and training methodologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Irfan Shaikh */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl transition-all duration-300">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 group-hover:border-orange-400 transition-colors duration-300">
                      <Image 
                        src="/irfan-shaikh.svg" 
                        alt="Irfan Shaikh" 
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Irfan Shaikh
                    </h4>
                    <p className="text-orange-600 font-semibold text-sm mb-2">
                      Elite Coach
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Expert coach focused on building strength, endurance, and competitive climbing skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

       {/* Our Athletes Section */}
       <section id="our-athletes" className="py-16 md:py-20 lg:py-24 bg-white">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12 md:mb-16">
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
               Our Athletes
             </h2>
             <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
               Celebrating the remarkable achievements of our climbing champions who have brought glory to Maharashtra and India through their dedication, perseverance, and exceptional talent in sport climbing.
             </p>
           </div>

            {/* Achievement Categories */}
            <div className="space-y-16">
              {/* International Achievements */}
              <InternationalAchievements />

              {/* National Achievements */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    National Achievements
                  </h3>
                  <p className="text-green-700 text-lg">Dominating the Indian climbing scene</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* IMF 11th National Championship 2005 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 11th National Championship</h4>
                      <p className="text-sm text-gray-600">Pimpri, Pune 2005</p>
                    </div>
                  </div>

                  {/* IMF 16th National Championship 2010 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 16th National Championship</h4>
                      <p className="text-sm text-gray-600">New Delhi 2010</p>
                    </div>
                  </div>

                  {/* IMF 17th National Championship 2011 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 17th National Championship</h4>
                      <p className="text-sm text-gray-600">2011</p>
                    </div>
                  </div>

                  {/* IMF 18th National Championship 2012 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 18th National Championship</h4>
                      <p className="text-sm text-gray-600">2012</p>
                    </div>
                  </div>

                  {/* IMF 19th Sport Climbing Championship 2013 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 19th Sport Climbing Championship</h4>
                      <p className="text-sm text-gray-600">Bangalore 2013</p>
                    </div>
                  </div>

                  {/* IMF 20th Sport Climbing Championship 2014 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 20th Sport Climbing Championship</h4>
                      <p className="text-sm text-gray-600">Kolkata 2014</p>
                    </div>
                  </div>

                  {/* IMF 21st Sport Climbing Championship 2015 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 21st Sport Climbing Championship</h4>
                      <p className="text-sm text-gray-600">Delhi 2015</p>
                    </div>
                  </div>

                  {/* IMF 22nd Sport Climbing Championship 2016 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 22nd Sport Climbing Championship</h4>
                      <p className="text-sm text-gray-600">Bangalore 2016</p>
                    </div>
                  </div>

                  {/* IMF 23rd Sport Climbing Championship 2018 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 23rd Sport Climbing Championship</h4>
                      <p className="text-sm text-gray-600">Indore 2018</p>
                    </div>
                  </div>

                  {/* IMF Cup Sport Climbing Competition 2018 - Jamshedpur */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">IMF</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF Cup Sport Climbing Competition</h4>
                      <p className="text-sm text-gray-600">Jamshedpur 2018</p>
                    </div>
                  </div>

                  {/* IMF 24th National Sport Climbing Competition 2019 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 24th National Sport Climbing Competition</h4>
                      <p className="text-sm text-gray-600">Bangalore 2019</p>
                    </div>
                  </div>

                  {/* IMF 25th National Sport Climbing Championship 2020 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 25th National Sport Climbing Championship</h4>
                      <p className="text-sm text-gray-600">Bhubaneswar 2020</p>
                    </div>
                  </div>

                  {/* IMF Cup Jamshedpur 2018 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF Cup Open National</h4>
                      <p className="text-sm text-gray-600">Jamshedpur 2018</p>
                    </div>
                  </div>

                  {/* IMF Cup Srinagar 2018 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF Cup Open National</h4>
                      <p className="text-sm text-gray-600">Srinagar 2018</p>
                    </div>
                  </div>

                  {/* IMF Cup Darjeeling 2019 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF Cup Open National</h4>
                      <p className="text-sm text-gray-600">Darjeeling 2019</p>
                    </div>
                  </div>

                  {/* IMF Cup Sikkim 2019 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF Cup Open National</h4>
                      <p className="text-sm text-gray-600">Sikkim 2019</p>
                    </div>
                  </div>

                  {/* Tata Steel Sport Climbing Championship 2023 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Image src="/tata-steal-cc-logo.svg" alt="Tata Steel" width={40} height={40} className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">Tata Steel Sport Climbing Championship</h4>
                      <p className="text-sm text-gray-600">Jamshedpur 2023</p>
                    </div>
                  </div>

                  {/* National Youth Cup 2023 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-xs">NY</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">National Youth Cup</h4>
                      <p className="text-sm text-gray-600">Bangalore August 2023</p>
                    </div>
                  </div>

                  {/* Tata Steel Sport Climbing Championship 2022 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Image src="/tata-steal-cc-logo.svg" alt="Tata Steel" width={40} height={40} className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">Tata Steel Sport Climbing Championship</h4>
                      <p className="text-sm text-gray-600">Jamshedpur February 2022</p>
                    </div>
                  </div>

                  {/* IMF 26th National Sport Climbing Championship 2022 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 26th National Sport Climbing Championship</h4>
                      <p className="text-sm text-gray-600">Uttarkashi, Uttarakhand 2022</p>
                    </div>
                  </div>

                  {/* IMF Nilgiri Cup 2022 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <Image src="/imf-logo.svg" alt="IMF" width={48} height={48} className="w-12 h-12 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF Nilgiri Cup</h4>
                      <p className="text-sm text-gray-600">2022</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zonal Achievements */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Zonal Achievements
                  </h3>
                  <p className="text-purple-700 text-lg">West Zone dominance since 2002</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* IMF 8th West Zone Competition 2002 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 8th West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Pimpri, Pune 2002</p>
                    </div>
                  </div>

                  {/* IMF 9th West Zone Competition 2003 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 9th West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Pimpri, Pune 2003</p>
                    </div>
                  </div>

                  {/* IMF 10th West Zone Competition 2004 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 10th West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Sikar, Rajasthan 2004</p>
                    </div>
                  </div>

                  {/* IMF 11th West Zone Competition 2005 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 11th West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Goregaon, Mumbai 2005</p>
                    </div>
                  </div>

                  {/* IMF 12th West Zone Competition 2006 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 12th West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Bikaner, Rajasthan 2006</p>
                    </div>
                  </div>

                  {/* IMF 13th West Zone Competition 2007 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 13th West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Jaipur, Rajasthan 2007</p>
                    </div>
                  </div>

                  {/* IMF 14th West Zone Competition 2008 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 14th West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Bikaner, Rajasthan 2008</p>
                    </div>
                  </div>

                  {/* IMF 16th West Zone Competition 2010 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 16th West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Bhopal 2010</p>
                    </div>
                  </div>

                  {/* IMF 18th West Zone Competition 2012 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 18th West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Shivajinagar, Pune 2012</p>
                    </div>
                  </div>

                  {/* IMF 19th West Zone Competition 2013 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 19th West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Surat, Gujarat 2013</p>
                    </div>
                  </div>

                  {/* IMF 20th West Zone Competition 2014 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 20th West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Beg Khadki 2014</p>
                    </div>
                  </div>

                  {/* IMF 21st West Zone Competition 2015 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 21st West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Beg Khadki 2015</p>
                    </div>
                  </div>

                  {/* IMF 22nd West Zone Competition 2016 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 22nd West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Ahmedabad 2016</p>
                    </div>
                  </div>

                  {/* IMF 23rd West Zone Competition 2017 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">IMF 23rd West Zone Competition</h4>
                      <p className="text-sm text-gray-600">Indore 2017</p>
                    </div>
                  </div>

                  {/* 26th IMF West Zone Climbing Championship 2022 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">26th IMF West Zone Climbing Championship</h4>
                      <p className="text-sm text-gray-600">Pune, Maharashtra 2022</p>
                    </div>
                  </div>

                  {/* 27th IMF West Zone Sport Climbing Championship 2023 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Image src="/imf-westzone.svg" alt="IMF West Zone" width={32} height={32} className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">27th IMF West Zone Sport Climbing Championship</h4>
                      <p className="text-sm text-gray-600">Udaipur, Rajasthan 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Competitions */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Other Competitions
                  </h3>
                  <p className="text-orange-700 text-lg">Additional competitions and special events</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Mayor Cup 2016 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-xs">MC</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">Mayor Cup</h4>
                      <p className="text-sm text-gray-600">Pune 2016</p>
                    </div>
                  </div>

                  {/* Catapult Cup 2023 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-xs">CC</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">Catapult Cup</h4>
                      <p className="text-sm text-gray-600">Hyderabad 2023</p>
                    </div>
                  </div>

                  {/* Equinox Boulder Cup 2023 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-xs">EB</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">Equinox Boulder Cup</h4>
                      <p className="text-sm text-gray-600">Goa 2023</p>
                    </div>
                  </div>

                  {/* Kids Climbing Championship 2023 */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4 cursor-pointer">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-xs">KC</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">Kids Climbing Championship</h4>
                      <p className="text-sm text-gray-600">Climb City, Noida Aug 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           <div className="text-center mt-12">
             <button 
               onClick={() => router.push('/our-athletes')}
               className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
             >
               View All Athletes & Medals
             </button>
          </div>
        </div>
      </section>

      {/* Shiv Chhatrapati Awardees Section */}
      <section id="achievements" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              <GradientText
                colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
                animationSpeed={8}
              >
                Shiv Chhatrapati Rajya Krida Puraskar
              </GradientText>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Four homegrown champions honored with Maharashtra&apos;s highest sporting accolade
            </p>
        </div>

          {/* Awardees List */}
          <div className="space-y-16">
            {/* Hritik Marne aka Nanya - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
              <div className="flex-1 text-left">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Hritik Marne
                </h3>
                <p className="text-orange-600 font-semibold text-lg mb-2">aka Nanya</p>
                <div className="text-lg mb-2 font-semibold">
                  <GradientText
                    colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
                    animationSpeed={8}
                  >
                    Shiv Chhatrapati Rajya Krida Puraskar
                  </GradientText>
                </div>
                <p className="text-gray-500 text-base">2023-24</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-80 h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/hritik-marne.svg" 
                    alt="Hritik Marne aka Nanya" 
                    width={320}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Shreya Nankar - Text Right, Image Left */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-6">
              <div className="flex-1 text-left">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Shreya Nankar
                </h3>
                <div className="text-lg mb-2 font-semibold">
                  <GradientText
                    colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
                    animationSpeed={8}
                  >
                    Shiv Chhatrapati Rajya Krida Puraskar
                  </GradientText>
                </div>
                <p className="text-gray-500 text-base">2023-24</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/shreya-nankar.svg" 
                    alt="Shreya Nankar" 
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Sahil Khan - Text Left, Image Right */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
              <div className="flex-1 text-left">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Sahil Khan
                </h3>
                <div className="text-lg mb-2 font-semibold">
                  <GradientText
                    colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
                    animationSpeed={8}
                  >
                    Shiv Chhatrapati Rajya Krida Puraskar
                  </GradientText>
                </div>
                <p className="text-gray-500 text-base">2023-24</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/photo-award.jpg" 
                    alt="Sahil Khan" 
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Saniya Shaikh - Text Right, Image Left */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-6">
              <div className="flex-1 text-left">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Saniya Shaikh
                </h3>
                <div className="text-lg mb-2 font-semibold">
                  <GradientText
                    colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
                    animationSpeed={8}
                  >
                    Shiv Chhatrapati Rajya Krida Puraskar
                  </GradientText>
                </div>
                <p className="text-gray-500 text-base">2023-24</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-80 h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/saniya-shaikh.svg" 
                    alt="Saniya Shaikh" 
                    width={320}
                    height={384}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Statement */}
          <div className="text-center mt-16 md:mt-20">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                Maharashtra&apos;s Highest Sporting Honor
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                These four homegrown champions represent the pinnacle of climbing excellence in Maharashtra, 
                having been recognized with the prestigious Shiv Chhatrapati Rajya Krida Puraskar for their 
                outstanding contributions to sport climbing. Their achievements stand as a testament to decades 
                of dedication in building the sport from the grassroots.
              </p>
            </div>
           </div>
         </div>
       </section>

       {/* Empowering the Underprivileged Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Empowering the Underprivileged
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                A unique and heartwarming aspect of this journey is the socio-economic background 
                of many trained athletes. A significant number of them come from underprivileged 
                communities and urban slums. Through the association&apos;s support, they have risen not 
                only as athletes but have now become coaches, trainers, and officials — emerging as 
                leaders of the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The World-Class PCMC Climbing Wall & Future Vision Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The World-Class PCMC Climbing Wall & Future Vision
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                The most recent milestone is the erection of the world-class climbing wall at PCMC&apos;s 
                Yoga Park, a result of untiring efforts by Surendra Shelke and Shrikrishna Kaduskar. 
                Regarded as the best in India and among the top in the world, this facility marks a 
                new era in Indian climbing infrastructure.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Recognizing the potential, the MSCA has embarked on an ambitious journey to 
                establish a structured Sport Climbing Academy, with the ultimate aim of producing 
                Olympic medalists by 2036 — a vision aligned with government of India&apos;s long-term 
                sports development goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MSCA & PCMC: A Strategic Partnership Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                MSCA & PCMC: A Strategic Partnership
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                MSCA has entered into a 20-year agreement with PCMC to manage and operate the 
                Climbing Wall at Yoga Park. Under this partnership:
              </p>
              <div className="text-left max-w-3xl mx-auto">
                <ul className="space-y-4 text-lg md:text-xl text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 font-bold text-xl mr-3">●</span>
                    <span>MSCA will oversee all day-to-day operations, training, coaching, and events.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 font-bold text-xl mr-3">●</span>
                    <span>PCMC will continue to provide infrastructure and institutional support.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - AADAR Foundation Style */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              From humble beginnings to Olympic aspirations - the remarkable evolution of climbing in Maharashtra
            </p>
          </div>

          {/* Timeline Container */}
          <div className="space-y-20">
            
            {/* 1990s - Foundation */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="text-6xl font-bold text-orange-500 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Late 1990s
                </div>
                <div className="w-16 h-1 bg-orange-500 mb-6"></div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border-l-4 border-orange-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Founders&apos; Early Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    Pimpri Chinchwad Mountaineering Association (PCMA) proposes the idea of a climbing wall to PCMC (Pimpri Chinchwad Municipal Corporation). Surendra Shelke (Surya), Sagar Palkar (Everester & youth advocate), and Shrikrishna Kaduskar are the driving forces.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Exploratory Step:</h4>
                    <p className="text-gray-600">
                      Surya and associates travel to Bikaner to observe the West Zone Sport Climbing Championship, studying infrastructure and format before building PCMC&apos;s wall.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2000 - First Wall */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="text-6xl font-bold text-orange-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  2000
                </div>
                <div className="w-16 h-1 bg-orange-600 mb-6"></div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border-l-4 border-orange-600">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    First Competition Wall in PCMC
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    With PCMC&apos;s infrastructural support, the first-ever competition-standard climbing wall is built at Annasaheb Magar Stadium. Surendra Shelke (Surya) is the backbone of the project — without his persistence, the wall wouldn&apos;t have materialized.
                  </p>
                </div>
              </div>
            </div>

            {/* 2002 - First Championship */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="text-6xl font-bold text-orange-700 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  2002
                </div>
                <div className="w-16 h-1 bg-orange-700 mb-6"></div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border-l-4 border-orange-700">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Pioneering Competitions
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Under the guidance of late Khaire Sir and Surya, PCMA hosts the first West Zone Sport Climbing Championship at Annasaheb Magar Stadium.
                  </p>
                </div>
              </div>
            </div>

            {/* 2005 - National Breakthrough */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="text-6xl font-bold text-red-500 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  2005
                </div>
                <div className="w-16 h-1 bg-red-500 mb-6"></div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 border-l-4 border-red-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    National Breakthrough
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    PCMA successfully hosts the National Sport Climbing Championship at Annasaheb Magar Stadium.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">Pune Expansion:</h4>
                    <p className="text-gray-600">
                      The championship&apos;s success inspires PCMA to propose a second climbing wall in Pune (Raje Shivaji Climbing Wall, Shivajinagar).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2005-2010 - Struggle Period */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="text-6xl font-bold text-red-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  2005 - 2010
                </div>
                <div className="w-16 h-1 bg-red-600 mb-6"></div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 border-l-4 border-red-600">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Five Years of Struggle
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    Over 150 potential sites for the Pune wall are reviewed; most rejected due to local resistance and lack of political awareness about climbing.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">Relentless Efforts:</h4>
                    <p className="text-gray-600">
                      Despite setbacks, Surendra Shelke and Shrikrishna Kaduskar persist with follow-ups until approval is granted.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2010 - Pune Wall & Policy */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="text-6xl font-bold text-yellow-500 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  2010
                </div>
                <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 border-l-4 border-yellow-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Pune Wall Constructed
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    The Raje Shivaji Climbing Wall is built in Shivajinagar, Pune. Maharashtra announces work on a new Sports Policy.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 mb-2">Policy Opportunity:</h4>
                    <p className="text-gray-600 mb-3">
                      Unlike other adventure groups (who asked for tickets/funds), PCMA submits two structured presentations:
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Comprehensive proposal covering all adventure sports (Air, Water, Land — with focus on mountaineering & rock climbing)</li>
                      <li>• Dedicated proposal for Sport Climbing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2012 - Recognition */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="text-6xl font-bold text-yellow-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  2012
                </div>
                <div className="w-16 h-1 bg-yellow-600 mb-6"></div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 border-l-4 border-yellow-600">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Policy Milestone
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    The 2012 Maharashtra State Sports Policy incorporates PCMA&apos;s proposals with a separate chapter on Adventure Sports.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 mb-2">Historic Acknowledgment:</h4>
                    <p className="text-gray-600">
                      Contributions of Surendra Shelke and Shrikrishna Kaduskar are specifically mentioned in the policy. Sport Climbing formally recognized and included in Shiv Chhatrapati State Sports Awards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2000-2020s - Ecosystem */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="text-6xl font-bold text-green-500 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  2000 - 2020s
                </div>
                <div className="w-16 h-1 bg-green-500 mb-6"></div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border-l-4 border-green-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Grassroots to National Ecosystem
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    PCMA nurtures National and International medal winners, elite coaches, and officials who now serve across India.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-2">Elite Coaches:</h4>
                      <p className="text-gray-600">Amol (also National Coach for Asian competitions), Mantu, and Irfan</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-2">Shiv Chhatrapati Awardees:</h4>
                      <p className="text-gray-600">Hritik Marne, Shreya Nankar, Sahil Khan, and Saniya Shaikh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2020s - World-Class Wall */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="text-6xl font-bold text-green-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  2020s
                </div>
                <div className="w-16 h-1 bg-green-600 mb-6"></div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border-l-4 border-green-600">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    World-Class Yoga Park Wall
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A state-of-the-art climbing wall is erected at PCMC&apos;s Yoga Park, thanks to Surya&apos;s and Kaduskar&apos;s tireless efforts. Recognized as the best in India and among the top in the world.
                  </p>
                </div>
              </div>
            </div>

            {/* 2025 - MSCA Formation */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="text-6xl font-bold text-blue-500 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  2025
                </div>
                <div className="w-16 h-1 bg-blue-500 mb-6"></div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border-l-4 border-blue-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    MSCA Formation & Olympic Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    MSCA established with 20-year strategic partnership with PCMC. Ambitious target: producing Olympic medalists by 2036, aligned with Government of India&apos;s long-term sports development goals.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Strategic Partnership:</h4>
                    <p className="text-gray-600">
                      MSCA → Handles day-to-day operations, training, coaching, and events. PCMC → Provides infrastructure and institutional support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Legacy and Vision Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              A Legacy of Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              This legacy and structured development illustrate MSCA&apos;s unmatched credibility, expertise, and vision in the field of Sport Climbing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                The team has:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">Nurtured champions from marginalized backgrounds</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">Created a national ecosystem of coaches and officials</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">Influenced state sports policy</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg">Built world-class infrastructure</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The journey so far is a blueprint for sustainable, inclusive, and high-performance sport development.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500">
                <p className="text-gray-800 text-lg font-semibold">
                  With the foundation laid and vision aligned, MSCA is fully prepared to take Indian Sport Climbing to Olympic glory by 2036.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Team
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Meet the dedicated professionals who drive Maharashtra Sports Climbing Association&apos;s success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Surendra Shelke
              </h3>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Shrikrishna Kaduskar
              </h3>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Col. Devang Naik
              </h3>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Namrata Nikam
              </h3>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sachin Wadekar
              </h3>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Rutvij Deo
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Us Section */}
      <section id="donate-us" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Donate Us
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Support our mission to promote sport climbing and train future Olympic champions
            </p>
          </div>

          {/* Bank Details Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Bank Transfer Details
              </h3>
              <p className="text-gray-600">Make a direct bank transfer to support our cause</p>
            </div>

            {/* Bank Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Account Holder Name</label>
                  <p className="text-lg text-gray-900 font-medium">Maharashtra Sport Climbing Association</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Bank Name</label>
                  <p className="text-lg text-gray-900 font-medium">Kotak Mahindra Bank</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Branch</label>
                  <p className="text-lg text-gray-900 font-medium">Nigdi</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Account Type</label>
                  <p className="text-lg text-gray-900 font-medium">Saving Account</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <label className="block text-sm font-semibold text-orange-700 mb-2">Account Number</label>
                  <p className="text-xl text-orange-900 font-bold">6550787965</p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <label className="block text-sm font-semibold text-orange-700 mb-2">CRN Number</label>
                  <p className="text-xl text-orange-900 font-bold">965632024</p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <label className="block text-sm font-semibold text-orange-700 mb-2">IFSC Code</label>
                  <p className="text-xl text-orange-900 font-bold">KKBK0001757</p>
                </div>
              </div>
            </div>

            {/* Copy Button */}
            <div className="text-center">
              <button 
                onClick={() => {
                  const bankDetails = `Account Holder: Maharashtra Sport Climbing Association
Bank: Kotak Mahindra Bank
Branch: Nigdi
Account Type: Saving Account
Account Number: 6550787965
CRN Number: 965632024
IFSC Code: KKBK0001757`;
                  navigator.clipboard.writeText(bankDetails);
                  alert('Bank details copied to clipboard!');
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Copy Bank Details
              </button>
            </div>

            {/* Additional Information */}
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6 border border-orange-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Your Support Matters
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Every contribution helps us train athletes, maintain world-class facilities, and work towards our Olympic vision. 
                  Your donation directly supports the development of sport climbing in Maharashtra and India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact Us
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for training, events, or any inquiries about sport climbing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Get in Touch
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  We&apos;re here to help you start your climbing journey or answer any questions about our programs and facilities.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-700">
                      <a 
                        href="https://www.google.com/maps?sca_esv=c558734bb1fd5d24&sxsrf=AE3TifNZQ5RZIg2Ilo25r4mazQhuE5xSCA:1760349307727&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnBjbWMgY2xpbWJpbmcgd2FsbCoCCAAyBxAjGLADGCcyCBAAGIAEGLADMgkQABiwAxgIGB4yCxAAGIAEGLADGKIEMgsQABiABBiwAxiiBDIIEAAYsAMY7wVI-gZQAFgAcAF4AJABAJgBAKABAKoBALgBAcgBAJgCAaACA5gDAIgGAZAGBpIHATGgBwCyBwC4BwDCBwMwLjHIBwI&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KdvaMkAAucI7MQmzsG-oVGMo&daddr=HRW4%2B82X,+Sai+Nagar+Park,+Pimple+Saudagar,+Pimpri-Chinchwad,+Maharashtra+411027" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-orange-600 transition-colors duration-200"
                      >
                        Climbing Wall, Yoga Park<br />
                        HRW4+82X, Sai Nagar Park<br />
                        Pimple Saudagar, Pimpri-Chinchwad<br />
                        Maharashtra 411027
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-700">
                      <a href="tel:+919579736439" className="hover:text-orange-600 transition-colors duration-200">
                        +91 95797 36439
                      </a><br />
                      <a href="tel:+919822032956" className="hover:text-orange-600 transition-colors duration-200">
                        +91 98220 32956
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-700">
                      <a href="mailto:info@msca.org.in" className="hover:text-orange-600 transition-colors duration-200">
                        info@msca.org.in
                      </a><br />
                      <a href="mailto:contact@msca.org.in" className="hover:text-orange-600 transition-colors duration-200">
                        contact@msca.org.in
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Training Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 6:00 AM - 9:00 PM<br />
                      Saturday - Sunday: 7:00 AM - 8:00 PM<br />
                      <span className="text-orange-600 font-medium">24/7 Access for Members</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/msca_climbingwallpcmc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors duration-200">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61582002545421" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors duration-200">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@MSCAOFFICIAL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors duration-200">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Send us a Message
              </h3>
              
              {/* Contact Type Tabs */}
              <div className="mb-6">
                <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
                  <button
                    type="button"
                    onClick={() => handleTabChange('individual')}
                    className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeTab === 'individual'
                        ? 'bg-orange-500 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    Individual
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTabChange('company')}
                    className={`flex-1 py-3 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeTab === 'company'
                        ? 'bg-orange-500 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    Company
                  </button>
                </div>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully! We will get back to you soon.
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Failed to send message. Please try again later.
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {activeTab === 'individual' ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.firstName} // Using firstName field for company name
                      onChange={(e) => {
                        setFormData(prev => ({
                          ...prev,
                          firstName: e.target.value,
                          lastName: '' // Clear lastName when company name is entered
                        }))
                      }}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                      placeholder="Enter your company name"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    {activeTab === 'individual' ? (
                      <>
                        <option value="training">Training Inquiry</option>
                        <option value="membership">Membership</option>
                        <option value="events">Events</option>
                        <option value="coaching">Coaching</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </>
                    ) : (
                      <>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="corporate-training">Corporate Training</option>
                        <option value="sponsorship">Sponsorship</option>
                        <option value="facility-rental">Facility Rental</option>
                        <option value="bulk-membership">Bulk Membership</option>
                        <option value="events">Event Collaboration</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none"
                    placeholder={activeTab === 'individual' ? 'Tell us how we can help you...' : 'Tell us about your company and how we can collaborate...'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 px-8 rounded-lg transition-all duration-300 transform shadow-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-orange-500 hover:bg-orange-600 hover:scale-105 hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>

        {/* Find Us Section */}
        <FindUsSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-lg p-4 shadow-lg mr-4">
                  <Image 
                    src="/msca-logo-marathi.svg" 
                  alt="MSCA Logo" 
                    width={120}
                    height={48}
                    className="h-12 w-auto"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Maharashtra Sport Climbing Association
                  </h3>
                  <p className="text-gray-400 text-sm">United by Climbing – आरोहणेन एकीकृत</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Promoting Sport Climbing across Maharashtra with world-class facilities and Olympic-level training programs.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/msca_climbingwallpcmc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61582002545421" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@MSCAOFFICIAL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
    </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#facility" className="text-gray-300 hover:text-white transition-colors duration-200">Facility</a></li>
                <li><a href="#join-us" className="text-gray-300 hover:text-white transition-colors duration-200">Join Us</a></li>
                <li><a href="/schedule" className="text-gray-300 hover:text-white transition-colors duration-200">View Schedule</a></li>
                <li><a href="/climbing" className="text-gray-300 hover:text-white transition-colors duration-200">Mobile App</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 text-sm">
                      <a 
                        href="https://www.google.com/maps?sca_esv=c558734bb1fd5d24&sxsrf=AE3TifNZQ5RZIg2Ilo25r4mazQhuE5xSCA:1760349307727&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnBjbWMgY2xpbWJpbmcgd2FsbCoCCAAyBxAjGLADGCcyCBAAGIAEGLADMgkQABiwAxgIGB4yCxAAGIAEGLADGKIEMgsQABiABBiwAxiiBDIIEAAYsAMY7wVI-gZQAFgAcAF4AJABAJgBAKABAKoBALgBAcgBAJgCAaACA5gDAIgGAZAGBpIHATGgBwCyBwC4BwDCBwMwLjHIBwI&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KdvaMkAAucI7MQmzsG-oVGMo&daddr=HRW4%2B82X,+Sai+Nagar+Park,+Pimple+Saudagar,+Pimpri-Chinchwad,+Maharashtra+411027" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-200"
                      >
                        Climbing Wall, Yoga Park
                      </a>
                    </p>
                    <p className="text-gray-300 text-sm">
                      <a 
                        href="https://www.google.com/maps?sca_esv=c558734bb1fd5d24&sxsrf=AE3TifNZQ5RZIg2Ilo25r4mazQhuE5xSCA:1760349307727&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnBjbWMgY2xpbWJpbmcgd2FsbCoCCAAyBxAjGLADGCcyCBAAGIAEGLADMgkQABiwAxgIGB4yCxAAGIAEGLADGKIEMgsQABiABBiwAxiiBDIIEAAYsAMY7wVI-gZQAFgAcAF4AJABAJgBAKABAKoBALgBAcgBAJgCAaACA5gDAIgGAZAGBpIHATGgBwCyBwC4BwDCBwMwLjHIBwI&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KdvaMkAAucI7MQmzsG-oVGMo&daddr=HRW4%2B82X,+Sai+Nagar+Park,+Pimple+Saudagar,+Pimpri-Chinchwad,+Maharashtra+411027" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-200"
                      >
                        HRW4+82X, Sai Nagar Park
                      </a>
                    </p>
                    <p className="text-gray-300 text-sm">
                      <a 
                        href="https://www.google.com/maps?sca_esv=c558734bb1fd5d24&sxsrf=AE3TifNZQ5RZIg2Ilo25r4mazQhuE5xSCA:1760349307727&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnBjbWMgY2xpbWJpbmcgd2FsbCoCCAAyBxAjGLADGCcyCBAAGIAEGLADMgkQABiwAxgIGB4yCxAAGIAEGLADGKIEMgsQABiABBiwAxiiBDIIEAAYsAMY7wVI-gZQAFgAcAF4AJABAJgBAKABAKoBALgBAcgBAJgCAaACA5gDAIgGAZAGBpIHATGgBwCyBwC4BwDCBwMwLjHIBwI&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KdvaMkAAucI7MQmzsG-oVGMo&daddr=HRW4%2B82X,+Sai+Nagar+Park,+Pimple+Saudagar,+Pimpri-Chinchwad,+Maharashtra+411027" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-200"
                      >
                        Pimple Saudagar, Pimpri-Chinchwad
                      </a>
                    </p>
                    <p className="text-gray-300 text-sm">
                      <a 
                        href="https://www.google.com/maps?sca_esv=c558734bb1fd5d24&sxsrf=AE3TifNZQ5RZIg2Ilo25r4mazQhuE5xSCA:1760349307727&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnBjbWMgY2xpbWJpbmcgd2FsbCoCCAAyBxAjGLADGCcyCBAAGIAEGLADMgkQABiwAxgIGB4yCxAAGIAEGLADGKIEMgsQABiABBiwAxiiBDIIEAAYsAMY7wVI-gZQAFgAcAF4AJABAJgBAKABAKoBALgBAcgBAJgCAaACA5gDAIgGAZAGBpIHATGgBwCyBwC4BwDCBwMwLjHIBwI&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KdvaMkAAucI7MQmzsG-oVGMo&daddr=HRW4%2B82X,+Sai+Nagar+Park,+Pimple+Saudagar,+Pimpri-Chinchwad,+Maharashtra+411027" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-200"
                      >
                        Maharashtra 411027
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 text-sm">+91 95797 36439</p>
                    <p className="text-gray-300 text-sm">+91 98220 32956</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 text-sm">info@msca.org.in</p>
                    <p className="text-gray-300 text-sm">contact@msca.org.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Maharashtra Sport Climbing Association. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      </main>
  )
}
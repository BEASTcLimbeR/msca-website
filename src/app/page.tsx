'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { GradientText } from '@/components/ui/gradient-text'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Home() {
  const router = useRouter()
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)
  const [isToggleOn, setIsToggleOn] = useState(false)

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
                <img 
                  src="/msca-logo-english.svg" 
                  alt="MSCA Logo" 
                  className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto"
                  loading="eager"
                  onError={(e) => {
                    console.error('Failed to load MSCA logo')
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:block flex-1">
              <div className="ml-10 flex items-baseline space-x-3 xl:space-x-4">
                <a href="#home" className="text-black hover:text-orange-600 px-3 py-2 text-sm font-medium font-sans transition-colors duration-200">Home</a>
                <div className="relative group">
                  <a href="#about" className="text-black hover:text-orange-600 px-3 py-2 text-sm font-medium font-sans flex items-center transition-colors duration-200 whitespace-nowrap">
                    About Us
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
                <a href="#players" className="text-black hover:text-orange-600 px-3 py-2 text-sm font-medium font-sans transition-colors duration-200">Players</a>
                <div className="relative group">
                  <a href="#partners" className="text-black hover:text-orange-600 px-3 py-2 text-sm font-medium font-sans flex items-center transition-colors duration-200">
                    Partners
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#events" className="text-black hover:text-orange-600 px-3 py-2 text-sm font-medium font-sans flex items-center transition-colors duration-200">
                    Events
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#achievements" className="text-black hover:text-orange-600 px-3 py-2 text-sm font-medium font-sans flex items-center transition-colors duration-200">
                    Achievements
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
                <div className="relative group">
                  <a href="#contact" className="text-black hover:text-orange-600 px-3 py-2 text-sm font-medium font-sans flex items-center transition-colors duration-200 whitespace-nowrap">
                    Contact Us
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-2 ml-4">
              <button 
                onClick={() => document.getElementById('join-us')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-2 py-1.5 border border-gray-300 bg-white text-black text-xs font-medium hover:bg-gray-50 transition-all duration-200 rounded-md whitespace-nowrap"
              >
                Join us
              </button>
              <button 
                onClick={() => router.push('/schedule')}
                className="px-2 py-1.5 border border-gray-300 bg-white text-black text-xs font-medium hover:bg-gray-50 transition-all duration-200 rounded-md whitespace-nowrap"
              >
                View Schedule
              </button>
              <button className="px-2 py-1.5 border border-gray-300 bg-white text-black text-xs font-medium hover:bg-gray-50 transition-all duration-200 rounded-md whitespace-nowrap">
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
              <a href="#players" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Players</a>
              <a href="#partners" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Partners</a>
              <a href="#events" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Events</a>
              <a href="#achievements" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Achievements</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Contact Us</a>
              
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
                  <button className="w-full px-3 py-2 border border-gray-300 bg-white text-black text-sm font-medium hover:bg-gray-50 transition-all duration-200 rounded-md text-center">
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
          <img 
            src="/speed-and-lead.svg" 
            alt="Climbing Wall Background" 
            className="w-full h-full object-cover opacity-10 md:opacity-20"
            loading="eager"
            onError={(e) => {
              console.error('Failed to load climbing wall image')
              e.currentTarget.style.display = 'none'
            }}
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
            <button className="hero-button w-full sm:w-auto">
              Donate us
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

            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Foundational Journey: From PCMA to MSCA
            </h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
              The founders of MSCA — Mr. Surendra Shelke, Mr. Sagar Palkar, and Mr. Shrikrishna Kaduskar — were also the driving force behind the Pimpri Chinchwad Mountaineering Association (PCMA). PCMA proposed the idea of a climbing wall to PCMC in the late 1990s. In a landmark moment, Surendra Shelke and a few associates traveled all the way to Bikaner—not to compete, but to observe the West Zone Sport Climbing Championship firsthand, as part of their preparation for building a climbing wall in PCMC.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
              In 2000, their efforts bore fruit with the construction of the first-ever competition-standard climbing wall at Annasaheb Magar Stadium, built through PCMC's support. Surendra Shelke, affectionately known as Surya, was the backbone of this project. Without his relentless drive, this wall would not have materialized.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pioneering Competitions and Infrastructure Development
            </h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
              Under the guidance of the late Khaire Sir and Surya, PCMA successfully hosted the first West Zone Sport Climbing Championship in 2002, followed by the National Championship in 2005. The overwhelming success of the 2005 Nationals inspired the team to propose another climbing wall—this time in Pune.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
              Though the proposal was submitted in 2005, it took five years of tireless follow-up to bring the Raje Shivaji Climbing Wall in Shivajinagar, Pune, to life. The journey was not easy—over 150 potential sites were reviewed, with many rejected due to resistance from locals and political representatives unfamiliar with the sport. In one instance, even after finalizing the land and gathering for a Bhumi Poojan (groundbreaking ceremony), opposition from locals forced the project to be scrapped at that location.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Nevertheless, perseverance prevailed. The wall was finally built in 2010 and became functional by 2012. It proudly hosted the first homologated speed climbing wall in India, and also introduced the country's first timing device for speed climbing, setting new national standards.
            </p>
          </div>
        </div>
      </section>

      {/* Our Facility Section */}
      <section id="facility" className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Facility
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art climbing wall designed to international standards
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left Column - Facility Description */}
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
                  <span className="text-gray-700 text-base md:text-lg">15-meter lead climbing wall</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">Speed climbing lane</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">Boulder climbing area</span>
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
              
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Visit
              </button>
            </div>
            
            {/* Right Column - Facility Specifications */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Facility Specifications
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-orange-400">15m</div>
                  <div className="text-gray-300">Wall Height</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">12m</div>
                  <div className="text-gray-300">Wall Width</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">3</div>
                  <div className="text-gray-300">Disciplines</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">24/7</div>
                  <div className="text-gray-300">Access</div>
                </div>
              </div>
            </div>
          </div>

          {/* Climbing Wall Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <img 
                  src="/lead-climbing-wall.svg" 
                  alt="Lead Climbing Wall" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Failed to load lead climbing wall image')
                    e.currentTarget.style.display = 'none'
                  }}
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
                <img 
                  src="/speed-and-lead.svg" 
                  alt="Speed Climbing Wall" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Failed to load speed climbing wall image')
                    e.currentTarget.style.display = 'none'
                  }}
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
                <img 
                  src="/boulder-left.svg" 
                  alt="Boulder Climbing Area" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Failed to load boulder climbing image')
                    e.currentTarget.style.display = 'none'
                  }}
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

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 text-white">
            <p className="text-orange-100 mb-6 text-lg">
              Visit our world-class climbing wall and see why we're training India's future Olympic champions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105">
                Book a Tour
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105">
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
              Be part of India's premier climbing community and help us build the future of sport climbing.
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
                    <img 
                      src={isToggleOn ? "/climb-icon.svg" : "/sleep-icon.svg"} 
                      alt={isToggleOn ? "Climb Icon" : "Sleep Icon"} 
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
              In 2010, with news of the Maharashtra Government formulating a Sports Policy, the PCMA saw a major opportunity. While many adventure groups submitted fragmented requests for support (tickets, expedition funds, etc.), PCMA took a different route. After first understanding the government's intent, two detailed presentations were submitted:
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

            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-6 md:p-8 rounded-lg">
              <p className="text-orange-100 leading-relaxed text-base md:text-lg font-medium">
                In a historic acknowledgment, the contributions of Surendra Shelke and Shrikrishna Kaduskar were specifically mentioned in the 2012 Sport Policy.
              </p>
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
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8">
              Since 2000, PCMA and its successors have worked relentlessly to promote Sport Climbing, creating a robust talent pipeline that includes:
            </p>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 md:p-8 rounded-lg border border-orange-200">
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
                    Elite coaches like Amol, Mantu, and Irfan — with Amol also having served as the National Coach for Asian competitions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/msca-logo-english.svg" 
                  alt="MSCA Logo" 
                  className="h-12 w-auto mr-4"
                  loading="lazy"
                />
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.007 0C5.373 0 .007 5.373.007 12s5.366 12 12 12 12-5.373 12-12S18.641.007 12.007.007zM8.5 18.5c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5zm7 0c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5z"/>
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
                <li><a href="#facility" className="text-gray-300 hover:text-white transition-colors duration-200">Our Facility</a></li>
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
                    <p className="text-gray-300 text-sm">Yoga Park, PCMC</p>
                    <p className="text-gray-300 text-sm">Pimpri Chinchwad, Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 text-sm">+91 98765 43210</p>
                    <p className="text-gray-300 text-sm">+91 98765 43211</p>
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
      </main>
  )
}
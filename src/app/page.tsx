'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

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
                  onError={(e) => {
                    console.error('Failed to load MSCA logo')
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
                <a href="#home" className="text-black hover:text-orange-600 px-3 py-2 text-sm font-medium font-sans transition-colors duration-200">Home</a>
                <div className="relative group">
                  <a href="#about" className="text-black hover:text-orange-600 px-3 py-2 text-sm font-medium font-sans flex items-center transition-colors duration-200">
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
                  <a href="#contact" className="text-black hover:text-orange-600 px-3 py-2 text-sm font-medium font-sans flex items-center transition-colors duration-200">
                    Contact Us
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button className="text-black hover:text-orange-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Hidden by default */}
          <div className="lg:hidden hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Home</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">About Us</a>
              <a href="#players" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Players</a>
              <a href="#partners" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Partners</a>
              <a href="#events" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Events</a>
              <a href="#achievements" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Achievements</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-black hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Contact Us</a>
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
            onError={(e) => {
              console.error('Failed to load climbing wall image')
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
        
        <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 md:mb-6 leading-tight drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            <div className="whitespace-nowrap sm:whitespace-normal">Maharashtra Sport Climbing</div>
            <div>Association</div>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-8 md:mb-12 px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            United by Climbing – आरोहणेन एकीकृत
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-black bg-white text-black font-sans font-medium hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Join us
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-black bg-white text-black font-sans font-medium hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              View Schedule
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-black bg-white text-black font-sans font-medium hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Donate us
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-20 lg:py-24 bg-white">
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
      <section className="py-16 md:py-20 lg:py-24 bg-white">
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Experience Our Olympic-Level Facility
            </h3>
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
    </main>
  )
}
'use client'

import { useState, useEffect } from 'react'
import { GradientText } from '@/components/ui/gradient-text'
import Image from 'next/image'

interface HeroSectionProps {
  isMobileView: boolean
  timeLeft: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
}

export default function HeroSection({ isMobileView, timeLeft }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-relaxed drop-shadow-lg -mt-8 sm:mt-0 text-center" style={{ fontFamily: "'Playfair Display', serif", lineHeight: '1.3' }}>
          {isMobileView ? (
            <>
              <GradientText 
                colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
                animationSpeed={8}
              >
                Maharashtra Sports
              </GradientText>
              <br />
              <GradientText 
                colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
                animationSpeed={8}
              >
                Climbing Association
              </GradientText>
            </>
          ) : (
            <GradientText 
              colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
              animationSpeed={8}
            >
              Maharashtra Sports Climbing Association
            </GradientText>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
          India&apos;s Premier Olympic-Level Climbing Facility
        </p>

        {/* Countdown Timer */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 md:mb-12 border border-white/10">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Next Major Event</h3>
          <div className="grid grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white text-2xl md:text-3xl font-bold py-3 px-4 rounded-lg mb-2">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Our Facility
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

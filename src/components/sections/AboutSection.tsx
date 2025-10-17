'use client'

import Image from 'next/image'
import { GradientText } from '@/components/ui/gradient-text'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            <GradientText
              colors={['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35']}
              animationSpeed={8}
            >
              About MSCA
            </GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India&apos;s premier Olympic-level climbing facility, dedicated to nurturing the next generation of climbing champions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class climbing facilities and training programs that enable athletes to reach their full potential and represent India on the global stage.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Olympic Standards</h3>
              <p className="text-gray-600 leading-relaxed">
                Our facility meets international competition standards and has been designed to host major climbing events, including Olympic qualifiers.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re committed to making climbing accessible to everyone, from beginners to elite athletes, fostering a strong climbing community in Maharashtra.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 shadow-2xl">
              <Image
                src="/lead-climbing-wall.svg"
                alt="Olympic Climbing Wall"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Athletes Trained' },
            { number: '50+', label: 'International Medals' },
            { number: '15m', label: 'Wall Height' },
            { number: '100%', label: 'Olympic Standards' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

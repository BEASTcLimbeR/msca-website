'use client'

import { useState } from 'react'
import InteractiveGlobe from './InteractiveGlobe'

const FindUsSection = () => {
  const [activeTab, setActiveTab] = useState<'globe' | 'maps'>('globe')

  const locations = [
    {
      name: "Sai Nagar Park Climbing Wall & Yoga Park",
      address: "HRW4+82X, Sai Nagar Park, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027",
      coordinates: "18.5958511,73.805109",
      googleMapsUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890!2d73.805109!3d18.5958511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9004032dadb%3A0x286354a86fb0b309!2sSai%20Nagar%20Park%2C%20Pimple%20Saudagar%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin`,
      type: "Climbing Wall & Yoga Park",
      instagram: undefined
    }
  ]

  return (
    <div className="mt-16">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
        Find Us
      </h3>
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1 flex relative overflow-hidden">
          {/* Animated Background Slider */}
          <div 
            className={`absolute top-1 bottom-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-md shadow-lg transition-all duration-500 ease-out transform ${
              activeTab === 'globe' 
                ? 'translate-x-0 w-[calc(50%-0.125rem)]' 
                : 'translate-x-full w-[calc(50%-0.125rem)]'
            }`}
            style={{
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
          
          <button
            onClick={() => setActiveTab('globe')}
            className={`relative z-10 px-6 py-2 rounded-md text-sm font-medium transition-all duration-500 ease-out ${
              activeTab === 'globe'
                ? 'text-white transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:scale-105'
            }`}
            style={{
              transition: 'color 0.3s ease-out, transform 0.2s ease-out'
            }}
          >
            Interactive Globe
          </button>
          <button
            onClick={() => setActiveTab('maps')}
            className={`relative z-10 px-6 py-2 rounded-md text-sm font-medium transition-all duration-500 ease-out ${
              activeTab === 'maps'
                ? 'text-white transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:scale-105'
            }`}
            style={{
              transition: 'color 0.3s ease-out, transform 0.2s ease-out'
            }}
          >
            Google Maps
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'globe' ? (
        <InteractiveGlobe 
          rotationSpeed={1.2}
          enableInteractivity={true}
        />
      ) : (
        <div className="space-y-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{location.name}</h4>
                    <p className="text-gray-600 mb-2">{location.type}</p>
                    <p className="text-sm text-gray-500">{location.address}</p>
                  </div>
                  {location.instagram && (
                    <a
                      href={location.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                      </svg>
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="h-96 w-full">
                <iframe
                  src={location.googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Google Maps - ${location.name}`}
                  className="w-full h-full"
                />
              </div>
              
              {/* Action Buttons */}
              <div className="p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://www.google.com/maps/dir//${location.coordinates}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Get Directions
                  </a>
                  
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FindUsSection

"use client"

import React, { useEffect, useRef, useMemo } from 'react'

interface GradientTextProps {
  children: React.ReactNode
  colors?: string[]
  animationSpeed?: number
  className?: string
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  colors = ['#ff6b35', '#f7931e', '#ffd700', '#ff6b35', '#e74c3c', '#ff1744', '#ff6b35', '#f7931e', '#ffd700', '#ff6b35'],
  animationSpeed = 8,
  className = ''
}) => {
  const textRef = useRef<HTMLDivElement>(null)
  const processedRef = useRef(false)

  // Memoize colors to prevent unnecessary re-renders
  const memoizedColors = useMemo(() => colors, [colors.join(',')])

  useEffect(() => {
    if (!textRef.current || processedRef.current) return

    const element = textRef.current
    const text = element.textContent || ''
    
    // Mark as processed to prevent re-processing
    processedRef.current = true
    
    // Clear existing content
    element.innerHTML = ''
    
    // Create spans for each character
    const characters = text.split('')
    characters.forEach((char, index) => {
      const span = document.createElement('span')
      span.className = 'gradient-char'
      span.textContent = char === ' ' ? '\u00A0' : char // Use non-breaking space
      span.style.display = 'inline-block'
      span.style.background = `linear-gradient(45deg, ${memoizedColors.join(', ')})`
      span.style.backgroundSize = `${memoizedColors.length * 100}% 100%`
      span.style.webkitBackgroundClip = 'text'
      span.style.backgroundClip = 'text'
      span.style.webkitTextFillColor = 'transparent'
      span.style.animation = `gradientShift ${animationSpeed}s ease-in-out infinite`
      span.style.animationDelay = `${index * 0.1}s`
      element.appendChild(span)
    })

    // Add CSS animation only if not already added
    if (!document.getElementById('gradient-text-animation')) {
      const style = document.createElement('style')
      style.id = 'gradient-text-animation'
      style.textContent = `
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `
      document.head.appendChild(style)
    }
  }, [memoizedColors, animationSpeed])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}

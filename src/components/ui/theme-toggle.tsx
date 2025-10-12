'use client'

import { useState, useEffect } from 'react'

interface ThemeToggleProps {
  size?: 'default' | 'small'
}

export const ThemeToggle = ({ size = 'default' }: ThemeToggleProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <label className={`panel ${size === 'small' ? 'small' : ''}`}>
      <input 
        className="input" 
        type="checkbox" 
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <div className="hole">
        <div className="switch">
          <div className="shadow-box top">
            <div className="shadow top"></div>
          </div>
          <div className="shadow-box bottom">
            <div className="shadow bottom"></div>
          </div>
          <div className="switch_top">
            <div className="outsetTop"></div>
          </div>
          <div className="switch_bottom">
            <div className="outsetBottom"></div>
          </div>
        </div>
      </div>
    </label>
  )
}

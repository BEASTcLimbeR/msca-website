// API Configuration
const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

// API Base URL
export const API_BASE_URL = isDevelopment 
  ? 'http://localhost:5000' 
  : 'https://api.mymsca.org' // Your subdomain for backend

// API Endpoints
export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/api/contact`,
  ADMIN: `${API_BASE_URL}/api/admin`,
} as const

// Helper function to make API calls
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(endpoint, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`)
  }

  return response.json()
}

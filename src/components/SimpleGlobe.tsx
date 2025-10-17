'use client'

import InteractiveGlobe from './InteractiveGlobe'

interface SimpleGlobeProps {
  rotationSpeed?: number
  enableInteractivity?: boolean
}

const SimpleGlobe = ({ rotationSpeed = 1.2, enableInteractivity = true }: SimpleGlobeProps) => {
  return (
    <InteractiveGlobe 
      rotationSpeed={rotationSpeed}
      enableInteractivity={enableInteractivity}
    />
  )
}

export default SimpleGlobe
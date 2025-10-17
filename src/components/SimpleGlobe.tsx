'use client'

import GlobeThreeJS from './GlobeThreeJS'

interface SimpleGlobeProps {
  rotationSpeed?: number
  enableInteractivity?: boolean
}

const SimpleGlobe = ({ rotationSpeed = 1.2, enableInteractivity = true }: SimpleGlobeProps) => {
  return (
    <GlobeThreeJS 
      rotationSpeed={rotationSpeed}
      enableInteractivity={enableInteractivity}
    />
  )
}

export default SimpleGlobe
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { useRef, Suspense, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

interface Pin {
  lat: number
  lng: number
  color: string
  label: string
}

interface GlobeGLProps {
  rotationSpeed?: number
  enableInteractivity?: boolean
  pins?: Pin[]
}

const Globe = ({ rotationSpeed = 0.5 }: { rotationSpeed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed * 0.01
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 32]}>
      <meshStandardMaterial
        color="#3b82f6"
        wireframe={true}
        transparent={true}
        opacity={0.6}
        emissive="#3b82f6"
        emissiveIntensity={0.2}
      />
    </Sphere>
  )
}

const Pin = ({ lat, lng, color, label }: Pin) => {
  const meshRef = useRef<THREE.Mesh>(null)

  // Convert lat/lng to 3D coordinates
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  
  const x = Math.sin(phi) * Math.cos(theta)
  const y = Math.cos(phi)
  const z = Math.sin(phi) * Math.sin(theta)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(Date.now() * 0.003) * 0.1)
    }
  })

  return (
    <mesh ref={meshRef} position={[x * 1.1, y * 1.1, z * 1.1]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

const GlobeGLComponent: React.FC<GlobeGLProps> = ({
  rotationSpeed = 0.5,
  enableInteractivity = true,
  pins = []
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  // Default pins for MSCA locations
  const defaultPins: Pin[] = [
    {
      lat: 18.5204, // Pune
      lng: 73.8567,
      color: '#00ff88',
      label: 'Pune, Maharashtra'
    },
    {
      lat: 18.6374, // Pimpri-Chinchwad
      lng: 73.7857,
      color: '#ff6b6b',
      label: 'Pimpri-Chinchwad, Maharashtra'
    }
  ]

  const allPins = pins.length > 0 ? pins : defaultPins

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full h-96 relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden"
    >
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading Interactive Globe...</p>
          </div>
        </div>
      }>
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />
          
          <Globe rotationSpeed={rotationSpeed} />
          
          {allPins.map((pin, index) => (
            <Pin key={index} {...pin} />
          ))}
          
          <OrbitControls
            enableZoom={enableInteractivity}
            enablePan={enableInteractivity}
            enableRotate={enableInteractivity}
            autoRotate={true}
            autoRotateSpeed={rotationSpeed}
          />
        </Canvas>
      </Suspense>
    </motion.div>
  )
}

export default GlobeGLComponent

'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Text3D, Center, Box, Sphere } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Climbing Wall Component
function ClimbingWall() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    // Subtle rotation animation
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <Box ref={meshRef} args={[8, 12, 0.5]} position={[0, 0, -2]}>
      <meshStandardMaterial color="#8B4513" roughness={0.8} metalness={0.2} />
    </Box>
  )
}

// Climbing Holds Component
function ClimbingHolds() {
  const holds = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    // Animate holds with a climbing motion
    holds.current.children.forEach((hold, index) => {
      const time = state.clock.elapsedTime + index * 0.5
      hold.position.y = Math.sin(time) * 0.2
      hold.rotation.z = Math.sin(time * 1.5) * 0.1
    })
  })

  return (
    <group ref={holds}>
      {/* Generate random climbing holds */}
      {Array.from({ length: 20 }, (_, i) => (
        <Sphere
          key={i}
          args={[0.3, 8, 6]}
          position={[
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 8,
            -1.5 + Math.random() * 0.5
          ]}
        >
          <meshStandardMaterial 
            color={i % 3 === 0 ? "#FF6B35" : i % 3 === 1 ? "#F7931E" : "#FFD23F"} 
            roughness={0.3}
            metalness={0.7}
          />
        </Sphere>
      ))}
    </group>
  )
}

// Floating Text Component
function FloatingText() {
  const textRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <Center ref={textRef} position={[0, 2, 0]}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={1}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        CLIMB
        <meshStandardMaterial color="#FF6B35" metalness={0.8} roughness={0.2} />
      </Text3D>
    </Center>
  )
}

// Main Climbing Scene Component
export default function ClimbingScene() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        onCreated={() => setIsLoaded(true)}
        className="bg-gradient-to-b from-slate-900 to-slate-800"
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FF6B35" />
        
        {/* Environment */}
        <Environment preset="sunset" />
        
        {/* 3D Objects */}
        <ClimbingWall />
        <ClimbingHolds />
        <FloatingText />
        
        {/* Controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={20}
        />
      </Canvas>
      
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
          <div className="text-white text-xl animate-pulse">
            Loading 3D Scene...
          </div>
        </div>
      )}
      
      {/* UI Overlay */}
      <div className="absolute top-4 left-4 text-white">
        <h3 className="text-lg font-bold">Interactive 3D Climbing Wall</h3>
        <p className="text-sm opacity-75">Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  )
}

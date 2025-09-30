'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Box, Sphere, Torus } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Animated Climbing Wall
function ClimbingWall() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    // Subtle breathing animation
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02
  })

  return (
    <Box ref={meshRef} args={[8, 12, 0.5]} position={[0, 0, -2]}>
      <meshStandardMaterial 
        color="#8B4513" 
        roughness={0.8} 
        metalness={0.2}
        normalScale={[0.5, 0.5]}
      />
    </Box>
  )
}

// Climbing Holds with Physics-like Animation
function ClimbingHolds() {
  const groupRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    groupRef.current.children.forEach((hold, index) => {
      const time = state.clock.elapsedTime + index * 0.3
      const holdMesh = hold as THREE.Mesh
      
      // Climbing motion animation
      holdMesh.position.y = Math.sin(time * 2) * 0.3
      holdMesh.rotation.z = Math.sin(time * 1.5) * 0.2
      holdMesh.rotation.x = Math.cos(time * 1.2) * 0.1
      
      // Scale pulsing for active holds
      const scale = 1 + Math.sin(time * 3) * 0.1
      holdMesh.scale.setScalar(scale)
    })
  })

  return (
    <group ref={groupRef}>
      {/* Generate climbing holds in a pattern */}
      {Array.from({ length: 24 }, (_, i) => {
        const row = Math.floor(i / 6)
        const col = i % 6
        const x = (col - 2.5) * 1.2
        const y = (row - 2) * 1.5
        const z = -1.5 + Math.random() * 0.3
        
        return (
          <Sphere
            key={i}
            args={[0.25, 8, 6]}
            position={[x, y, z]}
          >
            <meshStandardMaterial 
              color={
                i % 4 === 0 ? "#FF6B35" : 
                i % 4 === 1 ? "#F7931E" : 
                i % 4 === 2 ? "#FFD23F" : "#4ECDC4"
              } 
              roughness={0.2}
              metalness={0.8}
              emissive={i % 4 === 0 ? "#FF6B35" : "#000000"}
              emissiveIntensity={0.1}
            />
          </Sphere>
        )
      })}
    </group>
  )
}

// Floating Climbing Equipment
function FloatingEquipment() {
  const ropeRef = useRef<THREE.Mesh>(null!)
  const carabinerRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Rope swinging animation
    ropeRef.current.rotation.z = Math.sin(time) * 0.3
    ropeRef.current.position.y = Math.sin(time * 0.8) * 0.5
    
    // Carabiner spinning
    carabinerRef.current.rotation.y = time * 2
    carabinerRef.current.position.y = Math.sin(time * 1.2) * 0.3
  })

  return (
    <group>
      {/* Rope */}
      <Torus ref={ropeRef} args={[0.1, 0.02, 8, 16]} position={[3, 2, 0]}>
        <meshStandardMaterial color="#FFFFFF" metalness={0.9} roughness={0.1} />
      </Torus>
      
      {/* Carabiner */}
      <Torus ref={carabinerRef} args={[0.15, 0.03, 8, 16]} position={[-3, 1, 0]}>
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </Torus>
    </group>
  )
}

// Main Scene Component
export default function SimpleClimbingScene() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        onCreated={() => setIsLoaded(true)}
        className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800"
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.2} 
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight 
          position={[-5, 5, 5]} 
          intensity={0.8} 
          color="#FF6B35" 
          distance={20}
        />
        <pointLight 
          position={[5, -5, 5]} 
          intensity={0.6} 
          color="#4ECDC4" 
          distance={15}
        />
        
        {/* Environment */}
        <Environment preset="sunset" />
        
        {/* 3D Objects */}
        <ClimbingWall />
        <ClimbingHolds />
        <FloatingEquipment />
        
        {/* Interactive Controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={4}
          maxDistance={15}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <div className="text-white text-xl font-semibold">Loading 3D Experience...</div>
            <div className="text-gray-400 text-sm mt-2">Preparing your climbing adventure</div>
          </div>
        </div>
      )}
      
      {/* UI Overlay */}
      <div className="absolute top-6 left-6 text-white z-10">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Interactive Climbing Wall
        </h3>
        <p className="text-sm opacity-90 mb-1">🖱️ Drag to rotate • 🔍 Scroll to zoom</p>
        <p className="text-xs opacity-75">🏔️ Experience our Olympic-level facility in 3D</p>
      </div>
      
      {/* Performance Indicator */}
      <div className="absolute bottom-6 right-6 text-white text-xs opacity-60">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>3D Scene Active</span>
        </div>
      </div>
    </div>
  )
}

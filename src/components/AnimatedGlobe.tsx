'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, useTexture } from '@react-three/drei'
import { useRef, Suspense, useMemo } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  // Create wireframe geometry
  const wireframeGeometry = useMemo(() => {
    const geometry = new THREE.SphereGeometry(1, 64, 32)
    return geometry
  }, [])

  // Create dots for landmasses
  const dotsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = []
    const colors = []
    
    // Generate random dots on sphere surface
    for (let i = 0; i < 2000; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = 2 * Math.PI * Math.random()
      
      const x = Math.sin(phi) * Math.cos(theta)
      const y = Math.cos(phi)
      const z = Math.sin(phi) * Math.sin(theta)
      
      positions.push(x, y, z)
      
      // Make some dots brighter (landmasses)
      const isLandmass = Math.random() > 0.7
      colors.push(0.2, 0.6, 1, isLandmass ? 1 : 0.3)
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 4))
    
    return geometry
  }, [])

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <mesh ref={meshRef} geometry={wireframeGeometry}>
        <meshBasicMaterial
          color="#3b82f6"
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </mesh>
      
      {/* Dots for landmasses */}
      <points geometry={dotsGeometry}>
        <pointsMaterial
          size={0.02}
          vertexColors={true}
          transparent={true}
          opacity={0.8}
        />
      </points>
      
      {/* Pins/Markers */}
      <mesh position={[0.3, 0.2, 0.8]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#00ff88" />
      </mesh>
      
      <mesh position={[-0.4, 0.1, 0.7]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color="#ff6b6b" />
      </mesh>
    </group>
  )
}

const GlobeScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
      <Globe />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.8}
        rotateSpeed={0.4}
        minDistance={2}
        maxDistance={6}
      />
    </Canvas>
  )
}

const AnimatedGlobe = () => {
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
        <GlobeScene />
      </Suspense>
      
      {/* Overlay with location info */}
      <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-2">Find Our Locations</h3>
            <p className="text-sm text-gray-300">Interactive Globe</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AnimatedGlobe

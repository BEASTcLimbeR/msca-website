'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

interface ThreeJSGlobeProps {
  rotationSpeed?: number
  enableInteractivity?: boolean
}

const ThreeJSGlobe: React.FC<ThreeJSGlobeProps> = ({
  rotationSpeed = 0.5,
  enableInteractivity = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const globeRef = useRef<THREE.Mesh>()
  const controlsRef = useRef<any>()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 2
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create globe
    const globeGeometry = new THREE.SphereGeometry(1, 64, 32)
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.2
    })
    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globe)
    globeRef.current = globe

    // Add atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(1.1, 64, 32)
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphere)

    // Add pins for locations
    const pinGeometry = new THREE.SphereGeometry(0.05, 8, 8)
    
    // Pune pin
    const punePinMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff88 })
    const punePin = new THREE.Mesh(pinGeometry, punePinMaterial)
    const punePhi = (90 - 18.5204) * (Math.PI / 180)
    const puneTheta = (73.8567 + 180) * (Math.PI / 180)
    punePin.position.set(
      Math.sin(punePhi) * Math.cos(puneTheta) * 1.1,
      Math.cos(punePhi) * 1.1,
      Math.sin(punePhi) * Math.sin(puneTheta) * 1.1
    )
    scene.add(punePin)

    // Pimpri-Chinchwad pin
    const pimpriPinMaterial = new THREE.MeshBasicMaterial({ color: 0xff6b6b })
    const pimpriPin = new THREE.Mesh(pinGeometry, pimpriPinMaterial)
    const pimpriPhi = (90 - 18.6374) * (Math.PI / 180)
    const pimpriTheta = (73.7857 + 180) * (Math.PI / 180)
    pimpriPin.position.set(
      Math.sin(pimpriPhi) * Math.cos(pimpriTheta) * 1.1,
      Math.cos(pimpriPhi) * 1.1,
      Math.sin(pimpriPhi) * Math.sin(pimpriTheta) * 1.1
    )
    scene.add(pimpriPin)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(10, 10, 5)
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0x3b82f6, 0.3, 100)
    pointLight.position.set(-10, -10, -10)
    scene.add(pointLight)

    // Controls (simplified orbit controls)
    let mouseX = 0
    let mouseY = 0
    let isMouseDown = false

    const onMouseMove = (event: MouseEvent) => {
      if (!enableInteractivity) return
      
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const onMouseDown = () => {
      if (!enableInteractivity) return
      isMouseDown = true
    }

    const onMouseUp = () => {
      isMouseDown = false
    }

    const onWheel = (event: WheelEvent) => {
      if (!enableInteractivity) return
      
      event.preventDefault()
      camera.position.z += event.deltaY * 0.001
      camera.position.z = Math.max(1, Math.min(5, camera.position.z))
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('wheel', onWheel)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Auto rotation
      if (globeRef.current) {
        globeRef.current.rotation.y += rotationSpeed * 0.01
      }

      // Mouse interaction
      if (isMouseDown && enableInteractivity) {
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05
        camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05
      }

      // Pin animation
      const time = Date.now() * 0.003
      punePin.scale.setScalar(1 + Math.sin(time) * 0.1)
      pimpriPin.scale.setScalar(1 + Math.sin(time + Math.PI) * 0.1)

      renderer.render(scene, camera)
    }

    animate()
    setIsLoaded(true)

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return
      
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      
      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('resize', handleResize)
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
    }
  }, [rotationSpeed, enableInteractivity])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full h-96 relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden"
    >
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading Interactive Globe...</p>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default ThreeJSGlobe

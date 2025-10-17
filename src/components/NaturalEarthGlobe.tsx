'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

interface NaturalEarthGlobeProps {
  rotationSpeed?: number
  enableInteractivity?: boolean
}

const NaturalEarthGlobe: React.FC<NaturalEarthGlobeProps> = ({
  rotationSpeed = 0.5,
  enableInteractivity = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const globeRef = useRef<THREE.Mesh>()
  const countriesRef = useRef<THREE.Group>()
  const [isLoaded, setIsLoaded] = useState(false)

  // Convert lat/lng to 3D coordinates
  const latLngToVector3 = (lat: number, lng: number, radius: number = 1) => {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lng + 180) * (Math.PI / 180)
    return new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta) * radius,
      Math.cos(phi) * radius,
      Math.sin(phi) * Math.sin(theta) * radius
    )
  }

  // Create country outlines from GeoJSON data
  const createCountryOutlines = (scene: THREE.Scene) => {
    const countriesGroup = new THREE.Group()
    countriesRef.current = countriesGroup
    scene.add(countriesGroup)

    // Sample country data (in a real implementation, you'd load from GeoJSON)
    const countries = [
      // India
      { name: 'India', coordinates: [
        [6.5, 68.1], [6.5, 97.4], [35.5, 97.4], [35.5, 68.1], [6.5, 68.1]
      ]},
      // United States
      { name: 'United States', coordinates: [
        [24.5, -125.0], [49.0, -125.0], [49.0, -66.9], [24.5, -66.9], [24.5, -125.0]
      ]},
      // China
      { name: 'China', coordinates: [
        [18.2, 73.6], [53.6, 73.6], [53.6, 135.0], [18.2, 135.0], [18.2, 73.6]
      ]},
      // Brazil
      { name: 'Brazil', coordinates: [
        [-33.8, -73.9], [5.3, -73.9], [5.3, -34.8], [-33.8, -34.8], [-33.8, -73.9]
      ]},
      // Australia
      { name: 'Australia', coordinates: [
        [-43.6, 113.3], [-10.7, 113.3], [-10.7, 153.6], [-43.6, 153.6], [-43.6, 113.3]
      ]},
      // Europe
      { name: 'Europe', coordinates: [
        [35.2, -9.2], [71.2, -9.2], [71.2, 40.0], [35.2, 40.0], [35.2, -9.2]
      ]},
      // Africa
      { name: 'Africa', coordinates: [
        [-34.8, -17.0], [37.3, -17.0], [37.3, 51.1], [-34.8, 51.1], [-34.8, -17.0]
      ]}
    ]

    countries.forEach(country => {
      const points = country.coordinates.map(coord => 
        latLngToVector3(coord[0], coord[1], 1.01)
      )
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({ 
        color: 0x3b82f6, 
        transparent: true, 
        opacity: 0.6 
      })
      const line = new THREE.Line(geometry, material)
      countriesGroup.add(line)
    })
  }

  // Create graticules (latitude/longitude lines)
  const createGraticules = (scene: THREE.Scene) => {
    const graticuleGroup = new THREE.Group()
    scene.add(graticuleGroup)

    // Latitude lines
    for (let lat = -90; lat <= 90; lat += 30) {
      const points = []
      for (let lng = -180; lng <= 180; lng += 5) {
        points.push(latLngToVector3(lat, lng, 1.005))
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({ 
        color: 0x3b82f6, 
        transparent: true, 
        opacity: 0.3 
      })
      const line = new THREE.Line(geometry, material)
      graticuleGroup.add(line)
    }

    // Longitude lines
    for (let lng = -180; lng <= 180; lng += 30) {
      const points = []
      for (let lat = -90; lat <= 90; lat += 5) {
        points.push(latLngToVector3(lat, lng, 1.005))
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({ 
        color: 0x3b82f6, 
        transparent: true, 
        opacity: 0.3 
      })
      const line = new THREE.Line(geometry, material)
      graticuleGroup.add(line)
    }
  }

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
    camera.position.z = 2.5
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
      color: 0x1a1a2e,
      transparent: true,
      opacity: 0.8,
      emissive: 0x0f0f23,
      emissiveIntensity: 0.2
    })
    const globe = new THREE.Mesh(globeGeometry, globeMaterial)
    scene.add(globe)
    globeRef.current = globe

    // Add atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(1.05, 64, 32)
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphere)

    // Create country outlines
    createCountryOutlines(scene)

    // Create graticules
    createGraticules(scene)

    // Add starfield background
    const starGeometry = new THREE.BufferGeometry()
    const starVertices = []
    for (let i = 0; i < 15000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000
      starVertices.push(x, y, z)
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))
    const starMaterial = new THREE.PointsMaterial({ 
      color: 0xffffff, 
      size: 0.8,
      transparent: true,
      opacity: 0.8
    })
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // Add location pins
    const pinGeometry = new THREE.SphereGeometry(0.03, 8, 8)
    
    // Pune pin (Raje Shivaji Climbing Wall)
    const punePinMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff88 })
    const punePin = new THREE.Mesh(pinGeometry, punePinMaterial)
    const punePos = latLngToVector3(18.5204, 73.8567, 1.02)
    punePin.position.copy(punePos)
    scene.add(punePin)

    // Pimpri-Chinchwad pin (Annasaheb Magar Stadium)
    const pimpriPinMaterial = new THREE.MeshBasicMaterial({ color: 0xff6b6b })
    const pimpriPin = new THREE.Mesh(pinGeometry, pimpriPinMaterial)
    const pimpriPos = latLngToVector3(18.6374, 73.7857, 1.02)
    pimpriPin.position.copy(pimpriPos)
    scene.add(pimpriPin)

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 5)
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0x3b82f6, 0.4, 100)
    pointLight.position.set(-10, -10, -10)
    scene.add(pointLight)

    // Mouse controls
    let mouseX = 0
    let mouseY = 0
    let isMouseDown = false
    let targetRotationX = 0
    let targetRotationY = 0

    const onMouseMove = (event: MouseEvent) => {
      if (!enableInteractivity) return
      
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
      
      if (isMouseDown) {
        targetRotationY = mouseX * 0.5
        targetRotationX = mouseY * 0.5
      }
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
      camera.position.z = Math.max(1.5, Math.min(6, camera.position.z))
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
        globeRef.current.rotation.y += rotationSpeed * 0.005
      }

      // Mouse interaction
      if (isMouseDown && enableInteractivity) {
        camera.position.x += (targetRotationX - camera.position.x) * 0.1
        camera.position.y += (targetRotationY - camera.position.y) * 0.1
      }

      // Pin animation
      const time = Date.now() * 0.003
      punePin.scale.setScalar(1 + Math.sin(time) * 0.3)
      pimpriPin.scale.setScalar(1 + Math.sin(time + Math.PI) * 0.3)

      // Star rotation
      stars.rotation.y += 0.0002

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

export default NaturalEarthGlobe

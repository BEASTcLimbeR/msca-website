'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

interface SimpleGlobeProps {
  rotationSpeed?: number
  enableInteractivity?: boolean
}

const SimpleGlobe: React.FC<SimpleGlobeProps> = ({
  rotationSpeed = 0.5,
  enableInteractivity = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const globeRef = useRef<THREE.Mesh>()
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

  // Create country-shaped point cloud with actual continent outlines
  const createCountryPoints = () => {
    const points = []
    
    // Define major continents with proper boundaries
    const continents = [
      // North America
      {
        name: "North America",
        regions: [
          { lat: 45, lng: -100, size: 0.4, points: 800 },
          { lat: 35, lng: -95, size: 0.3, points: 600 },
          { lat: 25, lng: -100, size: 0.3, points: 500 },
          { lat: 15, lng: -90, size: 0.2, points: 300 },
          { lat: 60, lng: -120, size: 0.2, points: 200 }, // Canada
          { lat: 20, lng: -105, size: 0.2, points: 200 }, // Mexico
        ]
      },
      
      // South America
      {
        name: "South America", 
        regions: [
          { lat: -10, lng: -60, size: 0.4, points: 600 },
          { lat: -20, lng: -50, size: 0.3, points: 400 },
          { lat: -30, lng: -60, size: 0.3, points: 300 },
          { lat: -5, lng: -80, size: 0.2, points: 200 },
          { lat: -35, lng: -70, size: 0.2, points: 200 },
        ]
      },
      
      // Europe
      {
        name: "Europe",
        regions: [
          { lat: 50, lng: 10, size: 0.3, points: 400 },
          { lat: 45, lng: 0, size: 0.2, points: 300 },
          { lat: 40, lng: 15, size: 0.2, points: 200 },
          { lat: 55, lng: 25, size: 0.2, points: 200 },
          { lat: 60, lng: 5, size: 0.2, points: 200 }, // Scandinavia
          { lat: 35, lng: -5, size: 0.2, points: 200 }, // Iberia
        ]
      },
      
      // Africa
      {
        name: "Africa",
        regions: [
          { lat: 0, lng: 20, size: 0.4, points: 600 },
          { lat: -10, lng: 25, size: 0.3, points: 400 },
          { lat: -20, lng: 30, size: 0.3, points: 300 },
          { lat: 10, lng: 0, size: 0.2, points: 200 },
          { lat: -30, lng: 25, size: 0.2, points: 200 }, // South Africa
          { lat: 5, lng: 40, size: 0.2, points: 200 }, // East Africa
        ]
      },
      
      // Asia
      {
        name: "Asia",
        regions: [
          { lat: 30, lng: 100, size: 0.5, points: 1000 }, // China
          { lat: 40, lng: 120, size: 0.3, points: 400 }, // Japan/Korea
          { lat: 20, lng: 80, size: 0.4, points: 600 }, // India
          { lat: 50, lng: 140, size: 0.2, points: 300 }, // Siberia
          { lat: 15, lng: 100, size: 0.3, points: 300 }, // Southeast Asia
          { lat: 35, lng: 50, size: 0.2, points: 200 }, // Middle East
        ]
      },
      
      // Australia
      {
        name: "Australia",
        regions: [
          { lat: -25, lng: 135, size: 0.3, points: 300 },
          { lat: -30, lng: 120, size: 0.2, points: 200 },
          { lat: -20, lng: 150, size: 0.2, points: 200 },
          { lat: -35, lng: 140, size: 0.1, points: 100 },
        ]
      }
    ]
    
    continents.forEach(continent => {
      continent.regions.forEach(region => {
        const center = latLngToVector3(region.lat, region.lng, 1.01)
        
        for (let i = 0; i < region.points; i++) {
          // Create more realistic country shapes
          const angle = (i / region.points) * Math.PI * 2
          const radius = region.size * (0.3 + Math.random() * 0.7)
          
          // Add some irregularity to make it look more like landmasses
          const irregularity = Math.random() * 0.3
          const offset = new THREE.Vector3(
            Math.cos(angle) * radius * (0.1 + irregularity),
            Math.sin(angle) * radius * (0.1 + irregularity),
            (Math.random() - 0.5) * radius * 0.1
          )
          
          const point = center.clone().add(offset)
          points.push(point.x, point.y, point.z)
        }
      })
    })
    
    return new Float32Array(points)
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

    // Add orbit controls for interaction
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = true
    controls.enablePan = false
    controls.autoRotate = true
    controls.autoRotateSpeed = rotationSpeed * 2
    controls.minDistance = 1.5
    controls.maxDistance = 5

    // Create graticules (latitude/longitude lines) for geographical reference
    const graticuleGroup = new THREE.Group()
    
    // Latitude lines
    for (let lat = -90; lat <= 90; lat += 30) {
      const points = []
      for (let lng = -180; lng <= 180; lng += 5) {
        const point = latLngToVector3(lat, lng, 1.005)
        points.push(new THREE.Vector3(point.x, point.y, point.z))
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({ 
        color: 0x7AE1FF, 
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
        const point = latLngToVector3(lat, lng, 1.005)
        points.push(new THREE.Vector3(point.x, point.y, point.z))
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({ 
        color: 0x7AE1FF, 
        transparent: true, 
        opacity: 0.3 
      })
      const line = new THREE.Line(geometry, material)
      graticuleGroup.add(line)
    }
    
    scene.add(graticuleGroup)
    globeRef.current = graticuleGroup

    // Create point cloud for countries
    const countryPoints = createCountryPoints()
    const pointGeometry = new THREE.BufferGeometry()
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(countryPoints, 3))
    
    const pointMaterial = new THREE.PointsMaterial({
      color: 0x7AE1FF,
      size: 0.008,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    })
    
    const globe = new THREE.Points(pointGeometry, pointMaterial)
    scene.add(globe)

    // Add atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(1.1, 64, 32)
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x7AE1FF,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphere)

    // Add starfield background
    const starGeometry = new THREE.BufferGeometry()
    const starVertices = []
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000
      starVertices.push(x, y, z)
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))
    const starMaterial = new THREE.PointsMaterial({ 
      color: 0xffffff, 
      size: 0.5,
      transparent: true,
      opacity: 0.8
    })
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // Add location pins
    const pinGeometry = new THREE.SphereGeometry(0.05, 8, 8)
    
    // Sai Nagar Park pin (Climbing Wall & Yoga Park)
    const saiNagarPinMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff88 })
    const saiNagarPin = new THREE.Mesh(pinGeometry, saiNagarPinMaterial)
    const saiNagarPos = latLngToVector3(18.5958511, 73.805109, 1.05)
    saiNagarPin.position.copy(saiNagarPos)
    scene.add(saiNagarPin)


    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 5)
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0x7AE1FF, 0.4, 100)
    pointLight.position.set(-10, -10, -10)
    scene.add(pointLight)

    // Disable auto-rotate when user interacts
    if (!enableInteractivity) {
      controls.autoRotate = false
    }

    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      requestAnimationFrame(animate)
      
      const elapsedTime = clock.getElapsedTime()

      // Update orbit controls
      controls.update()

      // Manual rotation as backup (slower than auto-rotate)
      if (globeRef.current) {
        globeRef.current.rotation.y += rotationSpeed * 0.005
      }

      // Pin animation with pulsing effect
      const time = elapsedTime * 2
      saiNagarPin.scale.setScalar(1 + Math.sin(time) * 0.3)
      
      // Add pulsing glow to pin
      saiNagarPin.material.opacity = 0.8 + Math.sin(time) * 0.2

      // Atmosphere pulsing
      atmosphere.material.opacity = 0.1 + Math.sin(elapsedTime * 0.8) * 0.05

      // Star rotation
      stars.rotation.y += 0.0005

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
      window.removeEventListener('resize', handleResize)
      controls.dispose()
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
    }
  }, [rotationSpeed, enableInteractivity])

  return (
    <div className="w-full h-96 relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
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
    </div>
  )
}

export default SimpleGlobe

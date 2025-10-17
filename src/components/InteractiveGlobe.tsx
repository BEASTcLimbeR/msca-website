'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

interface InteractiveGlobeProps {
  rotationSpeed?: number
  enableInteractivity?: boolean
}

const InteractiveGlobe = ({ rotationSpeed = 1.2, enableInteractivity = true }: InteractiveGlobeProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene>()
  const rendererRef = useRef<THREE.WebGLRenderer>()
  const cameraRef = useRef<THREE.PerspectiveCamera>()
  const controlsRef = useRef<OrbitControls>()
  const animationRef = useRef<number>()

  useEffect(() => {
    if (!containerRef.current) return

    console.log('Initializing Interactive Globe...')

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup - closer to globe
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      1,
      1000
    )
    camera.position.z = 50
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.8)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
    directionalLight.position.set(-50, 50, 30)
    scene.add(directionalLight)
    
    const pointLight = new THREE.PointLight(0x4fc3f7, 1.0, 100)
    pointLight.position.set(-30, 30, 20)
    scene.add(pointLight)

    // Base sphere - larger size
    const baseSphere = new THREE.SphereGeometry(25, 32, 32)
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a1929,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide
    })
    const baseMesh = new THREE.Mesh(baseSphere, baseMaterial)
    scene.add(baseMesh)

    // Create continent dots manually (simplified approach)
    const createContinentDots = () => {
      const dotGeometry = new THREE.CircleGeometry(0.2, 16)
      const dotMaterial = new THREE.MeshBasicMaterial({
        color: 0x4fc3f7,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide
      })

      // Define major continent positions
      const continents = [
        // North America
        { lat: 45, lng: -100, count: 50 },
        { lat: 35, lng: -95, count: 40 },
        { lat: 25, lng: -100, count: 30 },
        { lat: 15, lng: -90, count: 20 },
        { lat: 60, lng: -120, count: 15 },
        { lat: 20, lng: -105, count: 15 },
        
        // South America
        { lat: -10, lng: -60, count: 40 },
        { lat: -20, lng: -50, count: 30 },
        { lat: -30, lng: -60, count: 25 },
        { lat: -5, lng: -80, count: 20 },
        { lat: -35, lng: -70, count: 15 },
        
        // Europe
        { lat: 50, lng: 10, count: 35 },
        { lat: 45, lng: 0, count: 30 },
        { lat: 40, lng: 15, count: 25 },
        { lat: 55, lng: 25, count: 20 },
        { lat: 60, lng: 5, count: 15 },
        { lat: 35, lng: -5, count: 15 },
        
        // Africa
        { lat: 0, lng: 20, count: 45 },
        { lat: -10, lng: 25, count: 35 },
        { lat: -20, lng: 30, count: 30 },
        { lat: 10, lng: 0, count: 25 },
        { lat: -30, lng: 25, count: 20 },
        { lat: 5, lng: 40, count: 20 },
        
        // Asia
        { lat: 30, lng: 100, count: 60 },
        { lat: 40, lng: 120, count: 40 },
        { lat: 20, lng: 80, count: 50 },
        { lat: 50, lng: 140, count: 30 },
        { lat: 15, lng: 100, count: 35 },
        { lat: 35, lng: 50, count: 25 },
        
        // Australia
        { lat: -25, lng: 135, count: 30 },
        { lat: -30, lng: 120, count: 20 },
        { lat: -20, lng: 150, count: 20 },
        { lat: -35, lng: 140, count: 15 }
      ]

      continents.forEach(continent => {
        for (let i = 0; i < continent.count; i++) {
          const phi = (90 - continent.lat) * (Math.PI / 180)
          const theta = (continent.lng + 180) * (Math.PI / 180)
          const radius = 25.2

          // Add some randomness to create clusters
          const randomLat = continent.lat + (Math.random() - 0.5) * 4
          const randomLng = continent.lng + (Math.random() - 0.5) * 4
          const randomPhi = (90 - randomLat) * (Math.PI / 180)
          const randomTheta = (randomLng + 180) * (Math.PI / 180)

          const x = -(radius * Math.sin(randomPhi) * Math.cos(randomTheta))
          const z = (radius * Math.sin(randomPhi) * Math.sin(randomTheta))
          const y = (radius * Math.cos(randomPhi))

          const dot = new THREE.Mesh(dotGeometry, dotMaterial)
          dot.position.set(x, y, z)
          
          // Make the dot face the camera by orienting it towards the center
          const center = new THREE.Vector3(0, 0, 0)
          const direction = center.clone().sub(dot.position).normalize()
          dot.lookAt(dot.position.clone().add(direction))
          
          // Add twinkling effect
          dot.userData = { 
            twinkleOffset: Math.random() * Math.PI * 2,
            originalOpacity: 0.9
          }
          
          scene.add(dot)
        }
      })

      console.log('Created', continents.reduce((sum, c) => sum + c.count, 0), 'continent dots')
    }

    createContinentDots()

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.autoRotateSpeed = rotationSpeed
    controls.enableDamping = true
    controls.enableRotate = enableInteractivity
    controls.enablePan = false
    controls.enableZoom = false
    controls.minPolarAngle = (Math.PI / 2) - 0.5
    controls.maxPolarAngle = (Math.PI / 2) + 0.5
    controlsRef.current = controls

    // Mouse interaction
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let isIntersecting = false
    let mouseDown = false
    let grabbing = false

    const handleMouseMove = (event: MouseEvent) => {
      isIntersecting = false

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObject(baseMesh)
      
      if (intersects[0]) {
        isIntersecting = true
        if (!grabbing) document.body.style.cursor = 'pointer'
      } else {
        if (!grabbing) document.body.style.cursor = 'default'
      }
    }

    const handleMouseDown = () => {
      if (!isIntersecting || !enableInteractivity) return

      // Animate dots outward
      scene.children.forEach(child => {
        if (child.userData?.twinkleOffset !== undefined) {
          const target = { scale: 1.2 }
          const start = { scale: 1.0 }
          
          const animate = (progress: number) => {
            child.scale.setScalar(start.scale + (target.scale - start.scale) * progress)
            if (progress < 1) requestAnimationFrame(() => animate(progress + 0.05))
          }
          animate(0)
        }
      })

      mouseDown = true
      document.body.style.cursor = 'grabbing'
      grabbing = true
    }

    const handleMouseUp = () => {
      if (!mouseDown) return

      // Animate dots back to normal
      scene.children.forEach(child => {
        if (child.userData?.twinkleOffset !== undefined) {
          const target = { scale: 1.0 }
          const start = { scale: child.scale.x }
          
          const animate = (progress: number) => {
            child.scale.setScalar(start.scale + (target.scale - start.scale) * progress)
            if (progress < 1) requestAnimationFrame(() => animate(progress + 0.1))
          }
          animate(0)
        }
      })

      mouseDown = false
      grabbing = false
      if (isIntersecting) document.body.style.cursor = 'pointer'
      else document.body.style.cursor = 'default'
    }

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)

      const time = performance.now() * 0.001

      // Animate twinkling dots
      scene.children.forEach(child => {
        if (child.userData?.twinkleOffset !== undefined) {
          const twinkle = Math.sin(time * 2 + child.userData.twinkleOffset) * 0.3 + 0.7
          child.material.opacity = child.userData.originalOpacity * twinkle
        }
      })

      controls.update()
      renderer.render(scene, camera)
    }

    animate()
    console.log('Globe animation started')

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(width, height)

      if (window.innerWidth > 700) {
        cameraRef.current.position.z = 50
      } else {
        cameraRef.current.position.z = 70
      }
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('resize', handleResize)
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
      
      controls.dispose()
      renderer.dispose()
    }
  }, [rotationSpeed, enableInteractivity])

  return (
    <div 
      ref={containerRef} 
      className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
      style={{ minHeight: '400px' }}
    />
  )
}

export default InteractiveGlobe
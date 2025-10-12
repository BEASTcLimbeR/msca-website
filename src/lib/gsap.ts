import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// GSAP utility functions for the climbing association website
export class GSAPAnimations {
  
  // Fade in animation for sections
  static fadeInUp(element: string | HTMLElement, delay: number = 0) {
    return gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }

  // Scale in animation for climbing holds/equipment
  static scaleIn(element: string | HTMLElement, delay: number = 0) {
    return gsap.fromTo(element,
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }

  // Slide in from left for timeline items
  static slideInLeft(element: string | HTMLElement, delay: number = 0) {
    return gsap.fromTo(element,
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }

  // Slide in from right for timeline items
  static slideInRight(element: string | HTMLElement, delay: number = 0) {
    return gsap.fromTo(element,
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }

  // Parallax effect for background images
  static parallax(element: string | HTMLElement, speed: number = 0.5) {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  }

  // Stagger animation for multiple elements (like climbing holds)
  static staggerIn(elements: string | HTMLElement[], delay: number = 0.1) {
    return gsap.fromTo(elements,
      {
        scale: 0,
        opacity: 0,
        rotation: 180
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: elements[0],
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }

  // Timeline animation for climbing route progression
  static timelineProgress(element: string | HTMLElement) {
    return gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom center",
        scrub: 1
      }
    })
  }

  // Text reveal animation
  static textReveal(element: string | HTMLElement) {
    return gsap.fromTo(element,
      {
        clipPath: "inset(0 100% 0 0)"
      },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }

  // Climbing hold bounce animation
  static holdBounce(element: string | HTMLElement) {
    return gsap.to(element, {
      scale: 1.1,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
  }

  // Counter animation for statistics
  static counter(element: string | HTMLElement, endValue: number) {
    return gsap.fromTo(element,
      { innerText: 0 },
      {
        innerText: endValue,
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }

  // Clean up ScrollTrigger instances
  static cleanup() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
}

// Export GSAP and ScrollTrigger for direct use
export { gsap, ScrollTrigger }

"use client"

import { useEffect, useRef, useState } from "react"

interface VantaBackgroundProps {
  isDark: boolean
}

declare global {
  interface Window {
    VANTA: any
    THREE: any
  }
}

export default function VantaBackground({ isDark }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)
  const [vantaStatus, setVantaStatus] = useState<'loading' | 'active' | 'failed'>('loading')
  const isInitializing = useRef(false)

  // Clean up function
  const destroyEffect = () => {
    if (vantaEffect.current) {
      try {
        console.log("[Vanta] Destroying effect")
        vantaEffect.current.destroy()
      } catch (error) {
        console.warn("[Vanta] Error destroying effect:", error)
      } finally {
        vantaEffect.current = null
      }
    }
  }

  // Initialize effect
  const initializeEffect = () => {
    if (isInitializing.current) {
      console.log("[Vanta] Already initializing, skipping...")
      return
    }

    if (!vantaRef.current) {
      console.log("[Vanta] No ref available")
      setVantaStatus('failed')
      return
    }

    if (!window.VANTA || !window.THREE) {
      console.log("[Vanta] Libraries not loaded yet")
      setVantaStatus('failed')
      return
    }

    isInitializing.current = true
    setVantaStatus('loading')
    
    // Clean up any existing effect
    destroyEffect()

    try {
      if (!window.VANTA.GLOBE) {
        throw new Error("VANTA.GLOBE not available")
      }

      console.log(`[Vanta] Initializing GLOBE effect for ${isDark ? 'dark' : 'light'} mode`)
      
      if (isDark) {
        // Dark mode - GLOBE effect with dark theme
        vantaEffect.current = window.VANTA.GLOBE({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          // Dark theme customization
          backgroundColor: 0x0f172a,    // Dark slate background
          color: 0x3b82f6,             // Blue primary connections
          color2: 0x8b5cf6,            // Purple secondary connections
          size: 1.00,                  // Standard globe size
          opacity: 0.8,                // Slightly transparent for subtlety
        })
        
      } else {
        // Light mode - GLOBE effect with light theme
        vantaEffect.current = window.VANTA.GLOBE({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          // Light theme customization - bright and vibrant
          backgroundColor: 0xf8fafc,    // Very light background
          color: 0xf97316,             // Orange primary connections
          color2: 0xfbbf24,            // Golden secondary connections
          size: 0.90,                  // Slightly smaller globe for light mode
          opacity: 0.9,                // More opaque for better visibility
        })
      }

      // Verify the effect was created
      if (vantaEffect.current && typeof vantaEffect.current.destroy === 'function') {
        console.log(`[Vanta] GLOBE effect initialized successfully for ${isDark ? 'dark' : 'light'} mode!`)
        // Give Vanta time to render
        setTimeout(() => {
          setVantaStatus('active')
        }, 1200)
      } else {
        throw new Error("Effect creation failed - no destroy method")
      }

    } catch (error) {
      console.error("[Vanta] Failed to initialize effect:", error)
      setVantaStatus('failed')
    } finally {
      isInitializing.current = false
    }
  }

  // Load required scripts
  const loadScript = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve()
        return
      }

      const script = document.createElement('script')
      script.src = src
      script.async = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error(`Failed to load: ${src}`))
      document.head.appendChild(script)
    })
  }

  // Load only required Vanta scripts
  const loadVantaScripts = async () => {
    const scripts = [
      '/js/vanta/three.min.js',        // Three.js library
      '/js/vanta/vanta.globe.min.js',  // Globe effect for both modes
    ]

    try {
      console.log("[Vanta] Loading required scripts...")
      await Promise.all(scripts.map(script => loadScript(script)))
      console.log("[Vanta] All scripts loaded successfully")
      return true
    } catch (error) {
      console.error("[Vanta] Error loading scripts:", error)
      return false
    }
  }

  // Check if libraries are loaded
  const checkLibrariesLoaded = () => {
    const hasThree = !!(window.THREE)
    const hasVanta = !!(window.VANTA)
    const hasGlobe = !!(window.VANTA?.GLOBE)
    
    const allLoaded = hasThree && hasVanta && hasGlobe
    
    console.log(`[Vanta] Library check:`, {
      THREE: hasThree,
      VANTA: hasVanta,
      GLOBE: hasGlobe,
      allLoaded
    })
    
    return allLoaded
  }

  // Effect for initial setup
  useEffect(() => {
    console.log("[Vanta] Component mounted, loading scripts...")
    setVantaStatus('loading')
    
    const setupVanta = async () => {
      const scriptsLoaded = await loadVantaScripts()
      
      if (scriptsLoaded) {
        // Wait for scripts to initialize
        setTimeout(() => {
          if (checkLibrariesLoaded()) {
            initializeEffect()
          } else {
            console.error("[Vanta] Required libraries not loaded")
            setVantaStatus('failed')
          }
        }, 800)
      } else {
        setVantaStatus('failed')
      }
    }

    setupVanta()

    // Cleanup on unmount
    return () => {
      console.log("[Vanta] Component unmounting")
      destroyEffect()
    }
  }, [])

  // Effect for theme changes
  useEffect(() => {
    console.log("[Vanta] Theme changed to:", isDark ? "dark (GLOBE)" : "light (GLOBE)")
    
    // Only reinitialize if libraries are loaded
    if (checkLibrariesLoaded() && vantaRef.current) {
      setTimeout(initializeEffect, 200)
    }
  }, [isDark])

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -10,
        pointerEvents: "auto",
        // Show fallback background only if Vanta is not active
        backgroundColor: vantaStatus === 'active' ? 'transparent' : (isDark ? '#0f172a' : '#f8fafc'),
        // Smooth transition when Vanta loads
        transition: vantaStatus === 'loading' ? 'none' : 'background-color 0.5s ease',
      }}
    >
      {/* Loading indicator */}
      {vantaStatus === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-sm opacity-50 animate-pulse ${isDark ? 'text-white' : 'text-gray-600'}`}>
            Loading Globe background...
          </div>
        </div>
      )}
      
      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white px-3 py-2 rounded text-xs">
          <div>Status: {vantaStatus}</div>
          <div>Theme: {isDark ? 'Dark (Globe)' : 'Light (Globe)'}</div>
        </div>
      )}
      
      {/* Error fallback */}
      {vantaStatus === 'failed' && process.env.NODE_ENV === 'development' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-xs opacity-40 ${isDark ? 'text-white' : 'text-gray-600'}`}>
            Vanta effect failed to load
          </div>
        </div>
      )}
    </div>
  )
}
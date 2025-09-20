"use client"

import { useEffect, useRef, useState } from "react"

interface VantaBackgroundProps {
  isDark: boolean
}

export default function VantaBackground({ isDark }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkVantaLoaded = () => {
      console.log("[v0] Checking Vanta loaded:", {
        VANTA: !!(window as any).VANTA,
        THREE: !!(window as any).THREE,
        NET: !!(window as any).VANTA?.NET,
        DOTS: !!(window as any).VANTA?.DOTS,
      })

      if ((window as any).VANTA && (window as any).THREE && (window as any).VANTA.NET && (window as any).VANTA.DOTS) {
        console.log("[v0] All Vanta libraries loaded successfully")
        setIsLoaded(true)
      } else {
        setTimeout(checkVantaLoaded, 200) // Increased timeout for local files
      }
    }

    // Wait a bit longer for local files to load
    setTimeout(checkVantaLoaded, 500)
  }, [])

  useEffect(() => {
    if (!vantaRef.current || !isLoaded) {
      console.log("[v0] Vanta not ready:", { ref: !!vantaRef.current, loaded: isLoaded })
      return
    }

    // Clean up previous effect
    if (vantaEffect.current) {
      console.log("[v0] Destroying previous Vanta effect")
      vantaEffect.current.destroy()
    }

    const initVanta = () => {
      console.log("[v0] Initializing Vanta effect for mode:", isDark ? "dark" : "light")

      if (isDark) {
        // Dark mode: NET effect with enhanced mouse interaction
        if ((window as any).VANTA?.NET) {
          vantaEffect.current = (window as any).VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x3b82f6,
            backgroundColor: 0x0f172a,
            points: 12.0, // Increased points for better interaction
            maxDistance: 25.0,
            spacing: 15.0,
            showDots: true,
          })
          console.log("[v0] NET effect initialized")
        } else {
          console.log("[v0] VANTA.NET not available")
        }
      } else {
        // Light mode: DOTS effect with particle interaction
        if ((window as any).VANTA?.DOTS) {
          vantaEffect.current = (window as any).VANTA.DOTS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xf97316,
            color2: 0xfbbf24,
            backgroundColor: 0xfefefe,
            size: 4.0, // Increased size for better visibility
            spacing: 20.0,
            showLines: true,
          })
          console.log("[v0] DOTS effect initialized")
        } else {
          console.log("[v0] VANTA.DOTS not available")
        }
      }
    }

    setTimeout(initVanta, 300)

    return () => {
      if (vantaEffect.current) {
        console.log("[v0] Cleaning up Vanta effect")
        vantaEffect.current.destroy()
      }
    }
  }, [isDark, isLoaded])

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10 transition-opacity duration-500"
      style={{
        opacity: 0.7, // Slightly increased opacity for better visibility
        pointerEvents: "auto",
      }}
    />
  )
}

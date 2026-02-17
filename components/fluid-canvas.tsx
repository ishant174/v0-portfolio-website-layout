"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    fluidSimulation?: (canvas: HTMLCanvasElement, config: Record<string, unknown>) => (() => void);
  }
}

export function FluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cleanupRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Load the WebGL fluid simulation script
    const script = document.createElement("script")
    script.src = "/webgl-fluid.js"
    script.async = true
    script.onload = () => {
      if (window.fluidSimulation && canvas) {
        cleanupRef.current = window.fluidSimulation(canvas, {
          SIM_RESOLUTION: 128,
          DYE_RESOLUTION: 1024,

          // ⭐ keep colors alive longer
          DENSITY_DISSIPATION: 0.6,
          VELOCITY_DISSIPATION: 1.5,

          PRESSURE: 0.8,
          PRESSURE_ITERATIONS: 25,
          CURL: 30,

          // ⭐ stronger visible splashes
          SPLAT_RADIUS: 0.45,
          SPLAT_FORCE: 6000,

          // ⭐ IMPORTANT — adds depth & contrast
          SHADING: true,

          COLORFUL: true,
          COLOR_UPDATE_SPEED: 10,

          PAUSED: false,

          // keep transparent but improve visibility
          BACK_COLOR: { r: 255, g: 255, b: 255 },
          TRANSPARENT: true,

          // ⭐ MAIN VISIBILITY FIX
          BLOOM: true,
          BLOOM_ITERATIONS: 8,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 1.1,   // was 0.4
          BLOOM_THRESHOLD: 0.2,   // lower = more glow
          BLOOM_SOFT_KNEE: 0.8,

          SUNRAYS: false,
        })

      }
    }
    document.body.appendChild(script)

    return () => {
      if (cleanupRef.current) cleanupRef.current()
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "auto" }}
      aria-hidden="true"
    />
  )
}

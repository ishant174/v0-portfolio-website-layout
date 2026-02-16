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
          CAPTURE_RESOLUTION: 512,
          DENSITY_DISSIPATION: 1.5,
          VELOCITY_DISSIPATION: 2,
          PRESSURE: 0.8,
          PRESSURE_ITERATIONS: 20,
          CURL: 30,
          SPLAT_RADIUS: 0.35,
          SPLAT_FORCE: 6000,
          SHADING: true,
          COLORFUL: true,
          COLOR_UPDATE_SPEED: 10,
          PAUSED: false,
          BACK_COLOR: { r: 255, g: 255, b: 255 },
          TRANSPARENT: true,
          BLOOM: true,
          BLOOM_ITERATIONS: 8,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 0.8,
          BLOOM_THRESHOLD: 0.6,
          BLOOM_SOFT_KNEE: 0.7,
          SUNRAYS: true,
          SUNRAYS_RESOLUTION: 196,
          SUNRAYS_WEIGHT: 1.0,
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

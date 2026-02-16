"use client"

import { useEffect, useRef, useCallback } from "react"

// Fluid simulation using WebGL
// Based on Jos Stam's "Stable Fluids" paper

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function createProgram(gl: WebGLRenderingContext, vertSrc: string, fragSrc: string): WebGLProgram | null {
  const vert = compileShader(gl, gl.VERTEX_SHADER, vertSrc)
  const frag = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc)
  if (!vert || !frag) return null
  const prog = gl.createProgram()
  if (!prog) return null
  gl.attachShader(prog, vert)
  gl.attachShader(prog, frag)
  gl.linkProgram(prog)
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    gl.deleteProgram(prog)
    return null
  }
  return prog
}

const VERT = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const FRAG = `
precision highp float;
varying vec2 v_uv;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_mouseActive;

// Simplex-like noise
vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                      -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 p) {
  float f = 0.0;
  float w = 0.5;
  for (int i = 0; i < 5; i++) {
    f += w * snoise(p);
    p *= 2.0;
    w *= 0.5;
  }
  return f;
}

void main() {
  vec2 uv = v_uv;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 p = uv * aspect;
  
  float t = u_time * 0.15;
  
  // Mouse influence - creates a distortion around the cursor
  vec2 mouseUV = u_mouse * aspect;
  float mouseDist = length(p - mouseUV);
  float mouseInfluence = u_mouseActive * smoothstep(0.8, 0.0, mouseDist) * 0.6;
  
  // Warp coordinates based on noise and mouse
  vec2 warp = vec2(
    fbm(p * 1.2 + vec2(t * 0.7, t * 0.3) + mouseInfluence * 0.5),
    fbm(p * 1.2 + vec2(t * 0.4, t * 0.6) + mouseInfluence * 0.3)
  );
  
  vec2 warp2 = vec2(
    fbm(p * 0.8 + warp * 1.5 + vec2(t * 0.2, -t * 0.5)),
    fbm(p * 0.8 + warp * 1.5 + vec2(-t * 0.3, t * 0.4))
  );
  
  float n = fbm(p + warp2 * 2.0 + mouseInfluence * vec2(0.3, 0.5));
  
  // Color palette - soft pastel organic colors
  vec3 col1 = vec3(0.60, 0.95, 0.60); // soft green
  vec3 col2 = vec3(0.95, 0.70, 0.85); // pink
  vec3 col3 = vec3(0.70, 0.75, 0.98); // lavender blue
  vec3 col4 = vec3(0.98, 0.85, 0.50); // warm yellow
  vec3 col5 = vec3(0.95, 0.55, 0.40); // soft orange-red
  vec3 col6 = vec3(0.80, 0.50, 0.95); // purple
  
  // Mix colors based on noise
  float n1 = smoothstep(-0.4, 0.4, n);
  float n2 = smoothstep(-0.2, 0.6, fbm(p * 1.5 + warp * 0.8 + t * 0.2));
  float n3 = smoothstep(-0.3, 0.5, fbm(p * 0.7 + warp2 + t * 0.15));
  
  vec3 color = mix(col1, col2, n1);
  color = mix(color, col3, n2 * 0.6);
  color = mix(color, col4, smoothstep(0.2, 0.8, fbm(p * 2.0 + t * 0.3)) * 0.4);
  color = mix(color, col5, smoothstep(0.3, 0.7, n3) * 0.35);
  color = mix(color, col6, smoothstep(0.4, 0.9, fbm(p * 1.8 - warp + t * 0.25)) * 0.3);
  
  // Add swirl detail near mouse
  float swirl = sin(mouseDist * 15.0 - u_time * 2.0) * mouseInfluence * 0.15;
  color += swirl;
  
  // Make it brighter and more pastel
  color = mix(vec3(1.0), color, 0.55);
  
  // Soft vignette
  float vig = 1.0 - smoothstep(0.4, 1.4, length(uv - 0.5) * 1.2);
  float alpha = vig * 0.75;
  
  gl_FragColor = vec4(color, alpha);
}
`

export function FluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: 0 })
  const animRef = useRef<number>(0)
  const fadeRef = useRef(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return
    mouseRef.current.x = e.clientX / window.innerWidth
    mouseRef.current.y = 1.0 - e.clientY / window.innerHeight
    mouseRef.current.active = 1
    fadeRef.current = 1.0
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = 0
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false })
    if (!gl) return

    const program = createProgram(gl, VERT, FRAG)
    if (!program) return

    // Fullscreen quad
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)

    const aPos = gl.getAttribLocation(program, "a_position")
    const uTime = gl.getUniformLocation(program, "u_time")
    const uMouse = gl.getUniformLocation(program, "u_mouse")
    const uRes = gl.getUniformLocation(program, "u_resolution")
    const uMouseActive = gl.getUniformLocation(program, "u_mouseActive")

    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    resize()
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    const startTime = performance.now()

    const render = () => {
      const time = (performance.now() - startTime) / 1000

      // Fade mouse influence
      if (mouseRef.current.active === 0) {
        fadeRef.current *= 0.98
      }

      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)

      gl.useProgram(program)
      gl.uniform1f(uTime, time)
      gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uMouseActive, fadeRef.current)

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      animRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

import { useEffect, useRef, useState } from 'react'
import '../styles/cyclops.css'

function Cyclops({ variant = 'floating' }) {
  const [look, setLook] = useState({ x: 0, y: 0 })

  const svgRef = useRef(null)
  const draggingRef = useRef(false)
  const dragOffsetRef = useRef({ x: 0, y: 0 })

  const isLogo = variant === 'logo'

  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem('cyclops-position')

    if (saved) {
      return JSON.parse(saved)
    }

    return {
      x: -11,
      y: window.innerHeight / 2 - 120,
    }
  })

  // =========================
  // EYE TRACKING
  // =========================

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!svgRef.current) return

      const rect = svgRef.current.getBoundingClientRect()

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height * 0.38

      const dx = event.clientX - centerX
      const dy = event.clientY - centerY

      const maxDistance = isLogo ? 5 : 14
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance === 0) {
        setLook({ x: 0, y: 0 })
        return
      }

      const normalizedX = dx / distance
      const normalizedY = dy / distance

      const strength = Math.min(
        distance / (isLogo ? 120 : 180),
        1
      )

      setLook({
        x: normalizedX * maxDistance * strength,
        y: normalizedY * maxDistance * strength,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isLogo])

  // =========================
  // FLOATING CYCLOPS DRAG
  // =========================

  const handlePointerDown = (event) => {
    if (isLogo) return

    draggingRef.current = true

    dragOffsetRef.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    }

    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (isLogo || !draggingRef.current) return

    const newX = event.clientX - dragOffsetRef.current.x
    const newY = event.clientY - dragOffsetRef.current.y

    setPosition({
      x: newX,
      y: newY,
    })
  }

  const handlePointerUp = () => {
    if (isLogo) return

    draggingRef.current = false

    localStorage.setItem(
      'cyclops-position',
      JSON.stringify(position)
    )
  }

  // =========================
  // SVG
  // =========================

  const cyclopsSvg = (
    <svg
      ref={svgRef}
      width="512"
      height="512"
      viewBox="105 35 302 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cyclops-svg"
    >
      {/* HEAD */}

      <path
        d="
          M256 48
          C177 48 118 108 118 190
          C118 274 176 336 256 336
          C336 336 394 274 394 190
          C394 108 335 48 256 48
          Z
        "
        className="cyclops-head"
      />

      {/* EYE SOCKET */}

      <path
        d="
          M160 194
          C183 157 218 137 256 137
          C294 137 329 157 352 194
          C331 225 297 247 256 247
          C215 247 181 225 160 194
          Z
        "
        className="cyclops-eye-socket"
      />

      {/* EYE WHITE */}

      <path
        d="
          M165 194
          C187 162 220 143 256 143
          C292 143 325 162 347 194
          C327 220 294 241 256 242
          C218 241 185 220 165 194
          Z
        "
        className="cyclops-eye-white"
      />

      {/* IRIS */}

      <g
        className="cyclops-gaze"
        style={{
          transform: `translate(${look.x}px, ${look.y}px)`,
        }}
      >
        <circle
          cx="256"
          cy="194"
          r="37"
          className="cyclops-iris"
        />

        <circle
          cx="256"
          cy="194"
          r="14"
          className="cyclops-pupil"
        />

        <circle
          cx="268"
          cy="181"
          r="6"
          className="cyclops-highlight"
        />
      </g>

      {/* MOUTH */}

      <path
        d="
          M239 279
          C249 285 263 285 273 279
        "
        className="cyclops-mouth"
      />
    </svg>
  )

  // =========================
  // LOGO VERSION
  // =========================

  if (isLogo) {
    return (
      <div className="cyclops-logo">
        <div className="cyclops-logo-inner">
          {cyclopsSvg}
        </div>
      </div>
    )
  }

  // =========================
  // FLOATING VERSION
  // =========================

  return (
    <div
      className="floating-cyclops"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div className="cyclops">
        {cyclopsSvg}
      </div>
    </div>
  )
}

export default Cyclops
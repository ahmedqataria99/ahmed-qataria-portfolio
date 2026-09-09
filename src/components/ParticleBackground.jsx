import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    let mouse = { x: null, y: null, radius: 120 }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    const count = Math.min(Math.floor((width * height) / 22000), 55)
    const particles = []

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.4 + 0.2,
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Get accent RGB from CSS variable
      const accentStyle = getComputedStyle(document.documentElement)
      const accentRgb = accentStyle.getPropertyValue('--accent-rgb').trim() || '0, 240, 255'

      // Draw subtle grid overlay
      ctx.strokeStyle = `rgba(${accentRgb}, 0.015)`
      ctx.lineWidth = 1
      const gridSize = 60
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        else if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        else if (p.y > height) p.y = 0

        // Mouse reaction
        let distToMouse = 999
        if (mouse.x !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          distToMouse = Math.sqrt(dx * dx + dy * dy)
          if (distToMouse < mouse.radius) {
            const force = (mouse.radius - distToMouse) / mouse.radius
            p.x -= (dx / distToMouse) * force * 1.2
            p.y -= (dy / distToMouse) * force * 1.2
          }
        }

        ctx.fillStyle = `rgba(${accentRgb}, ${p.baseAlpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.15
            ctx.strokeStyle = `rgba(${accentRgb}, ${lineAlpha})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

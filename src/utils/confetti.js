// Lightweight Canvas Confetti Generator (No external dependencies)
export function triggerConfetti(originX, originY) {
  if (typeof window === 'undefined') return

  const canvas = document.createElement('canvas')
  canvas.style.position = 'fixed'
  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.width = '100vw'
  canvas.style.height = '100vh'
  canvas.style.pointerEvents = 'none'
  canvas.style.zIndex = '999999'
  document.body.appendChild(canvas)

  const dpr = window.devicePixelRatio || 1
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)

  const startX = originX || window.innerWidth / 2
  const startY = originY || window.innerHeight / 2

  const colors = ['#00F0FF', '#7000FF', '#00FF88', '#FF007F', '#FFE600', '#FFFFFF']
  const particleCount = 65
  const particles = []

  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 8 + 3
    particles.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      size: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      gravity: 0.22,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'rect' : 'circle',
    })
  }

  let animationFrame
  const startTime = performance.now()

  function animate(now) {
    const elapsed = now - startTime
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    let allDead = true

    particles.forEach(p => {
      p.x += p.vx
      p.y += p.vy
      p.vy += p.gravity
      p.vx *= 0.98
      p.rotation += p.vRot
      p.opacity = Math.max(0, 1 - elapsed / 1800)

      if (p.opacity > 0) {
        allDead = false
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = p.color

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
      }
    })

    if (!allDead && elapsed < 2000) {
      animationFrame = requestAnimationFrame(animate)
    } else {
      cancelAnimationFrame(animationFrame)
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  }

  animationFrame = requestAnimationFrame(animate)
}

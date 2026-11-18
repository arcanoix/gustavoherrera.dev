import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

const ConstellationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    let animationFrameId = 0
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particleCount = Math.min(
      180,
      Math.max(36, Math.floor((width * height) / 9000))
    )
    const maxDistance = width < 640 ? 150 : 230

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.4 + 0.8,
    }))

    const mouse = { x: -9999, y: -9999 }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    const draw = () => {
      const isDark = document.documentElement.classList.contains("dark")
      ctx.clearRect(0, 0, width, height)
      const time = prefersReducedMotion ? 0 : performance.now() / 1200

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        if (!prefersReducedMotion) {
          p.x += p.vx
          p.y += p.vy

          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
        }

        // Subtle mouse link
        const mdx = p.x - mouse.x
        const mdy = p.y - mouse.y
        const mDist = Math.hypot(mdx, mdy)
        if (mDist < 170) {
          const alpha = (1 - mDist / 170) * (isDark ? 0.35 : 0.25)
          ctx.beginPath()
          ctx.strokeStyle = isDark
            ? `rgba(167, 139, 250, ${alpha})`
            : `rgba(124, 58, 237, ${alpha})`
          ctx.lineWidth = 0.9
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }

        // A few luminous anchors give the network depth without glowing every edge.
        if (i % 11 === 0) {
          const pulse = 0.65 + Math.sin(time + i) * 0.25
          const glow = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.radius * 6
          )
          glow.addColorStop(
            0,
            `rgba(167, 139, 250, ${pulse * (isDark ? 0.55 : 0.22)})`
          )
          glow.addColorStop(1, "rgba(167, 139, 250, 0)")
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 6, 0, Math.PI * 2)
          ctx.fill()
          ctx.strokeStyle = `rgba(167, 139, 250, ${isDark ? 0.32 : 0.2})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2)
          ctx.stroke()
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = isDark
          ? "rgba(167, 139, 250, 0.45)"
          : "rgba(15, 23, 42, 0.22)"
        ctx.fill()

        // Limit each anchor's outgoing links so the mesh does not obscure content.
        let connections = 0
        for (let j = i + 1; j < particles.length && connections < 3; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.hypot(dx, dy)

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isDark ? 0.24 : 0.12)
            ctx.beginPath()
            ctx.strokeStyle = isDark
              ? `rgba(167, 139, 250, ${alpha})`
              : `rgba(15, 23, 42, ${alpha})`
            ctx.lineWidth = 0.75
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
            connections++
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw)
      }
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}

export default ConstellationCanvas

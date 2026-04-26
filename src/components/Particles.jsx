import { useEffect, useRef } from 'react'
import config from '../siteConfig'

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!config.animation.enableParticles) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const count = 40
      const types = ['bubble', 'heart', 'star']
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 15 + 5,
          type: types[Math.floor(Math.random() * types.length)],
          speedY: -(Math.random() * 0.4 + 0.1),
          speedX: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.1,
          pulse: Math.random() * Math.PI * 2,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.02
        })
      }
    }

    const drawHeart = (x, y, size, opacity) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size)
      ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0)
      ctx.fillStyle = `rgba(255, 143, 171, ${opacity})`
      ctx.fill()
      ctx.restore()
    }

    const drawStar = (x, y, size, opacity, rotation) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.beginPath()
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * size,
                   Math.sin((18 + i * 72) * Math.PI / 180) * size)
        ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * size / 2,
                   Math.sin((54 + i * 72) * Math.PI / 180) * size / 2)
      }
      ctx.closePath()
      ctx.fillStyle = `rgba(255, 236, 153, ${opacity})`
      ctx.fill()
      ctx.restore()
    }

    const drawBubble = (x, y, size, opacity) => {
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      const gradient = ctx.createRadialGradient(x - size * 0.3, y - size * 0.3, size * 0.1, x, y, size)
      gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity + 0.2})`)
      gradient.addColorStop(1, `rgba(189, 224, 254, ${opacity})`)
      ctx.fillStyle = gradient
      ctx.fill()
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.y += p.speedY
        p.x += p.speedX
        p.pulse += 0.02
        p.rotation += p.rotSpeed

        if (p.y + p.size < 0) {
          p.y = canvas.height + p.size
          p.x = Math.random() * canvas.width
        }

        const currentOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse))
        const currentSize = p.size * (0.9 + 0.1 * Math.sin(p.pulse))

        if (p.type === 'heart') drawHeart(p.x, p.y, currentSize, currentOpacity)
        else if (p.type === 'star') drawStar(p.x, p.y, currentSize, currentOpacity, p.rotation)
        else drawBubble(p.x, p.y, currentSize, currentOpacity)
      })
      animationId = requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    draw()

    window.addEventListener('resize', () => { resize(); createParticles(); })
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="particles-canvas" />
}

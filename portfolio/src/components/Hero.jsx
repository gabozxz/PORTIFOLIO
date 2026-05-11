import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w, h, particles, animId

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    const initParticles = () => {
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,169,110,${p.alpha})`
        ctx.fill()
      })
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(200,169,110,${0.06 * (1 - d / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()
    window.addEventListener('resize', () => { resize(); initParticles() })
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__noise" />

      <div className="hero__content">
        <div className="hero__tag fade-up" style={{ '--d': '0s' }}>
          <span className="dot" />
          disponível para projetos
        </div>

        <h1 className="hero__name fade-up" style={{ '--d': '0.15s' }}>
          <span className="hero__name-first">João</span>
          <br />
          <span className="hero__name-last">Silva<span className="accent">.</span></span>
        </h1>

        <p className="hero__role fade-up" style={{ '--d': '0.3s' }}>
          Desenvolvedor Full-Stack &amp; Designer de Interfaces
        </p>

        <p className="hero__desc fade-up" style={{ '--d': '0.42s' }}>
          Construo sistemas digitais com atenção obsessiva<br />
          ao detalhe — do banco de dados à experiência visual.
        </p>

        <div className="hero__actions fade-up" style={{ '--d': '0.55s' }}>
          <a href="#projetos" className="btn btn--primary">
            Ver Projetos
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contato" className="btn btn--ghost">Contato</a>
        </div>

        <div className="hero__stats fade-up" style={{ '--d': '0.68s' }}>
          <div className="hero__stat">
            <span className="hero__stat-num">4+</span>
            <span className="hero__stat-label">anos de experiência</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">30+</span>
            <span className="hero__stat-label">projetos entregues</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">12</span>
            <span className="hero__stat-label">clientes ativos</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll fade-up" style={{ '--d': '1s' }}>
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}

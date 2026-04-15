import { useEffect, useState } from 'react'

export default function Hero() {
  const [typed, setTyped] = useState('')
  const name = 'Elda de Sousa Carvalho'

  useEffect(() => {
    let i = 0
    let t
    const tick = () => {
      if (i < name.length) {
        i++
        setTyped(name.slice(0, i))
        t = setTimeout(tick, 80)
      }
    }
    const start = setTimeout(tick, 600)
    return () => { clearTimeout(start); clearTimeout(t) }
  }, [])

  return (
    <section className="hero" id="inicio">
      <div className="hero-mesh"></div>
      <div className="hero-wrapper">
        <div className="hero-info">
          <span className="hero-wave">👋 Olá, eu sou a</span>
          <h1 className="hero-name">
            <span className="typing-text" id="typingName">{typed}</span>
            <span className="cursor-blink">|</span>
          </h1>
          <p className="hero-desc">Profissional sorridente e dedicada, que acredita no poder das conexões humanas e no crescimento contínuo. Sempre pronta para novos desafios!</p>
          <div className="hero-buttons">
            <a href="#contato" className="btn-gradient">
              <i className="fas fa-paper-plane"></i> Fale comigo
            </a>
            <a href="#sobre" className="btn-light">
              Saiba mais <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Dedicação</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">∞</span>
              <span className="stat-label">Vontade de aprender</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-hex">
            <img src="/perfil.jpg" alt="Elda de Sousa Carvalho" />
          </div>
          <div className="floating-badge badge-1">
            <i className="fas fa-heart"></i> Empatia
          </div>
          <div className="floating-badge badge-2">
            <i className="fas fa-star"></i> Proativa
          </div>
        </div>
      </div>
    </section>
  )
}

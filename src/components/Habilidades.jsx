import { useEffect } from 'react'
import useReveal from './useReveal.js'

const habs = [
  { icon: 'fa-comments', nome: 'Comunicação', percent: 92 },
  { icon: 'fa-people-group', nome: 'Trabalho em Equipe', percent: 95 },
  { icon: 'fa-lightbulb', nome: 'Criatividade', percent: 88 },
  { icon: 'fa-laptop', nome: 'Informática', percent: 78 },
  { icon: 'fa-clock', nome: 'Gestão de Tempo', percent: 85 },
  { icon: 'fa-hand-holding-heart', nome: 'Empatia', percent: 97 },
]

export default function Habilidades() {
  useReveal()

  useEffect(() => {
    const cards = document.querySelectorAll('.hex-card')
    if (!cards.length) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target.querySelector('.level-bar')
          if (bar) bar.style.width = bar.getAttribute('data-width') + '%'
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })
    cards.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section-diagonal section-colored" id="habilidades">
      <div className="diagonal-bg-alt"></div>
      <div className="container">
        <div className="section-top center-light">
          <span className="pill pill-light"><i className="fas fa-fire"></i> Competências</span>
          <h2>Minhas <span className="text-white">Habilidades</span></h2>
        </div>
        <div className="hex-grid">
          {habs.map(h => (
            <div key={h.nome} className="hex-card" data-reveal="">
              <div className="hex-icon"><i className={`fas ${h.icon}`}></i></div>
              <h3>{h.nome}</h3>
              <div className="hex-level">
                <div className="level-bar" data-width={h.percent}></div>
              </div>
              <span className="hex-percent">{h.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import useReveal from './useReveal.js'

const passos = [
  { icon: 'fa-graduation-cap', badge: 'Formação', titulo: 'Educação Acadêmica', texto: 'Base sólida de conhecimentos teóricos e práticos que direcionaram minha carreira profissional.' },
  { icon: 'fa-briefcase', badge: 'Experiência', titulo: 'Vivência Profissional', texto: 'Experiências que desenvolveram minha capacidade de adaptação, comunicação e resolução de problemas.' },
  { icon: 'fa-rocket', badge: 'Evolução', titulo: 'Desenvolvimento Contínuo', texto: 'Cursos, capacitações e experiências que me mantêm atualizada e pronta para os desafios do mercado.' },
]

export default function Trajetoria() {
  useReveal()
  return (
    <section className="section" id="trajetoria">
      <div className="container">
        <div className="section-top">
          <span className="pill"><i className="fas fa-route"></i> Caminho</span>
          <h2>Minha <span className="gradient-text">Trajetória</span></h2>
        </div>
        <div className="steps">
          {passos.map(p => (
            <div key={p.badge} className="step-card" data-reveal="">
              <div className="step-icon">
                <i className={`fas ${p.icon}`}></i>
              </div>
              <div className="step-connector"></div>
              <div className="step-info">
                <span className="step-badge">{p.badge}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

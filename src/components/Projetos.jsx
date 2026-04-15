import useReveal from './useReveal.js'
import { projetos } from '../data/projetos.js'

export default function Projetos() {
  useReveal()
  return (
    <section className="section" id="projetos">
      <div className="container">
        <div className="section-top">
          <span className="pill"><i className="fas fa-folder-open"></i> Experiências</span>
          <h2>Meus <span className="gradient-text">Projetos</span></h2>
        </div>
        <div className="projetos-grid">
          {projetos.map(p => (
            <div key={p.id} className="projeto-card" data-reveal="">
              <div className="projeto-emoji">{p.emoji}</div>
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
              <div className="projeto-tags">
                {p.tags.map(t => <span key={t} className="projeto-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

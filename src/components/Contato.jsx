import useReveal from './useReveal.js'

export default function Contato() {
  useReveal()
  return (
    <section className="section" id="contato">
      <div className="container">
        <div className="section-top">
          <span className="pill"><i className="fas fa-handshake"></i> Conexão</span>
          <h2>Vamos nos <span className="gradient-text">conectar?</span></h2>
        </div>
        <p className="contact-subtitle">Adoraria conhecer novas pessoas e oportunidades. Sinta-se à vontade para entrar em contato!</p>
        <div className="contact-cards">
          <a href="mailto:eldasousac@gmail.com" className="c-card" data-reveal="">
            <div className="c-card-glow"></div>
            <div className="c-card-icon"><i className="fas fa-envelope"></i></div>
            <span className="c-card-title">E-mail</span>
            <span className="c-card-text">eldasousac@gmail.com</span>
            <span className="c-card-arrow"><i className="fas fa-arrow-up-right-from-square"></i></span>
          </a>
          <a href="https://github.com/eldasousac-dev" target="_blank" rel="noopener noreferrer" className="c-card" data-reveal="">
            <div className="c-card-glow"></div>
            <div className="c-card-icon"><i className="fab fa-github"></i></div>
            <span className="c-card-title">GitHub</span>
            <span className="c-card-text">eldasousac-dev</span>
            <span className="c-card-arrow"><i className="fas fa-arrow-up-right-from-square"></i></span>
          </a>
        </div>
      </div>
    </section>
  )
}

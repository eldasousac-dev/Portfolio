import useReveal from './useReveal.js'

const itens = [
  { num: '01', titulo: 'Meu Jeito', texto: 'Sou Elda de Sousa Carvalho, uma pessoa que leva leveza e comprometimento a tudo o que faz. Acredito que um sorriso e uma atitude positiva transformam qualquer ambiente de trabalho.' },
  { num: '02', titulo: 'Minha Missão', texto: 'Crescer profissionalmente enquanto contribuo para o sucesso das equipes em que atuo. Valorizo ambientes colaborativos e acredito no potencial de cada pessoa.' },
  { num: '03', titulo: 'O Que Me Move', texto: 'Curiosidade, vontade de evoluir e o desejo de fazer a diferença. Cada novo desafio é uma oportunidade de aprendizado e superação pessoal.' },
]

export default function Sobre() {
  useReveal()
  return (
    <section className="section-diagonal" id="sobre">
      <div className="diagonal-bg"></div>
      <div className="container">
        <div className="section-top">
          <span className="pill"><i className="fas fa-user-circle"></i> Sobre mim</span>
          <h2>Quem é a <span className="gradient-text">Elda?</span></h2>
        </div>
        <div className="about-row">
          {itens.map(it => (
            <div key={it.num} className="about-item" data-reveal="">
              <div className="about-num">{it.num}</div>
              <div className="about-body">
                <h3>{it.titulo}</h3>
                <p>{it.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

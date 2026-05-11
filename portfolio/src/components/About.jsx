import './About.css'

const timeline = [
  { year: '2024', role: 'Dev Full-Stack', company: 'Prefeitura Municipal', desc: 'Sistemas de gestão pública — transporte escolar, frota e RH.' },
  { year: '2023', role: 'Dev Front-End', company: 'Agência Digital', desc: 'Interfaces para SaaS B2B com React, Tailwind e integrações REST.' },
  { year: '2022', role: 'Freelancer', company: 'Projetos Próprios', desc: 'E-commerces, landing pages e dashboards para clientes locais.' },
  { year: '2021', role: 'Início', company: 'Autodidata', desc: 'Primeiros passos com HTML, CSS, JS e os fundamentos de backend.' },
]

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="section__label">
        <span className="label-num">01</span>
        <span>sobre mim</span>
      </div>

      <div className="about__grid">
        <div className="about__left">
          <h2 className="about__heading">
            Código limpo,<br />
            <em>intenção clara.</em>
          </h2>

          <p className="about__text">
            Sou desenvolvedor apaixonado por criar sistemas que resolvem problemas reais.
            Trabalho na interseção entre engenharia de software e design de produto —
            construindo interfaces que são tão bem pensadas quanto o código por baixo delas.
          </p>
          <p className="about__text">
            Atualmente atuo no setor público municipal, desenvolvendo ferramentas de gestão
            que impactam diretamente a vida de pessoas. Acredito que tecnologia bem feita
            transforma processos e gera valor duradouro.
          </p>

          <div className="about__badges">
            {['Supabase', 'React', 'Node.js', 'PostgreSQL', 'Figma', 'Vite'].map(b => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>
        </div>

        <div className="about__right">
          <div className="about__portrait">
            <div className="portrait__frame">
              <div className="portrait__inner">
                <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="portrait__avatar">
                  <rect width="200" height="240" fill="var(--bg-2)"/>
                  <circle cx="100" cy="90" r="42" fill="var(--bg-1)" stroke="var(--border-lg)" strokeWidth="1"/>
                  <path d="M30 240c0-38.66 31.34-70 70-70s70 31.34 70 70" fill="var(--bg-1)" stroke="var(--border-lg)" strokeWidth="1"/>
                  <circle cx="100" cy="88" r="22" fill="var(--text-dim)"/>
                </svg>
                <div className="portrait__badge">
                  <span className="portrait__badge-dot" />
                  Open to work
                </div>
              </div>
            </div>
          </div>

          <div className="about__timeline">
            <div className="timeline__label">Trajetória</div>
            {timeline.map((t, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__year">{t.year}</div>
                <div className="timeline__body">
                  <div className="timeline__role">{t.role}</div>
                  <div className="timeline__company">{t.company}</div>
                  <div className="timeline__desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

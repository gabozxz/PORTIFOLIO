import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    id: '01',
    title: 'SIGTEM',
    subtitle: 'Sistema de Gestão de Transporte Escolar Municipal',
    tags: ['React', 'Supabase', 'PostgreSQL', 'PWA'],
    year: '2024',
    color: '#c8a96e',
    desc: 'Plataforma completa para gestão de transporte escolar. Cadastro de alunos, rotas, motoristas, frequência e relatórios — tudo em uma interface responsiva pensada para gestores municipais.',
    status: 'Em produção',
  },
  {
    id: '02',
    title: 'FrotaControl',
    subtitle: 'Sistema de Gestão de Frota Pública',
    tags: ['HTML', 'Vanilla JS', 'LocalStorage'],
    year: '2024',
    color: '#6e8cc8',
    desc: 'Gestão completa de veículos, motoristas, peças e rotas para frotas municipais. Single-file, zero dependências externas, pensado para ambientes com conectividade limitada.',
    status: 'Em produção',
  },
  {
    id: '03',
    title: 'EduBus',
    subtitle: 'Cadastro de Alunos e Rotas',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: '2023',
    color: '#6ec8a0',
    desc: 'Interface de cadastro para alunos e rotas de transporte escolar. UI escura com experiência fluida para uso diário por secretárias e gestores de escola.',
    status: 'Legado',
  },
  {
    id: '04',
    title: 'Dashboard Analytics',
    subtitle: 'Painel de Indicadores Municipais',
    tags: ['React', 'Recharts', 'REST API'],
    year: '2023',
    color: '#c86e8c',
    desc: 'Painel de visualização de dados com indicadores educacionais e de infraestrutura. Gráficos interativos, filtros por período e exportação de relatórios em PDF.',
    status: 'Entregue',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projetos" className="section projects">
      <div className="section__label">
        <span className="label-num">02</span>
        <span>projetos</span>
      </div>

      <div className="projects__header">
        <h2 className="projects__heading">
          Trabalhos<br />
          <em>selecionados</em>
        </h2>
        <p className="projects__sub">
          Uma seleção de sistemas e interfaces que construí —<br />
          cada um resolvendo um problema específico.
        </p>
      </div>

      <div className="projects__list">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className={`project-card ${hovered === i ? 'hovered' : ''} ${hovered !== null && hovered !== i ? 'dimmed' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ '--accent-card': p.color }}
          >
            <div className="project-card__num">{p.id}</div>

            <div className="project-card__main">
              <div className="project-card__top">
                <div>
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__subtitle">{p.subtitle}</p>
                </div>
                <div className="project-card__meta">
                  <span className="project-card__year">{p.year}</span>
                  <span className={`project-card__status status--${p.status === 'Em produção' ? 'green' : p.status === 'Legado' ? 'dim' : 'gold'}`}>
                    {p.status}
                  </span>
                </div>
              </div>

              <p className="project-card__desc">{p.desc}</p>

              <div className="project-card__bottom">
                <div className="project-card__tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <button className="project-card__cta">
                  Ver detalhes
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="project-card__bar" />
          </div>
        ))}
      </div>
    </section>
  )
}

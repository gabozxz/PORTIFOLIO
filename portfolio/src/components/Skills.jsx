import './Skills.css'

const categories = [
  {
    label: 'Front-End',
    skills: [
      { name: 'React / JSX', level: 90 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Vite', level: 85 },
      { name: 'JavaScript ES6+', level: 90 },
    ],
  },
  {
    label: 'Back-End & DB',
    skills: [
      { name: 'Supabase', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    label: 'Ferramentas',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Figma', level: 70 },
      { name: 'VS Code', level: 95 },
      { name: 'Linux / CLI', level: 78 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__label">
        <span className="label-num">03</span>
        <span>skills</span>
      </div>

      <div className="skills__header">
        <h2 className="skills__heading">
          Tecnologias &amp;<br />
          <em>ferramentas</em>
        </h2>
      </div>

      <div className="skills__grid">
        {categories.map(cat => (
          <div key={cat.label} className="skills__category">
            <div className="skills__cat-label">{cat.label}</div>
            <div className="skills__bars">
              {cat.skills.map(s => (
                <div key={s.name} className="skill-bar">
                  <div className="skill-bar__info">
                    <span className="skill-bar__name">{s.name}</span>
                    <span className="skill-bar__pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div
                      className="skill-bar__fill"
                      style={{ '--w': `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills__extras">
        <div className="skills__extras-label">Também conheço</div>
        {['TypeScript', 'Python', 'Docker', 'Tailwind CSS', 'Next.js', 'Express', 'Prisma', 'Redis', 'GraphQL', 'Firebase'].map(t => (
          <span key={t} className="skills__extra-tag">{t}</span>
        ))}
      </div>
    </section>
  )
}

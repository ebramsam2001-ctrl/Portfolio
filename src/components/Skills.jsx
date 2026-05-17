const skills = [
  {
    icon: '🎨', label: 'Frontend', color: 'rgba(110,231,183,0.1)',
    tags: ['HTML','CSS','JavaScript','TypeScript','React','Angular','Bootstrap','Sass','Tailwind'],
  },
  {
    icon: '⚡', label: 'Backend', color: 'rgba(167,139,250,0.1)',
    tags: ['Node.js','Express','.NET','PHP','Python','Java'],
  },
  {
    icon: '🗄️', label: 'Databases', color: 'rgba(251,191,36,0.1)',
    tags: ['MySQL','MongoDB','PostgreSQL','Firebase','Microsoft SQL Server'],
  },
  {
    icon: '☁️', label: 'Cloud', color: 'rgba(96,165,250,0.1)',
    tags: ['Google Cloud','AWS','Git','GitHub'],
  },
  {
    icon: '📱', label: 'Mobile', color: 'rgba(244,114,182,0.1)',
    tags: ['Flutter','Dart','Firebase','Cubit','SQFlite','Android Studio'],
  },
  {
    icon: '🔧', label: 'Tools & APIs', color: 'rgba(52,211,153,0.1)',
    tags: ['RESTful APIs','VS Code','Postman','WordPress','SEO','Web Security'],
  },
]

const devopsTools = [
  { name: 'Docker',      icon: '🐳' },
  { name: 'Linux',       icon: '🐧' },
  { name: 'Kubernetes',  icon: '☸️' },
  { name: 'Jenkins',     icon: '🔁' },
  { name: 'Prometheus',  icon: '📈' },
  { name: 'SonarQube',   icon: '🔍' },
  { name: 'Maven',       icon: '📦' },
  { name: 'Grafana',     icon: '📊' },
  { name: 'Ansible',     icon: '⚙️' },
  { name: 'Terraform',   icon: '🌍' },
]

const soft = ['Problem Solving','Team Collaboration','Time Management','Communication','Adaptability','Attention to Detail']

function SkillCard({ s }) {
  return (
    <div
      style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: '0.75rem', padding: '1.75rem',
        transition: 'all 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent2)'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(167,139,250,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
        <div style={{
          width: 40, height: 40, borderRadius: '10px',
          background: s.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem',
        }}>
          {s.icon}
        </div>
        <h4 className="font-display" style={{ fontWeight: 600, fontSize: '0.95rem' }}>{s.label}</h4>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
        {s.tags.map(t => <span key={t} className="tag active">{t}</span>)}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 3rem' }}>
      <div className="reveal">
        <div className="section-label">02 — Skills</div>
        <h2 className="section-title font-display">Technical Stack</h2>
        <div className="section-divider" />

        {/* Main skill cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {skills.map(s => <SkillCard key={s.label} s={s} />)}
        </div>

        {/* ── Tools Section ── */}
        <div style={{ marginTop: '3.5rem' }}>
          <h3 className="font-mono" style={{
            fontSize: '0.72rem', fontWeight: 700, marginBottom: '1.5rem',
            color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.15em',
          }}>
            Tools
          </h3>

          {/* DevOps subsection */}
          <div
            style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '0.75rem', padding: '1.75rem', marginBottom: '1.25rem',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(110,231,183,0.07)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: 40, height: 40, borderRadius: '10px',
                background: 'rgba(96,165,250,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem',
              }}>
                🚀
              </div>
              <h4 className="font-display" style={{ fontWeight: 600, fontSize: '0.95rem' }}>DevOps</h4>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {devopsTools.map(t => (
                <span
                  key={t.name}
                  className="tag active"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <span style={{ fontSize: '0.8rem' }}>{t.icon}</span>
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Agile Methodology */}
          <div
            style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: '0.75rem', padding: '1.5rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent3)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(251,191,36,0.07)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: '10px',
              background: 'rgba(251,191,36,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.2rem', flexShrink: 0,
            }}>
              🔄
            </div>
            <div>
              <h4 className="font-display" style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                Agile Methodology
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {['Scrum','Sprint Planning','Kanban','Retrospectives','Daily Standups'].map(t => (
                  <span key={t} className="tag" style={{ borderColor: 'rgba(251,191,36,0.25)', color: 'var(--accent3)', background: 'rgba(251,191,36,0.06)' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Soft skills */}
        <div style={{ marginTop: '2.5rem' }}>
          <h3 className="font-mono" style={{
            fontSize: '0.72rem', fontWeight: 700, marginBottom: '1rem',
            color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.15em',
          }}>
            Soft Skills
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {soft.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

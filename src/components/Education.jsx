const edu = [
  { badge: 'Degree',    title: 'BSc Computer Science & AI — Software Engineering', school: 'Ahram Canadian University', period: 'Sep 2019 – Jun 2024', color: 'var(--accent3)' },
  { badge: 'Ongoing',   title: 'Digilians Program',                                 school: 'Military Academy',          period: 'Dec 2025 – Present',  color: 'var(--accent)' },
  { badge: 'Online',    title: 'Flutter & Dart Development',                        school: 'Udemy',                     period: 'Jun 2025 – Present',  color: 'var(--accent2)' },
  { badge: 'Completed', title: 'Android & iOS Apps (Flutter)',                      school: 'Black Horse Academy',       period: 'Jun 2024 – Aug 2024', color: 'var(--accent)' },
  { badge: 'Course',    title: 'Introduction to Cyber Security',                    school: 'Ahram Canadian University', period: 'Oct 2019 – Nov 2019', color: 'var(--accent2)' },
]

const langs = [
  { flag: '🇪🇬', name: 'Arabic',  level: 'Native' },
  { flag: '🇬🇧', name: 'English', level: 'Intermediate' },
  { flag: '🇩🇪', name: 'German',  level: 'Beginner' },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '6rem 3rem', background: 'var(--surface)' }}>
      <div className="reveal">
        <div className="section-label">05 — Education</div>
        <h2 className="section-title font-display">Learning Path</h2>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '1.1rem',
          marginBottom: '3.5rem',
        }}>
          {edu.map(e => (
            <div
              key={e.title}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: '0.75rem', padding: '1.75rem',
                transition: 'all 0.25s',
              }}
              onMouseEnter={ev => {
                ev.currentTarget.style.borderColor = e.color
                ev.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={ev => {
                ev.currentTarget.style.borderColor = 'var(--border)'
                ev.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span className="font-mono" style={{
                display: 'inline-block',
                fontSize: '0.62rem', color: e.color,
                border: `1px solid ${e.color}55`,
                padding: '0.18rem 0.55rem', borderRadius: '0.2rem',
                marginBottom: '0.9rem',
              }}>
                {e.badge}
              </span>
              <h3 className="font-display" style={{ fontSize: '0.93rem', fontWeight: 600, lineHeight: 1.4, marginBottom: '0.35rem' }}>
                {e.title}
              </h3>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent2)', marginBottom: '0.3rem' }}>{e.school}</div>
              <div className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>{e.period}</div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <h3 className="font-mono" style={{
          fontSize: '0.72rem', fontWeight: 700, marginBottom: '1.25rem',
          color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.15em',
        }}>
          Languages
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {langs.map(l => (
            <div
              key={l.name}
              className="card-hover"
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: '0.75rem', padding: '1.25rem 1.75rem',
                minWidth: 130, textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>{l.flag}</div>
              <div className="font-display" style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.15rem' }}>{l.name}</div>
              <div className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>{l.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

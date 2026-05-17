const items = [
  {
    date: 'Jun 2025 – Present',
    title: 'Full Stack Web Developer',
    company: 'Freelance / Self-Employed',
    color: 'var(--accent)',
    bullets: [
      'Built full-stack web apps using HTML, CSS, JavaScript and Node.js',
      'Developed and consumed RESTful APIs for client–server communication',
      'Designed and managed databases with MySQL and MongoDB',
      'Implemented responsive UI designs for cross-browser compatibility',
    ],
  },
  {
    date: 'Jun 2024 – Present',
    title: 'Flutter Mobile Developer',
    company: 'Freelance / Self-Employed',
    color: 'var(--accent)',
    bullets: [
      'Cross-platform apps with Flutter and Dart for Android and iOS',
      'Chat App with real-time messaging via Firebase and Cubit',
      'Todo List App with offline storage using SQFlite',
      'News App fetching live content via REST API',
    ],
  },
  {
    date: 'Oct 2023 – Jun 2024',
    title: 'Backend Developer — Graduation Project',
    company: 'Ahram Canadian University',
    color: 'var(--accent2)',
    bullets: [
      'Led backend for Agriculture Auto-worker Robot (IoT)',
      'Firebase Realtime Database for real-time data sync',
      'JavaScript web interface for remote monitoring and control',
      'Project awarded an Excellent grade',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 3rem', background: 'var(--surface)' }}>
      <div className="reveal">
        <div className="section-label">03 — Experience</div>
        <h2 className="section-title font-display">Work History</h2>
        <div className="section-divider" />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 32px 1fr',
                gap: '0 1.5rem',
                alignItems: 'start',
                padding: '2rem 0',
              }}
            >
              {/* Date */}
              <div className="font-mono" style={{
                fontSize: '0.68rem', color: 'var(--muted)',
                textAlign: 'right', paddingTop: '0.25rem', lineHeight: 1.6,
              }}>
                {item.date}
              </div>

              {/* Timeline line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 12, height: 12, borderRadius: '50%',
                  background: item.color,
                  border: '2px solid var(--bg)',
                  boxShadow: `0 0 0 4px ${item.color}22`,
                  flexShrink: 0,
                }} />
                {i < items.length - 1 && (
                  <div style={{
                    width: 2, flex: 1, minHeight: 48,
                    background: `linear-gradient(180deg, ${item.color} 0%, var(--border) 100%)`,
                    marginTop: 4,
                  }} />
                )}
              </div>

              {/* Body */}
              <div style={{ paddingBottom: '1rem' }}>
                <h3 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                  {item.title}
                </h3>
                <div className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--accent2)', marginBottom: '1rem' }}>
                  {item.company}
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {item.bullets.map((b, j) => (
                    <li key={j} style={{
                      fontSize: '0.85rem', color: 'var(--muted)',
                      paddingLeft: '1.1rem', position: 'relative', lineHeight: 1.65,
                    }}>
                      <span style={{
                        position: 'absolute', left: 0, color: 'var(--accent)',
                        fontSize: '0.7rem', top: '0.18em',
                      }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

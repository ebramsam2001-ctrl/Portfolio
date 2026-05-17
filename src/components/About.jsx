const cards = [
  { icon: '💻', title: 'Frontend', desc: 'Responsive UIs with HTML, CSS, JavaScript, React and Angular.' },
  { icon: '⚙️', title: 'Backend', desc: 'Scalable APIs with Node.js, Express, .NET, PHP, Python and Java.' },
  { icon: '📱', title: 'Mobile', desc: 'Cross-platform apps with Flutter and Dart for Android and iOS.' },
  { icon: '☁️', title: 'Cloud', desc: 'Google Cloud, AWS, Git/GitHub, Agile/Scrum workflows.' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: '6rem 3rem', background: 'var(--surface)' }}
    >
      <div className="reveal">
        <div className="section-label">01 — About</div>
        <h2 className="section-title font-display">Who I Am</h2>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left text */}
          <div>
            {[
              "I'm a detail-oriented Full Stack Web Developer based in Cairo, Egypt, with a Bachelor's in Computer Science and Artificial Intelligence (Software Engineering) from Ahram Canadian University.",
              "I have hands-on experience building full-stack web and mobile applications, integrating RESTful APIs, and managing databases — always with performance and scalability in mind.",
              "Currently deepening my skills through the Digilians program and expanding into Flutter and Dart for cross-platform mobile development.",
            ].map((p, i) => (
              <p key={i} style={{
                color: 'var(--muted)', lineHeight: 1.85, fontSize: '0.95rem',
                marginBottom: '1.2rem',
              }}>{p}</p>
            ))}

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <span className="tag active">📍 Cairo, Egypt</span>
              <span className="tag active">📞 (+20) 155-276-9905</span>
            </div>
          </div>

          {/* Right cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {cards.map(c => (
              <div
                key={c.title}
                className="card-hover"
                style={{
                  background: 'var(--card)', border: '1px solid var(--border)',
                  borderRadius: '0.75rem', padding: '1.4rem',
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: '10px',
                  background: 'rgba(110,231,183,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div>
                  <h4 className="font-display" style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.25rem' }}>{c.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

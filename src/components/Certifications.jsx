const certs = [
  { icon: '🌐', name: 'Web Development Fundamentals', link: null },
  { icon: '⚡', name: 'JavaScript for Beginners', link: null },
  { icon: '🐙', name: 'Git & GitHub Essentials', link: null },
  { icon: '🏃', name: 'Delivering Quality Work with Agility', link: 'https://coursera.org/verify/9NS6J5CSGQOL' },
]

export default function Certifications() {
  return (
    <section id="certs" style={{ padding: '6rem 3rem' }}>
      <div className="reveal">
        <div className="section-label">06 — Certifications</div>
        <h2 className="section-title font-display">Credentials</h2>
        <div className="section-divider" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: 680 }}>
          {certs.map(c => (
            <div
              key={c.name}
              style={{
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: '0.65rem', padding: '1.1rem 1.5rem',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.paddingLeft = '2rem'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.paddingLeft = '1.5rem'
              }}
            >
              <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: c.link ? '0.2rem' : 0 }}>{c.name}</div>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono"
                    style={{ fontSize: '0.65rem', color: 'var(--accent)', textDecoration: 'none', display: 'block' }}
                    onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.target.style.textDecoration = 'none'}
                  >
                    {c.link} ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

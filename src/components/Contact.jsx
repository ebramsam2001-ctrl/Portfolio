import { useState } from 'react'

function CopyLink({ icon, label, copyValue, href }) {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    if (href) { window.open(href, '_blank'); return }
    navigator.clipboard?.writeText(copyValue).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {
      const ta = document.createElement('textarea')
      ta.value = copyValue
      document.body.appendChild(ta); ta.focus(); ta.select()
      try { document.execCommand('copy'); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch {}
      document.body.removeChild(ta)
    })
  }

  return (
    <button
      onClick={handleClick}
      style={{
        display: 'flex', alignItems: 'center', gap: '1rem',
        background: 'none', border: 'none', cursor: 'pointer',
        color: 'var(--text)', textAlign: 'left', width: '100%',
        fontSize: '0.9rem', transition: 'color 0.2s',
        fontFamily: 'Cabinet Grotesk, sans-serif',
        padding: '0.1rem 0',
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
    >
      <div style={{
        width: 38, height: 38, borderRadius: '0.5rem',
        background: 'var(--bg)', border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1rem', flexShrink: 0,
      }}>
        {icon}
      </div>
      <span>{copied ? '✅ Copied!' : label}</span>
    </button>
  )
}

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 3rem', background: 'var(--surface)' }}>
      <div className="reveal">
        <div className="section-label">07 — Contact</div>
        <h2 className="section-title font-display">Let's Connect</h2>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem', alignItems: 'center',
        }}>
          {/* Info */}
          <div>
            <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '2rem', fontSize: '0.95rem' }}>
              I'm open to freelance projects, full-time opportunities, and interesting collaborations.
              Whether you have a project in mind or just want to say hello, my inbox is always open.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <CopyLink icon="📧" label="ebramsam2001@gmail.com" copyValue="ebramsam2001@gmail.com" />
              <CopyLink icon="📞" label="(+20) 155-276-9905" copyValue="+201552769905" />
              <CopyLink icon="🐙" label="github.com/ebramsam2001-ctrl" href="https://github.com/ebramsam2001-ctrl" />
              <CopyLink icon="💼" label="linkedin.com/in/ebram-samuel" href="https://www.linkedin.com/in/ebram-samuel-268b07339/" />
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 120, height: 120, borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(110,231,183,0.12), rgba(167,139,250,0.12))',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '3rem', margin: '0 auto 1.5rem',
              animation: 'float 6s ease-in-out infinite',
            }}>
              ✉️
            </div>
            <p className="font-mono" style={{ color: 'var(--muted)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.2rem' }}>
              Reach out directly
            </p>
            <button
              className="btn btn-primary"
              style={{ fontSize: '0.9rem', padding: '1rem 2.25rem' }}
              onClick={() => window.location.href = 'mailto:ebramsam2001@gmail.com?subject=Hello%20Ebram'}
            >
              <a href='mailto:ebramsam2001@gmail.com'>Send Me an Email</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

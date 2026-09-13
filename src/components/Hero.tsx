import profileImg from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 3rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Glow blobs */}
      <div style={{
        position: 'absolute', top: '15%', right: '-5%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--glow-b) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '-5%', left: '-8%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, var(--glow-a) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite reverse',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1, width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        gap: '3rem', flexWrap: 'wrap',
      }}>
        {/* Left text */}
        <div style={{ flex: '1 1 480px', maxWidth: 800 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem',
            color: 'var(--accent)',
            border: '1px solid rgba(110,231,183,0.3)',
            padding: '0.3rem 0.85rem', borderRadius: '2rem',
            marginBottom: '2rem',
            animation: 'fadeUp 0.7s ease both',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--accent)', display: 'inline-block',
              animation: 'pulse 2s infinite',
            }} />
            Available for opportunities
          </div>

          {/* Name */}
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(3.2rem, 8vw, 7rem)', fontWeight: 700,
              lineHeight: 0.92, letterSpacing: '-0.04em',
              animation: 'fadeUp 0.7s 0.1s ease both',
            }}
          >
            Ebram
            <span style={{
              display: 'block',
              backgroundImage: 'linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Samuel
            </span>
          </h1>

          {/* Role */}
          <p style={{
            marginTop: '1.5rem', fontSize: '1.05rem',
            color: 'var(--muted)', maxWidth: 520, lineHeight: 1.75,
            animation: 'fadeUp 0.7s 0.2s ease both',
          }}>
            Full Stack Web Developer crafting responsive, secure, and scalable web applications —
            from pixel-perfect frontends to robust backend systems.
          </p>

          {/* CTAs */}
          <div style={{
            marginTop: '2.5rem', display: 'flex', gap: '0.85rem', flexWrap: 'wrap',
            animation: 'fadeUp 0.7s 0.3s ease both',
          }}>
            <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View My Work ↗
            </a>
            <a href="#contact" className="btn btn-ghost" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get In Touch ↗
            </a>
            <a href="https://github.com/ebramsam2001-ctrl" target="_blank" rel="noopener" className="btn btn-ghost">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/ebram-samuel-268b07339/" target="_blank" rel="noopener" className="btn btn-ghost">
              LinkedIn ↗
            </a>
          </div>

          {/* Stats */}
          <div style={{
            marginTop: '4rem', display: 'flex', gap: '2.5rem', flexWrap: 'wrap',
            animation: 'fadeUp 0.7s 0.45s ease both',
          }}>
            {[
              { num: '5+', label: 'Technologies' },
              { num: '5+', label: 'Projects Built' },
              { num: '3',  label: 'Languages' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-mono" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)' }}>{s.num}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '0.15rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Photo */}
        <div style={{
          flex: '0 0 auto',
          animation: 'fadeUp 0.8s 0.35s ease both',
          position: 'relative',
        }}>
          {/* Decorative ring */}
          <div style={{
            position: 'absolute', inset: -12, borderRadius: '40px',
            border: '1px solid var(--border)',
            animation: 'spin-slow 20s linear infinite',
            opacity: 0.5,
          }} />
          <div style={{
            position: 'absolute', inset: -24, borderRadius: '48px',
            border: '1px dashed rgba(110,231,183,0.2)',
          }} />

          <img
            src={profileImg}
            alt="Ebram Samuel"
            style={{
              width: 320, height: 420,
              objectFit: 'cover',
              borderRadius: '32px',
              border: '2px solid var(--border)',
              display: 'block',
              position: 'relative',
              zIndex: 1,
              filter: 'contrast(1.02)',
            }}
          />

          {/* Floating badge */}
          <div style={{
            position: 'absolute', bottom: -16, left: -24,
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: '0.75rem', padding: '0.75rem 1rem',
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            zIndex: 2, animation: 'float 6s ease-in-out infinite',
          }}>
            <span style={{ fontSize: '1.3rem' }}>🚀</span>
            <div>
              <div className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--accent)', fontWeight: 700 }}>FULL STACK</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>Cairo, Egypt</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

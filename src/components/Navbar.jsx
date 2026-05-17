import { useState, useEffect } from 'react'

const links = ['About','Skills','Experience','Projects','Education','Contact']

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.35s',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.1rem 3rem',
        }}
      >
        {/* Logo */}
        <div
          className="font-mono"
          style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.05em' }}
        >
          ebram<span style={{ color: 'var(--accent2)' }}>.dev</span>
        </div>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}
          className="hidden md:flex"
        >
          {links.map(l => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem',
                  fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--muted)', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Theme toggle */}
          <button
            onClick={() => setDark(d => !d)}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              border: '1px solid var(--border)', background: 'var(--card)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1rem', color: 'var(--text)', transition: 'all 0.25s',
            }}
            title="Toggle theme"
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'rotate(20deg)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'rotate(0deg)' }}
          >
            {dark ? '🌙' : '☀️'}
          </button>

          {/* Hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text)', fontSize: '1.4rem',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l} onClick={() => scrollTo(l)} style={{ cursor: 'pointer' }}>{l}</a>
        ))}
      </div>
    </>
  )
}

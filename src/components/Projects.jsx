import { useState } from 'react'

const projects = [
  {
    num: '01 — MOBILE',
    title: 'Chat App',
    desc: 'Real-time messaging with Firebase backend and Cubit state management.',
    tags: ['Flutter', 'Firebase', 'Cubit'],
    popup: null,
  },
  {
    num: '02 — MOBILE',
    title: 'Todo List App',
    desc: 'Offline-first productivity app using SQFlite for local data persistence.',
    tags: ['Flutter', 'SQFlite', 'Cubit'],
    popup: null,
  },
  {
    num: '03 — MOBILE',
    title: 'News App',
    desc: 'Live news aggregator fetching content from external REST APIs.',
    tags: ['Flutter', 'REST API', 'Dart'],
    popup: null,
  },
  {
    num: '04 — MOBILE',
    title: 'Online Supermarket',
    desc: 'E-commerce app with product listings, cart management and smooth UX.',
    tags: ['Flutter', 'Dart'],
    popup: null,
  },
  {
    num: '05 — IOT / WEB',
    title: 'Agriculture Auto-worker Robot',
    desc: 'IoT robot backend with Firebase Realtime Database and a JavaScript web dashboard for remote control.',
    tags: ['JavaScript', 'Firebase', 'IoT'],
    popup: null,
  },
  {
    num: '06 — FULL STACK',
    title: 'E-Commerce Platform',
    desc: 'Full-stack e-commerce solution with a React frontend and Node.js/Express backend. Features product management, cart, auth, and order processing.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    accent: true,
    popup: {
      title: 'E-Commerce Platform',
      description: 'A complete full-stack e-commerce application with modern React frontend and robust Node.js backend.',
      links: [
        {
          label: '⚛️ Frontend (React)',
          href: 'https://github.com/ebramsam2001-ctrl/E-Commerce-Frontend-React-Final-Project-Digilians.git',
        },
        {
          label: '🟢 Backend (Node.js)',
          href: 'https://github.com/ebramsam2001-ctrl/Backend-Nodejs-E-Commerce-App.git',
        },
      ],
    },
  },
]

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="project-card-wrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: project.accent ? 'linear-gradient(135deg, rgba(110,231,183,0.05) 0%, rgba(167,139,250,0.05) 100%)' : 'var(--card)',
        border: `1px solid ${project.accent ? 'rgba(110,231,183,0.2)' : 'var(--border)'}`,
        borderRadius: '0.85rem',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'all 0.3s',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.18)' : 'none',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.35s',
      }} />

      <div className="font-mono" style={{ fontSize: '0.62rem', color: 'var(--muted)', marginBottom: '0.85rem' }}>
        {project.num}
      </div>
      <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.65rem' }}>
        {project.title}
        {project.accent && (
          <span style={{
            marginLeft: '0.5rem', fontSize: '0.65rem',
            background: 'var(--accent)', color: '#000',
            padding: '0.1rem 0.4rem', borderRadius: '0.2rem',
            verticalAlign: 'middle', fontFamily: 'JetBrains Mono, monospace',
          }}>NEW</span>
        )}
      </h3>
      <p style={{ fontSize: '0.84rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1.4rem' }}>
        {project.desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.tags.map(t => <span key={t} className="tag active">{t}</span>)}
      </div>

      {/* Hover popup for E-Commerce */}
      {project.popup && (
        <div className="project-popup">
          <div style={{ fontSize: '2rem' }}>🛒</div>
          <h4>{project.popup.title}</h4>
          <p>{project.popup.description}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', width: '100%', marginTop: '0.5rem' }}>
            {project.popup.links.map(link => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: '0.6rem 1rem',
                  borderRadius: '0.4rem',
                  background: 'rgba(110,231,183,0.12)',
                  border: '1px solid rgba(110,231,183,0.3)',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  transition: 'all 0.2s',
                  textAlign: 'center',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(110,231,183,0.22)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(110,231,183,0.12)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
          <p style={{ fontSize: '0.65rem', color: 'rgba(100,116,139,0.7)', marginTop: '0.25rem' }}>
            Click a link to open on GitHub
          </p>
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 3rem' }}>
      <div className="reveal">
        <div className="section-label">04 — Projects</div>
        <h2 className="section-title font-display">What I've Built</h2>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {projects.map(p => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  )
}

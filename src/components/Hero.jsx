import { useEffect, useState } from 'react'

const FULL_TEXT = 'whoami'

export default function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(FULL_TEXT.slice(0, i))
      if (i === FULL_TEXT.length) clearInterval(interval)
    }, 90)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="terminal-line">
          <span className="prompt">$</span>
          {typed}
          <span className="cursor" aria-hidden="true" />
        </div>
        <h1>Rafif Ramadhani<br />Wibowo</h1>
        <p className="role">
          <strong>Full Stack Developer</strong>
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View projects →
          </a>
          <a className="btn btn-ghost" href="/cv-rafif-ramadhani-wibowo.pdf" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="photo-placeholder">
          <img src="foto.jpeg" alt="Rafif" className="profile-img" />
          <span className="placeholder-text">Photo Area</span>
        </div>
      </div>
    </section>
  )
}

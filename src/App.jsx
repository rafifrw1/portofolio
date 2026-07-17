import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const SECTION_IDS = ['home', 'about', 'projects', 'contact']

export default function App() {
  const [active, setActive] = useState('home')
  
  // Theme state
  const [theme, setTheme] = useState(() => {
    // Check if theme is saved in localStorage, or default to 'light'
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    // You could also check system preference here: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    return 'light'
  })

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <Nav active={active} onNavigate={handleNavigate} theme={theme} toggleTheme={toggleTheme} />
      <div className="content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

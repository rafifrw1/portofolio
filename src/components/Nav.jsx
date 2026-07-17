const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ active, onNavigate, theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="brand">Rafif Portofolio</div>
      <ul className="navbar-nav">
        {links.map((link) => (
          <li key={link.id}>
            <button
              aria-current={active === link.id}
              onClick={() => onNavigate(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}

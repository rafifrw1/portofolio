const links = [
  { label: 'Email', value: 'rafifrw@gmail.com', href: 'mailto:rafifrw@gmail.com' },
  { label: 'GitHub', value: 'github.com/rafifrw1', href: 'https://github.com/rafifrw1' },
  { label: 'LinkedIn', value: 'linkedin.com/in/rafifrw-291358252', href: 'https://www.linkedin.com/in/rafifrw-291358252/' },
]

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact me</h2>
      <p>Open for collaboration, freelance work, or chatting about new projects.</p>
      <div className="contact-links">
        {links.map((link) => (
          <a href={link.href} key={link.label} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            <span>{link.label}</span>
            <span>{link.value}<span className="arrow"> ↗</span></span>
          </a>
        ))}
      </div>
    </section>
  )
}

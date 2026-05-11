import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['início', 'sobre', 'projetos', 'skills', 'contato']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('início')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (link) => {
    setActive(link)
    setMenuOpen(false)
    const id = link === 'início' ? 'hero' : link
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__logo">
        <span className="navbar__logo-bracket">[</span>
        <span className="navbar__logo-name">dev</span>
        <span className="navbar__logo-bracket">]</span>
      </div>

      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <button
              className={`navbar__link ${active === link ? 'active' : ''}`}
              onClick={() => handleNav(link)}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={`navbar__burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(p => !p)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}

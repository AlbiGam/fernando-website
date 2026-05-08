import { useEffect, useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/logo.jpeg" alt="Fernando A. Davila Logo" className="logo-image" />
          <span className="logo-text desktop-only">FERNANDO A. DAVILA</span>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className="nav-menu desktop-menu">
          <li className="nav-item">
            <a href="#about" className="nav-link">ABOUT</a>
          </li>
          <li className="nav-item">
            <a href="#partners" className="nav-link">PARTNERS</a>
          </li>
          <li className="nav-item">
            <a href="#calendar" className="nav-link">CALENDAR</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">CONTACT</a>
          </li>
        </ul>
      </div>

      <div className={`nav-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <aside className={`nav-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-menu mobile-menu">
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>ABOUT</a>
          </li>
          <li className="nav-item">
            <a href="#partners" className="nav-link" onClick={closeMenu}>PARTNERS</a>
          </li>
          <li className="nav-item">
            <a href="#calendar" className="nav-link" onClick={closeMenu}>CALENDAR</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>CONTACT</a>
          </li>
        </ul>
      </aside>
    </nav>
  )
}

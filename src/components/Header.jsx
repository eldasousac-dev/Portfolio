import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const navRef = useRef(null)
  const burgerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 150) {
          current = sec.getAttribute('id')
        }
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClick = (e) => {
      if (
        navRef.current && !navRef.current.contains(e.target) &&
        burgerRef.current && !burgerRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <a href="#inicio" className="nav-logo" onClick={(e) => handleLinkClick(e, '#inicio')}>
          <span className="logo-circle">E</span>
          <span className="logo-text">Elda Carvalho</span>
        </a>
        <div ref={navRef} className={`nav-menu${open ? ' open' : ''}`} id="navMenu">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link${active === l.href.slice(1) ? ' active' : ''}`}
              onClick={(e) => handleLinkClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          ref={burgerRef}
          className={`nav-burger${open ? ' open' : ''}`}
          id="navBurger"
          aria-label="Menu"
          onClick={() => setOpen(o => !o)}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </button>
      </div>
    </nav>
  )
}

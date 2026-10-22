import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data.js'
import { useScrolled } from '../hooks.js'

// `base` permite reutilizar la barra en otras páginas (p. ej. "/" para volver a las secciones de la landing).
export default function Navbar({ base = '' }) {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href={base || '#'} className="brand" onClick={close}>
          <img src="/herdexicon.png" alt="" width="32" height="32" />
          <span>HerDex</span>
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Principal">
          {navLinks.map((l) => (
            <a key={l.href} href={base + l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href={`${base}#descargar`} className="btn btn-lime nav-links-cta" onClick={close}>
            Descargar
          </a>
        </nav>

        <a href={`${base}#descargar`} className="btn btn-lime btn-sm nav-cta">
          Descargar
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

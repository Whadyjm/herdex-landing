import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data.js'
import { useScrolled } from '../hooks.js'
import { LANGS, LANG_NAMES, lang, setLang, t } from '../i18n.js'

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

        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label={t.nav.main}>
          {navLinks.map((l) => (
            <a key={l.href} href={base + l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href={`${base}#descargar`} className="btn btn-lime nav-links-cta" onClick={close}>
            {t.nav.download}
          </a>
        </nav>

        <select className="lang-select" aria-label={t.nav.language} value={lang} onChange={(e) => setLang(e.target.value)}>
          {LANGS.map((l) => (
            <option key={l} value={l}>
              {l.toUpperCase()} · {LANG_NAMES[l]}
            </option>
          ))}
        </select>
        <a href={`${base}#descargar`} className="btn btn-lime btn-sm nav-cta">
          {t.nav.download}
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

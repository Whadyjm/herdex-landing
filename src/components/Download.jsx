import Reveal from './Reveal.jsx'
import { navLinks, credits, disclaimer } from '../data.js'
import { t } from '../i18n.js'

export function Download() {
  return (
    <section id="descargar" className="section download-section">
      <div className="container">
        <Reveal className="download">
          <div className="download-copy">
            <h2 className="display-md">{t.download.heading}</h2>
            <p>{t.download.text}</p>
            <div className="store-row">
              <a href="#" className="btn btn-lime">
                Google Play
              </a>
              <a href="#" className="btn btn-outline-light">
                App Store
              </a>
            </div>
          </div>
          <div className="download-media">
            <img
              src="/img/nelore-pasture.webp"
              alt={t.download.alt}
              width="1600"
              height="1060"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer({ base = '' }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href={base || '#'} className="brand">
            <img src="/herdexicon.png" alt="" width="28" height="28" />
            <span>HerDex</span>
          </a>
          <nav className="footer-links" aria-label={t.footer.label}>
            {navLinks.map((l) => (
              <a key={l.href} href={base + l.href}>
                {l.label}
              </a>
            ))}
            <a href="/privacidad.html">{t.footer.privacy}</a>
            <a href="/eliminar-cuenta.html">{t.footer.deleteAccount}</a>
          </nav>
        </div>
        <p className="footer-disclaimer">{disclaimer}</p>
        <div className="footer-bottom">
          <small>
            © {new Date().getFullYear()} HerDex. {t.footer.tagline}
          </small>
          <small>
            {t.footer.photos}{' '}
            {credits.map((c, i) => (
              <span key={c.who}>
                <a href={c.href} target="_blank" rel="noreferrer">
                  {c.who}
                </a>{' '}
                ({c.license}){i < credits.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </small>
        </div>
      </div>
    </footer>
  )
}

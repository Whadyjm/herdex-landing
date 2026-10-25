import { legal } from '../legal.js'
import { lang, t } from '../i18n.js'
import * as es from '../content/privacy-es.jsx'
import * as pt from '../content/privacy-pt.jsx'
import * as en from '../content/privacy-en.jsx'

// El cuerpo de la política vive en content/privacy-<idioma>.jsx.
const content = { es, pt, en }[lang]

export default function PrivacyPolicy() {
  const { Body } = content
  return (
    <article className="legal">
      <header className="legal-hero">
        <div className="container">
          <span className="tag">{t.legal.tagLegal}</span>
          <h1 className="display-md">{content.title}</h1>
          <p>
            {content.updatedLabel}: {legal.updated}
          </p>
        </div>
      </header>

      <div className="container legal-body">
        <nav className="legal-toc" aria-label={t.legal.contents}>
          <span>{t.legal.contents}</span>
          <ol>
            {content.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="legal-content">
          <Body />
        </div>
      </div>
    </article>
  )
}

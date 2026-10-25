import { Check } from 'lucide-react'
import { t } from '../i18n.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-copy">
          <span className="tag">{t.hero.tag}</span>
          <h1 className="display">
            {t.hero.title1}
            <br />
            {t.hero.title2}
          </h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a href="#descargar" className="btn btn-lime">
              {t.hero.cta}
            </a>
            <a href="#como-funciona" className="text-link">
              {t.hero.how}
            </a>
          </div>
          <p className="hero-disclaimer">{t.hero.disclaimer}</p>
        </div>

        <figure className="hero-media">
          <img
            src="/img/rancher-herd.webp"
            alt={t.hero.alt}
            width="1800"
            height="1200"
            fetchpriority="high"
          />
          <div className="result-chip" aria-hidden="true">
            <span className="result-label">{t.hero.estimated}</span>
            <strong>
              482<small> kg</small>
            </strong>
            <span className="result-meta">
              <Check size={14} strokeWidth={3} /> {t.hero.chipMeta}
            </span>
          </div>
        </figure>
      </div>
    </section>
  )
}

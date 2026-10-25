import Reveal from './Reveal.jsx'
import { features } from '../data.js'
import { t } from '../i18n.js'

export default function Features() {
  return (
    <section id="funciones" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{t.features.eyebrow}</span>
          <h2 className="heading">{t.features.heading}</h2>
        </Reveal>
        <div className="features">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="article" key={title} className="feature" delay={(i % 3) * 80}>
              <span className="feature-icon">
                <Icon size={24} strokeWidth={1.75} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

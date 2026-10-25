import Reveal from './Reveal.jsx'
import { t } from '../i18n.js'

export default function Savings() {
  return (
    <section id="ahorro" className="section">
      <div className="container savings">
        <Reveal className="savings-head">
          <span className="eyebrow">{t.savings.eyebrow}</span>
          <h2 className="heading">{t.savings.heading}</h2>
          <p>{t.savings.text}</p>
        </Reveal>

        <Reveal className="savings-body" delay={100}>
          <ul className="savings-list">
            {t.savings.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="savings-cta">{t.savings.cta}</p>
        </Reveal>
      </div>
    </section>
  )
}

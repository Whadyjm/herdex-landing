import Reveal from './Reveal.jsx'
import { steps } from '../data.js'
import { t } from '../i18n.js'

// Medidas dibujadas sobre la foto (coordenadas en píxeles de la imagen original, 1280×1040).
function MeasureOverlay() {
  return (
    <svg className="measure" viewBox="0 0 1280 1040" aria-hidden="true">
      <g className="measure-line">
        <line x1="78" y1="350" x2="905" y2="435" />
        <line x1="78" y1="325" x2="78" y2="375" />
        <line x1="905" y1="410" x2="905" y2="460" />
      </g>
      <ellipse className="measure-girth" cx="690" cy="440" rx="48" ry="210" />
      <g className="measure-label" transform="translate(300 300)">
        <rect width="180" height="52" rx="26" />
        <text x="90" y="34">{t.how.lengthAbbr} 172 cm</text>
      </g>
      <g className="measure-label" transform="translate(560 680)">
        <rect width="200" height="52" rx="26" />
        <text x="100" y="34">{t.how.girthAbbr} 198 cm</text>
      </g>
    </svg>
  )
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section dark">
      <div className="container how">
        <Reveal className="how-head">
          <span className="eyebrow">{t.how.eyebrow}</span>
          <h2 className="display-md">{t.how.heading}</h2>
        </Reveal>

        <Reveal as="figure" className="how-media">
          <div className="measure-frame">
            <img
              src="/img/brahman-side.webp"
              alt={t.how.alt}
              width="1280"
              height="1040"
              loading="lazy"
            />
            <MeasureOverlay />
          </div>
          <figcaption>
            <span>{t.how.result}</span>
            <strong>674 kg</strong>
            <span>(198² × 172) / 10 000</span>
          </figcaption>
        </Reveal>

        <ol className="steps">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90}>
              <span className="step-num">0{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

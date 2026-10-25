import { useId, useState } from 'react'
import Reveal from './Reveal.jsx'
import PrecisionScan from './PrecisionScan.jsx'
import { disclaimer } from '../data.js'
import { t } from '../i18n.js'

export function Slider({ label, unit, value, min, max, step = 1, onChange }) {
  const id = useId()
  return (
    <div className="slider">
      <div className="slider-top">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>
          {value} {unit}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ '--fill': `${((value - min) / (max - min)) * 100}%` }}
      />
    </div>
  )
}

export default function Calculator() {
  const [pt, setPt] = useState(180)
  const [l, setL] = useState(150)
  const weight = Math.round((pt * pt * l) / 10000)

  return (
    <section id="calculadora" className="section tint">
      <div className="container calc">
        <Reveal className="calc-copy">
          <span className="eyebrow">{t.calc.eyebrow}</span>
          <h2 className="heading">{t.calc.heading}</h2>
          <p>{t.calc.text}</p>
          <div className="calc-note">
            <strong>{t.calc.important}</strong> {disclaimer} {t.calc.noteTail}
          </div>
        </Reveal>

        <Reveal className="calc-card" delay={100}>
          <div className="calc-card-head">
            <span>{t.calc.formulaName}</span>
            <code>{t.calc.formula}</code>
          </div>
          <Slider label={t.calc.girth} unit="cm" value={pt} min={120} max={240} onChange={setPt} />
          <Slider label={t.calc.length} unit="cm" value={l} min={100} max={200} onChange={setL} />
          <div className="calc-result" aria-live="polite">
            <span>{t.calc.estimated}</span>
            <strong>
              {weight}
              <small> kg</small>
            </strong>
          </div>
        </Reveal>
      </div>
      <div className="container">
        <Reveal>
          <PrecisionScan />
        </Reveal>
      </div>
    </section>
  )
}

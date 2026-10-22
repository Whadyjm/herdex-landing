import { useId, useState } from 'react'
import Reveal from './Reveal.jsx'

function Slider({ label, unit, value, min, max, onChange }) {
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
          <span className="eyebrow">Precisión</span>
          <h2 className="heading">Ciencia ganadera, sin cinta métrica</h2>
          <p>
            HerDex usa el mismo principio que la cinta bovinométrica: el peso se calcula a partir del perímetro torácico
            y el largo corporal. La diferencia es que las medidas las toma la IA desde la foto, sin tocar al animal.
          </p>
          <p className="calc-note">
            Es una estimación orientativa. Cada resultado muestra su nivel de confianza; para transacciones críticas,
            valida con una báscula.
          </p>
        </Reveal>

        <Reveal className="calc-card" delay={100}>
          <div className="calc-card-head">
            <span>Fórmula de Schaeffer</span>
            <code>(PT² × L) / 10 000</code>
          </div>
          <Slider label="Perímetro torácico (PT)" unit="cm" value={pt} min={120} max={240} onChange={setPt} />
          <Slider label="Largo corporal (L)" unit="cm" value={l} min={100} max={200} onChange={setL} />
          <div className="calc-result" aria-live="polite">
            <span>Peso estimado</span>
            <strong>
              {weight}
              <small> kg</small>
            </strong>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

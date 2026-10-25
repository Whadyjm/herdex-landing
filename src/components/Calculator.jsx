import { useId, useState } from 'react'
import Reveal from './Reveal.jsx'
import PrecisionScan from './PrecisionScan.jsx'
import { disclaimer } from '../data.js'

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
          <span className="eyebrow">Precisión</span>
          <h2 className="heading">Inteligencia artificial al servicio de la zootecnia</h2>
          <p>
            HerDex combina dos cosas: modelos de inteligencia artificial de visión, entrenados a gran escala para
            interpretar imágenes, y fórmulas zootécnicas reconocidas. La IA mide el cuerpo del animal desde la foto y las
            fórmulas convierten esas medidas en peso, el mismo principio de la cinta bovinométrica, pero sin tocar al
            animal.
          </p>
          <div className="calc-note">
            <strong>Importante:</strong> {disclaimer} Cada resultado muestra su nivel de confianza; para ventas o
            decisiones que requieran el peso exacto, usa una báscula.
          </div>
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
      <div className="container">
        <Reveal>
          <PrecisionScan />
        </Reveal>
      </div>
    </section>
  )
}

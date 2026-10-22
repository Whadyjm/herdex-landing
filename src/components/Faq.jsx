import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { faqs } from '../data.js'

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="container faq-wrap">
        <Reveal className="faq-head">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="heading">Lo que nos preguntan los ganaderos</h2>
        </Reveal>
        <Reveal className="faq">
          {faqs.map((f, i) => {
            const open = openIdx === i
            return (
              <div key={f.q} className={`faq-item ${open ? 'is-open' : ''}`}>
                <h3>
                  <button
                    id={`faq-btn-${i}`}
                    aria-expanded={open}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpenIdx(open ? -1 : i)}
                  >
                    {f.q}
                    <span className="faq-icon">
                      <Plus size={18} strokeWidth={2.25} />
                    </span>
                  </button>
                </h3>
                <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className="faq-panel">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

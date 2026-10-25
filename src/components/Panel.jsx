import { useState } from 'react'
import { ArrowUpRight, Lock } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { panelUrl, panelViews } from '../data.js'

export default function Panel() {
  const [active, setActive] = useState(panelViews[0].id)
  const view = panelViews.find((v) => v.id === active)

  return (
    <section id="panel" className="section dark">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Panel web para productores</span>
          <h2 className="heading">Del potrero a la oficina</h2>
          <p className="panel-lead">
            La app registra los pesajes en el campo. En el panel los ves desde la computadora para analizar el hato y
            decidir cuándo vender, a quién repesar y qué lote necesita atención.
          </p>
        </Reveal>

        <div className="panel">
          <Reveal className="panel-tabs" role="tablist" aria-label="Vistas del panel">
            {panelViews.map((v) => (
              <button
                key={v.id}
                role="tab"
                id={`panel-tab-${v.id}`}
                aria-selected={v.id === active}
                aria-controls="panel-view"
                className={`panel-tab ${v.id === active ? 'is-active' : ''}`}
                onClick={() => setActive(v.id)}
              >
                <span className="panel-tab-label">{v.label}</span>
                <strong>{v.title}</strong>
                <span className="panel-tab-text">{v.text}</span>
              </button>
            ))}
          </Reveal>

          <Reveal className="panel-browser" delay={120}>
            <div className="panel-bar" aria-hidden="true">
              <span className="panel-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="panel-url">
                <Lock size={12} strokeWidth={2.5} /> panel.herdex.app
              </span>
            </div>
            <div className="panel-screen" id="panel-view" role="tabpanel" aria-labelledby={`panel-tab-${active}`}>
              {panelViews.map((v) => (
                <img
                  key={v.id}
                  src={`/img/panel/${v.id}.webp`}
                  alt={`Vista ${v.label} del panel de HerDex con un hato de ejemplo`}
                  width="1600"
                  height="1000"
                  loading="lazy"
                  className={v.id === active ? 'is-active' : ''}
                  aria-hidden={v.id !== active}
                />
              ))}
            </div>
            <p className="panel-caption">
              <span className="panel-caption-text">{view.text} </span>
              Datos de ejemplo.
            </p>
          </Reveal>
        </div>

        <Reveal className="panel-cta">
          <a href={panelUrl} className="btn btn-lime" target="_blank" rel="noreferrer">
            Abrir el panel <ArrowUpRight size={18} strokeWidth={2.25} />
          </a>
          <p>Entra con la misma cuenta de la app. Sin instalar nada.</p>
        </Reveal>
      </div>
    </section>
  )
}

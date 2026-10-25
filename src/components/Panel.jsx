import { useState } from 'react'
import { ArrowUpRight, Lock } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { panelUrl, panelViews } from '../data.js'
import { t } from '../i18n.js'

export default function Panel() {
  const [active, setActive] = useState(panelViews[0].id)
  const view = panelViews.find((v) => v.id === active)

  return (
    <section id="panel" className="section dark">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{t.panel.eyebrow}</span>
          <h2 className="heading">{t.panel.heading}</h2>
          <p className="panel-lead">{t.panel.lead}</p>
        </Reveal>

        <div className="panel">
          <Reveal className="panel-tabs" role="tablist" aria-label={t.panel.tabs}>
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
                  alt={t.panel.alt(v.label)}
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
              {t.panel.sample}
            </p>
          </Reveal>
        </div>

        <Reveal className="panel-cta">
          <a href={panelUrl} className="btn btn-lime" target="_blank" rel="noreferrer">
            {t.panel.open} <ArrowUpRight size={18} strokeWidth={2.25} />
          </a>
          <p>{t.panel.sameAccount}</p>
        </Reveal>
      </div>
    </section>
  )
}

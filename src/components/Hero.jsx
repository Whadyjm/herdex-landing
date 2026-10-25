import { Check } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-copy">
          <span className="tag">Estimación de peso bovino con IA</span>
          <h1 className="display">
            Pesa tu ganado
            <br />
            con una foto
          </h1>
          <p className="hero-lead">
            Toma una foto de costado. HerDex mide el cuerpo del animal y estima su peso en segundos, sin moverlo ni
            estresarlo.
          </p>
          <div className="hero-actions">
            <a href="#descargar" className="btn btn-lime">
              Descargar HerDex
            </a>
            <a href="#como-funciona" className="text-link">
              Ver cómo funciona
            </a>
          </div>
          <p className="hero-disclaimer">Estimación orientativa. No reemplaza el pesaje en báscula.</p>
        </div>

        <figure className="hero-media">
          <img
            src="/img/rancher-herd.webp"
            alt="Ganadero caminando entre su hato de novillos en el potrero"
            width="1800"
            height="1200"
            fetchpriority="high"
          />
          <div className="result-chip" aria-hidden="true">
            <span className="result-label">Peso estimado</span>
            <strong>
              482<small> kg</small>
            </strong>
            <span className="result-meta">
              <Check size={14} strokeWidth={3} /> Confianza 91% · Angus cruza
            </span>
          </div>
        </figure>
      </div>
    </section>
  )
}

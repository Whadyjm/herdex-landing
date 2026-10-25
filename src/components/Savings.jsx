import Reveal from './Reveal.jsx'

export default function Savings() {
  return (
    <section id="ahorro" className="section">
      <div className="container savings">
        <Reveal className="savings-head">
          <span className="eyebrow">Lo que está en juego</span>
          <h2 className="heading">Cada kilo mal calculado es dinero que no ves</h2>
          <p>
            Vender a ojo o pagar una báscula para cada lote te cuesta de las dos formas. HerDex te da una estimación rápida
            con el celular que ya tienes, para saber cuándo vale la pena llevar el lote a la báscula.
          </p>
        </Reveal>

        <Reveal className="savings-body" delay={100}>
          <ul className="savings-list">
            <li>Estima en el potrero y lleva a la báscula solo los lotes que lo necesitan</li>
            <li>Sin mover ni estresar al animal: un animal tranquilo no pierde peso</li>
            <li>Pesa más seguido y detecta a tiempo qué animal no está ganando kilos</li>
            <li>Negocia con datos, no con corazonadas</li>
          </ul>
          <p className="savings-cta">Pesa mejor. Vende mejor.</p>
        </Reveal>
      </div>
    </section>
  )
}

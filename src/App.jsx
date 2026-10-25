import { Camera, WifiOff, BookOpen } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Features from './components/Features.jsx'
import Panel from './components/Panel.jsx'
import Savings from './components/Savings.jsx'
import Calculator from './components/Calculator.jsx'
import Faq from './components/Faq.jsx'
import { Download, Footer } from './components/Download.jsx'

const highlights = [
  { icon: Camera, title: 'Sin mover al animal', text: 'Estima el peso con el celular que ya llevas al potrero.' },
  { icon: WifiOff, title: 'Funciona sin señal', text: 'Registra en el campo y sincroniza al volver.' },
  { icon: BookOpen, title: 'Historial por animal', text: 'Cada pesaje queda guardado con foto y fecha.' },
]

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="highlights" aria-label="Ventajas">
          <div className="container highlights-grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="highlight">
                <Icon size={22} strokeWidth={1.75} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Savings />
        <HowItWorks />
        <Features />
        <Panel />
        <Calculator />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  )
}

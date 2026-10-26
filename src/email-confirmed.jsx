import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import { Footer } from './components/Download.jsx'
import EmailConfirmed from './components/EmailConfirmed.jsx'
import './styles.css'
import { applyMeta } from './i18n.js'

applyMeta('confirmed')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar base="/" />
    <main>
      <EmailConfirmed />
    </main>
    <Footer base="/" />
  </StrictMode>,
)

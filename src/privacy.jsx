import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import { Footer } from './components/Download.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import './styles.css'
import { applyMeta } from './i18n.js'

applyMeta('privacy')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar base="/" />
    <main>
      <PrivacyPolicy />
    </main>
    <Footer base="/" />
  </StrictMode>,
)

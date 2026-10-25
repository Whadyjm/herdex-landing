import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import { Footer } from './components/Download.jsx'
import AccountDeletion from './components/AccountDeletion.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar base="/" />
    <main>
      <AccountDeletion />
    </main>
    <Footer base="/" />
  </StrictMode>,
)

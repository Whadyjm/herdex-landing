import { Camera, ScanLine, BookOpen, WifiOff, CloudUpload, Gauge } from 'lucide-react'
import { t } from './i18n.js'

// Los textos viven en i18n.js (es, pt, en); aquí se les suman íconos y enlaces.

export const navLinks = t.nav.links

export const steps = t.how.steps

const featureIcons = [Camera, ScanLine, Gauge, BookOpen, WifiOff, CloudUpload]
export const features = t.features.items.map((f, i) => ({ ...f, icon: featureIcons[i] }))

export const disclaimer = t.disclaimer

export const faqs = t.faq.items

export const credits = [
  {
    who: 'USDA',
    license: t.footer.publicDomain,
    href: 'https://commons.wikimedia.org/wiki/File:Farmers_and_Ranchers_(20201118-NRCS-LSC-0068).jpg',
  },
  {
    who: 'CSIRO',
    license: 'CC BY 3.0',
    href: 'https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_2643_A_Brahman_Bull.jpg',
  },
  {
    who: 'Carlos Ebert',
    license: 'CC BY 2.0',
    href: 'https://commons.wikimedia.org/wiki/File:Nelore_cattle_-_12704276665.jpg',
  },
]

export const panelUrl = 'https://panel.herdex.app'

export const panelViews = t.panel.views

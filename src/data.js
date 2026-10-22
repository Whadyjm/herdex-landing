import { Camera, ScanLine, BookOpen, WifiOff, CloudUpload, Gauge } from 'lucide-react'

export const navLinks = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#calculadora', label: 'Precisión' },
  { href: '#faq', label: 'Preguntas' },
]

export const steps = [
  {
    title: 'Fotografía de costado',
    text: 'La cámara guiada te indica el encuadre y avisa si la foto sirve antes de procesarla.',
  },
  {
    title: 'La IA toma las medidas',
    text: 'Detecta perímetro torácico, largo corporal, altura a la cruz y ancho de cadera.',
  },
  {
    title: 'Peso y registro',
    text: 'Aplica fórmulas zootécnicas y guarda el resultado con foto, raza y fecha.',
  },
]

export const features = [
  {
    icon: Camera,
    title: 'Cámara guiada',
    text: 'Marco de encuadre y control de calidad para que cada foto sea útil para medir.',
  },
  {
    icon: ScanLine,
    title: 'Raza y condición corporal',
    text: 'Identifica la raza y la condición del animal, con observaciones y nivel de confianza.',
  },
  {
    icon: Gauge,
    title: 'Schaeffer y Quetelet',
    text: 'El peso sale de medidas corporales, el mismo principio de la cinta bovinométrica.',
  },
  {
    icon: BookOpen,
    title: 'Historial por animal',
    text: 'Foto, raza, medidas, método, fecha y notas en cada registro. Sigue la evolución.',
  },
  {
    icon: WifiOff,
    title: 'Funciona sin señal',
    text: 'Los registros se guardan en el teléfono y se sincronizan cuando vuelve la conexión.',
  },
  {
    icon: CloudUpload,
    title: 'Respaldo en la nube',
    text: 'Con tu cuenta, el historial se respalda y está disponible en todos tus dispositivos.',
  },
]

export const faqs = [
  {
    q: '¿Qué tan exacta es la estimación?',
    a: 'Es una estimación basada en medidas visuales y cada resultado muestra su porcentaje de confianza. Una foto lateral, nítida y con el animal completo da los mejores resultados. Para ventas o transacciones críticas, valida con báscula.',
  },
  {
    q: '¿Necesito internet?',
    a: 'Para registrar y consultar tu historial, no: todo se guarda en el teléfono. El análisis de la foto con IA sí necesita conexión; puedes tomar las fotos en el potrero y procesarlas al volver a tener señal.',
  },
  {
    q: '¿Qué razas soporta?',
    a: 'HerDex está pensada para ganado bovino en general, tanto razas cebuinas como europeas y sus cruces. La raza se detecta automáticamente y puedes corregirla.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Tu historial vive en tu dispositivo y, si creas una cuenta, se respalda cifrado en tránsito en la nube. No vendemos tus datos ni los usamos para publicidad. Consulta los detalles en nuestra política de privacidad.',
  },
]

export const credits = [
  {
    who: 'USDA',
    license: 'Dominio público',
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

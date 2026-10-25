import { Camera, ScanLine, BookOpen, WifiOff, CloudUpload, Gauge } from 'lucide-react'

export const navLinks = [
  { href: '#ahorro', label: 'Ahorro' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#panel', label: 'Panel' },
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
    text: 'Un modelo de visión artificial entrenado a gran escala analiza la foto y estima perímetro torácico, largo corporal, altura a la cruz y ancho de cadera.',
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
    title: 'IA que entiende al animal',
    text: 'Además de las medidas, la IA identifica la raza y la condición corporal, con observaciones y nivel de confianza.',
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

export const disclaimer =
  'HerDex ofrece estimaciones de peso con fines orientativos. Los resultados dependen de condiciones ideales de iluminación, encuadre y referencia de escala, y no reemplazan el pesaje en una báscula.'

export const faqs = [
  {
    q: '¿Qué tan exacta es la estimación?',
    a: 'Es una estimación orientativa basada en medidas visuales, y cada resultado muestra su porcentaje de confianza. Su precisión depende de condiciones ideales: buena iluminación, el animal completo y de costado, sobre terreno plano y con una referencia de escala adecuada. No reemplaza el pesaje en báscula: para ventas, dosificaciones o cualquier decisión que requiera el peso exacto, pesa al animal en una báscula.',
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

export const panelUrl = 'https://panel.herdex.app'

export const panelViews = [
  {
    id: 'tablero',
    label: 'Tablero',
    title: 'Todo el hato de un vistazo',
    text: 'Animales, kilos en pie, ganancia diaria promedio y los pesajes que ya se vencieron.',
  },
  {
    id: 'lotes',
    label: 'Lotes',
    title: 'Compara lotes y potreros',
    text: 'Curva mensual de peso por lote y aviso del que avanza más lento.',
  },
  {
    id: 'proyeccion',
    label: 'Proyección',
    title: 'Planea la venta',
    text: 'Fecha estimada para llegar al peso meta y valor del hato según tu precio por kilo.',
  },
  {
    id: 'repesajes',
    label: 'Repesajes',
    title: 'Sabe a quién toca pesar',
    text: 'Plan según el intervalo que elijas y lista imprimible para llevar al corral.',
  },
  {
    id: 'reportes',
    label: 'Reportes',
    title: 'Exporta tus datos',
    text: 'Pesajes filtrados por fecha y lote, listos para Excel (CSV) o PDF.',
  },
]

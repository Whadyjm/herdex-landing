// Textos de la landing en español, portugués e inglés.
//
// El idioma se fija al cargar la página: ?lang=pt en la URL, si no el elegido
// en el selector (guardado en el navegador) y si no el del navegador. Cambiarlo
// recarga la página, así los textos pueden ser constantes de módulo.

export const LANGS = ['es', 'pt', 'en']
export const LANG_NAMES = { es: 'Español', pt: 'Português', en: 'English' }
const STORAGE_KEY = 'herdex.lang'
const isLang = (v) => LANGS.includes(v)

function detect() {
  const fromUrl = new URLSearchParams(location.search).get('lang')
  if (isLang(fromUrl)) return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLang(saved)) return saved
  } catch {
    // Sin almacenamiento (modo privado): se usa el idioma del navegador.
  }
  const nav = (navigator.language || 'es').slice(0, 2)
  return isLang(nav) ? nav : 'es'
}

export const lang = detect()
export const intlLocale = { es: 'es', pt: 'pt-BR', en: 'en-US' }[lang]

export function setLang(l) {
  try {
    localStorage.setItem(STORAGE_KEY, l)
  } catch {
    // Sin almacenamiento: el cambio dura hasta recargar.
  }
  const url = new URL(location.href)
  url.searchParams.delete('lang')
  location.replace(url.toString())
}

/** Idioma, título y descripción del documento según la página. */
export function applyMeta(page) {
  document.documentElement.lang = lang
  const m = t.meta[page]
  document.title = m.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', m.description)
}

const es = {
  meta: {
    home: {
      title: 'HerDex — Pesa tu ganado con una foto',
      description: 'HerDex estima el peso de tu ganado bovino a partir de una fotografía, con inteligencia artificial. Sin báscula, sin estrés para el animal.',
    },
    privacy: {
      title: 'Política de privacidad — HerDex',
      description: 'Cómo HerDex recopila, usa, comparte y protege tu información, y cómo eliminar tu cuenta y tus datos.',
    },
    deletion: {
      title: 'Eliminar tu cuenta — HerDex',
      description: 'Cómo eliminar tu cuenta de HerDex y todos tus datos, desde la app o por correo.',
    },
  },
  nav: {
    links: [
      { href: '#ahorro', label: 'Ahorro' },
      { href: '#como-funciona', label: 'Cómo funciona' },
      { href: '#funciones', label: 'Funciones' },
      { href: '#panel', label: 'Panel' },
      { href: '#calculadora', label: 'Precisión' },
      { href: '#faq', label: 'Preguntas' },
    ],
    download: 'Descargar',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    main: 'Principal',
    language: 'Idioma',
  },
  highlightsLabel: 'Ventajas',
  highlights: [
    { title: 'Sin mover al animal', text: 'Estima el peso con el celular que ya llevas al potrero.' },
    { title: 'Funciona sin señal', text: 'Registra en el campo y sincroniza al volver.' },
    { title: 'Historial por animal', text: 'Cada pesaje queda guardado con foto y fecha.' },
  ],
  hero: {
    tag: 'Estimación de peso bovino con IA',
    title1: 'Pesa tu ganado',
    title2: 'con una foto',
    lead: 'Toma una foto de costado. HerDex mide el cuerpo del animal y estima su peso en segundos, sin moverlo ni estresarlo.',
    cta: 'Descargar HerDex',
    how: 'Ver cómo funciona',
    disclaimer: 'Estimación orientativa. No reemplaza el pesaje en báscula.',
    alt: 'Ganadero caminando entre su hato de novillos en el potrero',
    estimated: 'Peso estimado',
    chipMeta: 'Confianza 91% · Angus cruza',
  },
  savings: {
    eyebrow: 'Lo que está en juego',
    heading: 'Cada kilo mal calculado es dinero que no ves',
    text: 'Vender a ojo o pagar una báscula para cada lote te cuesta de las dos formas. HerDex te da una estimación rápida con el celular que ya tienes, para saber cuándo vale la pena llevar el lote a la báscula.',
    list: [
      'Estima en el potrero y lleva a la báscula solo los lotes que lo necesitan',
      'Sin mover ni estresar al animal: un animal tranquilo no pierde peso',
      'Pesa más seguido y detecta a tiempo qué animal no está ganando kilos',
      'Negocia con datos, no con corazonadas',
    ],
    cta: 'Pesa mejor. Vende mejor.',
  },
  how: {
    eyebrow: 'Cómo funciona',
    heading: 'De la foto al peso',
    alt: 'Toro Brahman de perfil con las medidas de largo corporal y perímetro torácico marcadas',
    result: 'Resultado',
    lengthAbbr: 'L',
    girthAbbr: 'PT',
    steps: [
      { title: 'Fotografía de costado', text: 'La cámara guiada te indica el encuadre y avisa si la foto sirve antes de procesarla.' },
      {
        title: 'La IA toma las medidas',
        text: 'Un modelo de visión artificial entrenado a gran escala analiza la foto y estima perímetro torácico, largo corporal, altura a la cruz y ancho de cadera.',
      },
      { title: 'Peso y registro', text: 'Aplica fórmulas zootécnicas y guarda el resultado con foto, raza y fecha.' },
    ],
  },
  features: {
    eyebrow: 'Funciones',
    heading: 'Todo lo que necesitas en el potrero, en el bolsillo',
    items: [
      { title: 'Cámara guiada', text: 'Marco de encuadre y control de calidad para que cada foto sea útil para medir.' },
      { title: 'IA que entiende al animal', text: 'Además de las medidas, la IA identifica la raza y la condición corporal, con observaciones y nivel de confianza.' },
      { title: 'Schaeffer y Quetelet', text: 'El peso sale de medidas corporales, el mismo principio de la cinta bovinométrica.' },
      { title: 'Historial por animal', text: 'Foto, raza, medidas, método, fecha y notas en cada registro. Sigue la evolución.' },
      { title: 'Funciona sin señal', text: 'Los registros se guardan en el teléfono y se sincronizan cuando vuelve la conexión.' },
      { title: 'Respaldo en la nube', text: 'Con tu cuenta, el historial se respalda y está disponible en todos tus dispositivos.' },
    ],
  },
  panel: {
    eyebrow: 'Panel web para productores',
    heading: 'Del potrero a la oficina',
    lead: 'La app registra los pesajes en el campo. En el panel los ves desde la computadora para analizar el hato y decidir cuándo vender, a quién repesar y qué lote necesita atención.',
    tabs: 'Vistas del panel',
    views: [
      { id: 'tablero', label: 'Tablero', title: 'Todo el hato de un vistazo', text: 'Animales, kilos en pie, ganancia diaria promedio y los pesajes que ya se vencieron.' },
      { id: 'lotes', label: 'Lotes', title: 'Compara lotes y potreros', text: 'Curva mensual de peso por lote y aviso del que avanza más lento.' },
      { id: 'proyeccion', label: 'Proyección', title: 'Planea la venta', text: 'Fecha estimada para llegar al peso meta y valor del hato según tu precio por kilo.' },
      { id: 'repesajes', label: 'Repesajes', title: 'Sabe a quién toca pesar', text: 'Plan según el intervalo que elijas y lista imprimible para llevar al corral.' },
      { id: 'reportes', label: 'Reportes', title: 'Exporta tus datos', text: 'Pesajes filtrados por fecha y lote, listos para Excel (CSV) o PDF.' },
    ],
    alt: (label) => `Vista ${label} del panel de HerDex con un hato de ejemplo`,
    sample: 'Datos de ejemplo.',
    open: 'Abrir el panel',
    sameAccount: 'Entra con la misma cuenta de la app. Sin instalar nada.',
  },
  calc: {
    eyebrow: 'Precisión',
    heading: 'Inteligencia artificial al servicio de la zootecnia',
    text: 'HerDex combina dos cosas: modelos de inteligencia artificial de visión, entrenados a gran escala para interpretar imágenes, y fórmulas zootécnicas reconocidas. La IA mide el cuerpo del animal desde la foto y las fórmulas convierten esas medidas en peso, el mismo principio de la cinta bovinométrica, pero sin tocar al animal.',
    important: 'Importante:',
    noteTail: 'Cada resultado muestra su nivel de confianza; para ventas o decisiones que requieran el peso exacto, usa una báscula.',
    formulaName: 'Fórmula de Schaeffer',
    formula: '(PT² × L) / 10 000',
    girth: 'Perímetro torácico (PT)',
    length: 'Largo corporal (L)',
    estimated: 'Peso estimado',
  },
  scan: {
    eyebrow: 'Así ve HerDex al animal',
    heading: 'Visión artificial en tiempo real',
    chip: 'Demostración',
    aria: 'Animación: la IA escanea la silueta de un toro, marca seis puntos anatómicos y traza el largo corporal, el perímetro torácico y la altura a la cruz.',
    stages: ['Escaneando silueta', 'Detectando puntos anatómicos', 'Midiendo el cuerpo', 'Calculando peso', 'Análisis completo'],
    silhouettePoints: 'Puntos de silueta',
    keypoints: 'Puntos anatómicos',
    length: 'Largo corporal',
    girth: 'Perímetro torácico',
    height: 'Altura a la cruz',
    confidence: (p) => `Confianza ${p}%`,
    estimated: 'Peso estimado',
    analysisConfidence: 'Confianza del análisis',
    replay: 'Repetir análisis',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    heading: 'Lo que nos preguntan los ganaderos',
    items: [
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
    ],
  },
  download: {
    heading: 'Empieza a pesar hoy',
    text: 'Descarga HerDex y haz tu primera estimación en el próximo animal que tengas enfrente. Disponible para Android e iOS.',
    alt: 'Hato de ganado Nelore pastando en un potrero',
  },
  footer: {
    label: 'Pie de página',
    privacy: 'Privacidad',
    deleteAccount: 'Eliminar cuenta',
    tagline: 'Estimación de peso bovino mediante análisis fotográfico.',
    photos: 'Fotografías vía Wikimedia Commons:',
    publicDomain: 'Dominio público',
  },
  disclaimer:
    'HerDex ofrece estimaciones de peso con fines orientativos. Los resultados dependen de condiciones ideales de iluminación, encuadre y referencia de escala, y no reemplazan el pesaje en una báscula.',
  legal: {
    updated: '25 de octubre de 2026',
    tagLegal: 'Legal',
    tagAccount: 'Cuenta',
    contents: 'Contenido',
  },
}

const pt = {
  meta: {
    home: {
      title: 'HerDex — Pese seu gado com uma foto',
      description: 'O HerDex estima o peso do seu gado bovino a partir de uma fotografia, com inteligência artificial. Sem balança, sem estresse para o animal.',
    },
    privacy: {
      title: 'Política de privacidade — HerDex',
      description: 'Como o HerDex coleta, usa, compartilha e protege suas informações, e como excluir sua conta e seus dados.',
    },
    deletion: {
      title: 'Excluir sua conta — HerDex',
      description: 'Como excluir sua conta do HerDex e todos os seus dados, pelo app ou por e-mail.',
    },
  },
  nav: {
    links: [
      { href: '#ahorro', label: 'Economia' },
      { href: '#como-funciona', label: 'Como funciona' },
      { href: '#funciones', label: 'Funções' },
      { href: '#panel', label: 'Painel' },
      { href: '#calculadora', label: 'Precisão' },
      { href: '#faq', label: 'Perguntas' },
    ],
    download: 'Baixar',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    main: 'Principal',
    language: 'Idioma',
  },
  highlightsLabel: 'Vantagens',
  highlights: [
    { title: 'Sem mover o animal', text: 'Estime o peso com o celular que você já leva ao pasto.' },
    { title: 'Funciona sem sinal', text: 'Registre no campo e sincronize ao voltar.' },
    { title: 'Histórico por animal', text: 'Cada pesagem fica salva com foto e data.' },
  ],
  hero: {
    tag: 'Estimativa de peso bovino com IA',
    title1: 'Pese seu gado',
    title2: 'com uma foto',
    lead: 'Tire uma foto de lado. O HerDex mede o corpo do animal e estima o peso em segundos, sem movê-lo nem estressá-lo.',
    cta: 'Baixar o HerDex',
    how: 'Ver como funciona',
    disclaimer: 'Estimativa indicativa. Não substitui a pesagem na balança.',
    alt: 'Pecuarista caminhando entre seu rebanho de novilhos no pasto',
    estimated: 'Peso estimado',
    chipMeta: 'Confiança 91% · Angus cruzado',
  },
  savings: {
    eyebrow: 'O que está em jogo',
    heading: 'Cada quilo mal calculado é dinheiro que você não vê',
    text: 'Vender no olho ou pagar uma balança para cada lote custa caro das duas formas. O HerDex dá uma estimativa rápida com o celular que você já tem, para saber quando vale a pena levar o lote à balança.',
    list: [
      'Estime no pasto e leve à balança só os lotes que precisam',
      'Sem mover nem estressar o animal: animal tranquilo não perde peso',
      'Pese com mais frequência e descubra a tempo qual animal não está ganhando quilos',
      'Negocie com dados, não com palpites',
    ],
    cta: 'Pese melhor. Venda melhor.',
  },
  how: {
    eyebrow: 'Como funciona',
    heading: 'Da foto ao peso',
    alt: 'Touro Brahman de perfil com as medidas de comprimento corporal e perímetro torácico marcadas',
    result: 'Resultado',
    lengthAbbr: 'C',
    girthAbbr: 'PT',
    steps: [
      { title: 'Foto de lado', text: 'A câmera guiada indica o enquadramento e avisa se a foto serve antes de processá-la.' },
      {
        title: 'A IA tira as medidas',
        text: 'Um modelo de visão computacional treinado em grande escala analisa a foto e estima perímetro torácico, comprimento corporal, altura da cernelha e largura do quadril.',
      },
      { title: 'Peso e registro', text: 'Aplica fórmulas zootécnicas e salva o resultado com foto, raça e data.' },
    ],
  },
  features: {
    eyebrow: 'Funções',
    heading: 'Tudo o que você precisa no pasto, no bolso',
    items: [
      { title: 'Câmera guiada', text: 'Quadro de enquadramento e controle de qualidade para que cada foto sirva para medir.' },
      { title: 'IA que entende o animal', text: 'Além das medidas, a IA identifica a raça e a condição corporal, com observações e nível de confiança.' },
      { title: 'Schaeffer e Quetelet', text: 'O peso vem das medidas corporais, o mesmo princípio da fita de pesagem.' },
      { title: 'Histórico por animal', text: 'Foto, raça, medidas, método, data e notas em cada registro. Acompanhe a evolução.' },
      { title: 'Funciona sem sinal', text: 'Os registros ficam no celular e sincronizam quando a conexão volta.' },
      { title: 'Backup na nuvem', text: 'Com sua conta, o histórico tem backup e fica disponível em todos os seus aparelhos.' },
    ],
  },
  panel: {
    eyebrow: 'Painel web para produtores',
    heading: 'Do pasto ao escritório',
    lead: 'O app registra as pesagens no campo. No painel você as vê no computador para analisar o rebanho e decidir quando vender, quem repesar e qual lote precisa de atenção.',
    tabs: 'Telas do painel',
    views: [
      { id: 'tablero', label: 'Visão geral', title: 'Todo o rebanho num relance', text: 'Animais, quilos vivos, ganho médio diário e as pesagens atrasadas.' },
      { id: 'lotes', label: 'Lotes', title: 'Compare lotes e pastos', text: 'Curva mensal de peso por lote e aviso do que avança mais devagar.' },
      { id: 'proyeccion', label: 'Projeção', title: 'Planeje a venda', text: 'Data estimada para chegar ao peso meta e valor do rebanho pelo seu preço por quilo.' },
      { id: 'repesajes', label: 'Repesagens', title: 'Saiba quem pesar', text: 'Plano conforme o intervalo que você escolher e lista para imprimir e levar ao curral.' },
      { id: 'reportes', label: 'Relatórios', title: 'Exporte seus dados', text: 'Pesagens filtradas por data e lote, prontas para Excel (CSV) ou PDF.' },
    ],
    alt: (label) => `Tela ${label} do painel do HerDex com um rebanho de exemplo`,
    sample: 'Dados de exemplo.',
    open: 'Abrir o painel',
    sameAccount: 'Entre com a mesma conta do app. Sem instalar nada.',
  },
  calc: {
    eyebrow: 'Precisão',
    heading: 'Inteligência artificial a serviço da zootecnia',
    text: 'O HerDex combina duas coisas: modelos de inteligência artificial de visão, treinados em grande escala para interpretar imagens, e fórmulas zootécnicas reconhecidas. A IA mede o corpo do animal pela foto e as fórmulas convertem essas medidas em peso, o mesmo princípio da fita de pesagem, mas sem tocar no animal.',
    important: 'Importante:',
    noteTail: 'Cada resultado mostra seu nível de confiança; para vendas ou decisões que exijam o peso exato, use uma balança.',
    formulaName: 'Fórmula de Schaeffer',
    formula: '(PT² × C) / 10 000',
    girth: 'Perímetro torácico (PT)',
    length: 'Comprimento corporal (C)',
    estimated: 'Peso estimado',
  },
  scan: {
    eyebrow: 'Assim o HerDex vê o animal',
    heading: 'Visão computacional em tempo real',
    chip: 'Demonstração',
    aria: 'Animação: a IA escaneia a silhueta de um touro, marca seis pontos anatômicos e traça o comprimento corporal, o perímetro torácico e a altura da cernelha.',
    stages: ['Escaneando a silhueta', 'Detectando pontos anatômicos', 'Medindo o corpo', 'Calculando o peso', 'Análise concluída'],
    silhouettePoints: 'Pontos da silhueta',
    keypoints: 'Pontos anatômicos',
    length: 'Comprimento corporal',
    girth: 'Perímetro torácico',
    height: 'Altura da cernelha',
    confidence: (p) => `Confiança ${p}%`,
    estimated: 'Peso estimado',
    analysisConfidence: 'Confiança da análise',
    replay: 'Repetir análise',
  },
  faq: {
    eyebrow: 'Perguntas frequentes',
    heading: 'O que os pecuaristas nos perguntam',
    items: [
      {
        q: 'Quão exata é a estimativa?',
        a: 'É uma estimativa indicativa baseada em medidas visuais, e cada resultado mostra sua porcentagem de confiança. A precisão depende de condições ideais: boa iluminação, o animal inteiro e de lado, em terreno plano e com uma referência de escala adequada. Não substitui a pesagem na balança: para vendas, dosagens ou qualquer decisão que exija o peso exato, pese o animal numa balança.',
      },
      {
        q: 'Preciso de internet?',
        a: 'Para registrar e consultar seu histórico, não: tudo fica no celular. A análise da foto com IA precisa de conexão; você pode tirar as fotos no pasto e processá-las quando tiver sinal.',
      },
      {
        q: 'Quais raças são suportadas?',
        a: 'O HerDex foi pensado para gado bovino em geral, tanto raças zebuínas quanto europeias e seus cruzamentos. A raça é detectada automaticamente e você pode corrigi-la.',
      },
      {
        q: 'Meus dados estão seguros?',
        a: 'Seu histórico fica no seu aparelho e, se você criar uma conta, tem backup na nuvem com criptografia em trânsito. Não vendemos seus dados nem os usamos para publicidade. Veja os detalhes na nossa política de privacidade.',
      },
    ],
  },
  download: {
    heading: 'Comece a pesar hoje',
    text: 'Baixe o HerDex e faça sua primeira estimativa no próximo animal que tiver à frente. Disponível para Android e iOS.',
    alt: 'Rebanho de gado Nelore pastando',
  },
  footer: {
    label: 'Rodapé',
    privacy: 'Privacidade',
    deleteAccount: 'Excluir conta',
    tagline: 'Estimativa de peso bovino por análise fotográfica.',
    photos: 'Fotografias via Wikimedia Commons:',
    publicDomain: 'Domínio público',
  },
  disclaimer:
    'O HerDex oferece estimativas de peso com fins indicativos. Os resultados dependem de condições ideais de iluminação, enquadramento e referência de escala, e não substituem a pesagem numa balança.',
  legal: {
    updated: '25 de outubro de 2026',
    tagLegal: 'Legal',
    tagAccount: 'Conta',
    contents: 'Conteúdo',
  },
}

const en = {
  meta: {
    home: {
      title: 'HerDex — Weigh your cattle with a photo',
      description: 'HerDex estimates the weight of your cattle from a single photo, using artificial intelligence. No scale, no stress for the animal.',
    },
    privacy: {
      title: 'Privacy policy — HerDex',
      description: 'How HerDex collects, uses, shares and protects your information, and how to delete your account and data.',
    },
    deletion: {
      title: 'Delete your account — HerDex',
      description: 'How to delete your HerDex account and all your data, from the app or by email.',
    },
  },
  nav: {
    links: [
      { href: '#ahorro', label: 'Savings' },
      { href: '#como-funciona', label: 'How it works' },
      { href: '#funciones', label: 'Features' },
      { href: '#panel', label: 'Panel' },
      { href: '#calculadora', label: 'Accuracy' },
      { href: '#faq', label: 'FAQ' },
    ],
    download: 'Download',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    main: 'Main',
    language: 'Language',
  },
  highlightsLabel: 'Benefits',
  highlights: [
    { title: 'No need to move the animal', text: 'Estimate weight with the phone you already carry to the field.' },
    { title: 'Works without signal', text: 'Record in the field and sync when you get back.' },
    { title: 'History per animal', text: 'Every weighing is saved with a photo and date.' },
  ],
  hero: {
    tag: 'AI cattle weight estimation',
    title1: 'Weigh your cattle',
    title2: 'with a photo',
    lead: "Take a side photo. HerDex measures the animal's body and estimates its weight in seconds, without moving or stressing it.",
    cta: 'Download HerDex',
    how: 'See how it works',
    disclaimer: "Indicative estimate. It doesn't replace weighing on a scale.",
    alt: 'Rancher walking among his herd of steers in the pasture',
    estimated: 'Estimated weight',
    chipMeta: '91% confidence · Angus cross',
  },
  savings: {
    eyebrow: "What's at stake",
    heading: "Every miscounted kilo is money you don't see",
    text: "Selling by eye or paying for a scale for every lot costs you either way. HerDex gives you a quick estimate with the phone you already have, so you know when it's worth taking the lot to the scale.",
    list: [
      'Estimate in the field and take only the lots that need it to the scale',
      "No moving or stressing the animal: a calm animal doesn't lose weight",
      "Weigh more often and spot in time which animal isn't gaining",
      'Negotiate with data, not hunches',
    ],
    cta: 'Weigh smarter. Sell better.',
  },
  how: {
    eyebrow: 'How it works',
    heading: 'From photo to weight',
    alt: 'Brahman bull in profile with body length and heart girth measurements marked',
    result: 'Result',
    lengthAbbr: 'L',
    girthAbbr: 'HG',
    steps: [
      { title: 'Side photo', text: 'The guided camera shows you the framing and tells you if the photo works before processing it.' },
      {
        title: 'The AI takes the measurements',
        text: 'A computer vision model trained at large scale analyzes the photo and estimates heart girth, body length, height at withers and hip width.',
      },
      { title: 'Weight and record', text: 'It applies livestock formulas and saves the result with photo, breed and date.' },
    ],
  },
  features: {
    eyebrow: 'Features',
    heading: 'Everything you need in the field, in your pocket',
    items: [
      { title: 'Guided camera', text: 'Framing guide and quality check so every photo is usable for measuring.' },
      { title: 'AI that understands the animal', text: 'Beyond measurements, the AI identifies breed and body condition, with notes and a confidence level.' },
      { title: 'Schaeffer and Quetelet', text: 'Weight comes from body measurements, the same principle as a weigh tape.' },
      { title: 'History per animal', text: 'Photo, breed, measurements, method, date and notes on every record. Track progress.' },
      { title: 'Works without signal', text: 'Records are saved on the phone and sync when the connection returns.' },
      { title: 'Cloud backup', text: 'With your account, your history is backed up and available on all your devices.' },
    ],
  },
  panel: {
    eyebrow: 'Web panel for producers',
    heading: 'From the pasture to the office',
    lead: 'The app records weighings in the field. In the panel you see them on your computer to analyze the herd and decide when to sell, whom to reweigh and which lot needs attention.',
    tabs: 'Panel views',
    views: [
      { id: 'tablero', label: 'Dashboard', title: 'The whole herd at a glance', text: 'Animals, live weight, average daily gain and overdue weighings.' },
      { id: 'lotes', label: 'Lots', title: 'Compare lots and paddocks', text: 'Monthly weight curve per lot and a heads-up on the slowest one.' },
      { id: 'proyeccion', label: 'Projection', title: 'Plan the sale', text: 'Estimated date to reach target weight and herd value at your price per kilo.' },
      { id: 'repesajes', label: 'Reweighs', title: 'Know who to weigh', text: 'Plan based on the interval you choose and a printable list for the chute.' },
      { id: 'reportes', label: 'Reports', title: 'Export your data', text: 'Weighings filtered by date and lot, ready for Excel (CSV) or PDF.' },
    ],
    alt: (label) => `${label} view of the HerDex panel with a sample herd`,
    sample: 'Sample data.',
    open: 'Open the panel',
    sameAccount: 'Sign in with your app account. Nothing to install.',
  },
  calc: {
    eyebrow: 'Accuracy',
    heading: 'Artificial intelligence serving animal science',
    text: "HerDex combines two things: vision AI models, trained at large scale to interpret images, and recognized livestock formulas. The AI measures the animal's body from the photo and the formulas turn those measurements into weight, the same principle as a weigh tape, without touching the animal.",
    important: 'Important:',
    noteTail: 'Every result shows its confidence level; for sales or decisions that require the exact weight, use a scale.',
    formulaName: 'Schaeffer formula',
    formula: '(HG² × L) / 10 000',
    girth: 'Heart girth (HG)',
    length: 'Body length (L)',
    estimated: 'Estimated weight',
  },
  scan: {
    eyebrow: 'How HerDex sees the animal',
    heading: 'Computer vision in real time',
    chip: 'Demo',
    aria: "Animation: the AI scans a bull's silhouette, marks six anatomical points and traces body length, heart girth and height at withers.",
    stages: ['Scanning silhouette', 'Detecting anatomical points', 'Measuring the body', 'Calculating weight', 'Analysis complete'],
    silhouettePoints: 'Silhouette points',
    keypoints: 'Anatomical points',
    length: 'Body length',
    girth: 'Heart girth',
    height: 'Height at withers',
    confidence: (p) => `${p}% confidence`,
    estimated: 'Estimated weight',
    analysisConfidence: 'Analysis confidence',
    replay: 'Replay analysis',
  },
  faq: {
    eyebrow: 'FAQ',
    heading: 'What ranchers ask us',
    items: [
      {
        q: 'How accurate is the estimate?',
        a: "It's an indicative estimate based on visual measurements, and every result shows its confidence percentage. Accuracy depends on ideal conditions: good lighting, the whole animal side-on, on flat ground and with a suitable scale reference. It doesn't replace weighing on a scale: for sales, dosing or any decision that requires the exact weight, weigh the animal on a scale.",
      },
      {
        q: 'Do I need internet?',
        a: "Not to record and view your history: everything is saved on the phone. The AI photo analysis does need a connection; you can take photos in the field and process them once you have signal.",
      },
      {
        q: 'Which breeds does it support?',
        a: 'HerDex is designed for cattle in general, both zebu and European breeds and their crosses. The breed is detected automatically and you can correct it.',
      },
      {
        q: 'Is my data safe?',
        a: "Your history lives on your device and, if you create an account, it's backed up to the cloud with encryption in transit. We don't sell your data or use it for advertising. See the details in our privacy policy.",
      },
    ],
  },
  download: {
    heading: 'Start weighing today',
    text: 'Download HerDex and make your first estimate on the next animal in front of you. Available for Android and iOS.',
    alt: 'Herd of Nelore cattle grazing in a pasture',
  },
  footer: {
    label: 'Footer',
    privacy: 'Privacy',
    deleteAccount: 'Delete account',
    tagline: 'Cattle weight estimation through photo analysis.',
    photos: 'Photos via Wikimedia Commons:',
    publicDomain: 'Public domain',
  },
  disclaimer:
    "HerDex provides weight estimates for guidance only. Results depend on ideal lighting, framing and scale reference conditions, and don't replace weighing on a scale.",
  legal: {
    updated: 'October 25, 2026',
    tagLegal: 'Legal',
    tagAccount: 'Account',
    contents: 'Contents',
  },
}

export const t = { es, pt, en }[lang]

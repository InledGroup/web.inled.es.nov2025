export interface SaasProduct {
  id: string;
  name: string;
  description: {
    es: string;
    en: string;
  };
  icon: string;
  link: string;
}

export const saas: SaasProduct[] = [
  {
    id: 'start',
    name: 'Start',
    description: {
      es: 'Tu página de inicio inteligente y multibuscador.',
      en: 'Your intelligent home page and multi-search engine.'
    },
    icon: 'https://hosted.inled.es/start-simple-blanco-sinfondo.png',
    link: 'https://start.inled.es'
  },
  {
    id: 'indoc',
    name: 'InDoc',
    description: {
      es: 'Editor de texto y documentos en línea colaborativo.',
      en: 'Collaborative online text and document editor.'
    },
    icon: 'https://hosted.inled.es/INDOC.png',
    link: 'https://insuite.inled.es/indoc'
  },
  {
    id: 'inmd',
    name: 'InMD',
    description: {
      es: 'Editor visual de Markdown potente y libre.',
      en: 'Powerful and free visual Markdown editor.'
    },
    icon: 'https://hosted.inled.es/inMD.png',
    link: 'https://insuite.inled.es/inmd'
  },
  {
    id: 'mdpdf',
    name: 'MDPDF Online',
    description: {
      es: 'Convierte Markdown a PDF desde tu navegador.',
      en: 'Convert Markdown to PDF from your browser.'
    },
    icon: 'https://hosted.inled.es/MDPDF.png',
    link: 'https://insuite.inled.es/mdpdf'
  },
  {
    id: 'inlinked',
    name: 'InLinked',
    description: {
      es: 'Generador de posts para LinkedIn potenciado por IA.',
      en: 'AI-powered LinkedIn post generator.'
    },
    icon: 'https://hosted.inled.es/INLINKED.png',
    link: 'https://insuite.inled.es/inlinked'
  },
  {
    id: 'inqr',
    name: 'InQR',
    description: {
      es: 'Generador de códigos QR seguro y privado.',
      en: 'Secure and private QR code generator.'
    },
    icon: 'https://hosted.inled.es/inqr.png',
    link: 'https://insuite.inled.es/inqr'
  },
  {
    id: 'mdocx',
    name: 'MDocX',
    description: {
      es: 'Convierte archivos Markdown a DOCX y viceversa al instante.',
      en: 'Instantly convert Markdown files to DOCX and vice versa.'
    },
    icon: 'https://hosted.inled.es/MDOCX.png',
    link: 'https://insuite.inled.es/mdoxc'
  },
  {
    id: 'devreka',
    name: 'Devreka!',
    description: {
      es: 'Generador de ideas de negocio para devs con IA.',
      en: 'Business idea generator for devs with AI.'
    },
    icon: 'https://hosted.inled.es/devreka.png',
    link: 'https://devreka.inled.es'
  },
  {
    id: 'glassy',
    name: 'Glassy',
    description: {
      es: 'Transforma SVGs a liquid glass.',
      en: 'Transform SVGs to liquid glass.'
    },
    icon: 'https://hosted.inled.es/glassy.svg',
    link: 'https://glassy.inled.es'
  },
  {
    id: 'matrixwww',
    name: 'Matrix WWW',
    description: {
      es: 'Simulaciones de Matrix, en el navegador.',
      en: 'Matrix simulations, in the browser.'
    },
    icon: 'https://hosted.inled.es/matrixwww.ico',
    link: 'https://matrix-www.inled.es'
  },
  {
    id: 'aicloud',
    name: 'AI Cloud',
    description: {
      es: 'Crea chatbots de IA privados que se ejecutan en el navegador del visitante.',
      en: 'Create private AI chatbots that run in the visitor\'s browser.'
    },
    icon: 'https://hosted.inled.es/inledai.svg',
    link: 'https://aicloud.inled.es'
  },
  {
    id: 'edgeai',
    name: 'Edge AI',
    description: {
      es: 'La alternativa 100% privada y local a los chatbots de IA de OpenAI y Google.',
      en: 'The 100% private and local alternative to AI chatbots from OpenAI and Google.'
    },
    icon: 'https://hosted.inled.es/inledai.svg',
    link: 'https://edge.inled.es/landing'
  },
];


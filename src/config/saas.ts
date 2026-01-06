export interface SaasProduct {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
}

export const saas: SaasProduct[] = [
  {
    id: 'start',
    name: 'Start',
    description: 'Tu página de inicio inteligente y multibuscador.',
    icon: 'https://hosted.inled.es/start-simple-blanco-sinfondo.png',
    link: 'https://start.inled.es'
  },
  {
    id: 'indoc',
    name: 'InDoc',
    description: 'Editor de texto y documentos en línea colaborativo.',
    icon: 'https://hosted.inled.es/INDOC.png',
    link: 'https://insuite.inled.es/indoc'
  },
  {
    id: 'inmd',
    name: 'InMD',
    description: 'Editor visual de Markdown potente y libre.',
    icon: 'https://hosted.inled.es/inMD.png',
    link: 'https://insuite.inled.es/inmd'
  },
  {
    id: 'mdpdf',
    name: 'MDPDF Online',
    description: 'Convierte Markdown a PDF desde tu navegador.',
    icon: 'https://hosted.inled.es/MDPDF.png',
    link: 'https://insuite.inled.es/mdpdf'
  },
  {
    id: 'inlinked',
    name: 'InLinked',
    description: 'Generador de posts para LinkedIn potenciado por IA.',
    icon: 'https://hosted.inled.es/INLINKED.png',
    link: 'https://insuite.inled.es/inlinked'
  },
  {
    id: 'inqr',
    name: 'InQR',
    description: 'Generador de códigos QR seguro y privado.',
    icon: 'https://hosted.inled.es/inqr.png',
    link: 'https://insuite.inled.es/inqr'
  },
  {
    id: 'mdocx',
    name: 'MDocX',
    description: 'Convierte archivos Markdown a DOCX y viceversa al instante.',
    icon: 'https://hosted.inled.es/MDOCX.png', // Placeholder icon if needed
    link: 'https://insuite.inled.es/mdoxc'
  },
  {
    id: 'devreka',
    name: 'Devreka!',
    description: 'Generador de ideas de negocio para devs con IA.',
    icon: 'https://hosted.inled.es/devreka.png', // Placeholder icon if needed
    link: 'https://devreka.inled.es'
  },
  {
    id: 'glassy',
    name: 'Glassy',
    description: 'Transforma SVGs a liquid glass.',
    icon: 'https://hosted.inled.es/glassy.svg', // Placeholder icon if needed
    link: 'https://glassy.inled.es'
  },
  {
    id: 'matrixwww',
    name: 'Matrix WWW',
    description: 'Simulaciones de Matrix, en el navegador.',
    icon: 'https://hosted.inled.es/matrixwww.ico', // Placeholder icon if needed
    link: 'https://matrix-www.inled.es'
  },
  {
    id: 'aicloud',
    name: 'AI Cloud',
    description: 'Crea chatbots de IA privados que se ejecutan en el navegador del visitante.',
    icon: 'https://hosted.inled.es/inledai.svg', // Placeholder icon if needed
    link: 'https://aicloud.inled.es'
  },
  {
    id: 'edgeai',
    name: 'Edge AI',
    description: 'La alternativa 100% privada y local a los chatbots de IA de OpenAI y Google.',
    icon: 'https://hosted.inled.es/inledai.svg', // Placeholder icon if needed
    link: 'https://edge.inled.es/landing'
  },
  

];

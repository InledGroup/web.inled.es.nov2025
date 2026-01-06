export interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
}

export const apps: App[] = [
  {
    id: 'swiftinstall',
    name: 'Swiftinstall',
    description: 'Instala, desinstala y gestiona paquetes .deb y .appimage fácilmente.',
    icon: 'https://hosted.inled.es/swiftinstall-logo.png',
    link: '/apps/swiftinstall'
  },
  {
    id: 'warp-vpn',
    name: 'Warp VPN GUI',
    description: 'Interfaz gráfica super sencilla para gestionar la VPN gratuita de Cloudflare: Warp.',
    icon: 'https://hosted.inled.es/warpupscale.png',
    link: '/apps/warp-vpn'
  },
  {
    id: 'startomnibox',
    name: 'Start Omnibox',
    description: 'Usa el buscador que quieras. Fácil, a 3 clics.',
    icon: 'https://hosted.inled.es/icon128.png',
    link: '/apps/startomnibox'
  },
  {
    id: 'cruzcristiana',
    name: 'Cruz Cristiana para GNOME',
    description: 'Muestra la cruz de Cristo para que la presencia de Dios esté contigo.',
    icon: 'https://hosted.inled.es/cruzcristiana-gnome-logo.png',
    link: '/apps/cruzcristiana'
  },
  {
    id: 'memorywarn',
    name: 'Memory Warn',
    description: 'Advierte cuando el uso de memoria de su ordenador supera un umbral establecido.',
    icon: 'https://hosted.inled.es/memory-warn-logo.png',
    link: '/apps/memorywarn'
  },
  {
    id: 'startntp',
    name: 'Start New Tab Page',
    description: 'Experimenta la productividad con Start como página de inicio.',
    icon: 'https://hosted.inled.es/start.newtabpage.png',
    link: '/apps/startntp'
  },
  {
    id: 'winerror',
    name: 'Windows Error',
    description: 'Disfruta de la ventana de error de Windows XP en tu Mac.',
    icon: 'https://hosted.inled.es/winerror.png',
    link: '/apps/winerror'
  },
  {
    id: 'winbsod',
    name: 'WinBSOD',
    description: 'Simula la BSOD de Windows... ¡en tu Mac!',
    icon: 'https://hosted.inled.es/winbsod.png',
    link: '/apps/winbsod'
  },
  {
    id: 'tabstacker',
    name: 'Tabstacker',
    description: 'Guarda pestañas, envíalas y haz de todo con ellas fácilmente.',
    icon: 'https://hosted.inled.es/tabstacker.png',
    link: '/apps/tabstacker'
  },
  {
    id: 'cleany',
    name: 'Cleany',
    description: 'Una extensión perfecta para ordenadores públicos o compartidos.',
    icon: 'https://hosted.inled.es/cleany.png',
    link: '/apps/cleany'
  },
  {
    id: 'archive.is',
    name: 'Open in Archive.is',
    description: 'Abre la página en archive.is a un clic.',
    icon: 'https://hosted.inled.es/archive.is.png',
    link: '/apps/archive.is'
  },
  {
    id: 'startchat',
    name: 'Startchat',
    description: 'Chat en la misma red wifi, sin servidores externos.',
    icon: 'https://hosted.inled.es/startchat.png',
    link: '/apps/startchat'
  },
  {
    id: 'inshare',
    name: 'InShare',
    description: 'Comparte archivos a través de la red local de forma 100% privada.',
    icon: 'https://hosted.inled.es/inshare.capture.png',
    link: '/apps/inshare'
  },
  {
    id: 'moodlenotifier',
    name: 'Moodle Notifier',
    description: 'Estate al día de las novedades de tu Moodle.',
    icon: 'https://hosted.inled.es/moodlenotifier.png',
    link: '/apps/moodlenotifier'
  }
];

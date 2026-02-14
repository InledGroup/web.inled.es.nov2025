export interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
  notice?: {
    type: 'warning' | 'info';
    message: string;
  };
}

export const apps: App[] = [
  {
    id: 'bastion',
    name: 'Bastion Browser',
    description: 'Navegación ultra-segura mediante aislamiento remoto y endurecimiento de red.',
    icon: 'https://hosted.inled.es/bastion.png',
    link: '/bastion'
  },
    {
    id: 'swiftinstall',
    name: 'AppInstall',
    description: 'Instala, desinstala y gestiona paquetes .deb y .appimage fácilmente.',
    icon: 'https://hosted.inled.es/swiftinstall-logo.png',
    link: '/apps/appinstall'
  },
    {
    id: 'cleany',
    name: 'Cleany',
    description: 'Una extensión perfecta para ordenadores públicos o compartidos.',
    icon: 'https://hosted.inled.es/cleany.png',
    link: '/apps/cleany'
  },
  {
    id: 'startchat',
    name: 'Startchat',
    description: 'Chat en la misma red wifi, sin servidores externos.',
    icon: 'https://hosted.inled.es/startchat.png',
    link: '/apps/startchat',
    notice: {
      type: 'info',
      message: 'Próximamente disponible una actualización con traducción de la interfaz al inglés y transformación en PWA.'
    }
  },
  {
    id: 'inshare',
    name: 'InShare',
    description: 'Comparte archivos a través de la red local de forma 100% privada.',
    icon: 'https://hosted.inled.es/inshare.capture.png',
    link: '/apps/inshare',
    notice: {
      type: 'info',
      message: 'Próximamente disponible una actualización con traducción de la interfaz al inglés y transformación en PWA.'
    }
  },
  {
    id: 'moodlenotifier',
    name: 'Moodle Notifier',
    description: 'Estate al día de las novedades de tu Moodle.',
    icon: 'https://hosted.inled.es/moodlenotifier.png',
    link: '/apps/moodlenotifier',
    notice: {
      type: 'info',
      message: 'Próximamente disponible una actualización con traducción de la interfaz al inglés.'
    }
  },
  {
    id: 'warp-vpn',
    name: 'Warp VPN GUI',
    description: 'Interfaz gráfica super sencilla para gestionar la VPN gratuita de Cloudflare: Warp.',
    icon: 'https://hosted.inled.es/warpupscale.png',
    link: '/apps/warp-vpn',
    notice: {
      type: 'warning',
      message: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.'
    }
  },
  {
    id: 'startomnibox',
    name: 'Start Omnibox',
    description: 'Usa el buscador que quieras. Fácil, a 3 clics.',
    icon: 'https://hosted.inled.es/icon128.png',
    link: '/apps/startomnibox',
    notice: {
      type: 'warning',
      message: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.'
    }
  },
  {
    id: 'startntp',
    name: 'Start New Tab Page',
    description: 'Experimenta la productividad con Start como página de inicio.',
    icon: 'https://hosted.inled.es/start.newtabpage.png',
    link: '/apps/startntp',
    notice: {
      type: 'warning',
      message: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.'
    }
  },
  {
    id: 'winerror',
    name: 'Windows Error',
    description: 'Disfruta de la ventana de error de Windows XP en tu Mac.',
    icon: 'https://hosted.inled.es/winerror.png',
    link: '/apps/winerror',
    notice: {
      type: 'warning',
      message: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.'
    }
  },
  {
    id: 'winbsod',
    name: 'WinBSOD',
    description: 'Simula la BSOD de Windows... ¡en tu Mac!',
    icon: 'https://hosted.inled.es/winbsod.png',
    link: '/apps/winbsod',
    notice: {
      type: 'warning',
      message: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.'
    }
  },
  {
    id: 'tabstacker',
    name: 'Tabstacker',
    description: 'Guarda pestañas, envíalas y haz de todo con ellas fácilmente.',
    icon: 'https://hosted.inled.es/tabstacker.png',
    link: '/apps/tabstacker',
    notice: {
      type: 'warning',
      message: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.'
    }
  },
  {
    id: 'archive.is',
    name: 'Open in Archive.is',
    description: 'Abre la página en archive.is a un clic.',
    icon: 'https://hosted.inled.es/archive.is.png',
    link: '/apps/archive.is',
    notice: {
      type: 'warning',
      message: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.'
    }
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

];
export interface App {
  id: string;
  name: string;
  description: {
    es: string;
    en: string;
  };
  icon: string;
  link: string;
  notice?: {
    type: 'warning' | 'info';
    message: {
      es: string;
      en: string;
    };
  };
}

export const apps: App[] = [
    {
    id: 'tabnest',
    name: 'TabNest',
    description: {
      es: 'Tu centro de control personal en cada nueva pestaña: TV, radio y noticias.',
      en: 'Your personal control center in every new tab: TV, radio, and news.'
    },
    icon: 'https://hosted.inled.es/tabnest.png',
    link: '/apps/tabnest'
  },
  {
    id: 'bastion',
    name: 'Bastion Browser',
    description: {
      es: 'Navegación ultra-segura mediante aislamiento remoto y endurecimiento de red.',
      en: 'Ultra-secure browsing through remote isolation and network hardening.'
    },
    icon: 'https://hosted.inled.es/bastion.png',
    link: '/bastion'
  },
  {
    id: 'swiftinstall',
    name: 'AppInstall',
    description: {
      es: 'Instala, desinstala y gestiona paquetes .deb y .appimage fácilmente.',
      en: 'Easily install, uninstall and manage .deb and .appimage packages.'
    },
    icon: 'https://hosted.inled.es/swiftinstall-logo.png',
    link: '/apps/appinstall'
  },
  {
    id: 'cleany',
    name: 'Cleany',
    description: {
      es: 'Una extensión perfecta para ordenadores públicos o compartidos.',
      en: 'A perfect extension for public or shared computers.'
    },
    icon: 'https://hosted.inled.es/cleany.png',
    link: '/apps/cleany'
  },
  {
    id: 'startchat',
    name: 'Startchat',
    description: {
      es: 'Chat en la misma red wifi, sin servidores externos.',
      en: 'Chat on the same Wi-Fi network, without external servers.'
    },
    icon: 'https://hosted.inled.es/startchat.png',
    link: '/apps/startchat',
    notice: {
      type: 'info',
      message: {
        es: 'Próximamente disponible una actualización con traducción de la interfaz al inglés y transformación en PWA.',
        en: 'An update with English translation and PWA transformation is coming soon.'
      }
    }
  },
  {
    id: 'inshare',
    name: 'InShare',
    description: {
      es: 'Comparte archivos a través de la red local de forma 100% privada.',
      en: 'Share files across the local network in a 100% private way.'
    },
    icon: 'https://hosted.inled.es/inshare.capture.png',
    link: '/apps/inshare',
    notice: {
      type: 'info',
      message: {
        es: 'Próximamente disponible una actualización con traducción de la interfaz al inglés y transformación en PWA.',
        en: 'An update with English translation and PWA transformation is coming soon.'
      }
    }
  },
  {
    id: 'moodlenotifier',
    name: 'Moodle Notifier',
    description: {
      es: 'Estate al día de las novedades de tu Moodle.',
      en: 'Stay up to date with your Moodle news.'
    },
    icon: 'https://hosted.inled.es/moodlenotifier.png',
    link: '/apps/moodlenotifier',
    notice: {
      type: 'info',
      message: {
        es: 'Próximamente disponible una actualización con traducción de la interfaz al inglés.',
        en: 'An update with English translation is coming soon.'
      }
    }
  },
  {
    id: 'warp-vpn',
    name: 'Warp VPN GUI',
    description: {
      es: 'Interfaz gráfica super sencilla para gestionar la VPN gratuita de Cloudflare: Warp.',
      en: 'Super simple graphical interface to manage Cloudflare\'s free VPN: Warp.'
    },
    icon: 'https://hosted.inled.es/warpupscale.png',
    link: '/apps/warp-vpn',
    notice: {
      type: 'warning',
      message: {
        es: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.',
        en: 'This resource no longer requires maintenance and is not Inled\'s main line of business. Currently, no time is being dedicated to this project.'
      }
    }
  },
  {
    id: 'startomnibox',
    name: 'Start Omnibox',
    description: {
      es: 'Usa el buscador que quieras. Fácil, a 3 clics.',
      en: 'Use the search engine you want. Easy, in 3 clicks.'
    },
    icon: 'https://hosted.inled.es/icon128.png',
    link: '/apps/startomnibox',
    notice: {
      type: 'warning',
      message: {
        es: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.',
        en: 'This resource no longer requires maintenance and is not Inled\'s main line of business. Currently, no time is being dedicated to this project.'
      }
    }
  },
  {
    id: 'startntp',
    name: 'Start New Tab Page',
    description: {
      es: 'Experimenta la productividad con Start como página de inicio.',
      en: 'Experience productivity with Start as your home page.'
    },
    icon: 'https://hosted.inled.es/start.newtabpage.png',
    link: '/apps/startntp',
    notice: {
      type: 'warning',
      message: {
        es: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.',
        en: 'This resource no longer requires maintenance and is not Inled\'s main line of business. Currently, no time is being dedicated to this project.'
      }
    }
  },
  {
    id: 'winerror',
    name: 'Windows Error',
    description: {
      es: 'Disfruta de la ventana de error de Windows XP en tu Mac.',
      en: 'Enjoy the Windows XP error window on your Mac.'
    },
    icon: 'https://hosted.inled.es/winerror.png',
    link: '/apps/winerror',
    notice: {
      type: 'warning',
      message: {
        es: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.',
        en: 'This resource no longer requires maintenance and is not Inled\'s main line of business. Currently, no time is being dedicated to this project.'
      }
    }
  },
  {
    id: 'winbsod',
    name: 'WinBSOD',
    description: {
      es: 'Simula la BSOD de Windows... ¡en tu Mac!',
      en: 'Simulate the Windows BSOD... on your Mac!'
    },
    icon: 'https://hosted.inled.es/winbsod.png',
    link: '/apps/winbsod',
    notice: {
      type: 'warning',
      message: {
        es: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.',
        en: 'This resource no longer requires maintenance and is not Inled\'s main line of business. Currently, no time is being dedicated to this project.'
      }
    }
  },
  {
    id: 'tabstacker',
    name: 'Tabstacker',
    description: {
      es: 'Guarda pestañas, envíalas y haz de todo con ellas fácilmente.',
      en: 'Save tabs, send them and do everything with them easily.'
    },
    icon: 'https://hosted.inled.es/tabstacker.png',
    link: '/apps/tabstacker',
    notice: {
      type: 'warning',
      message: {
        es: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.',
        en: 'This resource no longer requires maintenance and is not Inled\'s main line of business. Currently, no time is being dedicated to this project.'
      }
    }
  },
  {
    id: 'archive.is',
    name: 'Open in Archive.is',
    description: {
      es: 'Abre la página en archive.is a un clic.',
      en: 'Open the page in archive.is with one click.'
    },
    icon: 'https://hosted.inled.es/archive.is.png',
    link: '/apps/archive.is',
    notice: {
      type: 'warning',
      message: {
        es: 'Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto.',
        en: 'This resource no longer requires maintenance and is not Inled\'s main line of business. Currently, no time is being dedicated to this project.'
      }
    }
  },
  {
    id: 'cruzcristiana',
    name: 'Cruz Cristiana para GNOME',
    description: {
      es: 'Muestra la cruz de Cristo para que la presencia de Dios esté contigo.',
      en: 'Display the cross of Christ so that God\'s presence is with you.'
    },
    icon: 'https://hosted.inled.es/cruzcristiana-gnome-logo.png',
    link: '/apps/cruzcristiana'
  },
  {
    id: 'memorywarn',
    name: 'Memory Warn',
    description: {
      es: 'Advierte cuando el uso de memoria de su ordenador supera un umbral establecido.',
      en: 'Warns when your computer\'s memory usage exceeds a set threshold.'
    },
    icon: 'https://hosted.inled.es/memory-warn-logo.png',
    link: '/apps/memorywarn'
  },

];
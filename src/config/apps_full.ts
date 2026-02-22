export interface AppData {
  id: string;
  title: string;
  icon: string;
  platform: string[];
  shortDescription: string;
  description: string;
  screenshots: string[];
  video: string;
  downloads: {
    github: string;
    sourceforge: string;
    sourceCode: string;
  };
  notice?: {
    type: 'warning' | 'info';
    message: string;
  };
}

export const appsData: AppData[] = [
    {
    "id": "bautilus",
    "title": "Bautilus",
    "icon": "https://hosted.inled.es/bautilus.png",
    "platform": [
      "Chrome",
      "Edge",
      "Brave"
    ],
    "shortDescription": "Convierte tu navegador en un explorador de archivos similar al Nautilus de GNOME.",
    "description": "# Bautilus: El Explorador Todopoderoso\n\nBautilus es una extensión diseñada para aquellos que necesitan gestionar archivos locales y remotos con la misma comodidad que en su sistema operativo. Inspirado en Nautilus (GNOME), trae la potencia de un gestor de archivos nativo directamente a tu navegador.\n\n### Características Principales\n\n- **Visores Integrados**: Previsualiza imágenes, vídeos, PDFs, archivos ZIP, texto y código fuente sin salir de la extensión.\n- **Interfaz GNOME-like**: Una experiencia de usuario limpia, intuitiva y profesional basada en el diseño de GNOME.\n- **Privacidad Absoluta**: Todo el procesamiento se realiza localmente. Tus archivos no se suben a ningún servidor.\n- **Multiformato**: Soporte para los formatos más comunes de la web y el desarrollo.\n- **Navegador Todopoderoso**: Transforma una herramienta de navegación en una estación de trabajo completa.",
    "screenshots": [
      "https://hosted.inled.es/bautilus.png"
    ],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/bautilus/releases/latest/",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/bautilus"
    }
  },
    {
    "id": "darkreaderpdf",
    "title": "Dark Reader PDF",
    "icon": "https://hosted.inled.es/darkreaderpdf.png",
    "platform": [
      "Chrome",
      "Edge",
      "Brave"
    ],
    "shortDescription": "Abre tus archivos PDF en un modo oscuro real y personalizable.",
    "description": "# Dark Reader PDF\n\nProtege tu vista con el modo oscuro definitivo para PDFs en el navegador. No es solo un filtro; es una transformación inteligente de tus documentos.\n\n### Características Principales\n\n- **Modo Oscuro Real**: Algoritmos avanzados para invertir colores manteniendo la legibilidad.\n- **Control de Brillo y Contraste**: Personaliza la intensidad según la luz de tu entorno.\n- **Visor Mejorado**: Funciones de visualización superiores al visor nativo de los navegadores.\n- **Ligero y Rápido**: Sin impacto en el rendimiento del sistema.\n- **Privacidad Total**: Procesamiento local, tus PDFs nunca salen de tu ordenador.",
    "screenshots": [
      "https://hosted.inled.es/demo-dark-reader.png"
    ],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/dark-reader-PDF/archive/refs/heads/main.zip",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/dark-reader-PDF"
    }
  },
  {
    "id": "bastion",
    "title": "Bastion Browser",
    "icon": "https://hosted.inled.es/bastion.png",
    "platform": [
      "Linux",
      "Docker"
    ],
    "shortDescription": "Navegación ultra-segura mediante aislamiento remoto y endurecimiento de red.",
    "description": "# Bastion Browser\n\nBastion es un navegador remoto diseñado para ofrecer la máxima seguridad mediante el aislamiento total de la sesión de navegación del usuario del sistema local.\n\n### Características Principales\n\n- **Aislamiento por Sesión (UUID)**: Cada conexión genera un entorno de ejecución único y estanco.\n- **Acceso Restringido**: Capa de autenticación mediante API Key obligatoria.\n- **Protección Anti-SSRF**: Bloqueo dinámico de acceso a redes internas.\n- **Control de Recursos**: Gestión activa de sesiones y límites de memoria.\n- **Cifrado E2E**: Tráfico HTTPS/WSS cifrado con TLS.\n- **Descargas Seguras**: Staging aislado para archivos antes de la transferencia local.\n\n### Instalación Rápida\n\n```bash\ngit clone https://github.com/InledGroup/bastion.browser.git && cd bastion.browser && docker compose up -d --build\n```",
    "screenshots": [],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/bastion.browser",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/bastion.browser"
    }
  },
  {
    "id": "swiftinstall",
    "title": "Swiftinstall",
    "icon": "https://hosted.inled.es/swiftinstall-logo.png",
    "platform": [
      "Linux"
    ],
    "shortDescription": "Instala, desinstala y gestiona paquetes .deb y .appimage fácilmente",
    "description": "# Swiftinstall, tu asistente de aplicaciones.  \n\nOlvídate de usar la terminal para instalar o desinstalar paquetes de aplicaciones en Linux.\nInstala todo de forma visual con Swiftinstall.\n¿Errores de instalación? ¡Corrígelos a un clic!\n¿Sistema de archivos demasiado lleno? ¡Límpialo a dos clics!\n¿Necesitas revisar el sistema de archivos en busca de virus? ¡En 3 clics lo tienes!\n\nSwiftinstall está hecho para ti, pensando en tus necesidades y resolviéndolas de forma fácil y cómoda.\n\n### Features\n\n- Open Source\n- Proceso 100% visual\n- Software de calidad: gran cantidad de test antes de publicar\n- Instala aplicaciones gráficamente desde paquetes .deb o .appimage\n- Desinstala cualquier app visualmente\n- Corrige errores de dependencias\n- Analiza el sistema en busca de virus\n- Limpia basura en tu sistema\n- Apariencia moderna",
    "screenshots": [
      "https://hosted.inled.es/swiftinstall/1.png",
      "https://hosted.inled.es/swiftinstall/2.png",
      "https://hosted.inled.es/swiftinstall/3.png"
    ],
    "video": "https://www.youtube.com/embed/4LWLIn5DmOQ",
    "downloads": {
      "github": "https://github.com/InledGroup/swiftinstall/releases/download/v8.0/swiftinstall8.1-ui-fix.deb",
      "sourceforge": "https://sourceforge.net/projects/swiftinstall/files/latest/download",
      "sourceCode": "https://github.com/InledGroup/swiftinstall"
    }
  },
  {
    "id": "warp-vpn",
    "title": "Warp VPN GUI",
    "icon": "https://hosted.inled.es/warpupscale.png",
    "platform": [
      "Linux"
    ],
    "shortDescription": "Interfaz gráfica super sencilla para gestionar la VPN gratuita de Cloudflare: Warp",
    "description": "Deja de usar la terminal para algo tan cotidiano como usar una VPN.\nEsta VPN, proveída por Cloudflare, es gratuita e incluye funciones como protección contra malware y contenido de escaso valor moral.\n\n\nInstalación\nMediante Swiftinstall\nDescarga el paquete .deb\nAbre Swiftinstall y selecciona el paquete\nPulsa en Instalar.\nMediante dpkg\nEjecuta dpkg -i warp-exec-v1.deb\n\nRequisitos\nTener instalada Warp VPN -> [https://pkg.cloudflareclient.com/#debian](https://pkg.cloudflareclient.com/#debian)\nHaber activado Warp -> [https://developers.cloudflare.com/warp-client/get-started/linux/](https://developers.cloudflare.com/warp-client/get-started/linux/)\n\n### Features\n\n- Interfaz 100% visual\n- Sin curva de aprendizaje\n- Software de calidad: revisado y probado para ofrecerte lo mejor\n- Seguridad en la red gracias a 1.1.1.1\n- Evita bloqueos y baneos por IP",
    "screenshots": [
      "https://hosted.inled.es/dream.build.png"
    ],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/warpvpn-gui/releases/download/v1.0/warp-exec-v1.deb",
      "sourceforge": "https://sourceforge.net/projects/warpvpn-gui/files/latest/download",
      "sourceCode": "https://github.com/InledGroup/warpvpn-gui"
    },
    "notice": {
      "type": "warning",
      "message": "Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto y tenemos proyectos mejores que estamos deseosos de que descubras."
    }
  },
  {
    "id": "startomnibox",
    "title": "Start Omnibox",
    "icon": "https://hosted.inled.es/icon128.png",
    "platform": [
      "Chrome",
      "Edge"
    ],
    "shortDescription": "Usa el buscador que quieras. Fácil, a 3 clics.",
    "description": "# Escoge el buscador\n\nCon Start Omnibox tú tienes el poder. Puedes escoger qué motor de búsqueda usar desde el deslpegable de Start Omnibox. Ya no tienes que entrar en la página de cada buscador para comenzar a buscar\n\n\n\n# Funcionamiento\n\n## Escoja el motor de búsqueda\n\nDesde el icono de Start Omnibox en la barra de extensiones\n\n## Escriba S en la barra de búsqueda\n\nEscriba S en la barra de búsqueda y pulse en «Start Omnibox»\n\n## Introduzca su búsqueda\n\nAhora su búsqueda se abrirá en el motor de búsqueda que haya seleccionado\n\n# Instalación\n\n## Descargue el zip y descomprímalo\n\n## Habilite el modo Desarrollador y suba la extensión\n\nEn la esquina superior derecha en la sección Extensiones de su navegador active el modo desarrollador y después pulse en «Cargar descomprimida» en el desplegable que le aparecerá\n\n## Active la extensión\n\nPara finalizar pulse en el switch dentro del recuadro de la extensión y actívela.",
    "screenshots": [
      "https://hosted.inled.es/start-omnibox-inled.es-gif-‐-Hecho-con-Clipchamp.gif"
    ],
    "video": "https://youtube.com/embed/QELO6IBLW4w?si=wf5kS0mIsEwSVRVw",
    "downloads": {
      "github": "https://github.com/InledGroup/start-omnibox/archive/refs/heads/main.zip",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/start-omnibox"
    },
    "notice": {
      "type": "warning",
      "message": "Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto y tenemos proyectos mejores que estamos deseosos de que descubras."
    }
  },
  {
    "id": "cruzcristiana",
    "title": "Cruz Cristiana para GNOME",
    "icon": "https://hosted.inled.es/cruzcristiana-gnome-logo.png",
    "platform": [
      "Linux",
      "GNOME"
    ],
    "shortDescription": "Muestra la cruz de Cristo para que la presencia de Dios esté contigo.",
    "description": "# Cristo te acompaña en tu Linux\n\nYa sea que estés disfrutando de las bondades de usar Linux, la Cruz de Cristo estará siempre contigo y, por tanto, Dios también.\n\nHay múltiples formas de estar acompañados por Dios...\n\nAlgunos llevamos una cruz como colgante, otros un rosario, otros una estampita... **y otros, que pasamos horas delante del ordenador, tenemos a Dios con nosotros gracias a<u>Cruz Cristiana de Inled Group para GNOME.</u>**\n\nSi desea tener la compañía de Dios hasta en formato digital, no lo dude: descargue ya desde la tienda oficial.\n\nEs gratuita y de código abierto.",
    "screenshots": [
      "https://extensions.gnome.org/extension-data/screenshots/screenshot_8060.png"
    ],
    "video": "",
    "downloads": {
      "github": "https://extensions.gnome.org/extension/8060/christian-cross-in-gnome-bar/",
      "sourceforge": "",
      "sourceCode": "https://github.com/jaimegh-es/cruzcristiana-gnome"
    }
  },
  {
    "id": "memorywarn",
    "title": "Memory Warn",
    "icon": "https://hosted.inled.es/memory-warn-logo.png",
    "platform": [
      "Linux"
    ],
    "shortDescription": "Memory-warn advierte cuando el uso de memoria de su ordenador supera un umbral establecido.",
    "description": "¡Descubre tu nuevo compañero del día a día!\nMemory Warn te permite establecer un límite de uso de memoria y te avisa cuando se supera ese límite, ayudándote a prevenir que el ordenador se tueste o deje de responder.\n\nAdemás, puedes establecer la frecuencia de muestreo para un aviso más anticipado.\n\n¡Esperamos que esta sea la solución a los bloqueos inesperados de tu ordenador!\n\n### Features\n\n- Prevención de bloqueos\n- Aviso cuando se supera el umbral\n- Frecuencia de muestreo adaptable\n- Interfaz visual\n- Código de calidad, con revisiones estrictas para asegurar seguridad y fiablidad",
    "screenshots": [
      "https://hosted.inled.es/memory-warn.png"
    ],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/memory-warn/releases/download/v1.0/memory-warn.deb",
      "sourceforge": "https://sourceforge.net/projects/memory-warn/files/latest/download",
      "sourceCode": "https://github.com/InledGroup/memory-warn"
    }
  },
  {
    "id": "startntp",
    "title": "Start New Tab Page",
    "icon": "https://hosted.inled.es/start.newtabpage.png",
    "platform": [
      "Chrome",
      "Edge"
    ],
    "shortDescription": "Experimenta la productividad con Start como página de inicio.",
    "description": "# \n\n## Start como nueva pestaña\n\nEstablece Start como página de nueva pestaña\n\n## Start al arranque\n\nConfigura Start como página de arranque\n\n## Start como inicio\n\nFinalmente Start se convierte en página de inicio\n\n# Instalación\n\n## Descargue el zip y descomprímalo\n\n## Habilite el modo Desarrollador y suba la extensión\n\nEn la esquina superior derecha en la sección Extensiones de su navegador active el modo desarrollador y después pulse en «Cargar descomprimida» en el desplegable que le aparecerá\n\n## Active la extensión\n\nPara finalizar pulse en el switch dentro del recuadro de la extensión y actívela.",
    "screenshots": [
      "https://b.sf-syn.com/badge_img/3908997/oss-users-love-us-white?&r=https://inled.es/startntp/"
    ],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/start.newtab.chrome/archive/refs/heads/main.zip",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/start.newtab.chrome"
    },
    "notice": {
      "type": "warning",
      "message": "Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto y tenemos proyectos mejores que estamos deseosos de que descubras."
    }
  },
  {
    "id": "winerror",
    "title": "Windows Error",
    "icon": "https://hosted.inled.es/winerror.png",
    "platform": [
      "Mac"
    ],
    "shortDescription": "Disfruta de la ventana de error de Windows XP en tu Mac.",
    "description": "# Windows Error for Mac\n\nEsta divertida aplicación te muestra una ventana de error diseñada a imagen y semejanza de las que mostraba nuestro querido Windows XP.\n\nEl error es completamente ficticio y no daña el Mac.\n\n## Instalación\n\nLa aplicación no está \"notarizada\", es decir, firmada con un identificador de desarrollador de Apple.\n\nPor tanto, para poder ejecutarla deberá quitarle la cuarentena automática que tienen todas las apps de Mac cuando no han sido verificadas por el usuario.\n\n### Procedimiento\n\n\n<pre>\nxattr -d com.apple.quarantine WindowsError 2.app\n\n</pre>\n\nEl código es abierto, por tanto Vd. puede revisarlo para comprobar que la app es segura.\n\nLa funcionalidad se encuentra contenida en un único archivo, por lo que es muy fácil revisarla.",
    "screenshots": [
      "https://hosted.inled.es/windowserror.bliss_.png",
      "https://hosted.inled.es/aparienciawinerror copia.png"
    ],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/windowserror/releases/download/v2.0/WindowsError2.zip",
      "sourceforge": "https://sourceforge.net/projects/windowserror/files/latest/download",
      "sourceCode": "https://github.com/InledGroup/windowserror"
    },
    "notice": {
      "type": "warning",
      "message": "Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto y tenemos proyectos mejores que estamos deseosos de que descubras."
    }
  },
  {
    "id": "winbsod",
    "title": "WinBSOD",
    "icon": "https://hosted.inled.es/winbsod.png",
    "platform": [
      "Mac"
    ],
    "shortDescription": "Simula la BSOD de Windows... ¡en tu Mac!.",
    "description": "# Redescubre la ilusión en Windows... ¡desde Mac!\n\nAquellos tiernos momentos en los que te acordabas de la madre de Microsoft y agarrabas el teclado para proceder a golpear al ordenador... esos momentos nunca los olvidaremos mientras sigamos teniendo Windows pero... ¿y con Mac?\n\n## Redescubre la fantástica <u>pantalla azul de la muerte</u> de Windows\n\nAhora disponible para Mac para su uso y disfrute.\n\nYa sea que quieras que tu Mac se parezca más a Windows o que desees recordar tu historia con Windows (si alguna vez lo has sufrido), WinBSOD es la opción perfecta.\n\n## Instalación\n\nLa aplicación no viene \"notarizada\", es decir, firmada con el identificador de desarrollador de Apple.\n\nEs por ello que, para ejecutarla, deberá emplear el comando \n<pre>\nxattr -d com.apple.quarantine BSOD.app\n</pre>",
    "screenshots": [
      "https://hosted.inled.es/Captura-de-pantalla-2025-06-23-a-las-9.05.56.png"
    ],
    "video": "",
    "downloads": {
      "github": "https://github.com/Inled-Group/winbsod/releases/download/v1.0/BSOD.app.zip",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/winbsod"
    },
    "notice": {
      "type": "warning",
      "message": "Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto y tenemos proyectos mejores que estamos deseosos de que descubras."
    }
  },
  {
    "id": "tabstacker",
    "title": "Tabstacker",
    "icon": "https://hosted.inled.es/tabstacker.png",
    "platform": [
      "Chrome",
      "Edge"
    ],
    "shortDescription": "Guarda pestañas, envíalas y haz de todo con ellas fácilmente",
    "description": "# Redescubre la potencia de las pestañas\n\n---\n\nCon Tabstacker, guardar pestañas, enviarlas por mensajería instantánea o por mail y abrirlas de nuevo agrupadas ya no es difícil y engorroso como con los marcadores.\n\nLa potencia en sí, de forma privada (a diferencia de otras).\n\n## Instalación\n\nHabilita el modo desarrollador en Chrome o derivados y sube el .zip descomprimido.",
    "screenshots": [],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/tabstacker/archive/refs/heads/main.zip",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/tabstacker"
    },
    "notice": {
      "type": "warning",
      "message": "Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto y tenemos proyectos mejores que estamos deseosos de que descubras."
    }
  },
  {
    "id": "cleany",
    "title": "Cleany",
    "icon": "https://hosted.inled.es/cleany.png",
    "platform": [
      "Chrome",
      "Edge"
    ],
    "shortDescription": "Una extensión perfecta para ordenadores públicos o compartidos",
    "description": "# La solución para navegadores en PC's públicos\n\nEvite la suplantación de identidad y la pérdida de información sensible en ordenadores públicos gracias a **Cleany.**\n\nCleany cierra sesiones, borra historial, borra las cookies, limpia datos de formularios...\n\nSimplemente perfecta para su uso.\n\nCada vez que se abre el navegador, Cleany se ejecuta y hace su magia <u>sin ralentizar la velocidad del navegador.</u>\n\n## Instalación\n\nSímplemente descarga y descomprime el .zip, habilita el modo desarrollador en la página de extensiones de Chrome y sube la carpeta de la extensión.",
    "screenshots": [],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/cleany/archive/refs/heads/main.zip",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/cleany"
    }
  },
  {
    "id": "archive.is",
    "title": "Open in Archive.is",
    "icon": "https://hosted.inled.es/archive.is.png",
    "platform": [
      "Chrome",
      "Edge"
    ],
    "shortDescription": "Abre la página en archive.is a un clic",
    "description": "# Accede a contenido ilimitado\n\nGracias a Archive.is puedes disfrutar de descubrir las múltiples capturas de una página web.\n\n## Instala la extensión\n\nDescarga el .zip, descomprímelo, accede a la página de Extensiones del navegador (no la tienda, la página de extensiones instaladas), habilita el modo desarrollador y pulsa en \"cargar descomprimida\"",
    "screenshots": [],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/open-url-archive.is/archive/refs/heads/main.zip",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/open-url-archive.is"
    },
    "notice": {
      "type": "warning",
      "message": "Este recurso ya no requiere mantenimiento y no es la principal línea de negocio de Inled. Actualmente no se está dedicando tiempo a este proyecto y tenemos proyectos mejores que estamos deseosos de que descubras."
    }
  },
  {
    "id": "startchat",
    "title": "Startchat",
    "icon": "https://hosted.inled.es/startchat.png",
    "platform": [
      "Mac",
      "Windows",
      "Linux"
    ],
    "shortDescription": "Chat en la misma red wifi, sin servidores externos",
    "description": "# Chatea en la misma Wifi\n\n¿Te imaginas montarte tu propio Whatsapp en la red local? Con Startchat puedes, a dos comandos.\n\nStartchat es, a la vez, servidor de sala de chat y de la página de conversation.\n\nDispones de varios servidores predefinidos para puertos 8080, 8081 y 8082.\n\nEl servidor predeterminado ya levanta la UI también.\n\n## Ejecución\n\nSimplemente debes instalar NodeJS en tu ordenador y navegar desde la terminal hasta la carpeta donde se encuentra Startchat.\n\nDentro de ella ejecutas\n\n<pre>npm install</pre> y luego <pre>node server.js</pre>",
    "screenshots": [
      "https://hosted.inled.es/uistartchat.png"
    ],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/startchat/archive/refs/heads/main.zip",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/startchat"
    },
    "notice": {
      "type": "info",
      "message": "Próximamente disponible una actualización con traducción de la interfaz al inglés y transformación en PWA."
    }
  },
  {
    "id": "inshare",
    "title": "InShare",
    "icon": "",
    "platform": [
      "Mac",
      "Windows",
      "Linux"
    ],
    "shortDescription": "Comparte archivos a través de la red local de forma 100% privada.",
    "description": "# Tu propio drop de documentos\n\n¿Quieres compartir documentos desde el teléfono al PC? ¿Al revés? Viceversa...\n\nCon InShare es posible, en cualquier sistema operativo y sin instalar una aplicación: ejecutando un simple servidor.\n\n## Ejecución\n\nSimplemente debes instalar NodeJS en tu ordenador y navegar desde la terminal hasta la carpeta donde se encuentra InShare.\n\nDentro de ella ejecutas\n\n<pre>npm install</pre> y luego <pre>node server.js</pre>",
    "screenshots": [
      "https://hosted.inled.es/inshare.capture.png",
      "https://hosted.inled.es/inshare.png"
    ],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/inshare/archive/refs/heads/main.zip",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/inshare"
    },
    "notice": {
      "type": "info",
      "message": "Estamos trabajando para mejorar esta aplicación."
    }
  },
  {
    "id": "moodlenotifier",
    "title": "Moodle Notifier",
    "icon": "https://hosted.inled.es/moodlenotifier.png",
    "platform": [
      "Chrome",
      "Edge"
    ],
    "shortDescription": "Estate al día de las novedades de tu Moodle.",
    "description": "# Moodle Notifier\n\nExtensión de Chrome que te notifica sobre las actividades pendientes en tu plataforma Moodle.\n\n## Características\n\n- **Popup automático al iniciar Chrome** con tus tareas pendientes\n- **Notificación sonora** cuando hay tareas pendientes o se cumple un recordatorio\n- Verificación periódica de tareas pendientes cada 5 minutos\n- Acceso directo a las actividades desde el popup\n- **Posponer tareas por 20 minutos** con temporizador visual en tiempo real\n- **Marcar actividades como vistas** para ocultarlas de la lista principal\n- **Ver todas las tareas** (incluidas las marcadas como vistas) con opción de desmarcarlas\n- **Menú hamburguesa** con acceso rápido a todas las funciones\n- Autenticación segura usando la API oficial de Moodle\n- Interfaz intuitiva para gestionar tus tareas\n\n## Requisitos\n\n- Google Chrome o navegador basado en Chromium\n- Cuenta en una plataforma Moodle\n- La plataforma Moodle debe tener habilitado el servicio web \"moodle_mobile_app\"\n\n## Instalación\n\n\n### 1. Cargar la extensión en Chrome\n\n1. Abre Chrome y ve a chrome://extensions/\n2. Activa el \"Modo de desarrollador\" en la esquina superior derecha\n3. Haz clic en \"Cargar extensión sin empaquetar\"\n4. Selecciona la carpeta moodlenotifier\n\n## Configuración\n\n1. Haz clic en el icono de la extensión en la barra de herramientas de Chrome\n2. Introduce la configuración de tu Moodle:\n   - **URL de Moodle**: La dirección de tu plataforma (ej: https://moodle.example.com)\n   - **Usuario**: Tu nombre de usuario de Moodle\n   - **Contraseña**: Tu contraseña de Moodle\n3. Haz clic en \"Guardar Configuración\"\n\nLa extensión guardará tus credenciales de forma segura y obtendrá un token de acceso a la API de Moodle.\n\n## Uso\n\n### Inicio automático\n\n- **Al abrir Chrome**, la extensión mostrará automáticamente el popup con tus tareas pendientes\n- Si hay tareas, se reproducirá el sonido de notificación sound.mp3)\n- El popup se abrirá en una ventana emergente para que no interrumpa tu flujo de trabajo\n\n### Verificación periódica\n\n- Cada 5 minutos, la extensión verificará si hay nuevas tareas\n- Si detecta tareas nuevas o pendientes, abrirá el popup y reproducirá el sonido\n\n### Menú hamburguesa\n\nHaz clic en el icono de hamburguesa (☰) en la parte superior derecha del popup para acceder a:\n\n- **🔄 Actualizar Tareas**: Obtiene las últimas tareas desde Moodle\n- **📋 Ver Todas las Tareas**: Muestra todas las tareas, incluidas las marcadas como vistas\n- **⚙️ Cambiar Configuración**: Permite modificar la URL de Moodle y credenciales\n\n### Gestionar tareas pendientes\n\nDesde la vista principal de tareas pendientes, cada tarea tiene tres botones:\n\n1. **Abrir** (verde): Abre la actividad directamente en Moodle en una nueva pestaña\n2. **Posponer 20min** (amarillo): Pospone la notificación por 20 minutos\n   - El botón se deshabilita y muestra la hora exacta del próximo aviso\n   - Se muestra un temporizador en tiempo real (ej: \"19m 45s\")\n   - Cuando se cumplen los 20 minutos, se abre el popup y se reproduce el sonido\n3. **Marcar visto** (rojo): Marca la tarea como vista y la oculta de la lista principal\n\n### Ver todas las tareas\n\n1. Haz clic en **📋 Ver Todas las Tareas** en el menú hamburguesa\n2. Verás todas las tareas, incluidas las marcadas como vistas (aparecen con opacidad reducida)\n3. Las tareas marcadas como vistas tienen un botón **Desmarcar** para restaurarlas a la lista principal\n4. Haz clic en **Volver a Pendientes** para regresar a la vista principal\n\n## Sistema de Actualizaciones Automáticas\n\nLa extensión incluye un sistema de actualización automática que verifica periódicamente si hay nuevas versiones disponibles.\n\n### Cómo funciona\n\n1. **Verificación automática**: La extensión verifica actualizaciones cada 1 hora\n2. **Al iniciar Chrome**: También verifica al abrir el navegador\n3. **Notificación visual**: Si hay una actualización, verás un banner naranja en la parte superior del popup\n4. **Descarga fácil**: Haz clic en \"Descargar Actualización\" para obtener la nueva versión\n\n### Banner de actualización\n\nCuando hay una actualización disponible:\n- Aparecerá un banner naranja en la parte superior con el mensaje: \"¡Actualización disponible!\"\n- Muestra el número de versión disponible\n- Incluye un botón para descargar directamente\n- Puedes cerrar el banner con la X (volverá a aparecer después de 6 horas)\n\n\n\n## Seguridad\n\n- Las credenciales se almacenan localmente en tu navegador\n- Se utiliza la API oficial de Moodle para autenticación\n- No se comparten datos con terceros\n- El token de acceso se genera usando el servicio oficial de Moodle\n- Las actualizaciones se verifican desde un servidor seguro (HTTPS)\n\n## Verificar que tu Moodle tiene la API habilitada\n\n1. Accede a tu plataforma Moodle\n2. Prueba esta URL (cambia moodle.example.com por tu URL):\n   \n   https://moodle.example.com/login/token.php?username=TU_USUARIO&password=TU_CONTRASEÑA&service=moodle_mobile_app\n   \n3. Si devuelve un token JSON, la API está habilitada\n4. Si recibes un error, contacta al administrador de tu plataforma Moodle\n\n## Solución de problemas\n\n### No se obtiene el token\n\n- Verifica que la URL de Moodle sea correcta (sin / al final)\n- Comprueba que tu usuario y contraseña sean correctos\n- Asegúrate de que la plataforma Moodle tenga habilitado el servicio web\n\n### No aparecen tareas\n\n- Verifica que tengas tareas asignadas con fecha de entrega futura\n- Haz clic en \"Actualizar Tareas\" en el popup\n- Revisa la consola de Chrome para ver posibles errores\n\n### Las notificaciones no aparecen\n\n- Asegúrate de haber dado permisos de notificación a Chrome\n- Verifica que la extensión esté activa en chrome://extensions/\n\n## Tecnologías utilizadas\n\n- Manifest V3 (última versión de extensiones de Chrome)\n- API Web de Moodle\n- Chrome Storage API\n- Chrome Notifications API\n- Chrome Alarms API\n\n## Licencia\n\nGNU GPLv3.0",
    "screenshots": [
      "https://hosted.inled.es/moodlenotifier-screenshot1.png"
    ],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/moodlenotifier/archive/refs/heads/main.zip",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/moodlenotifier"
    },
    "notice": {
      "type": "info",
      "message": "Próximamente disponible una actualización con traducción de la interfaz al inglés."
    }
  },
  {
    "id": "tabnest",
    "title": "TabNest",
    "icon": "https://hosted.inled.es/tabnest.png",
    "platform": [
      "Chrome",
      "Edge",
      "Firefox"
    ],
    "shortDescription": "Tu centro de control personal en cada nueva pestaña: TV, radio y noticias.",
    "description": "# TabNest\n\nTabNest no es solo un inicio; es tu centro de control personal. TV en vivo, radio, noticias en tiempo real y todos tus marcadores bajo una estética de cristal profesional.\n\n### Características Principales\n\n- **TV en Directo**: Accede a cientos de canales de TDT directamente desde tu pestaña.\n- **Radio Online**: Tus emisoras favoritas siempre a un clic.\n- **Feed de Noticias**: Scroll infinito con las últimas noticias de los principales medios.\n- **Super Marcadores**: Organiza tu web con carpetas de colores y emojis.\n- **Diseño Fluent**: Fondos dinámicos, rotación automática y efectos de transparencia.\n- **100% Privado**: Sin servidores externos. Tus datos se guardan localmente.",
    "screenshots": [],
    "video": "",
    "downloads": {
      "github": "https://github.com/InledGroup/tabnest",
      "sourceforge": "",
      "sourceCode": "https://github.com/InledGroup/tabnest"
    }
  },


];

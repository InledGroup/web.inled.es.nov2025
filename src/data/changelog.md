# Changelog 

## 2026-05-06  
- Publicada Codexbar for GNOME en extensions.gnome.org 
- Solucionado nombrado de modelos en codexbar y usage de codex  
- Start Browser cada vez está más cerca gracias a una nueva manera de evitar la recompilación de chrome: abrir los paquetes de brave, parchearlos y volverlos a cerrar.
- Mailform listo e integrado en la web.

## 2026-05-05
Tras varios días de duro trabajo que no he escrito en el changelog, tenemos novedades interesantes: 
- Regreso a Linux: hemos adquirido un ordenador con Linux para tener la experiencia nativa otra vez y huír de las VMs en un mac: amd64.
- En planes una nueva extensión para GNOME. Ya está en review, daremos más detalles prontamente.
- Office.inled.es ya es completamente funcional para desktop y tablet.
- start.inled.es ya funciona y está en beta. Puedes probarlo desde [start.inled.es](https://start.inled.es). Implementa varias innovaciones de scraping pero los baneos son frecuentes. Aún así, funciona bastante bien.
- Solucionado error en Bautilus. Los marcadores a carpetas del sistema en Linux no funcionaban dado que estas tienen diferentes nombres según el idioma configurado en la instalación de la distro. Ahora ya se puede solucionar desde ajustes.
- Hechas algunas pruebas con Pulsar OS (que por ahora no va a salir) y con un fork de Brave browser, lo cual requiere demasiada computación y se deberán buscar soluciones alternativas con coste nulo o de lo contrario el proyecto por ahora no podrá continuar.

## 2026-04-21

### Added 
- Creado Bitmeet, plataforma de mensajería P2P
- BitID, sistema de identificación descentralizado
- TocaToma, aplicación actualmente en alpha para registrar y avisar de cuando hay que tomarse la medicación.

### Fixed
- Error en TocaToma que impedía que se lanzaran las alarmas

### Próximamente. 
- Bitmeet con LibP2P para solucionar problemas de NAT travsersal y relays.
- BitOffice, suite de oficina descentralizada
- Bautilus con editor office

### Errores descubiertos. 
- APK TocaToma no funciona
- No cambia de día TocaToma
- Bitmeet y las limitaciones de WebRTC en el browser


## 2026-04-12

### Added 
- Manejo de pausa, resume y eliminación de descargas en Bautilus.
- Manejo de subida de archivos en Bautilus.
- Nueva Github Organization para Pulsar OS.
- Fork de todos los temas de W11 para KDE que se van a usar en Pulsar OS

### Fixed
- Encontrada posible causa del error de hosted.inled.es y solución.
- Error en Agent Tunnel que causaba la imposibilidad de configurar dos sesiones para una misma carpeta estando una de ellas desactivada.

### Próximamente. 
- Hostify
- Trabajando en Pulsar OS de nuevo, tras casi un año de abandono de un proyecto que nunca vio la luz. Trabajando con el tema W11, para crear una alternativa a Winux/LinuxFX 100% auditable y sin ser tan insegura como Winux/LinuxFX.
- En mente la idea de crear una especie de Pear OS pero con GNOME y basado en Debian. El único problema sería el menú de acciones, que PLasma sí que lo soporta pero Gnome no.
- Trabajando para usar Insforge como nueva base de datos para nuevos proyectos (los antiguos no migrarán, se quedarán en Firebase)

### Errores descubiertos. 
- [SOLUCIONADO] Extraño error en AgentTunnel que se queda intentando usar una sesión cerrada en vez de usar la nueva. Pronto solución.


## 2026-04-09

### Added 
- Pequeñas mejoras a Bautilus

### Fixed
- Solucionados errores críticos en hosted.inled.es que provocaban la ausencia de nuevos archivos y subidos por front.

### Próximamente. 
- Hostify
- OnFocus

## 2026-04-08

### Added 
- Status.inled.es, nueva web para monitorear el estado de los servidores y paginas de Inled. Actualmente el diseño no es el mejor y está hecha full con IA por lo que le vendrá una actualización pronto.

### Changed
- Hosted.inled.es ahora es estática, ahorra en recursos, dispone de un API y permite subida desde el front
- Bautilus se actualiza con nuevas funciones como la búsqueda recursiva, barra de acciones inferior, etc...

### Fixed
- Fallo que impedía que Bautilus mostrara como finalizado el icono de descargas
- Añadido icono para ejecutables en Bautilus
- Añadidos iconos Adwaita para places indicators
- Mejorado el filtrado de Bautilus

### Próximamente. 
- Hostify
- OnFocus
- status.inled.es mejorada


## 2026-04-06

### Added
- Traducción automática de Changelog y artículos de blog
- Añadido componente Changelog al sitio web



## 2026-04-05

### Added
- Nueva extensión de Chrome OnFocus ahora funciona, lista para integrar en el sitio web
- Agent Tunnel ahora puedes escoger el puerto de ssh
### Changed
- Nothing
### Fixed
- Nothing


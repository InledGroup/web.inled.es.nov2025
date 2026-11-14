export interface LandingUpdate {
  /** Fecha mostrada en la noticia (YYYY-MM-DD) */
  date: string;
  /** Logo o foto de la actualización */
  image: string;
  /** Cómo encajar la imagen: 'contain' para logos, 'cover' para fotos */
  imageFit?: 'contain' | 'cover';
  /** Enlace al producto o a la novedad */
  link: string;
  /** Etiqueta pequeña sobre el titular */
  tag: { es: string; en: string };
  /** Titular de la noticia */
  title: { es: string; en: string };
  /** Subtítulo / texto de la novedad */
  subtitle: { es: string; en: string };
}

/**
 * Actualizaciones que aparecen en la landing.
 * Edita libremente: imagen (logo o foto), título, subtítulo y enlace.
 */
export const landingUpdates: LandingUpdate[] = [
 /* {
    date: '2026-08-09',
    image: 'https://hosted.inled.es/cdn/pulsar-logo-simple-sf.png',
    imageFit: 'contain',
    link: 'https://os.inled.es',
    tag: { es: 'Actualización de producto · Pulsar OS', en: 'Product update · Pulsar OS' },
    title: {
      es: 'Pulsar OS ya está disponible en su nueva versión',
      en: 'Pulsar OS is now available in its new version',
    },
    subtitle: {
      es: 'Open beta for Pear Edition',
      en: 'Open beta for Pear Edition',
    },
  },*/
];

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * ES: Configuración de la colección de contenido para documentos legales.
 * EN: Content collection configuration for legal documents.
 */
const legal = defineCollection({
  // ES: Carga archivos Markdown (*.md) en el directorio src/content/legal/
  // EN: Loads Markdown (*.md) files in the src/content/legal/ directory
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/legal' }),
  schema: z.object({
    // ES: Título SEO y de la página
    // EN: SEO and page title
    title: z.string(),
    // ES: Descripción meta para optimización en motores de búsqueda (SEO)
    // EN: Meta description for search engine optimization (SEO)
    description: z.string().optional(),
    // ES: Fecha de última actualización (opcional)
    // EN: Last updated date (optional)
    updatedAt: z.string().optional(),
  }),
});

// ES: Exporta las colecciones configuradas para que Astro las reconozca
// EN: Export configured collections for Astro to recognize them
export const collections = { legal };

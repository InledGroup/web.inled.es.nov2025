import { apps } from '../config/apps';
import { saas } from '../config/saas';
import { appsData } from '../config/apps_full';
import { featuredIds } from '../config/featured';

export const prerender = true;

/**
 * Generates a dynamic llms.txt file in Markdown format based on the projects data.
 * Genera un archivo llms.txt dinámico en formato Markdown basado en los datos de los proyectos.
 */
export async function GET() {
  const projectsMap = new Map();

  // Helper to get priority for sorting, same as in projects.json.ts
  // Ayudante para obtener la prioridad de ordenación, igual que en projects.json.ts
  const getPriority = (id: string) => {
    const index = featuredIds.indexOf(id);
    return index === -1 ? 999 : index;
  };

  // 1. Process SaaS products
  // 1. Procesar productos SaaS
  saas.forEach(item => {
    projectsMap.set(item.id, {
      name: item.name,
      description: item.description.es,
      link: item.link.startsWith('http') ? item.link : `https://inled.es${item.link}`,
      type: 'SaaS / Web Service'
    });
  });

  // 2. Process Apps (Extensions/Tools)
  // 2. Procesar Apps (Extensiones/Herramientas)
  apps.forEach(item => {
    if (!projectsMap.has(item.id)) {
      projectsMap.set(item.id, {
        name: item.name,
        description: item.description.es,
        link: item.link.startsWith('http') ? item.link : `https://inled.es${item.link}`,
        type: 'Application / Extension'
      });
    }
  });

  // 3. Enrich with technical data from appsData
  // 3. Enriquecer con datos técnicos de appsData
  appsData.forEach(item => {
    const existing = projectsMap.get(item.id);
    if (existing) {
      // Prefer longer descriptions if available
      // Preferir descripciones más largas si están disponibles
      if (item.shortDescription && item.shortDescription.length > existing.description.length) {
        existing.description = item.shortDescription;
      }
    } else {
      projectsMap.set(item.id, {
        name: item.title,
        description: item.shortDescription,
        link: item.downloads.github || `https://inled.es/apps/${item.id}`,
        type: 'Native Project / Tool'
      });
    }
  });

  // Sort projects by priority
  // Ordenar proyectos por prioridad
  const sortedProjects = Array.from(projectsMap.entries())
    .map(([id, data]) => ({ id, ...data, priority: getPriority(id) }))
    .sort((a, b) => a.priority - b.priority);

  // Construct Markdown content
  // Construir el contenido en Markdown
  let markdown = `# Inled Group - LLM Documentation\n\n`;
  
  markdown += `Inled Group es una marca de software española pionera en desarrollo con IA. Se enfoca en la creación de soluciones privadas y alternativas que apuestan por la soberanía tecnológica española. Su estrategia de privacidad consiste en que ningún dato se envía a ningún servidor, con soluciones que se ejecutan en el navegador del usuario. Además, Inled Group también se enfoca en el desarrollo para Linux, con extensiones de GNOME como la famosa Codexbar for GNOME, y otras aplicaciones y plugins.\n\n`;
  
  markdown += `## Projects & Applications\n\n`;

  sortedProjects.forEach(project => {
    markdown += `### ${project.name}\n`;
    markdown += `- **Type:** ${project.type}\n`;
    markdown += `- **Description:** ${project.description}\n`;
    markdown += `- **Link:** ${project.link}\n\n`;
  });

  // Add organization metadata at the end
  // Añadir metadatos de la organización al final
  markdown += `---\n\n`;
  markdown += `## Organization Info\n\n`;
  markdown += `- **Website:** [https://inled.es](https://inled.es)\n`;
  markdown += `- **Privacy Policy:** [https://inled.es/privacy-policy](https://inled.es/privacy-policy)\n`;
  markdown += `- **Contact:** [contacto@inled.es](mailto:contacto@inled.es)\n`;

  return new Response(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}

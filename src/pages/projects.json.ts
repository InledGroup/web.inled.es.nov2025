import { apps } from '../config/apps';
import { saas } from '../config/saas';
import { appsData } from '../config/apps_full';
import { featuredIds } from '../config/featured';

export const prerender = true;

export async function GET() {
  const projectsMap = new Map();

  // Helper to get priority
  const getPriority = (id: string) => {
    const index = featuredIds.indexOf(id);
    return index === -1 ? 999 : index;
  };

  // 1. Procesar SaaS
  saas.forEach(item => {
    projectsMap.set(item.id, {
      name: item.name,
      description: item.description.es,
      logo: item.icon,
      link: item.link.startsWith('http') ? item.link : `https://inled.es${item.link}`,
      type: 'saas',
      priority: getPriority(item.id)
    });
  });

  // 2. Procesar Apps
  apps.forEach(item => {
    if (!projectsMap.has(item.id)) {
      projectsMap.set(item.id, {
        name: item.name,
        description: item.description.es,
        logo: item.icon,
        link: item.link.startsWith('http') ? item.link : `https://inled.es${item.link}`,
        type: 'app',
        priority: getPriority(item.id)
      });
    }
  });

  // 3. Enriquecer con appsData (proyectos técnicos)
  appsData.forEach(item => {
    const existing = projectsMap.get(item.id);
    if (existing) {
      if (item.shortDescription && item.shortDescription.length > existing.description.length) {
        existing.description = item.shortDescription;
      }
    } else {
      projectsMap.set(item.id, {
        name: item.title,
        description: item.shortDescription,
        logo: item.icon,
        link: item.downloads.github || `https://inled.es/apps/${item.id}`,
        type: 'project',
        priority: getPriority(item.id)
      });
    }
  });

  const allProjects = Array.from(projectsMap.values())
    .sort((a, b) => a.priority - b.priority)
    .map(({ priority, ...project }) => project); 
 // Eliminamos isFeatured del JSON final si quieres, o déjalo si lo necesitas. 
    // Lo he quitado del .map final para que el JSON quede limpio, pero habiendo ordenado antes.

  return new Response(JSON.stringify(allProjects, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

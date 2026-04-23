import { apps } from '../config/apps';
import { saas } from '../config/saas';
import { appsData } from '../config/apps_full';

export const prerender = true;

export async function GET() {
  const projectsMap = new Map();

  // 1. Procesar SaaS
  saas.forEach(item => {
    projectsMap.set(item.id, {
      name: item.name,
      description: item.description.es,
      logo: item.icon,
      link: item.link.startsWith('http') ? item.link : `https://inled.es${item.link}`,
      type: 'saas',
      isFeatured: item.isFeatured ?? 999 // Usamos 999 para los no destacados
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
        isFeatured: item.isFeatured || 999
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
        isFeatured: 999 // appsData no suele tener isFeatured
      });
    }
  });

  const allProjects = Array.from(projectsMap.values())
    .sort((a, b) => (a.isFeatured === b.isFeatured ? 0 : a.isFeatured < b.isFeatured ? -1 : 1))
    .map(({ isFeatured, ...project }) => project); // Eliminamos isFeatured del JSON final si quieres, o déjalo si lo necesitas. 
    // Lo he quitado del .map final para que el JSON quede limpio, pero habiendo ordenado antes.

  return new Response(JSON.stringify(allProjects, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

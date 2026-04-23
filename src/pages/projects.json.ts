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
      type: 'saas'
    });
  });

  // 2. Procesar Apps
  apps.forEach(item => {
    // Si ya existe (ej. por ser SaaS), no lo sobreescribimos a menos que sea necesario
    if (!projectsMap.has(item.id)) {
      projectsMap.set(item.id, {
        name: item.name,
        description: item.description.es,
        logo: item.icon,
        link: item.link.startsWith('http') ? item.link : `https://inled.es${item.link}`,
        type: 'app'
      });
    }
  });

  // 3. Enriquecer con appsData (proyectos técnicos o info extendida)
  appsData.forEach(item => {
    const existing = projectsMap.get(item.id);
    if (existing) {
      // Si ya existe, podemos mejorar la descripción si la de appsData es más completa
      if (item.shortDescription && item.shortDescription.length > existing.description.length) {
        existing.description = item.shortDescription;
      }
    } else {
      projectsMap.set(item.id, {
        name: item.title,
        description: item.shortDescription,
        logo: item.icon,
        link: item.downloads.github || `https://inled.es/apps/${item.id}`,
        type: 'project'
      });
    }
  });

  const allProjects = Array.from(projectsMap.values());

  return new Response(JSON.stringify(allProjects, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

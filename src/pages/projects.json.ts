import { apps } from '../config/apps';
import { saas } from '../config/saas';
import { featuredIds } from '../config/featured';

export const prerender = true;

export async function GET() {
  const projectsMap = new Map();

  const getPriority = (id: string) => {
    const index = featuredIds.indexOf(id);
    return index === -1 ? 999 : index;
  };

  saas.forEach(item => {
    projectsMap.set(item.id, {
      name: item.name,
      description: item.description.en,
      logo: item.icon,
      link: item.link.startsWith('http') ? item.link : `https://inled.es${item.link}`,
      type: 'saas',
      priority: getPriority(item.id)
    });
  });

  apps.forEach(item => {
    if (!projectsMap.has(item.id)) {
      projectsMap.set(item.id, {
        name: item.name,
        description: item.description.en,
        logo: item.icon,
        link: item.link.startsWith('http') ? item.link : `https://inled.es${item.link}`,
        type: 'app',
        priority: getPriority(item.id)
      });
    }
  });

  const allProjects = Array.from(projectsMap.values())
    .sort((a, b) => a.priority - b.priority)
    .map(({ priority, ...project }) => project);

  return new Response(JSON.stringify(allProjects, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

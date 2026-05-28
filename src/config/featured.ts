import { apps } from './apps';
import { saas } from './saas';
import featuredListRaw from './featured.txt?raw';

export const featuredIds = featuredListRaw
  .split('\n')
  .map(id => id.trim())
  .filter(id => id !== '');

export function getFeaturedItems() {
  const allItems = [
    ...apps.map(a => ({ ...a, type: 'app' as const })),
    ...saas.map(s => ({ ...s, type: 'saas' as const }))
  ];

  return featuredIds
    .map(id => allItems.find(item => item.id === id))
    .filter((item): item is Exclude<typeof item, undefined> => item !== undefined);
}

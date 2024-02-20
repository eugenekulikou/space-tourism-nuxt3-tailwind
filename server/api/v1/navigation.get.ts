import data from './data';
import type { TNavigation } from '@/types';

export default defineEventHandler(async (event): Promise<TNavigation> => {
  return new Promise((resolve, reject) => {
    const navigationData: TNavigation = {};

    for (const [parent, children] of Object.entries(data)) {
      if (children.length > 1) {
        navigationData[parent] = children.map(({ name, slug }) => ({
          to: `/${parent}/${slug}`,
          label: name,
        }));
      } else {
        navigationData[parent] = Object.keys(data).map((parent) => ({
          to: `/${parent}`,
          label: parent,
        }));
      }
    }

    resolve(navigationData);
  });
});

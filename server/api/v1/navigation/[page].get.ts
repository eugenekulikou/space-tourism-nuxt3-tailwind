import data from '@/starter-resources/data';
import type { INavLink, TNavigation } from '@/types';

export default defineEventHandler(async (event): Promise<INavLink[]> => {
  const { page } = event.context.params as Record<string, string>;

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

    resolve(navigationData[page]);
  });
});

import { data } from '@/data/page-data';
import type { IApiData, ILink, IPageData, TNavigation } from '@/types';

export default defineEventHandler(async (event): Promise<ILink[]> => {
  const { page } = event.context.params as Record<string, string>;

  return new Promise((resolve, reject) => {
    const navigationData: TNavigation = {};

    for (const [parent, children] of Object.entries(data)) {
      if (children.length > 1) {
        navigationData[parent] = children.map((child: IPageData) => {
          const { name, slug } = child;

          return { to: `/${parent}/${slug}`, label: name };
        });
      } else {
        navigationData[parent] = Object.keys(data).map((parent) => {
          // @ts-ignore
          const [firstChild] = data[parent];
          const { slug } = firstChild;

          return {
            to: parent === 'home' ? '/' : `/${parent}/${slug}`,
            label: parent,
          };
        });
      }
    }

    resolve(navigationData[page]);
  });
});

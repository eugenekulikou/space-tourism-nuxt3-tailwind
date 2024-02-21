import { data } from '@/data/page-data';
import type { IPageData } from '~/types';

export default defineEventHandler(async (event): Promise<any> => {
  return new Promise((resolve, reject) => {
    const params = event.context.params;
    const { section, slug } = params as Record<string, string>;

    // @ts-ignore
    const page = data[section].find(
      (page: IPageData) => page.slug.toLowerCase() === slug.toLocaleLowerCase()
    );

    resolve(page);
  });
});

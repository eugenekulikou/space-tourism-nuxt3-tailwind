import data from '@/starter-resources/data';

export default defineEventHandler(async (event): Promise<any> => {
  return new Promise((resolve, reject) => {
    const params = event.context.params;
    const { section, slug } = params as Record<string, string>;

    const page = data[section].find(
      (page) => page.slug.toLowerCase() === slug.toLocaleLowerCase()
    );

    resolve(page);
  });
});

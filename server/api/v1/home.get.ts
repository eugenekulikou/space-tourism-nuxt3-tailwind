import { data } from '@/data/page-data';

export default defineEventHandler(async (event): Promise<any> => {
  return new Promise((resolve, reject) => {
    const { home } = data;

    resolve(home);
  });
});

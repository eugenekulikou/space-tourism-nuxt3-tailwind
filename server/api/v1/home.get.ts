import data from './data';

export default defineEventHandler(async (event): Promise<any> => {
  return new Promise((resolve, reject) => {
    const { home } = data;

    resolve(home);
  });
});
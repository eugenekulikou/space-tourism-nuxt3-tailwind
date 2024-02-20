import type { TNavigation } from '@/types';

export const useNavigation = async (): Promise<TNavigation> => {
  const { data, error } = await useFetch('/api/v1/navigation');

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: error.value.message,
    });
  }

  return data;
};

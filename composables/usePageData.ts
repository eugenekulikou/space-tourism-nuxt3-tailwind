export const usePageData = async (slug: string | string[]): Promise<any> => {
  const { data, error } = await useFetch(`/api/v1/${slug}`);

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: error.value.message,
    });
  }

  return data;
};

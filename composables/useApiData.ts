import type { TNavigation } from '@/types';

export const useApiData = () => {
  const usePageData = async (slug: string | string[]): Promise<any> => {
    return await useCachedFetch(`/api/v1/${slug}`);
  };

  const useNavigationData = async (): Promise<TNavigation> => {
    return await useCachedFetch('/api/v1/navigation');
  };

  return {
    usePageData,
    useNavigationData,
  };
};

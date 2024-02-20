import type { INavLink, TNavigation } from '@/types';

export const useApiData = () => {
  const usePageData = async (slug: string | string[]): Promise<any> => {
    return await useCachedFetch(`/api/v1/${slug}`);
  };

  const useNavigationData = async (slug: string): Promise<any> => {
    return await useCachedFetch(`/api/v1/navigation/${slug}`);
  };

  return {
    usePageData,
    useNavigationData,
  };
};

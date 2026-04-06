import http from '@/services/http';
import {
  keepPreviousData,
  useQuery,
  type UseQueryOptions,
} from '@tanstack/react-query';

const useFreeFetch = <T>(
  route: string,
  params: Record<string, string | number | boolean> = {},
  options?: Partial<UseQueryOptions<T>>
) => {
  const axiosPublic = http.axiosPublicInstance();

  return useQuery<T>({
    queryKey: [route.split('?')[0], route],
    queryFn: async () => {
      const res = await axiosPublic.get<T>(route, { params });
      return res.data;
    },
    placeholderData: keepPreviousData,
    retry: 1,
    ...options,
  });
};

export default useFreeFetch;

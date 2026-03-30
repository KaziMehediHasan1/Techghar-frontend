import http from '@/services/http';
import {
  keepPreviousData,
  useQuery,
  type UseQueryOptions,
} from '@tanstack/react-query';

const useFetch = <T>(
  route: string,
  params: Record<string, string | number | boolean> = {},
  options?: Partial<UseQueryOptions<T>>
) => {
  const axiosSecure = http.useAxiosSecure();

  return useQuery<T>({
    queryKey: [route.split('?')[0], route],
    queryFn: async () => {
      const res = await axiosSecure.get<T>(route, { params });
      return res.data;
    },
    placeholderData: keepPreviousData,
    retry: 1,
    ...options,
  });
};

export default useFetch;

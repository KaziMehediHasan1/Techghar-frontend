import useAxiosSecure from "@/hooks/useAxiosSecure";
import {
  keepPreviousData,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";

const useFetch = <T>(
  route: string,
  params: Record<string, string | number | boolean> = {},
  options?: Partial<UseQueryOptions<T>>,
) => {
  const axiosSecure = useAxiosSecure();

  return useQuery<T>({
    queryKey: [route, params],
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

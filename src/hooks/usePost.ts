import http from '@/services/http';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export type ApiResponse<T> = {
  message: string;
  success: boolean;
  data: T;
  statusCode: number;
};

const usePost = <T, V>(route: string, queryKey?: string) => {
  const axiosSecure = http.useAxiosSecure();
  const queryClient = useQueryClient();

  return useMutation<ApiResponse<T>, AxiosError<ApiResponse<unknown>>, V>({
    mutationFn: async (obj: V) => {
      const response = await axiosSecure.post<ApiResponse<T>>(route, obj);
      return response.data;
    },
    onSuccess: (responseData) => {
      if (responseData?.success) {
        queryClient.invalidateQueries({ queryKey: [queryKey] });
        toast.success(responseData.message || 'Operation successful!');
      }
    },
    onError: (err) => {
      const errorMessage =
        err.response?.data?.message || 'Something went wrong!';
      toast.error(errorMessage);
      console.error('UsePost Hook Error:', err);
    },
  });
};

export default usePost;

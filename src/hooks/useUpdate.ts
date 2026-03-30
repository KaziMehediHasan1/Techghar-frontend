import http from '@/services/http';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

// Response structure from your Backend
type ApiResponse<T> = {
  message?: string;
  success: boolean;
  data?: T;
};

interface UpdateVariables<V> {
  id: string | number;
  data: V;
}

const useUpdate = <T, V>(
  route: string,
  queryKey?: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _idField: keyof T = 'id' as keyof T
) => {
  const axiosSecure = http.useAxiosSecure();
  const queryClient = useQueryClient();

  return useMutation<
    ApiResponse<T>,
    AxiosError<ApiResponse<unknown>>,
    UpdateVariables<V>
  >({
    mutationFn: async ({ id, data }) => {
      const url = route.endsWith('/') ? `${route}${id}` : `${route}/${id}`;

      console.log('update-url:-', url, 'id dekho - ', id);

      // axiosSecure.patch(url, body)
      const response = await axiosSecure.patch<ApiResponse<T>>(url, data);
      return response.data;
    },
    onSuccess: (responseData) => {
      if (queryKey) {
        queryClient.invalidateQueries({ queryKey: [queryKey] });
      }
      if (responseData?.message) {
        toast.success(responseData.message);
      }
      console.log('Update success:', responseData);
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'An error occurred while updating.';

      toast.error(
        typeof errorMessage === 'string' ? errorMessage : 'Update failed'
      );
      console.error('Update hook error:', error);
    },
  });
};

export default useUpdate;

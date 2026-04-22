import http from '@/services/http';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

interface BaseItem {
  id?: string | number;
  _id?: string | number;
  [key: string]: string | number | boolean | null | undefined | object;
}

const useDelete = <T extends BaseItem>(
  route: string,
  queryKey?: string,
  idField: keyof T = 'id' as keyof T
) => {
  const axiosSecure = http.useAxiosSecure();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string | number) => {
      const url = route.endsWith('/') ? `${route}${id}` : `${route}/${id}`;
      const response = await axiosSecure.delete(url);
      return response.data;
    },

    onMutate: async (id: string | number) => {
      await queryClient.cancelQueries({ queryKey: [queryKey], exact: false });

      const previousData = queryClient.getQueryData<T[]>([queryKey]);

      // Sudhu jodi data array hoy tobei filter korbe
      if (previousData && Array.isArray(previousData)) {
        queryClient.setQueryData<T[]>([queryKey], (oldData) => {
          return oldData ? oldData.filter((item) => item[idField] !== id) : [];
        });
      }

      return { previousData };
    },

    onError: (err, id, context) => {
      if (context?.previousData) {
        queryClient.setQueryData([queryKey], context.previousData);
      }
      toast.error('Deletion failed!');
      console.error(err);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success('Item deleted successfully');
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey], exact: false });
    },
  });
};

export default useDelete;

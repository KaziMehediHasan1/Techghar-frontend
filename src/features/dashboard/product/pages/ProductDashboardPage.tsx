import { showDeleteConfirmation } from '@/components/ConfirmationToast';
import RDataTable from '@/components/tables/RDataTable';
import { PColumns } from '@/features/dashboard/product/components/ProductColumns';
import type {
  IProduct,
  TProductApiResponse,
} from '@/features/dashboard/product/product.types';
import useDebounce from '@/hooks/useDebounce';
import useDelete from '@/hooks/useDelete';
import useFetch from '@/hooks/useFetch';
import useUpdate from '@/hooks/useUpdate';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ProductDashboardPage = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const debounce = useDebounce(globalFilter, 500);

  // delete mutation hook for deleting a product
  const {
    mutateAsync: deleteMutate,
    isPending: isDeletePending,
    isError: isDeleteError,
  } = useDelete('/product', 'products');

  // update mutation hook for updating a product
  const {
    mutate: updateMutate,
    isPending: isUpdatePending,
    isError: isUpdateError,
  } = useUpdate('/product', 'products');

  // fetching data from backend with query params for search and pagination
  const queryUrl = `/product?search=${debounce}&page=${pagination.pageIndex + 1}&limit=${pagination.pageSize}`;
  const { data, isLoading, error } =
    useFetch<TProductApiResponse<IProduct>>(queryUrl);

  if (isLoading)
    return (
      <div className="p-10 text-center animate-pulse">Loading Users...</div>
    );
  if (error)
    return (
      <div className="p-10 text-red-500 text-center">Failed to fetch data.</div>
    );

  const totalPageCount = Math.ceil(
    data?.data?.meta?.totalPage || 0 / pagination.pageSize
  );

  // delete handler for deleting a product
  const handleDelete = async (id: string) => {
    console.log(id, 'deleted iddddd heree');
    // Implementation for delete functionality
    showDeleteConfirmation({
      message: 'Are you sure you want to delete this?',
      onConfirm: async () => {
        await deleteMutate(id);
      },
    });
  };

  // update handler for updating a product
  const handleUpdate = async (id: string, updatedData: Partial<IProduct>) => {
    // Implementation for update functionality
    const res = await updateMutate({ id, data: updatedData });
    console.log(res, 'response dekhoo');
    if (isUpdateError) {
      toast.error('Failed to update the product. Please try again.');
    }
  };

  const columns = PColumns(handleDelete, handleUpdate);

  return (
    <div className="text-black space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Product Management
        </h2>
      </div>
      <RDataTable
        isDeletePending={isDeletePending}
        isUpdatePending={isUpdatePending}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        columns={columns}
        data={data?.data?.result || []}
        totalPage={totalPageCount}
        setPagination={setPagination}
        pagination={pagination}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </div>
  );
};

export default ProductDashboardPage;

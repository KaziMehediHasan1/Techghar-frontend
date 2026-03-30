import { showDeleteConfirmation } from '@/components/ConfirmationToast';
import RDataTable from '@/components/tables/RDataTable';
import { PColumns } from '@/features/dashboard/product/components/ProductColumns';
import { UpdateProductModal } from '@/features/dashboard/product/components/UpdateProductModal';
import type {
  IProduct,
  IProductUpdateData,
  TProductApiResponse,
} from '@/features/dashboard/product/product.types';
import useDebounce from '@/hooks/useDebounce';
import useDelete from '@/hooks/useDelete';
import useFetch from '@/hooks/useFetch';
import useUpdate from '@/hooks/useUpdate';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ProductDashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProductUpdateData>({
    id: '',
    title: '',
    category: '',
    brand: '',
    price: 0,
    discount: 0,
    quantity: 0,
    description: '',
  });
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
  } = useDelete('/product', 'product');

  // update mutation hook for updating a product
  const {
    mutateAsync: updateMutate,
    isPending: isUpdatePending,
    isError: isUpdateError,
  } = useUpdate('/product', 'product');

  // fetching data from backend with query params for search and pagination
  const queryUrl = `/product?search=${debounce}&page=${pagination.pageIndex + 1}&limit=${pagination.pageSize}`;
  const { data, isLoading, error } =
    useFetch<TProductApiResponse<IProduct>>(queryUrl);

  console.log(data, 'data formate--');

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
    showDeleteConfirmation({
      message: 'Are you sure you want to delete this?',
      onConfirm: async () => {
        await deleteMutate(id);
      },
    });
    if (isDeleteError) {
      toast.error('Failed to delete the product. Please try again.');
    }
  };

  // update handler for updating a product
  const handleUpdate = async (id: string, updatedData: Partial<IProduct>) => {
    console.log(id, updatedData, 'hnadleUpdate ---');
    setIsModalOpen(true);
    setSelectedProduct({ ...updatedData, id } as IProductUpdateData);
    if (isUpdateError) {
      toast.error('Failed to update the product. Please try again.');
    }
  };

  const onUpdateSubmit = async (id: string, updatedData: Partial<IProduct>) => {
    await updateMutate({ id, data: updatedData });
    setIsModalOpen(false);
  };

  const columns = PColumns(handleDelete, handleUpdate);

  return (
    <div className="text-black space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Product Management
        </h2>
      </div>
      <UpdateProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productData={selectedProduct}
        onUpdate={onUpdateSubmit}
        isLoading={isUpdatePending}
      />
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

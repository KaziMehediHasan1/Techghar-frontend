import { showDeleteConfirmation } from '@/components/ConfirmationToast';
import RDataTable from '@/components/tables/RDataTable';
import { OrderColumns } from '@/features/dashboard/order/components/OrderColumns';
import UpdateOrderModal from '@/features/dashboard/order/components/UpdateOrderModal';
import type {
  IOrderUpdateData,
  TOrder,
  TOrderApiResponse,
} from '@/features/dashboard/order/order.types';
import useDebounce from '@/hooks/useDebounce';
import useDelete from '@/hooks/useDelete';
import useFetch from '@/hooks/useFetch';
import useUpdate from '@/hooks/useUpdate';
import { useState } from 'react';
import { toast } from 'react-toastify';

const OrdersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IOrderUpdateData>({
    _id: '',
    quantity: 0,
    status: '',
    productName: '',
    customerEmail: '',
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
  } = useDelete('/order', '/order');

  // update mutation hook for updating a product
  const {
    mutateAsync: updateMutate,
    isPending: isUpdatePending,
    isError: isUpdateError,
  } = useUpdate('/order', '/order');

  // fetching data from backend with query params for search and pagination
  const queryUrl = `/order?search=${debounce}&page=${pagination.pageIndex + 1}&limit=${pagination.pageSize}`;
  const { data, isLoading, error } =
    useFetch<TOrderApiResponse<TOrder>>(queryUrl);

  console.log('Order Data Formate -', data);
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
  const handleUpdate = async (id: string, updatedData: Partial<IOrderUpdateData>) => {
    console.log(id, updatedData, 'hnadleUpdate order ---');
    setIsModalOpen(true);
    setSelectedProduct({ ...updatedData, _id: id } as IOrderUpdateData);
    if (isUpdateError) {
      toast.error('Failed to update the product. Please try again.');
    }
  };

  const onUpdateSubmit = async (
    id: string,
    updatedData: Partial<IOrderUpdateData>
  ) => {
    await updateMutate({ id, data: updatedData });
    setIsModalOpen(false);
  };

  const columns = OrderColumns(handleDelete, handleUpdate);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Order Management</h2>
      </div>
      <UpdateOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        orderData={selectedProduct}
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

export default OrdersPage;

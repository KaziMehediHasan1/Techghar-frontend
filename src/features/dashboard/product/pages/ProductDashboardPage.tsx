import RDataTable from '@/components/tables/RDataTable';
import { PColumns } from '@/features/dashboard/product/components/ProductColumns';
import type {
  IProduct,
  TProductApiResponse,
} from '@/features/dashboard/product/product.types';
import useDebounce from '@/hooks/useDebounce';
import useFetch from '@/hooks/useFetch';
import { useState } from 'react';

const ProductDashboardPage = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const debounce = useDebounce(globalFilter, 500);
  const queryUrl = `/product?search=${debounce}`;
  // search=${debounce}&page=${
  //   pagination.pageIndex + 1
  // }&limit=${pagination.pageSize}
  const { data, isLoading, error } =
    useFetch<TProductApiResponse<IProduct>>(queryUrl);
  console.log(data?.data, 'fetchh ------');

  if (isLoading)
    return (
      <div className="p-10 text-center animate-pulse">Loading Users...</div>
    );
  if (error)
    return (
      <div className="p-10 text-red-500 text-center">Failed to fetch data.</div>
    );

  // totalPage={
  //   data?.data.total
  //     ? Math.ceil(data.data.total / pagination.pageSize)
  //     : 0
  // }
  return (
    <div className="text-black space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Product Management</h2>
      </div>
      <RDataTable
        columns={PColumns}
        data={data?.data || []}
        totalPage={data?.total || 0}
        setPagination={setPagination}
        pagination={pagination}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </div>
  );
};

export default ProductDashboardPage;

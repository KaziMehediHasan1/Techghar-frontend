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

  return (
    <div className="text-black space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Product Management
        </h2>
      </div>
      <RDataTable
        columns={PColumns}
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

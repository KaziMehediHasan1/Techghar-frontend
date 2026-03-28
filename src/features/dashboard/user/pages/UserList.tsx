import RDataTable from '@/components/tables/RDataTable';
import { columns } from '@/features/dashboard/user/components/UserColumns';
import type { ApiResponse, IUserAPIResponse } from '@/features/dashboard/user/user.types';
import useDebounce from '@/hooks/useDebounce';
import useFetch from '@/hooks/useFetch';
import { useState } from 'react';

const UserList = () => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const debounce = useDebounce(globalFilter, 500);
  const queryUrl = `/user/users?search=${debounce}&page=${
    pagination.pageIndex + 1
  }&limit=${pagination.pageSize}`;

  const { data, isLoading, error } = useFetch<ApiResponse<IUserAPIResponse>>(queryUrl);
  console.log(data?.data.result, 'fetchh ------');

  if (isLoading)
    return (
      <div className="p-10 text-center animate-pulse">Loading Users...</div>
    );
  if (error)
    return (
      <div className="p-10 text-red-500 text-center">Failed to fetch data.</div>
    );
  return (
    <div className="text-black space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
      </div>
      <RDataTable
        columns={columns}
        data={data?.data.result || []}
        totalPage={
          data?.data.total
            ? Math.ceil(data.data.total / pagination.pageSize)
            : 0
        }
        setPagination={setPagination}
        pagination={pagination}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </div>
  );
};

export default UserList;

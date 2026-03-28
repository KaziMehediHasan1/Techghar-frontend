import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DataTablePagination } from '@/components/tables/RDataTablePagination';
import { RDataTableViewOptions } from '@/components/tables/RDataTableViewOptions';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import useFetch from '@/hooks/useFetch';
import useDebounce from '@/hooks/useDebounce';

interface DashboardTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  endpoint: string;
}

const RDataTable = <TData, TValue>({
  columns,
  endpoint,
}: DashboardTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const debounce = useDebounce(globalFilter, 500);
  console.log(debounce, 'check input serach value exactly hit----');
  // dynamically construct the query URL based on pagination and sorting state
  const queryUrl = `${endpoint}?search=${debounce}&page=${
    pagination.pageIndex + 1
  }&limit=${pagination.pageSize}`;

  const { data, isLoading, error } = useFetch(queryUrl);
  console.log(data?.data, 'check table daaattt----------');

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: data?.data || [],
    columns,
    pageCount: data?.data?.length,
    state: {
      sorting,
      pagination,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading)
    return (
      <div className="p-10 text-center animate-pulse">Loading Users...</div>
    );
  if (error)
    return (
      <div className="p-10 text-red-500 text-center">Failed to fetch data.</div>
    );

  return (
    <div className="shadow-sm border rounded-md bg-white space-y-3 p-4 w-full">
      <section className="flex justify-between items-center gap-4 w-full">
        <div className="flex items-center py-2 w-full">
          <Input
            placeholder="Search by name or email..."
            value={globalFilter}
            onChange={(e) => {
              setGlobalFilter(e.target.value);
              setPagination((prev) => ({ ...prev, pageIndex: 0 }));
            }}
            className="max-w-sm"
          />
        </div>
        <RDataTableViewOptions table={table} />
      </section>

      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-slate-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="font-semibold text-slate-700"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-slate-500"
                >
                  No users found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />
    </div>
  );
};

export default RDataTable;

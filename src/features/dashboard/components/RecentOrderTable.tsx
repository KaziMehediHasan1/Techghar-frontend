import DashboardTable from '@/features/dashboard/components/DashboardTable';
import type { ColumnDef } from '@tanstack/react-table';

export type TData = {
  id: string;
  quantity: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  customerEmail: string;
};




const RecentOrderTable = ({ orders }: { orders: any[] }) => {

  const columns: ColumnDef<TData>[] = [
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <span className="capitalize font-medium">{row.getValue<string>('status')}</span>
      ),
    },
    {
      accessorKey: 'customerEmail',
      header: 'Email',
    },
    {
      accessorKey: 'quantity',
      header: () => <div className="text-right">Quantity</div>,
      cell: ({ row }) => {
        const quantity = row.getValue<number>('quantity');
        return <div className="text-right">{quantity}</div>;
      },
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Recent Orders</h2>
      <DashboardTable data={orders} columns={columns} />
    </div>
  );
};

export default RecentOrderTable;

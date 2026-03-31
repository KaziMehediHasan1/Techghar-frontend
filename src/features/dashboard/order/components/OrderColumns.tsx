import { RDataTableColumnHeader } from '@/components/tables/RDataTableColumnHeader';
import { Button } from '@/components/ui/button';
import type {
  IOrderUpdateData,
  TOrder,
} from '@/features/dashboard/order/order.types';

import type { ColumnDef } from '@tanstack/react-table';
import { Edit, Loader2, Trash2 } from 'lucide-react';

export const OrderColumns = (
  handleDelete: (id: string) => void,
  handleUpdate: (id: string, product: IOrderUpdateData) => void
): ColumnDef<TOrder>[] => [
  {
    accessorKey: 'productName',
    header: ({ column }) => (
      <RDataTableColumnHeader column={column} title="Product Name" />
    ),
  },
  {
    accessorKey: 'productPrice',
    header: () => <div className="text-left">Price</div>,
    cell: ({ row }) => `$${row.original.productPrice}`,
  },
  {
    accessorKey: 'customerEmail',
    header: () => <div className="text-left">Customer</div>,
  },
  {
    accessorKey: 'quantity',
    header: () => <div className="text-left">Quantity</div>,
  },
  {
    accessorKey: 'status',
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === 'confirmed'
              ? 'bg-green-100 text-green-700'
              : status === 'pending'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: 'isPaid',
    header: () => <div className="text-left">Payment</div>,
    cell: ({ row }) => (
      <span className={row.original.isPaid ? 'text-green-600' : 'text-red-600'}>
        {row.original.isPaid ? 'Paid' : 'Unpaid'}
      </span>
    ),
  },
  {
    accessorKey: 'transactionId',
    header: () => <div className="text-left">Transaction ID</div>,
    cell: ({ row }) => (
      <span className="font-mono text-xs">
        {row.original.transactionId || 'N/A'}
      </span>
    ),
  },
  {
    id: 'edit',
    header: 'Edit',
    cell: ({ row, table }) => {
      const order = row.original;
      const meta = table.options.meta as {
        isUpdatePending: boolean;
        loadingId: string | null;
      };
      const isDeleting = meta?.isUpdatePending && meta?.loadingId === order._id;
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleUpdate(order._id || '', order)}
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
        >
          {isDeleting ? (
            <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
          ) : (
            <Edit className="w-4 h-4" />
          )}
        </Button>
      );
    },
  },

  // Delete Column
  {
    id: 'delete',
    header: 'Delete',
    cell: ({ row, table }) => {
      const order = row.original;
      const meta = table.options.meta as {
        isDeletePending: boolean;
        loadingId: string | null;
      };
      const isDeleting =
        meta?.isDeletePending && meta?.loadingId === order._id;

      return (
        <Button
          variant="ghost"
          size="sm"
          disabled={isDeleting}
          onClick={() => handleDelete(order._id || '')}
          className="text-red-600"
        >
          {isDeleting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Trash2 className="w-4 h-4" />
          )}
        </Button>
      );
    },
  },
];

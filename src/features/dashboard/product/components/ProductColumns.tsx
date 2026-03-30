import { RDataTableColumnHeader } from '@/components/tables/RDataTableColumnHeader';
import { Button } from '@/components/ui/button';
import type { IProduct } from '@/features/dashboard/product/product.types';
import type { ColumnDef } from '@tanstack/react-table';
import { Edit, Loader2, Trash2 } from 'lucide-react';

export const PColumns = (
  handleDelete: (id: string) => void,
  handleUpdate: (id: string, product: IProduct) => void
): ColumnDef<IProduct>[] => [
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <RDataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: 'price',
    header: () => <div className="text-left">Price </div>,
  },
  {
    accessorKey: 'category',
    header: () => <div className="text-left">Category</div>,
  },
  {
    accessorKey: 'quntity',
    header: () => <div className="text-left">Quantity</div>,
  },
  {
    accessorKey: 'colors',
    header: () => <div className="text-left">Color</div>,
  },
  {
    accessorKey: 'brand',
    header: () => <div className="text-left">Brand</div>,
  },
  {
    accessorKey: 'stock',
    header: () => <div className="text-left">Stock</div>,
  },
  {
    id: 'edit',
    header: 'Edit',
    cell: ({ row, table }) => {
      const product = row.original;
      const meta = table.options.meta as {
        isDeletePending: boolean;
        loadingId: string | null;
      };
      const isDeleting =
        meta?.isDeletePending && meta?.loadingId === product._id;
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleUpdate(product?._id || '', product)}
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
      const product = row.original;
      const meta = table.options.meta as {
        isDeletePending: boolean;
        loadingId: string | null;
      };
      const isDeleting =
        meta?.isDeletePending && meta?.loadingId === product._id;

      return (
        <Button
          variant="ghost"
          size="sm"
          disabled={isDeleting}
          onClick={() => handleDelete(product?._id || '')}
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

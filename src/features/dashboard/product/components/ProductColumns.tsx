import { RDataTableColumnHeader } from '@/components/tables/RDataTableColumnHeader';
import { Button } from '@/components/ui/button';
import type { IProduct } from '@/features/dashboard/product/product.types';
import type { ColumnDef } from '@tanstack/react-table';
import { Edit, Trash2 } from 'lucide-react';

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
    cell: ({ row }) => {
      const product = row.original;
      console.log(product, 'check clumn proooooooooo');
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleUpdate(product?._id || '', product)}
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
        >
          <Edit className="w-4 h-4" />
        </Button>
      );
    },
  },

  // Delete Column
  {
    id: 'delete',
    header: 'Delete',
    cell: ({ row }) => {
      const product = row.original;
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleDelete(product?._id || '')}
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      );
    },
  },
];

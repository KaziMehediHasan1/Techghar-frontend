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
    accessorKey: 'title',
    header: ({ column }) => (
      <RDataTableColumnHeader column={column} title="Product" />
    ),
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium">{row.original.title}</span>
        <span className="text-[10px] text-gray-400">
          SKU: {row.original.sku || 'N/A'}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'price',
    header: 'Price Info',
    cell: ({ row }) => (
      <div className="text-left">
        <p className="font-bold text-blue-600">
          ${row.original.finalPrice || row.original.price}
        </p>
        {row.original.discount > 0 && (
          <p className="text-[10px] text-red-400 line-through">
            ${row.original.price} (-{row.original.discount}%)
          </p>
        )}
      </div>
    ),
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'quantity', 
    header: 'Stock',
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span
          className={row.original.quantity < 5 ? 'text-red-500 font-bold' : ''}
        >
          Qty: {row.original.quantity}
        </span>
        <span
          className={`text-[10px] ${row.original.stock ? 'text-green-500' : 'text-red-500'}`}
        >
          {row.original.stock ? '● In Stock' : '● Out of Stock'}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'brand',
    header: 'Brand',
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

import { RDataTableColumnHeader } from '@/components/tables/RDataTableColumnHeader';
import type { IProduct } from '@/features/dashboard/product/product.types';
import type { ColumnDef } from '@tanstack/react-table';

export const PColumns: ColumnDef<IProduct>[] = [
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
  }
];

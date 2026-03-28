import { RDataTableColumnHeader } from '@/components/tables/RDataTableColumnHeader';
import type { IUser } from '@/features/dashboard/user/user.types';
import type { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <RDataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: 'email',
    header: () => <div className="text-left">Email</div>,
  },
  {
    accessorKey: 'role',
    header: () => <div className="text-left">Role</div>,
  },
  {
    accessorKey: 'cartItemCount',
    header: () => <div className="text-left">Cart</div>,
  },
  {
    accessorKey: 'lastPurchasedItem',
    header: () => <div className="text-left">Last Purchased</div>,
  },
  {
    accessorKey: 'totalPurchaseCount',
    header: () => <div className="text-left">Total Purchase</div>,
  },
];

import RDataTable from '@/components/tables/RDataTable';
import { columns } from '@/features/dashboard/user/components/UserColumns';

const UserList = () => {
  return (
    <div className="text-black space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
      </div>
      <RDataTable columns={columns} endpoint="/user/users" />
    </div>
  );
};

export default UserList;

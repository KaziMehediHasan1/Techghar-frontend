import RDataTable from '@/components/tables/RDataTable';
// import { useAuthStore } from '@/features/auth/auth.store';
import {
  columns,
  userData,
} from '@/features/dashboard/user/components/UserColumns';

const UserList = () => {
  // const { accessToken, setToken, logout } = useAuthStore();
  // console.log(accessToken, 'check loalhost');
  return (
    <div className="text-black space-y-2">
      <h2 className="text-xl font-bold tracking-tight">Recent Orders</h2>
      <RDataTable columns={columns} data={userData} />
    </div>
  );
};

export default UserList;

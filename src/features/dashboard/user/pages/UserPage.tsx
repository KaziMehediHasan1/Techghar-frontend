import RDataTable from "@/components/RDataTable";
import { columns, userData } from "@/features/dashboard/user/components/UserColumns";





function UserPage() {
  return (
    <div className="text-black space-y-2">
      <h2 className="text-xl font-bold tracking-tight">Recent Orders</h2>
      <RDataTable columns={columns} data={userData} />
    </div>
  );
}

export default UserPage;

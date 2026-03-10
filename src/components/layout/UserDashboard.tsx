import { BreadcrumbBasic } from "@/components/BreadcrumbBasic";
import SidebarForUsers from "@/components/layout/SidebarForUsers";
import Wrapper from "@/components/layout/Wrapper";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="my-2 sm:my-6">
      <Wrapper>
        <section className="space-y-4">
          <BreadcrumbBasic />
          <h1 className="text-xl sm:text-2xl font-semibold">My Dashboard</h1>
        </section>
        <div className="my-4 flex gap-x-20">
          <SidebarForUsers />
          <main>
            <Outlet />
          </main>
        </div>
      </Wrapper>
    </div>
  );
};

export default UserDashboard;

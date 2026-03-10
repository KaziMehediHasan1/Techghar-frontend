import SidebarForUsers from "@/components/layout/SidebarForUsers";
import Wrapper from "@/components/layout/Wrapper";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <Wrapper>
      <div>
        <SidebarForUsers />
        <main>
          <Outlet />
        </main>
      </div>
    </Wrapper>
  );
};

export default UserDashboard;

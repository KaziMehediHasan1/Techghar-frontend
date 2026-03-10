import { NavLink } from "react-router-dom";

const SidebarForUsers = () => {
  return (
    <div className="bg-[#F5F7FF]">
      <section className="py-4 p-2.5">
        <aside>
          <ul className="space-y-3">
            <li>
              <NavLink to="">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="user/info">Account Information</NavLink>
            </li>
            <li>
              <NavLink to="">Address Book</NavLink>
            </li>
            <li>
              <NavLink to="">My Orders</NavLink>
            </li>
            <li>
              <NavLink to="">My Wish List</NavLink>
            </li>
            <li>
              <NavLink to="">My Product Reviews</NavLink>
            </li>
          </ul>
        </aside>
      </section>
    </div>
  );
};

export default SidebarForUsers;

import { NavLink } from "react-router-dom";
import LogoImg from "../../../assets/images/logo.png";
import clsx from "clsx";
import { IconBundler } from "@/assets/icons/IconBundler";
interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}
const SideBarItems = ({ isSidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <section className="flex flex-col h-full">
      <div className="h-20 flex items-center px-5">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={LogoImg}
            alt="Logo"
            className="w-8 h-8 object-contain shrink-0"
          />
          {isSidebarOpen && (
            <p className="text-xl font-bold truncate animate-in fade-in duration-300">
              TechGhar
            </p>
          )}
        </NavLink>
      </div>

      <nav
        className={clsx(
          "flex-1 flex flex-col space-y-2 px-3",
          !isSidebarOpen && "items-center",
        )}
      >
        {route.map((item) => (
          <NavLink
            key={item.name}
            to={item.path || "#"}
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-3 p-2 transition-all group relative",
                isActive ? "" : "text-gray-500 hover:bg-gray-100",
              )
            }
          >
            <span className="text-xl shrink-0">{item.icon}</span>
            {isSidebarOpen && (
              <span className="font-medium whitespace-nowrap overflow-hidden transition-all duration-300">
                {item.name}
              </span>
            )}

            {!isSidebarOpen && (
              <div className="absolute left-full ml-4 px-2 py-1 bg-black text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                {item.name}
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </section>
  );
};

export default SideBarItems;

const route = [
  { name: "Dashboard", path: "/dashboard", icon: <IconBundler.Dashboard /> },
  { name: "Users", path: "users", icon: <IconBundler.CircleUser /> },
  {
    name: "Sales",
    icon: <IconBundler.DollarSign />,
    children: [
      { name: "Orders", path: "sales/orders" },
      { name: "Payments", path: "sales/payments" },
      { name: "Coupons", path: "sales/coupons" },
    ],
  },
  {
    name: "Content",
    icon: <IconBundler.Folder />,
    children: [
      { name: "Blogs", path: "content/blogs" },
      { name: "Reviews", path: "content/reviews" },
    ],
  },
];

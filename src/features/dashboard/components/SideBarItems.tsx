import { NavLink } from "react-router-dom";
import LogoImg from "../../../assets/images/logo.png";
import { IconBundler } from "@/assets/icons/IconBundler";
import { cn } from "@/lib/utils";
import { NestedRoute } from "@/features/dashboard/components/NestedRoute";
interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

const SideBarItems = ({ isSidebarOpen }: SidebarProps) => {
  return (
    <section className="flex flex-col h-full">
      <div className="h-16 flex items-center px-5">
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
        className={cn(
          "flex-1 flex flex-col px-3 py-2",
          !isSidebarOpen && "items-center space-y-4",
        )}
      >
        {route.map((item) => {
          if (item.path && !item.children) {
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 p-2 rounded-lg transition-all group relative mb-1",
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-500 hover:bg-gray-100",
                  )
                }
              >
                <span className="text-xl shrink-0">{item.icon}</span>
                {isSidebarOpen && (
                  <span className="font-medium text-sm">{item.name}</span>
                )}

                {/* Tooltip logic remains same... */}
              </NavLink>
            );
          }
          return (
            <NestedRoute
              key={item.name}
              item={item}
              isSidebarOpen={isSidebarOpen}
            />
          );
        })}
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
      { name: "Orders", path: "sales/orders", icon: <IconBundler.Call /> },
      { name: "Payments", path: "sales/payments", icon: <IconBundler.Call /> },
      { name: "Coupons", path: "sales/coupons", icon: <IconBundler.Call /> },
    ],
  },
  {
    name: "Content",
    icon: <IconBundler.Folder />,
    children: [
      { name: "Blogs", path: "content/blogs", icon: <IconBundler.Call /> },
      { name: "Reviews", path: "content/reviews", icon: <IconBundler.Call /> },
    ],
  },
];

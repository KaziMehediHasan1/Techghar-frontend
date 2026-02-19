import LogoImg from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { IconBundler } from "@/assets/icons/IconBundler";
import clsx from "clsx";

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

export const Sidebar = ({ isSidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <aside
      className={clsx(
        "h-screen border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col sticky top-0 left-0 z-100", 
        isSidebarOpen ? "lg:w-70 w-96" : "w-20",
      )}
    >
      <button
        className={clsx(
          "absolute top-6.5 -right-4 z-110 cursor-pointer",
          "w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all hover:scale-110",
        )}
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <IconBundler.LeftArrow className="size-4" />
        ) : (
          <IconBundler.RightArrow className="size-4" />
        )}
      </button>

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
    </aside>
  );
};

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

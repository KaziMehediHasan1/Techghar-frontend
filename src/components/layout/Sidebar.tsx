import LogoImg from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { IconBundler } from "@/assets/icons/IconBundler";
import SideBarItems from "@/features/dashboard/components/SideBarItems";
import clsx from "clsx";

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

export const Sidebar = ({ isSidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <aside
      className={clsx(
        "w-full max-w-[20%] bg-[#031d36]",
        isSidebarOpen ? "" : "",
      )}
    >
      <section>
        <div className="flex items-center justify-between text-primary font-semibold text-lg">
          {isSidebarOpen ? (
            <img
              src={LogoImg}
              alt="TechGhar - Best Tech Solutions"
              loading="eager"
              className="max-w-10 h-7 lg:h-8 object-contain w-full"
            />
          ) : (
            <NavLink
              key={"dashboard-overview"}
              to={""}
              className="flex items-center space-x-2"
            >
              <img
                src={LogoImg}
                alt="TechGhar - Best Tech Solutions"
                loading="eager"
                className="max-w-10 h-10 object-contain w-full"
              />
              <p className="text-xl lg:text-2xl font-bold">TechGhar</p>
            </NavLink>
          )}
          <button
            className="text-white"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            Btn
          </button>
        </div>
        {/* Navigation Bar */}
        <div className="text-black flex flex-col space-y-1">
          {route.map(
            (routes) =>
              routes.path && (
                <NavLink
                  className="flex items-center gap-x-2"
                  key={routes.name}
                  to={routes.path}
                >
                  {routes.icon}
                  {routes.name}
                </NavLink>
              ),
          )}
        </div>
        {/* Nested route - */}
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

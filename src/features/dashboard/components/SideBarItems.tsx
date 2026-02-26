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
                end={item.path === "/dashboard"}
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
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <IconBundler.LayoutDashboard size={20} />,
  },

  {
    name: "User Management",
    path: "users",
    icon: <IconBundler.Users size={20} />,
    children: [
      {
        name: "Customer List",
        path: "users/list",
        icon: <IconBundler.List size={18} />,
      },
      {
        name: "Admin/Staff",
        path: "users/admin/Staff",
        icon: <IconBundler.ShieldCheck size={18} />,
      },
      {
        name: "Spam Alerts",
        path: "users/spam-alerts",
        icon: <IconBundler.ShieldAlert size={18} />,
      },
    ],
  },

  {
    name: "E-Commerce",
    icon: <IconBundler.ShoppingBag size={20} />,
    children: [
      {
        name: "Product List",
        path: "commerce/product/list",
        icon: <IconBundler.List size={18} />,
      },
      {
        name: "Add Product",
        path: "commerce/product/create",
        icon: <IconBundler.ShoppingBag size={18} />,
      },
      {
        name: "Orders",
        path: "commerce/product/orders",
        icon: <IconBundler.ShoppingCart size={18} />,
      },
      {
        name: "Payments",
        path: "commerce/product/payment",
        icon: <IconBundler.CreditCard size={18} />,
      },
      {
        name: "Coupons",
        path: "commerce/product/coupons",
        icon: <IconBundler.TicketPercent size={18} />,
      },
    ],
  },

  {
    name: "Content Manager",
    icon: <IconBundler.FolderTree size={20} />,
    children: [
      {
        name: "Blogs",
        path: "content/blogs",
        icon: <IconBundler.FileText size={18} />,
      },
      {
        name: "Reviews",
        path: "content/reviews",
        icon: <IconBundler.MessageSquareShare size={18} />,
      },
      {
        name: "Contact",
        path: "content/contact",
        icon: <IconBundler.Mail size={18} />,
      },
    ],
  },

  {
    name: "Settings",
    path: "settings",
    icon: <IconBundler.Settings size={20} />,
  },
];

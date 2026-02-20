import { File, Folder, Tree } from "@/components/ui/file-tree";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  icon: React.ReactElement;
  path?: string;
  children?: NavItem[];
}

interface NestedRouteProps {
  item: NavItem;
  isSidebarOpen: boolean;
}

export const NestedRoute = ({ item, isSidebarOpen }: NestedRouteProps) => {
  const { pathname } = useLocation();
  const isChildActive = item.children?.some(
    (child) => pathname === `${child.path}` || pathname === child.path,
  );
  const CP = item.children?.some((child) => `${child.path}`);
    console.log(CP, "chppp");
  if (!isSidebarOpen) {
    return (
      <div className="group relative flex items-center justify-center  text-gray-400 hover:bg-gray-100 rounded-lg transition-all w-full">
        <span className="text-xl shrink-0">{item.icon}</span>
        <div className="absolute left-full ml-4 px-2 py-1 bg-black text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
          {item.name}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden transition-all duration-300">
      <Tree
        className="bg-transparent space-y-0"
        initialExpandedItems={isChildActive ? [item.name] : []}
        openIcon={item.icon}
        closeIcon={item.icon}
      >
        <Folder
          element={item.name}
          value={item.name}
          className={cn(
            "p-2 rounded-lg transition-all w-full",
            isChildActive
              ? " bg-amber-600 text-white"
              : "hover:bg-gray-100 text-gray-700",
          )}
        >
          <div className="flex flex-col mt-1 ml-2 border-l border-gray-200">
            {item.children?.map((child: NavItem) =>
              child.path ? (
                <File
                  fileIcon={child.icon}
                  key={child.path}
                  value={child.path}
                  className="p-0 w-full"
                >
                  <NavLink
                    to={child.path}
                    className={({ isActive }) =>
                      cn(
                        " flex gap-2 w-full rounded text-sm transition-all",
                        isActive
                          ? "bg-primary/10 px-1 text-primary"
                          : "text-gray-500 hover:text-black hover:bg-gray-100",
                      )
                    }
                  >
                    <p className="truncate">{child.name}</p>
                  </NavLink>
                </File>
              ) : null,
            )}
          </div>
        </Folder>
      </Tree>
    </div>
  );
};

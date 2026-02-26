import { IconBundler } from "@/assets/icons/IconBundler";
import clsx from "clsx";
import SideBarItems from "@/features/dashboard/components/SideBarItems";

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
          "absolute top-4.5 -right-4 z-110 cursor-pointer",
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

      {/* Navigation Bar */}
      <SideBarItems isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>
    </aside>
  );
};

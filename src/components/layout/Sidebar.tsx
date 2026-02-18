import { IconBundler } from "@/assets/icons/IconBundler";

const Sidebar = ({
  closeSidebar,
  setSidebarOpen,
}: {
  closeSidebar: boolean;
  setSidebarOpen: () => void;
}) => {
  return (
    <div>
      <button onClick={() => setSidebarOpen(true)} className="p-2">
        <IconBundler.SliderH className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Sidebar;

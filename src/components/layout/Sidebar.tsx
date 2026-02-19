import clsx from "clsx";
import LogoImg from "../../assets/images/logo.png";

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

export const Sidebar = ({ isSidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <aside
      className={clsx(
        "bg-black h-screen sticky top-0 p-10 transition-all duration-300",
        isSidebarOpen ? "w-28" : "w-80",
        "hidden md:flex flex-col",
      )}
    >
      <section>
        <div className=" text-primary font-semibold text-lg">
          {isSidebarOpen ? (
            <img
              src={LogoImg}
              alt="TechGhar - Best Tech Solutions"
              loading="eager"
              className="max-w-10 h-7 lg:h-8 object-contain w-full"
            />
          ) : (
            <section className="flex items-center space-x-2">
              <img
                src={LogoImg}
                alt="TechGhar - Best Tech Solutions"
                loading="eager"
                className="max-w-10 h-10 object-contain w-full"
              />
              <p className="text-xl lg:text-2xl font-bold">TechGhar</p>
            </section>
          )}
        </div>
        
      </section>
    </aside>
  );
};

import { IconBundler } from "@/assets/icons/IconBundler";
import Logo from "@/assets/images/logo.png";
import type { MobileMenuProps } from "@/components/Navbar/Links";
import { NavLink } from "react-router-dom";



const drawerBaseStyle =
  "fixed top-0 left-0 z-100 h-screen w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out";

const overlayStyle =
  "fixed inset-0 bg-black/40 z-40 transition-opacity duration-300";

const activeLinkStyle =
  "block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 text- transition-colors  text-brand-primary  font-semibold";

const linkStyle =
  "block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors";
const MobileMenu = ({ openMenu, setOpenMenu, links }: MobileMenuProps) => {
  return (
    <>
      {/* OVERLAY */}
      {openMenu && (
        <div className={overlayStyle} onClick={() => setOpenMenu(false)} />
      )}

      {/* DRAWER */}
      <div
        className={`${drawerBaseStyle} ${
          openMenu ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-x-3">
            <img
              src={Logo}
              alt="logo"
              loading="lazy"
              decoding="async"
              className="h-auto object-contain w-7 hover:scale-105 transition-transform select-none"
            />
            <h2 className="text-xl font-semibold font-dashboard">TechGhar</h2>
          </div>
          <button onClick={() => setOpenMenu(false)} className="">
            <IconBundler.Cancle />
          </button>
        </div>

        <nav className="mt-2">
          {links.map((link) => (
            <NavLink
              className={({ isActive }) => (isActive ? activeLinkStyle : linkStyle )}
              key={link?.path}
              to={`/catalog/${link.path}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;

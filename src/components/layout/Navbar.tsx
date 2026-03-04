import Wrapper from "@/components/layout/Wrapper";
import Logo from "@/assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { IconBundler } from "@/assets/icons/IconBundler";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="border-b border-dim-primary shadow-sm shadow-muted w-full">
      <Wrapper>
        {/* DESKTOP DEVICE ONLY */}
        <section className="hidden xl:flex items-center justify-between py-3">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-x-2">
            <img
              src={Logo}
              alt="logo"
              loading="lazy"
              decoding="async"
              className="h-auto object-contain hover:scale-105 transition-transform select-none"
            />
            {/* <p className="text-2xl font-semibold font-dashboard">TechGhar</p> */}
          </NavLink>

          {/* ALL NAVBAR FOR MOBILE AND DESKTOP */}
          <section className="flex items-center gap-x-7">
            {Links.map((link: TNavLink) => (
              <NavLink
                to={link.path}
                className="text-sm sm:text-[1rem] font-semibold hover:text-brand-primary"
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/"
              className="border-2 text-sm sm:text-[1rem] text-brand-primary px-3 py-1.5 border-brand-primary rounded-full"
            >
              Our Deals
            </NavLink>
          </section>

          {/* SEARCH, PROFILE, CART  */}
          <section className="flex items-center gap-5">
            <IconBundler.Search />
            <div className="relative">
              <IconBundler.Cart className="transform-[rotateY(180deg)]" />
              <p className="absolute -top-4 left-2.5 bg-brand-primary text-white py-0.5 px-1.5 text-xs rounded-full">
                4
              </p>
            </div>
            <IconBundler.CircleUser />
          </section>
        </section>

        {/* MOBILE AND TABLET */}
        <section className="flex xl:hidden items-center justify-between my-1.5">
          {/* TOGGLE BAR */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="hover:cursor-pointer"
          >
            {openMenu ? (
              <IconBundler.Cancle size={22} />
            ) : (
              <IconBundler.MenuIcon size={22} />
            )}
          </button>

          {/* MOBILE MENU */}
          {openMenu && <MobileMenu />}

          {/* SEARCH, PROFILE, CART  */}
          <div className="flex items-center gap-3">
            <IconBundler.Search size={20} />
            <div className="relative">
              <IconBundler.Cart
                className="transform-[rotateY(180deg)]"
                size={20}
              />
              <p className="absolute -top-3 left-2.5 bg-brand-primary text-white py-0.5 px-1.5 text-xs rounded-full">
                4
              </p>
            </div>
            <IconBundler.CircleUser size={20} />
          </div>
        </section>
      </Wrapper>
    </div>
  );
}

type TNavLink = { label: string; path: string };

const Links: TNavLink[] = [
  {
    label: "Laptop",
    path: "/laptop",
  },
  {
    label: "Desktop PCs",
    path: "/desktop",
  },
  {
    label: "Networking Devices",
    path: "/network",
  },
  {
    label: "Printer & Scanner",
    path: "/printer",
  },
  {
    label: "PC Parts",
    path: "/pc-parts",
  },
  {
    label: "All Other Products",
    path: "/pc-parts",
  },
];

const MobileMenu = () => {
  return <div>dadf</div>;
};

export default Navbar;

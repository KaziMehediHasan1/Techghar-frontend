import Wrapper from '@/components/layout/Wrapper';
import Logo from '@/assets/images/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconBundler } from '@/assets/icons/IconBundler';
import { useState } from 'react';
import SearchModal from '@/components/search/SearchModal';
import MobileMenu from '@/components/Navbar/MobileMenu';
import { Links, type TNavLink } from '@/components/Navbar/Links';
import { logoutApi } from '@/features/auth/auth.api';
import { useAuthStore } from '@/features/auth/auth.store';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [profileDropdown, setProfileDropdown] = useState<boolean>(false);
  const { user, logout } = useAuthStore();

  return (
    <div className="border-b border-dim-primary shadow-sm shadow-muted w-full">
      <Wrapper>
        {/****** DESKTOP DEVICE ONLY ******/}
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
                to={`/catalog/${link.path}`}
                className={({ isActive }) =>
                  isActive
                    ? 'text-sm sm:text-[1rem] font-semibold hover:text-brand-primary text-brand-primary'
                    : 'text-sm sm:text-[1rem] font-semibold hover:text-brand-primary'
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/new_product"
              className="border-2 text-sm sm:text-[1rem] text-brand-primary px-3 py-1.5 border-brand-primary rounded-full"
            >
              Our Deals
            </NavLink>
          </section>

          {/* SEARCH, PROFILE, CART  */}
          <section className="flex items-center gap-5">
            <button onClick={() => setSearch(!search)}>
              <IconBundler.Search />
            </button>
            {search && (
              <SearchModal open={search} onClose={() => setSearch(false)} />
            )}
            <NavLink to="/cart" className="relative">
              <IconBundler.Cart className="transform-[rotateY(180deg)]" />
              <p className="absolute -top-4 left-2.5 bg-brand-primary text-white py-0.5 px-1.5 text-xs rounded-full">
                4
              </p>
            </NavLink>
            <div className="relative">
              {user ? (
                <div className="flex items-center">
                  <button
                    onClick={() => setProfileDropdown(!profileDropdown)}
                    className="cursor-pointer w-10 h-10 rounded-full border-2 border-brand-primary overflow-hidden"
                  >
                    <img
                      src={user?.photo || 'https://via.placeholder.com/150'}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </button>

                  {profileDropdown && (
                    <ProfileDropDownBar
                      profileDropdown={profileDropdown}
                      setProfileDropdown={setProfileDropdown}
                      user={user}
                      logout={logout}
                    />
                  )}
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="bg-brand-primary text-white px-5 py-2 rounded-full text-sm"
                >
                  Login
                </NavLink>
              )}
            </div>
          </section>
        </section>

        {/*****  MOBILE AND TABLET *****/}
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

          <MobileMenu
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            links={Links}
          />

          {/* SEARCH, PROFILE, CART  */}
          <div className="flex items-center gap-3">
            <button onClick={() => setSearch(!search)}>
              <IconBundler.Search size={20} />
            </button>
            {search && (
              <SearchModal open={search} onClose={() => setSearch(false)} />
            )}
            <div className="relative">
              <IconBundler.Cart
                className="transform-[rotateY(180deg)]"
                size={20}
              />
              <p className="absolute -top-3 left-2.5 bg-brand-primary text-white py-0.5 px-1.5 text-xs rounded-full">
                4
              </p>
            </div>
            <div className="relative">
              {user ? (
                <div className="flex items-center">
                  <button
                    onClick={() => setProfileDropdown(!profileDropdown)}
                    className="cursor-pointer w-8 h-8 rounded-full bg-amber-400 overflow-hidden border border-brand-primary"
                  >
                    <img
                      src={user?.photo || 'https://via.placeholder.com/150'}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </button>

                  {profileDropdown && (
                    <ProfileDropDownBar
                      profileDropdown={profileDropdown}
                      setProfileDropdown={setProfileDropdown}
                      user={user}
                      logout={logout}
                    />
                  )}
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="border-2 text-[0.6rem] px-2 py-1 text-white bg-brand-primary rounded-full"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

const ProfileDropDownBar = ({
  profileDropdown,
  setProfileDropdown,
  user,
  logout,
}: {
  profileDropdown: boolean;
  setProfileDropdown: (value: boolean) => void;
  user: { name: string; email?: string; photo?: string } | null;
  logout: () => void;
}) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      logout();
      setProfileDropdown(false);
      await logoutApi();
      toast('Logout successful!', { type: 'success' });
    } catch (error) {
      console.log('Logout API error:', error);
    } finally {
      navigate('/login');
    }
  };

  return (
    <div>
      {profileDropdown && (
        <div className="absolute right-0 top-10 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-999 py-2 animate-in fade-in zoom-in duration-200">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-800 truncate">
              {user?.name}
            </p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>

          <NavLink
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
            onClick={() => setProfileDropdown(false)}
          >
            My Profile
          </NavLink>

          <NavLink
            to="/orders"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
            onClick={() => setProfileDropdown(false)}
          >
            My Orders
          </NavLink>

          <hr className="my-1 border-gray-100" />

          <button
            onClick={() => {
              handleLogout();
              setProfileDropdown(false);
            }}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

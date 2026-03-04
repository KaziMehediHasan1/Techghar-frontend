import { IconBundler } from "@/assets/icons/IconBundler";
import Wrapper from "@/components/layout/Wrapper";
import { NavLink } from "react-router-dom";

const AdBar = () => {
  return (
    <div className="hidden sm:block bg-black w-full text-white">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-dim-primary text-xs">
              Visit our showroom in 1234 Street Adress City Address, 1234
            </p>
            <NavLink to="/contact" className="underline text-sm">
              Contact Us
            </NavLink>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white text-xs">
              Call Us - 01841370584
            </p>
            <IconBundler.Facebook className="w-4 h-4" />
            <IconBundler.Instagram className="w-4 h-4" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AdBar;

import { BreadcrumbBasic } from "@/components/BreadcrumbBasic";
import HelpersCard from "@/components/cards/HelpersCard";
import Wrapper from "@/components/layout/Wrapper";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="mt-4">
      <Wrapper>
        <section className="space-y-2 sm:space-y-4">
          <BreadcrumbBasic />
          <h1 className="text-xl sm:text-2xl font-bold">Customer Login</h1>
        </section>
        <section className="mt-2 sm:mt-4 flex flex-col sm:flex-row gap-6 sm:gap-10">
          {/* form section */}
          <div className="bg-sky p-4 sm:p-6 space-y-3 rounded-md">
            <header className="space-y-2">
              <h1 className="text-sm sm:text-lg font-semibold">
                Registered Customers
              </h1>
              <p className="text-xs sm:text-sm leading-5 tracking-wider">
                If you have an account, sign in with your email address.
              </p>
            </header>
            <form action="" className="space-y-3">
              <div className="space-y-2 flex flex-col gap-2">
                <label htmlFor="">Email *</label>
                <input
                  type="email"
                  placeholder="enter you email.."
                  className="p-2 rounded text-xs sm:text-sm bg-white border"
                />
              </div>
              <div className="space-y-2 flex flex-col gap-2">
                <label htmlFor="">Password *</label>
                <input
                  type="password"
                  placeholder="enter you password.."
                  className="p-2 rounded text-xs sm:text-sm bg-white border"
                />
              </div>
              <div className="flex items-center gap-x-4">
                <button className="text-sm bg-brand-primary py-2 px-4 text-white rounded-full cursor-pointer">
                  Submit
                </button>
                <NavLink
                  to=""
                  className="text-brand-primary text-xs sm:text-sm"
                >
                  Forget password?
                </NavLink>
              </div>
            </form>
          </div>
          {/* others card */}
          <div className="bg-sky p-4 sm:p-6 space-y-3 rounded-md">
            <header className="space-y-2">
              <h1 className="text-sm sm:text-lg font-semibold">
                New Customer?
              </h1>
              <p className="text-xs sm:text-sm leading-5 tracking-wider">
                Creating an account has many benefits:-
              </p>
            </header>
            <ul className="list-disc text-xs sm:text-sm space-y-1.5 p-4 sm:p-6">
              <li>Check out faster</li>
              <li>Keep more than one address</li>
              <li>Track orders and more</li>
            </ul>
            <button className="text-sm bg-brand-primary py-2 px-4 text-white rounded-full cursor-pointer">
              Create An Account
            </button>
          </div>
        </section>
      </Wrapper>
      <div className=" bg-sky mt-5 p-5">
        <HelpersCard />
      </div>
    </div>
  );
};

export default LoginPage;

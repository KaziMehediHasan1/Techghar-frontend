
import HelpersCard from '@/components/cards/HelpersCard';
import Wrapper from '@/components/layout/Wrapper';
import { signupApi } from '@/features/auth/auth.api';
import { NavLink } from 'react-router-dom';

const SingUpPage = () => {
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    console.log(name, email, password, 'check korchi data');
    try {
      const response = await signupApi({ firstName, email, password });
      console.log(response, 'signup response');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="mt-4">
      <Wrapper>
        <section className="space-y-2 sm:space-y-4">
          {/* <BreadcrumbBasic /> */}
          <h1 className="text-xl sm:text-2xl font-bold">Customer Sign Up</h1>
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
            <form onSubmit={handleRegister} action="" className="space-y-4">
              <div className="space-y-2 flex flex-col gap-2">
                <label htmlFor="">Name *</label>
                <input
                  name="name"
                  type="text"
                  placeholder="enter you name.."
                  className="p-2 rounded text-xs sm:text-sm bg-white border"
                />
              </div>
              <div className="space-y-2 flex flex-col gap-2">
                <label htmlFor="">Email *</label>
                <input
                  name="email"
                  type="email"
                  placeholder="enter you email.."
                  className="p-2 rounded text-xs sm:text-sm bg-white border"
                />
              </div>
              <div className="space-y-2 flex flex-col gap-2">
                <label htmlFor="">Password *</label>
                <input
                  name="password"
                  type="password"
                  placeholder="enter you password.."
                  className="p-2 rounded text-xs sm:text-sm bg-white border"
                />
              </div>
              <div className="flex items-center gap-x-4">
                <button
                  type="submit"
                  className="text-sm bg-brand-primary py-2 px-4 text-white rounded-full cursor-pointer"
                >
                  Sign Up
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
              <h1 className="text-sm sm:text-lg font-semibold">Why Join Us?</h1>
              <p className="text-xs sm:text-sm leading-5 tracking-wider">
                Join our community today and enjoy a personalized shopping
                experience:-
              </p>
            </header>
            <ul className="list-disc text-xs sm:text-sm space-y-1.5 p-4 sm:p-6">
              <li>Exclusive Deals: Get access to member-only discounts.</li>
              <li>
                Order Tracking: Stay updated on your delivery status in
                real-time.
              </li>
              <li>Wishlist: Save your favorite items for later.</li>
            </ul>
            <div className="flex items-center gap-1">
              <p>Already have an account? </p>
              <NavLink
                to="/login"
                className="text-sm text-brand-primary py-2 px-4  cursor-pointer"
              >
                Log in here
              </NavLink>
            </div>
          </div>
        </section>
      </Wrapper>
      <div className=" bg-sky mt-5 p-5">
        <HelpersCard />
      </div>
    </div>
  );
};

export default SingUpPage;

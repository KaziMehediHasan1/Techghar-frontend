// import { BreadcrumbBasic } from '@/components/BreadcrumbBasic';
import HelpersCard from '@/components/cards/HelpersCard';
import Wrapper from '@/components/layout/Wrapper';
import { loginApi } from '@/features/auth/auth.api';
import { useAuthStore } from '@/features/auth/auth.store';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    try {
      const response = await loginApi({ email, password });
      console.log(response,"response login---------")
      const { accessToken, result } = response.data.data;
      console.log(accessToken, result, 'login response data');
      const {
        email: userEmail,
        name,
        photo,
        role,
        uid,
        _id,
        updatedAt,
        createdAt,
      } = result;
      const userData = {
        userEmail,
        name,
        photo,
        role,
        uid,
        _id,
        updatedAt,
        createdAt,
      };
      if (userData && accessToken) {
        setAuth(userData, accessToken);
        toast('Login successful!', { type: 'success' });
        navigate('/');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast('Login failed!', { type: 'error' });
    }
  };
  return (
    <div className="mt-4">
      <Wrapper>
        <section className="space-y-2 sm:space-y-4">
          {/* <BreadcrumbBasic /> */}
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
            <form onSubmit={handleLogin} action="" className="space-y-3">
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
                  Sign In
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
            <NavLink
              to="/signup"
              className="text-sm bg-brand-primary py-2 px-4 text-white rounded-full cursor-pointer"
            >
              Create An Account
            </NavLink>
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

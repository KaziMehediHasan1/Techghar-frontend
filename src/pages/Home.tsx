import { Button } from "@/components/ui/button";
import usePost from "@/hooks/usePost";
import { useAuthStore } from "@/features/auth/auth.store"; // আপনার স্টোর
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const obj = {
  email: "kazimehedihasan.mail@gmail.com",
  password: "1234567890Kmh",
};

const Home = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth); // স্টোরের ফাংশন

  const mutation = usePost("user/auth/login");

  const handleLogin = () => {
    mutation.mutate(obj, {
      onSuccess: (response) => {
        // ১. স্টোরে ইউজার এবং টোকেন সেভ করা
        // আপনার এপিআই রেসপন্স স্ট্রাকচার অনুযায়ী ডাটা পাস করুন
        console.log(response.data.result, "dataaa");
        const { user, accessToken } = response.data;
        setAuth(user, accessToken);

        // ২. সাকসেস মেসেজ দেখানো
        toast.success("Login Successful!");

        // ৩. ড্যাশবোর্ডে রিডাইরেক্ট করা
        navigate("/dashboard");
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message || "Login failed!");
      },
    });
  };

  return (
    <div className="flex flex-col items-center p-10">
      <Button onClick={handleLogin} disabled={mutation.isPending}>
        {mutation.isPending ? "Logging in..." : "Login Test"}
      </Button>

      {/* কনসোলে ডাটা চেক করার জন্য */}
      {mutation.data && <p className="mt-4 text-green-500">User Logged In!</p>}
    </div>
  );
};

export default Home;

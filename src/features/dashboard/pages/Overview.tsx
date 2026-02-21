import BlogCard from "@/features/dashboard/components/BlogCard";
import OrderCard from "@/features/dashboard/components/OrderCard";
import PerformanceChart from "@/features/dashboard/components/PerformanceChart";
import RevenueCard from "@/features/dashboard/components/RevenueCard";
import UserCard from "@/features/dashboard/components/UserCard";

const Overview = () => {
  return (
    <div className="w-full">
      {/* -- NAVBAR START -- */}
      <nav className="flex items-center justify-between">
        <h1 className="font-semibold text-2xl">Overview</h1>
        <p>Message</p>
      </nav>
      {/* -- CARDS SECTION START -- */}
      <section className="grid grid-cols-12 gap-4 w-full p-4">

        <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-4">
          <div className="bg-red-500 text-center p-4 rounded shadow">
            <OrderCard />
          </div>
          <div className="bg-red-500 text-center p-4 rounded shadow">
            <UserCard />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-4">
          <div className="bg-red-500 text-center p-4 rounded shadow">
            <RevenueCard />
          </div>
          <div className="bg-red-500 text-center p-4 rounded shadow">
            <BlogCard />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 bg-red-500 text-center p-4 rounded shadow flex items-center justify-center">
          <PerformanceChart />
        </div>

        <div className="col-span-12 lg:col-span-4 bg-red-500 text-center p-4 rounded shadow">
          grid 3 colm 3 row (3/8 approx)
        </div>

        <div className="col-span-12 lg:col-span-8 bg-blue-500 text-center p-4 rounded shadow">
          grid 3 colm 3 row (5/8 approx)
        </div>
      </section>
    </div>
  );
};

export default Overview;

import BlogCard from '@/features/dashboard/components/BlogCard';
import OrderCard from '@/features/dashboard/components/OrderCard';
import PerformanceChart from '@/features/dashboard/components/PerformanceChart';
import ProductsTable from '@/features/dashboard/components/ProductsTable';
import RecentOrderTable from '@/features/dashboard/components/RecentOrderTable';
import RevenueCard from '@/features/dashboard/components/RevenueCard';
import UserCard from '@/features/dashboard/components/UserCard';
import useFetch from '@/hooks/useFetch';
import type {
  IBlogResponse,
  IOrderResponse,
  IPaymentResponse,
  IUserResponse,
} from '../types/types';

const Overview = () => {
  // payment data
  const { data } = useFetch<IPaymentResponse>('/payment', '/payment');
  const amountOfRevinue = data?.data?.reduce(
    (acc: number, payment: any) => acc + payment.amount,
    0
  );

  // total users
  const { data: userData } = useFetch<IUserResponse>('/user/all-user', '/user');

  // total blogs
  const { data: blogData } = useFetch<IBlogResponse>('/blog', '/blog');

  // order data
  const { data: orderData } = useFetch<IOrderResponse>('/order', '/order');
  const sevendaysAgo = new Date();
  sevendaysAgo.setDate(sevendaysAgo.getDate() - 7);

  const recentOrders = orderData?.data.result.filter((order) => {
    const orderDate = new Date(order.createdAt);
    return orderDate >= sevendaysAgo;
  }) ?? [];
  

  return (
    <div className="w-full">
      {/* -- NAVBAR START -- */}
      <nav className="flex items-center justify-between px-2 md:px-4">
        <h1 className="font-semibold text-2xl">Overview</h1>
        <p>Message</p>
      </nav>
      {/* -- CARDS SECTION START -- */}
      <section className="grid grid-cols-12 gap-4 w-full p-4 items-stretch">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-4">
          <OrderCard count={orderData?.data.meta?.total ?? 0} />
          <UserCard count={userData?.data.length ?? 0} />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-4">
          <RevenueCard count={amountOfRevinue?.toFixed(2) ?? 0} />
          <BlogCard count={blogData?.data.total ?? 0} />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <PerformanceChart />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <RecentOrderTable orders={recentOrders} />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <ProductsTable />
        </div>
      </section>
    </div>
  );
};

export default Overview;

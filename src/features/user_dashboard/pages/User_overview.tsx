import { motion } from 'framer-motion';
import { Badge } from '../components/Badge';
import Card from '../components/Card';
import Header from '../components/Header';
import useFetch from '@/hooks/useFetch';
import { useAuthStore } from '@/features/auth/auth.store';
import { useCartStore } from '@/store/useCartStore';

interface IOrder {
  _id: string;
  createdAt: string;
  totalPrice: number;
  status: string;
  quantity: number;
}

interface IOrderData {
  success: boolean;
  statusCode: number;
  message: string;
  data: IOrder[];
}

const User_Overview = () => {
  const { totalItems } = useCartStore();
  const { user: authUser } = useAuthStore();
  const userId = authUser?._id;
  const url = userId ? `/order/user/${userId}` : '';
  const { data } = useFetch<IOrderData>(url);
  const totalSpent =
    data?.data?.reduce((acc, curr) => {
      return acc + (Number(curr.totalPrice) || 0);
    }, 0) || 0;
  const displayTotal = totalSpent.toFixed(2); 

  const lastWeekOrders =
    data?.data?.filter((o) => {
      const orderDate = new Date(o.createdAt);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return orderDate > weekAgo;
    }).length || 0;

  const dynamicMetrics = [
    {
      label: 'Recent Orders',
      value: data?.data?.length || '0',
      delta: `+${lastWeekOrders} this week`,
      color: 'blue',
      icon: '🛍️',
    },
    {
      label: 'Total Spent',
      value: `৳${displayTotal}`,
      delta: `Average: ৳${(totalSpent / (data?.data?.length || 1)).toFixed(0)} / order`,
      color: 'emerald',
      icon: '💳',
    },
    {
      label: 'Wishlist',
      value: `${totalItems()}`,
      delta: '2 on sale now',
      color: 'orange',
      icon: '❤️',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 "
    >
      {/* Header Section */}
      <Header />

      {/* Metric Cards - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dynamicMetrics.map((m, i) => (
          <Card key={i} m={m} i={i} />
        ))}
      </div>

      {/* Table Section - Horizontal Scroll for Mobile */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-50 flex items-center justify-between">
          <h3 className="font-bold text-gray-800">Recent Orders</h3>
          <button className="text-sm font-semibold text-primary hover:underline transition-all">
            View all →
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                {['Order ID', 'Date', 'Items', 'Amount', 'Status'].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-4 text-[10px] uppercase tracking-wider font-bold text-gray-400"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data?.data?.map((o, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="hover:bg-gray-50/80 transition-colors group"
                >
                  <td className="px-6 py-4 text-sm font-mono text-gray-600">
                    #{o._id.slice(-6)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {o.createdAt
                      ? new Date(o.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : 'N/A'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {o.quantity} items
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    ${o.totalPrice}
                  </td>
                  <td className="px-6 py-4">
                    <Badge status={o.status} />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};
export default User_Overview;

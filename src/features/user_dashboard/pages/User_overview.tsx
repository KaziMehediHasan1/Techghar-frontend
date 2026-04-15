import { motion } from 'framer-motion';
import { statusStyles } from '../style';
import { orders } from '../components/fake_data';

const Badge = ({ status }: { status: string }) => (
  <span
    className={`px-3 py-1 rounded-full text-[11px] font-medium border flex items-center gap-1.5 w-fit ${statusStyles[status as keyof typeof statusStyles]}`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-current" />
    {status}
  </span>
);

const User_Overview = () => {
  const metrics = [
    {
      label: 'Recent Orders',
      value: '12',
      delta: '+3 this week',
      color: 'blue',
      icon: '🛍️',
    },
    {
      label: 'Total Spent',
      value: '৳24,850',
      delta: '৳3,200 this month',
      color: 'emerald',
      icon: '💳',
    },
    {
      label: 'Wishlist',
      value: '7',
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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Good morning, Mehedi 👋
          </h2>
          <p className="text-gray-500 text-sm">
            Here's what's happening with your account today.
          </p>
        </div>
        <div className="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-lg border">
          Wed, Apr 15, 2026
        </div>
      </div>

      {/* Metric Cards - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden group"
          >
            {/* Background Accent Decor */}
            <div
              className={`absolute -top-4 -right-4 w-20 h-20 bg-${m.color}-50 rounded-full group-hover:scale-150 transition-transform duration-500`}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className={`p-2 bg-${m.color}-50 rounded-xl text-lg`}>
                  {m.icon}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  {m.label}
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {m.value}
              </div>
              <span
                className={`text-[11px] font-bold px-2 py-0.5 rounded-md bg-${m.color}-50 text-${m.color}-700`}
              >
                {m.delta}
              </span>
            </div>
          </motion.div>
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
              {orders?.map((o, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="hover:bg-gray-50/80 transition-colors group"
                >
                  <td className="px-6 py-4 text-sm font-mono text-gray-600">
                    {o.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{o.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {o.items} items
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    {o.amount}
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

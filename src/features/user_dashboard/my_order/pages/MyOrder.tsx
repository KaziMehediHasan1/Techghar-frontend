import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Package,
  Clock,
  CheckCircle2,
  XCircle,
  Truck,
} from 'lucide-react'; // npm install lucide-react

const allOrders = [
  {
    id: '#ORD-7821',
    date: 'Apr 10, 2026',
    status: 'Delivered',
    amount: '৳4,250',
    items: 3,
    product: 'Casual Shirt, Jeans, Belt',
  },
  {
    id: '#ORD-7753',
    date: 'Apr 3, 2026',
    status: 'In Transit',
    amount: '৳7,800',
    items: 5,
    product: 'Sneakers, Socks ×2, Cap, Bag',
  },
  {
    id: '#ORD-7690',
    date: 'Mar 27, 2026',
    status: 'Processing',
    amount: '৳2,100',
    items: 1,
    product: 'Wireless Earbuds',
  },
  {
    id: '#ORD-7612',
    date: 'Mar 15, 2026',
    status: 'Delivered',
    amount: '৳6,300',
    items: 4,
    product: 'Polo T-shirt ×2, Shorts, Sunglasses',
  },
  {
    id: '#ORD-7540',
    date: 'Feb 28, 2026',
    status: 'Delivered',
    amount: '৳1,950',
    items: 2,
    product: 'Wallet, Keychain',
  },
  {
    id: '#ORD-7411',
    date: 'Feb 12, 2026',
    status: 'Cancelled',
    amount: '৳3,500',
    items: 3,
    product: 'Jacket, Gloves, Scarf',
  },
  {
    id: '#ORD-7290',
    date: 'Jan 30, 2026',
    status: 'Delivered',
    amount: '৳5,200',
    items: 6,
    product: 'Kitchen Accessories Set',
  },
  {
    id: '#ORD-7150',
    date: 'Jan 14, 2026',
    status: 'Delivered',
    amount: '৳890',
    items: 1,
    product: 'Phone Stand',
  },
];

const FILTERS = ['All', 'Delivered', 'In Transit', 'Processing', 'Cancelled'];

const statusConfig = {
  Delivered: {
    color: 'text-green-600',
    bg: 'bg-green-50',
    icon: <CheckCircle2 size={14} />,
    border: 'border-green-100',
  },
  'In Transit': {
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    icon: <Truck size={14} />,
    border: 'border-amber-100',
  },
  Processing: {
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    icon: <Clock size={14} />,
    border: 'border-blue-100',
  },
  Cancelled: {
    color: 'text-red-600',
    bg: 'bg-red-50',
    icon: <XCircle size={14} />,
    border: 'border-red-100',
  },
};

const MyOrders = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const visibleOrders = allOrders.filter((o) => {
    const matchFilter = filter === 'All' || o.status === filter;
    const matchSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const getActionBtn = (status: string) => {
    const baseClass =
      'text-xs font-semibold px-4 py-1.5 rounded-lg transition-all border ';
    if (status === 'Delivered')
      return (
        baseClass +
        'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 shadow-sm'
      );
    if (status === 'In Transit')
      return (
        baseClass + 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
      );
    return (
      baseClass +
      'bg-gray-50 text-gray-400 border-transparent cursor-not-allowed'
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-gray-900">My Orders</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Package size={16} />
          <span>{allOrders.length} total orders</span>
          <span className="text-gray-300">|</span>
          <span className="text-green-600 font-medium">
            {allOrders.filter((o) => o.status === 'Delivered').length} completed
          </span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="relative w-full lg:w-96">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search by ID or products..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto no-scrollbar">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                filter === f
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {f}{' '}
              {f !== 'All' && (
                <span className="ml-1 opacity-70">
                  {allOrders.filter((o) => o.status === f).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                {[
                  'Order ID',
                  'Date',
                  'Products',
                  'Amount',
                  'Status',
                  'Action',
                ].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-4 text-[10px] uppercase font-bold text-gray-400 tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <AnimatePresence>
                {visibleOrders.length > 0 ? (
                  visibleOrders.map((o) => (
                    <React.Fragment key={o.id}>
                      <motion.tr
                        layout
                        onClick={() =>
                          setExpandedRow(expandedRow === o.id ? null : o.id)
                        }
                        className={`cursor-pointer transition-colors group ${expandedRow === o.id ? 'bg-blue-50/30' : 'hover:bg-gray-50'}`}
                      >
                        <td className="px-6 py-4 font-mono text-sm font-bold text-blue-600">
                          {o.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {o.date}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 max-w-[200px] truncate">
                          {o.product}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">
                          {o.amount}
                        </td>
                        <td className="px-6 py-4">
                          <div
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border w-fit text-[11px] font-bold ${statusConfig[o.status as keyof typeof statusConfig].bg} ${statusConfig[o.status as keyof typeof statusConfig].color} ${statusConfig[o.status as keyof typeof statusConfig].border}`}
                          >
                            {
                              statusConfig[
                                o.status as keyof typeof statusConfig
                              ].icon
                            }
                            {o.status}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            className={getActionBtn(o.status)}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {o.status === 'Delivered'
                              ? 'Reorder'
                              : o.status === 'In Transit'
                                ? 'Track'
                                : 'View'}
                          </button>
                        </td>
                      </motion.tr>

                      {/* Expanded Details */}
                      {expandedRow === o.id && (
                        <motion.tr
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-blue-50/20"
                        >
                          <td
                            colSpan={6}
                            className="px-6 py-6 border-b border-blue-50"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              <div className="space-y-1">
                                <span className="text-[10px] uppercase font-bold text-gray-400">
                                  Items Ordered
                                </span>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                  {o.product}
                                </p>
                              </div>
                              <div className="space-y-1">
                                <span className="text-[10px] uppercase font-bold text-gray-400">
                                  Billing Summary
                                </span>
                                <p className="text-sm text-gray-700">
                                  Subtotal: {o.amount}
                                </p>
                                <p className="text-[11px] text-green-600 font-medium">
                                  Payment: Paid via SSLCommerz
                                </p>
                              </div>
                              <div className="flex flex-col justify-center">
                                <button className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-2">
                                  Download Invoice (PDF)
                                </button>
                              </div>
                            </div>
                          </td>
                        </motion.tr>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-20 text-center text-gray-400 text-sm"
                    >
                      No orders matching your search or filter.
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-center text-gray-400 text-[11px] font-medium">
        Tip: Click on a row to see item details and download invoices.
      </p>
    </div>
  );
};

export default MyOrders;

import React, { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Package,
  Clock,
  CheckCircle2,
  XCircle,
  Truck,
  FileText,
} from 'lucide-react';
import useFetch from '@/hooks/useFetch';
import { useAuthStore } from '@/features/auth/auth.store';
import type { IOrderData } from '../../types';

const FILTERS = [
  'All',
  'Delivered',
  'Pending',
  'Confirmed',
  'Shipped',
  'Cancelled',
];

interface IStatusStyle {
  label: string;
  color: string;
  bg: string;
  icon: ReactNode;
  border: string;
}

type OrderStatus =
  | 'delivered'
  | 'pending'
  | 'confirmed'
  | 'shipped'
  | 'cancelled';

const statusConfig: Record<OrderStatus, IStatusStyle> = {
  delivered: {
    label: 'Delivered',
    color: 'text-green-600',
    bg: 'bg-green-50',
    icon: <CheckCircle2 size={14} />,
    border: 'border-green-100',
  },
  pending: {
    label: 'Pending',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    icon: <Clock size={14} />,
    border: 'border-blue-100',
  },
  confirmed: {
    label: 'Confirmed',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    icon: <CheckCircle2 size={14} />,
    border: 'border-cyan-100',
  },
  shipped: {
    label: 'Shipped',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    icon: <Truck size={14} />,
    border: 'border-amber-100',
  },
  cancelled: {
    label: 'Cancelled',
    color: 'text-red-600',
    bg: 'bg-red-50',
    icon: <XCircle size={14} />,
    border: 'border-red-100',
  },
};

const MyOrders = () => {
  const { user } = useAuthStore();
  const [filter, setFilter] = useState('All');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const userId = user?._id;
  const url = userId ? `/order/user/${userId}` : '';
  const { data } = useFetch<IOrderData>(url);
  const orders = data?.data || [];

  const visibleOrders = orders.filter((o) => {
    if (filter === 'All') return true;
    return o.status === filter.toLowerCase();
  });

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-gray-900">My Orders</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Package size={16} />
          <span>{orders.length} total orders</span>
          <span className="text-gray-300">|</span>
          <span className="text-green-600 font-medium">
            {orders.filter((o) => o.status === 'delivered').length} completed
          </span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto no-scrollbar">
          {FILTERS.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                filter === s
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {s}
              {s !== 'All' && (
                <span className="ml-1 opacity-70">
                  {orders.filter((o) => o.status === s.toLowerCase()).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse overflow-x-auto">
          <tbody className="divide-y divide-gray-50">
            <AnimatePresence mode="popLayout">
              {visibleOrders.length > 0 ? (
                visibleOrders.map((item) => {
                  const statusKey = item.status as OrderStatus;
                  const config = statusConfig[statusKey];

                  return (
                    <React.Fragment key={item._id}>
                      <motion.tr
                        layout
                        onClick={() =>
                          setExpandedRow(
                            expandedRow === item._id ? null : item._id
                          )
                        }
                        className={`cursor-pointer transition-colors group ${expandedRow === item._id ? 'bg-blue-50/30' : 'hover:bg-gray-50'}`}
                      >
                        <td className="px-6 py-4 font-mono text-xs font-bold text-blue-600">
                          #{item._id.slice(-6).toUpperCase()}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 truncate">
                          {item.productID
                            ?.map((p: { title: string }) => p.title)
                            .join(', ')}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">
                          ${item.totalPrice}
                        </td>
                        <td className="px-6 py-4">
                          <div
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border w-fit text-[11px] font-bold 
                              ${config?.bg || 'bg-gray-50'} 
                              ${config?.color || 'text-gray-500'} 
                              ${config?.border || 'border-gray-100'}`}
                          >
                            {config?.icon}
                            {config?.label || item.status}
                          </div>
                        </td>
                      </motion.tr>

                      {expandedRow === item._id && (
                        <motion.tr
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-blue-50/10"
                        >
                          <td
                            colSpan={5}
                            className="px-6 py-6 border-b border-blue-50"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              <div className="space-y-2">
                                <span className="text-[10px] uppercase font-bold text-gray-400">
                                  Items Ordered
                                </span>
                                <div className="space-y-2">
                                  {item.productID?.map(
                                    (p: {
                                      _id: string;
                                      title: string;
                                      price: string;
                                    }) => (
                                      <div
                                        key={p._id}
                                        className="text-sm text-gray-700 flex justify-between bg-white p-2 rounded-lg border border-gray-100 shadow-sm"
                                      >
                                        <span>{p.title}</span>
                                        <span className="font-bold text-gray-900">
                                          ${p.price}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>

                              <div className="space-y-1">
                                <span className="text-[10px] uppercase font-bold text-gray-400">
                                  Billing Summary
                                </span>
                                <p className="text-sm text-gray-700">
                                  Quantity: {item.quantity}
                                </p>
                                <p className="text-sm font-bold text-blue-600">
                                  Total: ${item.totalPrice}
                                </p>
                                <p className="text-[11px] text-green-600 font-medium">
                                  Payment Status: Paid
                                </p>
                              </div>

                              <div className="flex flex-col justify-center">
                                <button className="text-blue-600 text-sm font-bold hover:bg-blue-50 p-3 rounded-xl border border-blue-100 flex items-center justify-center gap-2 transition-all">
                                  <FileText size={16} /> Download Invoice (PDF)
                                </button>
                              </div>
                            </div>
                          </td>
                        </motion.tr>
                      )}
                    </React.Fragment>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-20 text-center text-gray-400 text-sm italic"
                  >
                    No {filter !== 'All' ? filter : ''} orders found.
                  </td>
                </tr>
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

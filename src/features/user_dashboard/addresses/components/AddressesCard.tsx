import { useState } from 'react';
import type { IProfileData } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Edit2, Home, MapPin, Phone, Trash2 } from 'lucide-react';

const AddressCard = ({
  addr,
  onEdit,
  onRemove,
}: {
  addr: IProfileData;
  onEdit: (a: IProfileData) => void;
  onRemove: (_id: string) => void;
}) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const identifier = addr._id;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative p-5 rounded-2xl border transition-all ${
        addr.isDefaultShipping || addr.isDefaultBilling
          ? 'border-blue-200 bg-blue-50/20 shadow-sm'
          : 'border-gray-100 bg-white hover:border-gray-200'
      }`}
    >
      {(addr.isDefaultShipping || addr.isDefaultBilling) && (
        <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase">
          {addr.isDefaultShipping && addr.isDefaultBilling
            ? 'Default'
            : addr.isDefaultShipping
              ? 'Default Shipping'
              : 'Default Billing'}
        </span>
      )}

      <div className="flex gap-4 mb-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            addr.address.label === 'Home'
              ? 'bg-orange-100 text-orange-600'
              : 'bg-blue-100 text-blue-600'
          }`}
        >
          {addr.address.label === 'Home' ? (
            <Home size={20} />
          ) : (
            <Briefcase size={20} />
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{addr.address.label}</h4>
          <p className="text-xs text-gray-400 font-medium">
            {addr.address.fullName}
          </p>
        </div>
      </div>

      <div className="space-y-1 text-sm text-gray-600 mb-6 bg-gray-50/50 p-3 rounded-xl border border-gray-50">
        <p className="flex items-start gap-2">
          <MapPin size={14} className="mt-1 shrink-0 text-gray-400" />
          {addr.address.street}{' '}
          {addr.address.addressLine && `, ${addr.address.addressLine}`}
        </p>
        <p className="ml-5">
          {addr.address.city}, {addr.address.state} - {addr.address.zipCode}
        </p>
        <p className="flex items-center gap-2 ml-5 text-gray-400 text-xs mt-2">
          <Phone size={12} /> {addr.address.phone}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {showConfirm ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-between bg-red-50 p-2 rounded border border-red-100"
          >
            <span className="text-xs font-bold text-red-600 ml-2">Remove?</span>
            <div className="flex gap-2 ">
              <button
                onClick={() => identifier && onRemove(identifier)}
                className="bg-red-600 cursor-pointer text-white text-xs px-3 py-1.5 rounded-md font-bold hover:bg-red-700"
              >
                Delete
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="text-gray-500 cursor-pointer text-xs px-3 py-1.5 font-bold hover:bg-white rounded-md transition-all"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={() => onEdit(addr)}
              className="text-xs cursor-pointer font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-all flex items-center gap-2"
            >
              <Edit2 size={12} /> Edit
            </button>
            <button
              onClick={() => setShowConfirm(true)}
              className="ml-auto p-2 cursor-pointer text-gray-300 hover:text-red-500 transition-all"
            >
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AddressCard;

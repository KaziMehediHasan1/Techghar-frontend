import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Plus,
  Edit2,
  Trash2,
  Home,
  Briefcase,
  Phone,
} from 'lucide-react';

// --- Types ---
interface Address {
  id: number;
  type: 'Shipping' | 'Billing';
  label: string;
  name: string;
  line1: string;
  line2: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

const initialAddresses: Address[] = [
  {
    id: 1,
    type: 'Shipping',
    label: 'Home',
    name: 'Mehedi Hasan',
    line1: 'House 12, Road 5',
    line2: 'Khulshi',
    city: 'Chattogram',
    zip: '4225',
    country: 'Bangladesh',
    phone: '+880 1711 000000',
    isDefault: true,
  },
  {
    id: 2,
    type: 'Billing',
    label: 'Office',
    name: 'Mehedi Hasan',
    line1: 'Floor 4, Amin Court',
    line2: 'Agrabad',
    city: 'Chattogram',
    zip: '4100',
    country: 'Bangladesh',
    phone: '+880 1811 000000',
    isDefault: false,
  },
];

// --- Sub-Component: Address Card ---
function AddressCard({
  addr,
  onEdit,
  onRemove,
  onSetDefault,
}: {
  addr: Address;
  onEdit: (a: Address) => void;
  onRemove: (id: number) => void;
  onSetDefault: (id: number) => void;
}) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative p-5 rounded-2xl border transition-all ${
        addr.isDefault
          ? 'border-blue-200 bg-blue-50/20 shadow-sm'
          : 'border-gray-100 bg-white hover:border-gray-200'
      }`}
    >
      {addr.isDefault && (
        <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider">
          DEFAULT
        </span>
      )}

      <div className="flex gap-4 mb-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            addr.label === 'Home'
              ? 'bg-orange-100 text-orange-600'
              : 'bg-blue-100 text-blue-600'
          }`}
        >
          {addr.label === 'Home' ? <Home size={20} /> : <Briefcase size={20} />}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-gray-900">{addr.label}</h4>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${
                addr.type === 'Shipping'
                  ? 'border-green-200 text-green-600 bg-green-50'
                  : 'border-blue-200 text-blue-600 bg-blue-50'
              }`}
            >
              {addr.type}
            </span>
          </div>
          <p className="text-xs text-gray-400 font-medium">{addr.name}</p>
        </div>
      </div>

      <div className="space-y-1 text-sm text-gray-600 mb-6 bg-gray-50/50 p-3 rounded-xl border border-gray-50">
        <p className="flex items-start gap-2">
          <MapPin size={14} className="mt-1 shrink-0 text-gray-400" />{' '}
          {addr.line1}, {addr.line2}
        </p>
        <p className="ml-5">
          {addr.city} - {addr.zip}, {addr.country}
        </p>
        <p className="flex items-center gap-2 ml-5 text-gray-400 text-xs mt-2">
          <Phone size={12} /> {addr.phone}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {showConfirm ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-between bg-red-50 p-2 rounded-lg border border-red-100"
          >
            <span className="text-xs font-bold text-red-600 ml-2">Remove?</span>
            <div className="flex gap-2">
              <button
                onClick={() => onRemove(addr.id)}
                className="bg-red-600 text-white text-xs px-3 py-1.5 rounded-md font-bold hover:bg-red-700"
              >
                Delete
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="text-gray-500 text-xs px-3 py-1.5 font-bold hover:bg-white rounded-md transition-all"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={() => onEdit(addr)}
              className="text-xs font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-all flex items-center gap-2"
            >
              <Edit2 size={12} /> Edit
            </button>
            {!addr.isDefault && (
              <button
                onClick={() => onSetDefault(addr.id)}
                className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-all"
              >
                Set Default
              </button>
            )}
            <button
              onClick={() => setShowConfirm(true)}
              className="ml-auto p-2 text-gray-300 hover:text-red-500 transition-all"
            >
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- Main Component ---
const Addresses = () => {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingAddr, setEditingAddr] = useState<Address | null>(null);

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as any;

    if (editingAddr) {
      setAddresses((prev) =>
        prev.map((a) => (a.id === editingAddr.id ? { ...a, ...data } : a))
      );
    } else {
      const newAddr: Address = {
        ...data,
        id: Date.now(),
        isDefault: addresses.length === 0,
      };
      setAddresses([...addresses, newAddr]);
    }
    setIsFormOpen(false);
    setEditingAddr(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Addresses
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage your shipping and billing locations
          </p>
        </div>
        {!isFormOpen && (
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95"
          >
            <Plus size={18} /> Add Address
          </button>
        )}
      </div>

      {/* Form Overlay/Section */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <form
              onSubmit={handleSave}
              className="bg-white border border-blue-100 p-6 rounded-2xl shadow-xl space-y-4"
            >
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" />{' '}
                {editingAddr ? 'Edit Address' : 'New Address'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                    Label
                  </label>
                  <input
                    name="label"
                    defaultValue={editingAddr?.label}
                    required
                    placeholder="Home / Office"
                    className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                    Type
                  </label>
                  <select
                    name="type"
                    defaultValue={editingAddr?.type}
                    className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white outline-none transition-all text-sm"
                  >
                    <option value="Shipping">Shipping Address</option>
                    <option value="Billing">Billing Address</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    defaultValue={editingAddr?.name}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white outline-none text-sm"
                  />
                </div>
                <input
                  name="line1"
                  placeholder="Address Line 1"
                  defaultValue={editingAddr?.line1}
                  required
                  className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 text-sm"
                />
                <input
                  name="line2"
                  placeholder="Address Line 2 (Optional)"
                  defaultValue={editingAddr?.line2}
                  className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 text-sm"
                />
                <input
                  name="city"
                  placeholder="City"
                  defaultValue={editingAddr?.city}
                  required
                  className="px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 text-sm"
                />
                <input
                  name="zip"
                  placeholder="Zip Code"
                  defaultValue={editingAddr?.zip}
                  required
                  className="px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 text-sm"
                />
              </div>
              <div className="flex gap-3 pt-4 border-t border-gray-50">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-bold"
                >
                  Save Address
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsFormOpen(false);
                    setEditingAddr(null);
                  }}
                  className="px-6 py-2 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Address Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <AddressCard
            key={addr.id}
            addr={addr}
            onEdit={(a) => {
              setEditingAddr(a);
              setIsFormOpen(true);
            }}
            onRemove={(id) =>
              setAddresses(addresses.filter((x) => x.id !== id))
            }
            onSetDefault={(id) =>
              setAddresses(
                addresses.map((x) => ({ ...x, isDefault: x.id === id }))
              )
            }
          />
        ))}
      </div>

      {addresses.length === 0 && !isFormOpen && (
        <div className="py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <MapPin size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 font-medium">No addresses saved yet.</p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="mt-4 text-blue-600 font-bold hover:underline"
          >
            Add your first address
          </button>
        </div>
      )}
    </div>
  );
};

export default Addresses;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plus } from 'lucide-react';
import usePost from '@/hooks/usePost';
import { useAuthStore } from '@/features/auth/auth.store';
import type { Address, IProfileResponse } from '../types';
import AddressCard from '../components/AddressesCard';
import useFetch from '@/hooks/useFetch';
import useDelete from '@/hooks/useDelete';


const Addresses = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingAddr, setEditingAddr] = useState<Address | null>(null);
  const { user } = useAuthStore();
  const PROFILE_KEY = 'user-profile';
  const { mutateAsync: createProfile, isPending } = usePost(
    '/profile',
    PROFILE_KEY
  );
  const { data, refetch } = useFetch<IProfileResponse>(
    `/profile/${user?._id}`,
    PROFILE_KEY,
    {}, // Params
    { enabled: !!user?._id }
  );
  const { mutateAsync: removeAddress } = useDelete(
    '/profile',
    PROFILE_KEY,
    '_id'
  );


  // const { mutateAsync: updateProfile } = useUpdate(
  //   '/profile',
  //   PROFILE_KEY,
  //   '_id'
  // );
  const ProfileData = data?.data;

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const addressData = {
      fullName: formData.get('fullName') as string,
      label: formData.get('label') as string,
      street: (formData.get('street') as string) || '',
      addressLine: (formData.get('addressLine') as string) || '',
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      zipCode: formData.get('zipCode') as string,
      phone: formData.get('phone') as string,
      isDefaultShipping: formData.get('isDefaultShipping') === 'on',
      isDefaultBilling: formData.get('isDefaultBilling') === 'on',
    };

    const payload = {
      userID: user?._id || '',
      address: {
        ...addressData,
        isDefaultShipping: !!addressData.isDefaultShipping,
        isDefaultBilling: !!addressData.isDefaultBilling,
      },
      orders: [],
      wishlist: [],
      reviews: [],
    };

    try {
      const response = await createProfile(payload);

      if (response.success) {
        refetch();
        setIsFormOpen(false);
        setEditingAddr(null);
      }
    } catch (error) {
      console.error('Final Validation Error:', error);
    }
  };

  const handleRemove = async (_id: string) => {
    try {
      await removeAddress(_id);
    } catch (error) {
      console.error('Error during deletion:', error);
    }
  };

  return (
    <div className="space-y-4">
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
              className="bg-white border border-blue-100 p-6 rounded-2xl  space-y-4"
            >
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" />{' '}
                {editingAddr ? 'Edit Address' : 'New Address'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Label */}
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

                {/* Type */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                    Type
                  </label>
                  <select
                    name="type"
                    className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white outline-none transition-all text-sm"
                  >
                    <option value="Shipping">Shipping Address</option>
                    <option value="Billing">Billing Address</option>
                  </select>
                </div>

                {/* Full Name */}
                <div className="md:col-span-2 space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    defaultValue={editingAddr?.fullName}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white outline-none text-sm"
                  />
                </div>

                {/* Street / Address Line 1 */}
                <div className="md:col-span-2 space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                    Street Address
                  </label>
                  <input
                    name="street"
                    placeholder="House number and street name"
                    defaultValue={editingAddr?.street}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white outline-none text-sm"
                  />
                </div>

                {/* Address Line 2 */}
                <div className="md:col-span-2 space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                    Apartment, suite, unit, etc. (optional)
                  </label>
                  <input
                    name="addressLine"
                    placeholder="Address Line 2"
                    defaultValue={editingAddr?.addressLine}
                    className="w-full px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white outline-none text-sm"
                  />
                </div>

                {/* City */}
                <input
                  name="city"
                  placeholder="City"
                  defaultValue={editingAddr?.city}
                  required
                  className="px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 text-sm"
                />

                {/* State */}
                <input
                  name="state"
                  placeholder="State / Province"
                  defaultValue={editingAddr?.state}
                  required
                  className="px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 text-sm"
                />

                {/* Zip Code */}
                <input
                  name="zipCode"
                  placeholder="Zip Code"
                  defaultValue={editingAddr?.zipCode}
                  required
                  className="px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 text-sm"
                />

                {/* Phone */}
                <input
                  name="phone"
                  placeholder="Phone Number"
                  defaultValue={editingAddr?.phone}
                  required
                  className="px-4 py-2 rounded-xl border border-gray-100 bg-gray-50 text-sm"
                />

                {/* Default Checkboxes */}
                <div className="md:col-span-2 flex flex-wrap gap-4 py-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isDefaultShipping"
                      defaultChecked={editingAddr?.isDefaultShipping}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs font-medium text-gray-600">
                      Set as default shipping
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isDefaultBilling"
                      defaultChecked={editingAddr?.isDefaultBilling}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs font-medium text-gray-600">
                      Set as default billing
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-50">
                {isPending ? (
                  <button
                    type="submit"
                    className="bg-blue-200 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-blue-300 transition-colors"
                  >
                    Loading...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors"
                  >
                    Save Address
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setIsFormOpen(false);
                    setEditingAddr(null);
                  }}
                  className="px-6 py-2 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors"
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
        {ProfileData && (
          <AddressCard
            key={ProfileData._id}
            addr={ProfileData}
            onEdit={(a) => {
              setEditingAddr(a as unknown as Address);
              setIsFormOpen(true);
            }}
            onRemove={(_id) => handleRemove(_id)}
          />
        )}
      </div>

      {data?.data == null && !isFormOpen && (
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

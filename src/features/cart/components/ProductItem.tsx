const ProductItem = () => (
  <div className="grid grid-cols-12 gap-4 py-6 border-b items-center">
    {/* Product Image & Details */}
    <div className="col-span-12 md:col-span-6 flex gap-4">
      <div className="w-24 h-24 bg-gray-100 flex-shrink-0">
        <img
          src="/api/placeholder/100/100"
          alt="Product"
          className="object-contain w-full h-full"
        />
      </div>
      <p className="text-sm">
        MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM...
      </p>
    </div>

    {/* Price, Qty, Subtotal Group */}
    <div className="col-span-12 md:col-span-6 grid grid-cols-3 items-center text-center">
      <div>
        <span className="md:hidden block text-xs text-gray-400">Price</span>
        <p className="font-semibold">$4,349.00</p>
      </div>
      <div className="flex justify-center">
        <input
          type="number"
          defaultValue={1}
          className="w-12 border rounded-md p-1 text-center"
        />
      </div>
      <div>
        <span className="md:hidden block text-xs text-gray-400">Subtotal</span>
        <p className="font-semibold">$13,047.00</p>
      </div>
    </div>

    {/* Actions (Absolute or end-aligned) */}
    <div className="absolute right-0 top-6 md:static flex flex-col gap-2">
      <button className="text-gray-400 hover:text-red-500">×</button>
      <button className="text-gray-400 hover:text-blue-500">✎</button>
    </div>
  </div>
);
export default ProductItem;

import { IconBundler } from '@/assets/icons/IconBundler';

type TCartProductItems = {
  _id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
  removeFromCart: (id: string) => void;
  updataeQuantity: (id: string, type: 'increment' | 'decrement') => void;
};
const ProductItem = ({
  _id,
  image,
  title,
  price,
  quantity,
  total,
  removeFromCart,
  updataeQuantity,
}: TCartProductItems) => (
  <div className="grid grid-cols-12 gap-4 py-6 border-b items-center">
    {/* Product Image & Details */}
    <div className="col-span-12 md:col-span-6 flex gap-4">
      <div className="w-24 h-24 bg-gray-100 shrink-0">
        <img
          src={image}
          alt="Product"
          className="object-contain w-full h-full"
        />
      </div>
      <p className="text-sm">{title}</p>
    </div>

    {/* Price, Qty, Subtotal Group */}
    <div className="col-span-12 md:col-span-6 grid grid-cols-3 items-center text-center">
      <div>
        <span className="md:hidden block text-xs text-gray-400">Price</span>
        <p className="font-semibold">{price}.00</p>
      </div>
      <div className="flex justify-center">
        <input
          onChange={(e) =>
            updataeQuantity(_id, Number(e.target.value) > quantity ? 'increment' : 'decrement')
          }
          type="number"
          defaultValue={quantity}
          className="w-12 border rounded-md p-1 text-center"
        />
      </div>
      <div>
        <span className="md:hidden block text-xs text-gray-400">Subtotal</span>
        <p className="font-semibold">{total}</p>
      </div>
    </div>

    {/* Actions (Absolute or end-aligned) */}
    <div className="absolute right-0 top-6 md:static flex flex-col gap-2 ">
      <button
        onClick={() => removeFromCart(_id)}
        className="text-gray-400 hover:text-red-500 cursor-pointer "
      >
        <IconBundler.Cancle
          size={20}
          className="bg-red-300 p-1 hover:text-white text-black rounded-full"
        />
      </button>
    </div>
  </div>
);
export default ProductItem;

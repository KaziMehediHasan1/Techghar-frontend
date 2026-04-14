// import { BreadcrumbBasic } from '@/components/BreadcrumbBasic';
import Wrapper from '@/components/layout/Wrapper';
import ProductItem from '@/features/cart/components/ProductItem';
import SummaryCard from '@/features/cart/components/SummaryCard';
import { useCartStore } from '@/store/useCartStore';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();
  console.log(cart, 'check cart');
  return (
    <div className="">
      <Wrapper>
        <section className="space-y-4">
          {/* <BreadcrumbBasic /> */}
          <h1 className="text-2xl sm:text-3xl font-semibold mt-2">
            Shopping Cart
          </h1>
        </section>

        <div className="flex flex-col lg:flex-row gap-10 my-5 sm:my-8">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* Desktop Header */}
            <div className="hidden md:grid grid-cols-12 pb-4 border-b font-semibold text-sm">
              <div className="col-span-6">Item</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Qty</div>
              <div className="col-span-2 text-center">Subtotal</div>
            </div>

            {/* List of Products */}
            <div className="space-y-4">
              {cart.map((item) => (
                <ProductItem
                  key={item._id}
                  image={item?.image}
                  title={item.title}
                  price={item.price}
                  quantity={item?.quantity}
                  total={item.price * item.quantity}
                  removeFromCart={removeFromCart}
                  updataeQuantity={updateQuantity}
                  _id={item._id}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <NavLink
                to="/"
                className="px-6 py-2 border border-gray-400 rounded-full text-sm font-medium"
              >
                Continue Shopping
              </NavLink>
              <button
                onClick={() => clearCart()}
                className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium"
              >
                Clear Shopping Cart
              </button>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="w-full lg:w-87.5">
            <SummaryCard />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;

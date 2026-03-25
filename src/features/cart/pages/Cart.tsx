import { BreadcrumbBasic } from "@/components/BreadcrumbBasic";
import Wrapper from "@/components/layout/Wrapper";
import ProductItem from "@/features/cart/components/ProductItem";
import SummaryCard from "@/features/cart/components/SummaryCard";

const Cart = () => {
  return (
    <div className="">
      <Wrapper>
        <section className="space-y-4">
          <BreadcrumbBasic />
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
              <ProductItem />
              <ProductItem />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <button className="px-6 py-2 border border-gray-400 rounded-full text-sm font-medium">
                Continue Shopping
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium">
                Clear Shopping Cart
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium ml-auto">
                Update Shopping Cart
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

export default Cart
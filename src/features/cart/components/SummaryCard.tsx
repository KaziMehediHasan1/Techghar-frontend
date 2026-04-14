import { useAuthStore } from '@/features/auth/auth.store';
import usePost from '@/hooks/usePost';
import { useCartStore } from '@/store/useCartStore';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SummaryCard = () => {
  const navigate = useNavigate();
  const [_, setSearchParams] = useSearchParams();
  const { cart, totalPrice, totalItems } = useCartStore();
  const { user } = useAuthStore();
  console.log('USer', user?._id);
  const { mutateAsync: PaymentMutation } = usePost(
    '/payment/create-payment-intent'
  );
  const { mutateAsync: OrderMutation } = usePost('/order');
  const subtotalValue = totalPrice();
  const shippingValue = subtotalValue > 0 ? 21.0 : 0;
  const taxValue = subtotalValue > 0 ? 1.91 : 0;
  const orderTotalValue = subtotalValue + shippingValue + taxValue;
  const totalAmountInCents = Math.round((subtotalValue + 22.91) * 100);
  console.log(cart, 'CHCHKK', totalItems());

  const handleCheckout = async () => {
    const payload = {
      amount: totalAmountInCents,
      currency: 'usd',
      productID: cart.map((item) => item._id),
    };

    console.log(payload, 'ID');

    const orderData = {
      userId: user?._id,
      productID: cart?.map((item) => item._id),
      quantity: totalItems(),
    };

    const OrderRes = await OrderMutation(orderData);
    const orderId = OrderRes?.data?._id;

    console.log(OrderRes?.data?._id, 'ORDER');

    if (OrderRes.success && OrderRes.statusCode == 201) {
      const response = await PaymentMutation(payload);

      console.log(response.data?.clientSecret, 'Client Data');

      if (response?.data?.clientSecret) {
        // এখন ইউজারকে পেমেন্ট পেজে নিয়ে যান অথবা Stripe Modal ওপেন করুন
        navigate('/payment', {
          state: {
            clientSecret: response?.data?.clientSecret,
            orderId: orderId,
          },
        });
        console.log('Client Secret Received:', response.data?.clientSecret);
      }
    }
  };

  return (
    <section className="bg-gray-50 p-6 rounded-sm h-fit top-5">
      <h2 className="text-xl font-bold mb-4">Summary</h2>

      <div className="space-y-4 text-sm border-b pb-4">
        <details className="cursor-pointer">
          <summary className="font-medium">Estimate Shipping and Tax</summary>
          <p className="py-2 text-gray-500 text-xs">
            Enter your destination to get a shipping estimate.
          </p>
        </details>
        <details className="cursor-pointer">
          <summary className="font-medium">Apply Discount Code</summary>
          <div className="pt-2 flex gap-2">
            <input className="border flex-1 p-2" placeholder="Enter code" />
          </div>
        </details>
      </div>

      <div className="py-4 space-y-2 border-b">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotalValue.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shippingValue}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${taxValue}</span>
        </div>
        <div className="flex justify-between font-bold text-lg pt-2">
          <span>Order Total</span>
          <span>${orderTotalValue.toLocaleString()}</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <button
          onClick={() => handleCheckout()}
          className="w-full bg-blue-600 text-white cursor-pointer py-3 rounded-full font-semibold hover:bg-blue-700"
        >
          Proceed to Checkout
        </button>
        <button
          disabled={true}
          className="w-full bg-amber-400 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
        >
          Check out with
          <span className="italic font-bold text-blue-800 underline">
            PayPal
          </span>
        </button>
        <button className="w-full border border-gray-300 py-3 rounded-full text-gray-500 text-sm">
          Check Out with Multiple Addresses
        </button>
      </div>
    </section>
  );
};

export default SummaryCard;

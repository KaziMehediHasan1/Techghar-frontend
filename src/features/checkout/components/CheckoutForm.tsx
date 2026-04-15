import { useState, type FormEvent } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import useUpdate from '@/hooks/useUpdate';
import usePost from '@/hooks/usePost';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/auth.store';
import { useCartStore } from '@/store/useCartStore';
import type { AxiosError } from 'axios';

export default function CheckoutForm() {
  const { user } = useAuthStore();
  const { clearCart } = useCartStore();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const location = useLocation();
  const orderId = location?.state.orderId;
  const { mutateAsync: OrderStatusUpdateMutation } = useUpdate(`/order`);
  const { mutateAsync: PaymentPost } = usePost('/payment');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements || !orderId) {
      setErrorMsg('Order information is missing. Please try again.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setErrorMsg(submitError?.message || 'Validation failed');
        setLoading(false);
        return;
      }

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
        redirect: 'if_required',
      });

      if (error) {
        setErrorMsg(error.message || 'Payment confirmation failed');
        setLoading(false);
        return;
      }

      console.log('PY INTENT', paymentIntent);

      if (paymentIntent && paymentIntent.status === 'succeeded') {
        const paymentData = {
          orderId: orderId,
          transactionId: paymentIntent.id,
          amount: paymentIntent.amount / 100,
          paymentStatus: 'paid',
          isPaid: true,
          userId: user?._id,
        };

        const payRes = await PaymentPost(paymentData);

        console.log('PYMENT RES CHECK--', payRes);

        if (payRes?.success || payRes?.data) {
          const orderRes = await OrderStatusUpdateMutation({
            id: orderId,
            data: { status: 'confirmed' },
          });

          console.log('ORDER RES CHECK__', orderRes);

          if (orderRes?.success || orderRes?.data) {
            clearCart();
            navigate(
              `/payment-success?orderId=${orderId}&payment_intent=${paymentIntent.id}`,
              { replace: true }
            );
          }
        }
      }
    } catch (backendError) {
      const err = backendError as AxiosError<{ message: string }>;
      console.error('Backend Update Error:', backendError);
      setErrorMsg(
        err.response?.data?.message ||
          err.message ||
          'Payment successful, but database update failed.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-2 sm:p-4">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-black mb-1">Payment Method</h3>
        <p className="text-gray-500 text-sm">
          Complete your transaction securely
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="p-4 border border-gray-100 rounded-xl bg-gray-50/30">
          <PaymentElement />
        </div>

        {errorMsg && (
          <div className="bg-red-50 border-l-4 border-red-500 p-3 mt-4">
            <p className="text-red-700 text-xs font-medium">{errorMsg}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || loading}
          className={`
          w-full mt-6 py-3 rounded cursor-pointer text-white transition-all duration-200
          ${
            loading
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-[#0156FF] hover:bg-blue-700 active:scale-[0.98] shadow-lg shadow-blue-200'
          }
        `}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Processing...</span>
            </div>
          ) : (
            `Pay Now`
          )}
        </button>

        <p className="text-center text-gray-400 text-[11px] mt-4 uppercase tracking-wider font-medium">
          🔒 SSL Secure & Encrypted Payment
        </p>
      </form>
    </div>
  );
}

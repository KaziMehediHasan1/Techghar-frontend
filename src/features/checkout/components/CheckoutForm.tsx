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

        if (payRes?.success || payRes?.data) {
          const orderRes = await OrderStatusUpdateMutation({
            id: orderId,
            data: { status: 'confirmed' },
          });

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
    <form onSubmit={handleSubmit}>
      <PaymentElement />

      {errorMsg && (
        <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '10px' }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        style={{
          width: '100%',
          padding: '12px',
          marginTop: '16px',
          background: loading ? '#a5b4fc' : '#6366f1',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: '600',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
}

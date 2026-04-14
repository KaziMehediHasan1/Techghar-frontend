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

export default function CheckoutForm() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const location = useLocation();
  const orderId = location?.state.orderId;
  const { mutateAsync: OrderStatusUpdateMutation } = useUpdate(
    `/order/${orderId}`
  );
  const { mutateAsync: PaymentPost } = usePost('/payment');

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!stripe || !elements) return; // not loaded yet

  //   setLoading(true);
  //   setErrorMsg('');

  //   // Step 1: validate fields before submitting
  //   const { error: submitError } = await elements.submit();
  //   if (submitError) {
  //     setErrorMsg(submitError?.message || '');
  //     setLoading(false);
  //     return;
  //   }

  //   // Step 2: Confirm Payment
  //   const { error, paymentIntent } = await stripe.confirmPayment({
  //     elements,
  //     confirmParams: {
  //       return_url: `${window.location.origin}/payment-success`,
  //     },
  //     redirect: 'if_required', // এটা গুরুত্বপূর্ণ যাতে আমরা কোড থেকে কন্ট্রোল করতে পারি
  //   });

  //   if (error) {
  //     setErrorMsg(error.message || 'Error occurred');
  //     setLoading(false);
  //   } else if (paymentIntent && paymentIntent.status === 'succeeded') {
  //     try {
  //       // Step 3: পেমেন্ট রেকর্ড সেভ করা (Payment Schema)
  //       const paymentData = {
  //         orderId: orderId,
  //         transactionId: paymentIntent.id,
  //         amount: paymentIntent.amount / 100, // cents to dollars
  //         paymentStatus: 'paid',
  //         isPaid: true,
  //         userId: user?._id,
  //       };
  //       const payRes = await PaymentPost(paymentData);
  //       console.log("Pay Res", payRes)

  //       // Step 4: অর্ডারের স্ট্যাটাস আপডেট করা (Order Schema)
  //       if (payRes) {
  //         const orderRes = await OrderStatusUpdateMutation({
  //           status: 'confirmed',
  //         });
  //         if (orderRes) {
  //           // Step 5: সবকিছু ঠিক থাকলে সাকসেস পেজে পাঠানো
  //           // navigate(
  //           //   `/payment-success?transactionId=${paymentIntent.id}`
  //           // );
  //           console.log('Pay Res', payRes, 'Order Res', orderRes);
  //           window.location.href = `${window.location.origin}/payment-success?orderId=${orderId}&payment_intent=${paymentIntent.id}`;
  //         }
  //       }
  //     } catch (backendError) {
  //       console.error('Backend Update Error:', backendError);
  //       setErrorMsg(
  //         'Payment successful, but failed to update order record. Please contact support.'
  //       );
  //     }
  //   }
  //   setLoading(false);
  // };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements || !orderId) {
      setErrorMsg('Order information is missing. Please try again.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      // 2. Stripe Elements
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

      // 4. Stripe Error
      if (error) {
        setErrorMsg(error.message || 'Payment confirmation failed');
        setLoading(false);
        return;
      }

      // 5. Successfull payment)
      if (paymentIntent && paymentIntent.status === 'succeeded') {
        console.log('Intent', paymentIntent);
        // 6. save payment details in db
        const paymentData = {
          orderId: orderId,
          transactionId: paymentIntent.id,
          amount: paymentIntent.amount / 100,
          paymentStatus: 'paid',
          isPaid: true,
          userId: user?._id,
        };

        const payRes = await PaymentPost(paymentData);
        console.log('Payment Schema', payRes);

        if (payRes) {
          const orderRes = await OrderStatusUpdateMutation({
            status: 'confirmed',
          });

          console.log('Order Schema', orderRes);

          if (orderRes) {
            console.log('Flow Complete: Payment & Order updated.');

            navigate(
              `/payment-success?orderId=${orderId}&payment_intent=${paymentIntent.id}`,
              { replace: true }
            );
          }
        }
      }
    } catch (backendError: any) {
      console.error('Backend Update Error:', backendError);
      setErrorMsg(
        backendError?.response?.data?.message ||
          'Payment successful, but record update failed. Please contact support.'
      );
    } finally {
      // ৯. সবশেষে লোডিং স্টেট বন্ধ করা
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

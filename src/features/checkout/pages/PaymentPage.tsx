import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import { CONFIG } from '@/config/env';
import { useLocation } from 'react-router-dom';
import { stripeAppearance } from '../stripe/appearance';
import Wrapper from '@/components/layout/Wrapper';

const stripePromise = loadStripe(CONFIG.payment_published_key);

const PaymentPage = () => {
  const location = useLocation();
  const clientSecret = location?.state?.clientSecret;

  if (!clientSecret) {
    return <div>Invalid Payment Session</div>;
  }

  const options = {
    clientSecret, // Eta Elements provider-e dorkar hoy
    stripeAppearance,
  };
  return (
    <Wrapper>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  );
};

export default PaymentPage;

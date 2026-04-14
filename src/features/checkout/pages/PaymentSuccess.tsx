import Wrapper from '@/components/layout/Wrapper';
import { useSearchParams, Link } from 'react-router-dom';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const paymentIntent = searchParams.get('payment_intent');

  return (
    <Wrapper>
      <div>
        <h2>Payment Successful! ✓</h2>
        <p>Reference: {paymentIntent}</p>
        <Link to="/">Back to Shop</Link>
      </div>
    </Wrapper>
  );
}

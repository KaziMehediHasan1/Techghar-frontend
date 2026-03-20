import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import type { FormEvent } from "react";

// S2: Actual Form — Stripe Elements use -
const CheckoutForm = () => {
  const stripe = useStripe(); // Stripe instance
  const elements = useElements(); // Elements instance
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    // stripe can validate card info then confirmed payment -
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-success",
      },
    });

    if (error) {
      setMessage(error?.message as string);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ✅ PaymentElement = Stripe এর secure card input UI */}
      {/* Card number, expiry, CVC সব এই একটা component এ */}
      <PaymentElement />

      <button disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>

      {message && <p style={{ color: "red" }}>{message}</p>}
    </form>
  );
};

export default CheckoutForm;

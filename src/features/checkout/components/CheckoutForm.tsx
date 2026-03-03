import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import type { FormEvent } from "react";

// ✅ Step 2: Actual Form — Stripe Elements use করে
const CheckoutForm = () => {
  const stripe = useStripe(); // Stripe instance
  const elements = useElements(); // Elements instance
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return; // Stripe লোড না হলে skip

    setLoading(true);

    // ✅ এখানে Stripe নিজেই card validate করে payment confirm করে
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-success", // payment শেষে যাবে
      },
    });

    // Error হলেই এখানে আসে (success হলে redirect হয়ে যায়)
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

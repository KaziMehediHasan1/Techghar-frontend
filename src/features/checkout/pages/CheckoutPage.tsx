// PaymentPage.jsx
import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/features/checkout/components/CheckoutForm";
import { CONFIG } from "@/config/env";

// Stripe load করো — publishable key দিয়ে (public key, safe)
const stripePromise = CONFIG.payment_published_key;

// ✅ Step 1: Parent Component — clientSecret fetch করে
export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Backend থেকে PaymentIntent তৈরি করে clientSecret নাও
    fetch("http://localhost:4000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 1000, currency: "usd" }), // $10
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  // clientSecret না আসা পর্যন্ত Elements render করবো না
  if (!clientSecret) return <p>Loading payment form...</p>;

  return (
    // ✅ Elements wrapper — এটা দরকার Stripe context এর জন্য
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}

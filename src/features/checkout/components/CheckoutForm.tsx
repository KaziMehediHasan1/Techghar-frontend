import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return; // not loaded yet

    setLoading(true);
    setErrorMsg("");

    // Step 1: validate fields before submitting
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMsg(submitError.message);
      setLoading(false);
      return;
    }

    // Step 2: confirm the payment
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Redirect here after successful payment
        return_url: `${window.location.origin}/payment-success`,
      },
    });

    // If we reach here, payment failed (success redirects away)
    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setErrorMsg(error.message);
      } else {
        setErrorMsg("An unexpected error occurred.");
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />

      {errorMsg && (
        <p style={{ color: "#ef4444", fontSize: "13px", marginTop: "10px" }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "16px",
          background: loading ? "#a5b4fc" : "#6366f1",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "15px",
          fontWeight: "600",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}

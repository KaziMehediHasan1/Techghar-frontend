// // PaymentPage.jsx
// import { useState, useEffect } from "react";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "@/features/checkout/components/CheckoutForm";
// import { CONFIG } from "@/config/env";
// import { appearance } from "@/features/checkout/stripe/appearance";

// // stripe publishble key -
// const stripePromise = CONFIG.payment_published_key;

// // S1: Parent Component — do fetch clientSecret -
// const PaymentPage = () => {
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     // Backend Create Client secrete -
//     fetch("http://localhost:4000/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount: 1000, currency: "usd" }), // $10
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   // clientSecret -
//   if (!clientSecret) return <p>Loading payment form...</p>;

//   return (
//     // Elements wrapper for strip context
//     <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default PaymentPage;

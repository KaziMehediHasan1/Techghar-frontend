// import { useState } from "react";

// const cardIcons = {
//   visa: (
//     <svg viewBox="0 0 48 48" className="w-10 h-7" fill="none">
//       <rect width="48" height="48" rx="6" fill="#1A1F71" />
//       <text
//         x="5"
//         y="32"
//         fontSize="18"
//         fontWeight="bold"
//         fill="white"
//         fontFamily="serif"
//       >
//         VISA
//       </text>
//     </svg>
//   ),
//   mastercard: (
//     <svg viewBox="0 0 48 32" className="w-10 h-7">
//       <circle cx="18" cy="16" r="12" fill="#EB001B" />
//       <circle cx="30" cy="16" r="12" fill="#F79E1B" />
//       <path d="M24 6.8a12 12 0 0 1 0 18.4A12 12 0 0 1 24 6.8z" fill="#FF5F00" />
//     </svg>
//   ),
//   amex: (
//     <svg viewBox="0 0 48 32" className="w-10 h-7">
//       <rect width="48" height="32" rx="4" fill="#2E77BC" />
//       <text
//         x="5"
//         y="22"
//         fontSize="11"
//         fontWeight="bold"
//         fill="white"
//         fontFamily="sans-serif"
//       >
//         AMEX
//       </text>
//     </svg>
//   ),
//   unknown: (
//     <svg viewBox="0 0 48 32" className="w-10 h-7" fill="none">
//       <rect width="48" height="32" rx="4" fill="#334155" />
//       <rect x="4" y="10" width="40" height="5" rx="1" fill="#475569" />
//     </svg>
//   ),
// };

// function detectCardType(number) {
//   const n = number.replace(/\s/g, "");
//   if (/^4/.test(n)) return "visa";
//   if (/^5[1-5]/.test(n)) return "mastercard";
//   if (/^3[47]/.test(n)) return "amex";
//   return "unknown";
// }

// function formatCardNumber(value) {
//   return value
//     .replace(/\D/g, "")
//     .slice(0, 16)
//     .replace(/(.{4})/g, "$1 ")
//     .trim();
// }

// function formatExpiry(value) {
//   const digits = value.replace(/\D/g, "").slice(0, 4);
//   if (digits.length >= 3) return digits.slice(0, 2) + " / " + digits.slice(2);
//   return digits;
// }

// const StripePaymentCard = () => {
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardName, setCardName] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [flipped, setFlipped] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [focused, setFocused] = useState(null);

//   const cardType = detectCardType(cardNumber);

//   const handlePay = async () => {
//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 1800));
//     setLoading(false);
//     setSuccess(true);
//   };

//   const isValid =
//     cardNumber.replace(/\s/g, "").length === 16 &&
//     cardName.trim().length > 2 &&
//     expiry.replace(/\s/g, "").length >= 4 &&
//     cvc.length >= 3;

//   const displayNumber = cardNumber || "•••• •••• •••• ••••";
//   const displayName = cardName || "FULL NAME";
//   const displayExpiry = expiry || "MM / YY";

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-4"
//       style={{
//         background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
//         fontFamily: "'DM Sans', sans-serif",
//       }}
//     >
//       <link
//         href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap"
//         rel="stylesheet"
//       />

//       <div className="w-full max-w-sm">
//         {/* ── Visual Card ── */}
//         <div className="relative mb-8" style={{ perspective: "1000px" }}>
//           <div
//             className="relative w-full rounded-2xl overflow-hidden cursor-pointer select-none"
//             style={{
//               height: "200px",
//               transformStyle: "preserve-3d",
//               transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
//               transition: "transform 0.6s cubic-bezier(0.4,0.2,0.2,1)",
//             }}
//           >
//             {/* Front */}
//             <div
//               className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between"
//               style={{
//                 backfaceVisibility: "hidden",
//                 background:
//                   "linear-gradient(135deg, #1e3a5f 0%, #0d1b2a 60%, #162032 100%)",
//                 boxShadow:
//                   "0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
//               }}
//             >
//               {/* Shimmer overlay */}
//               <div
//                 className="absolute inset-0 rounded-2xl opacity-30"
//                 style={{
//                   background:
//                     "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
//                 }}
//               />
//               <div className="flex justify-between items-start">
//                 <div
//                   className="w-10 h-8 rounded"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #ffd700 0%, #ffa500 100%)",
//                     boxShadow: "0 2px 8px rgba(255,165,0,0.3)",
//                   }}
//                 />
//                 <div>{cardIcons[cardType]}</div>
//               </div>

//               <div>
//                 <p
//                   className="text-xl tracking-widest mb-3"
//                   style={{
//                     fontFamily: "'Space Mono', monospace",
//                     color: "rgba(255,255,255,0.9)",
//                     letterSpacing: "0.2em",
//                     textShadow: "0 1px 3px rgba(0,0,0,0.5)",
//                   }}
//                 >
//                   {displayNumber}
//                 </p>
//                 <div className="flex justify-between items-end">
//                   <div>
//                     <p
//                       className="text-xs mb-1"
//                       style={{
//                         color: "rgba(255,255,255,0.4)",
//                         fontSize: "10px",
//                       }}
//                     >
//                       CARD HOLDER
//                     </p>
//                     <p
//                       className="text-sm font-medium uppercase tracking-wider"
//                       style={{
//                         fontFamily: "'Space Mono', monospace",
//                         color: "rgba(255,255,255,0.85)",
//                         maxWidth: "160px",
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                         whiteSpace: "nowrap",
//                       }}
//                     >
//                       {displayName}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <p
//                       className="text-xs mb-1"
//                       style={{
//                         color: "rgba(255,255,255,0.4)",
//                         fontSize: "10px",
//                       }}
//                     >
//                       EXPIRES
//                     </p>
//                     <p
//                       style={{
//                         fontFamily: "'Space Mono', monospace",
//                         color: "rgba(255,255,255,0.85)",
//                         fontSize: "14px",
//                       }}
//                     >
//                       {displayExpiry}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Back */}
//             <div
//               className="absolute inset-0 rounded-2xl flex flex-col justify-center"
//               style={{
//                 backfaceVisibility: "hidden",
//                 transform: "rotateY(180deg)",
//                 background:
//                   "linear-gradient(135deg, #1e3a5f 0%, #0d1b2a 60%, #162032 100%)",
//                 boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
//               }}
//             >
//               <div
//                 className="w-full h-10 mb-6"
//                 style={{ background: "#0a0a0a" }}
//               />
//               <div className="px-6 flex items-center gap-3">
//                 <div
//                   className="flex-1 h-8 rounded"
//                   style={{
//                     background:
//                       "repeating-linear-gradient(90deg, #e2e8f0 0px, #e2e8f0 6px, #cbd5e1 6px, #cbd5e1 12px)",
//                   }}
//                 />
//                 <div
//                   className="w-12 h-8 rounded flex items-center justify-center"
//                   style={{ background: "rgba(255,255,255,0.9)" }}
//                 >
//                   <span
//                     style={{
//                       fontFamily: "'Space Mono', monospace",
//                       fontSize: "13px",
//                       color: "#1e3a5f",
//                       fontWeight: "700",
//                     }}
//                   >
//                     {cvc || "•••"}
//                   </span>
//                 </div>
//               </div>
//               <p
//                 className="text-center mt-4 text-xs"
//                 style={{ color: "rgba(255,255,255,0.3)" }}
//               >
//                 CVV / CVC
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ── Form ── */}
//         {success ? (
//           <div className="text-center py-8">
//             <div
//               className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
//               style={{
//                 background: "linear-gradient(135deg, #10b981, #059669)",
//               }}
//             >
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="white"
//                 strokeWidth={2.5}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>
//             <p className="text-white text-lg font-semibold mb-1">
//               Payment Successful!
//             </p>
//             <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
//               Your transaction has been processed.
//             </p>
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {/* Card Number */}
//             <div>
//               <label
//                 className="block text-xs font-medium mb-1.5 tracking-wider uppercase"
//                 style={{ color: "rgba(255,255,255,0.45)" }}
//               >
//                 Card Number
//               </label>
//               <input
//                 className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
//                 style={{
//                   background: "rgba(255,255,255,0.06)",
//                   border:
//                     focused === "number"
//                       ? "1px solid rgba(99,179,237,0.7)"
//                       : "1px solid rgba(255,255,255,0.08)",
//                   color: "white",
//                   fontFamily: "'Space Mono', monospace",
//                   letterSpacing: "0.1em",
//                   boxShadow:
//                     focused === "number"
//                       ? "0 0 0 3px rgba(99,179,237,0.15)"
//                       : "none",
//                 }}
//                 placeholder="0000 0000 0000 0000"
//                 value={cardNumber}
//                 onChange={(e) =>
//                   setCardNumber(formatCardNumber(e.target.value))
//                 }
//                 onFocus={() => setFocused("number")}
//                 onBlur={() => setFocused(null)}
//                 maxLength={19}
//               />
//             </div>

//             {/* Name */}
//             <div>
//               <label
//                 className="block text-xs font-medium mb-1.5 tracking-wider uppercase"
//                 style={{ color: "rgba(255,255,255,0.45)" }}
//               >
//                 Cardholder Name
//               </label>
//               <input
//                 className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
//                 style={{
//                   background: "rgba(255,255,255,0.06)",
//                   border:
//                     focused === "name"
//                       ? "1px solid rgba(99,179,237,0.7)"
//                       : "1px solid rgba(255,255,255,0.08)",
//                   color: "white",
//                   boxShadow:
//                     focused === "name"
//                       ? "0 0 0 3px rgba(99,179,237,0.15)"
//                       : "none",
//                 }}
//                 placeholder="John Doe"
//                 value={cardName}
//                 onChange={(e) => setCardName(e.target.value.toUpperCase())}
//                 onFocus={() => setFocused("name")}
//                 onBlur={() => setFocused(null)}
//               />
//             </div>

//             {/* Expiry + CVC */}
//             <div className="grid grid-cols-2 gap-3">
//               <div>
//                 <label
//                   className="block text-xs font-medium mb-1.5 tracking-wider uppercase"
//                   style={{ color: "rgba(255,255,255,0.45)" }}
//                 >
//                   Expiry
//                 </label>
//                 <input
//                   className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
//                   style={{
//                     background: "rgba(255,255,255,0.06)",
//                     border:
//                       focused === "expiry"
//                         ? "1px solid rgba(99,179,237,0.7)"
//                         : "1px solid rgba(255,255,255,0.08)",
//                     color: "white",
//                     fontFamily: "'Space Mono', monospace",
//                     boxShadow:
//                       focused === "expiry"
//                         ? "0 0 0 3px rgba(99,179,237,0.15)"
//                         : "none",
//                   }}
//                   placeholder="MM / YY"
//                   value={expiry}
//                   onChange={(e) => setExpiry(formatExpiry(e.target.value))}
//                   onFocus={() => setFocused("expiry")}
//                   onBlur={() => setFocused(null)}
//                   maxLength={7}
//                 />
//               </div>
//               <div>
//                 <label
//                   className="block text-xs font-medium mb-1.5 tracking-wider uppercase"
//                   style={{ color: "rgba(255,255,255,0.45)" }}
//                 >
//                   CVC
//                 </label>
//                 <input
//                   className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
//                   style={{
//                     background: "rgba(255,255,255,0.06)",
//                     border:
//                       focused === "cvc"
//                         ? "1px solid rgba(99,179,237,0.7)"
//                         : "1px solid rgba(255,255,255,0.08)",
//                     color: "white",
//                     fontFamily: "'Space Mono', monospace",
//                     letterSpacing: "0.2em",
//                     boxShadow:
//                       focused === "cvc"
//                         ? "0 0 0 3px rgba(99,179,237,0.15)"
//                         : "none",
//                   }}
//                   placeholder="•••"
//                   value={cvc}
//                   onChange={(e) =>
//                     setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))
//                   }
//                   onFocus={() => {
//                     setFocused("cvc");
//                     setFlipped(true);
//                   }}
//                   onBlur={() => {
//                     setFocused(null);
//                     setFlipped(false);
//                   }}
//                   maxLength={4}
//                 />
//               </div>
//             </div>

//             {/* Pay Button */}
//             <button
//               onClick={handlePay}
//               disabled={!isValid || loading}
//               className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all mt-2"
//               style={{
//                 background: isValid
//                   ? "linear-gradient(135deg, #3b82f6, #6366f1)"
//                   : "rgba(255,255,255,0.07)",
//                 color: isValid ? "white" : "rgba(255,255,255,0.25)",
//                 border: "none",
//                 cursor: isValid ? "pointer" : "not-allowed",
//                 boxShadow: isValid ? "0 8px 30px rgba(99,102,241,0.4)" : "none",
//                 transform:
//                   isValid && !loading ? "translateY(0)" : "translateY(0)",
//                 transition: "all 0.2s ease",
//               }}
//             >
//               {loading ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <svg
//                     className="animate-spin w-4 h-4"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                   >
//                     <circle
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="rgba(255,255,255,0.3)"
//                       strokeWidth="3"
//                     />
//                     <path
//                       d="M12 2a10 10 0 0 1 10 10"
//                       stroke="white"
//                       strokeWidth="3"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                   Processing...
//                 </span>
//               ) : (
//                 "Pay $10.00"
//               )}
//             </button>

//             {/* Security Badge */}
//             <div className="flex items-center justify-center gap-2 pt-1">
//               <svg
//                 className="w-3.5 h-3.5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="rgba(255,255,255,0.3)"
//                 strokeWidth="2"
//               >
//                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//               </svg>
//               <span
//                 className="text-xs"
//                 style={{ color: "rgba(255,255,255,0.3)" }}
//               >
//                 Secured by Stripe · 256-bit SSL
//               </span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StripePaymentCard;

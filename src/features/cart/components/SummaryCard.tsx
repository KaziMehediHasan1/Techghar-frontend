const SummaryCard = () => (
  <section className="bg-gray-50 p-6 rounded-sm h-fit top-5">
    <h2 className="text-xl font-bold mb-4">Summary</h2>

    <div className="space-y-4 text-sm border-b pb-4">
      <details className="cursor-pointer">
        <summary className="font-medium">Estimate Shipping and Tax</summary>
        <p className="py-2 text-gray-500 text-xs">
          Enter your destination to get a shipping estimate.
        </p>
      </details>
      <details className="cursor-pointer">
        <summary className="font-medium">Apply Discount Code</summary>
        <div className="pt-2 flex gap-2">
          <input className="border flex-1 p-2" placeholder="Enter code" />
        </div>
      </details>
    </div>

    <div className="py-4 space-y-2 border-b">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>$13,047.00</span>
      </div>
      <div className="flex justify-between">
        <span>Shipping</span>
        <span>$21.00</span>
      </div>
      <div className="flex justify-between">
        <span>Tax</span>
        <span>$1.91</span>
      </div>
      <div className="flex justify-between font-bold text-lg pt-2">
        <span>Order Total</span>
        <span>$13,068.00</span>
      </div>
    </div>

    <div className="mt-6 space-y-3">
      <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700">
        Proceed to Checkout
      </button>
      <button className="w-full bg-amber-400 py-3 rounded-full font-semibold flex items-center justify-center gap-2">
        Check out with{" "}
        <span className="italic font-bold text-blue-800 underline">PayPal</span>
      </button>
      <button className="w-full border border-gray-300 py-3 rounded-full text-gray-500 text-sm">
        Check Out with Multiple Addresses
      </button>
    </div>
  </section>
);
export default SummaryCard;

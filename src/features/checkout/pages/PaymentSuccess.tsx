import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowRight, ShoppingBag, Download } from 'lucide-react';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const paymentIntent = searchParams.get('payment_intent');
  const orderId = searchParams.get('orderId');

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Top Header Section */}
        <div className="bg-blue-600 p-8 flex flex-col items-center">
          <div className="bg-white/20 p-3 rounded-full mb-4">
            <CheckCircle className="text-white w-12 h-12" strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-bold text-white">Payment Successful!</h2>
          <p className="text-blue-100 text-sm mt-1">
            Thank you for your purchase
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex justify-between mb-3">
                <span className="text-gray-500 text-sm">Order ID</span>
                <span className="text-black font-semibold text-sm">
                  #{orderId?.slice(-8) || 'N/A'}
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-200">
                <span className="text-gray-500 text-sm">Payment Reference</span>
                <span
                  className="text-black font-medium text-xs truncate max-w-45"
                  title={paymentIntent || ''}
                >
                  {paymentIntent}
                </span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                A confirmation email has been sent to your inbox. You can track
                your order status in your dashboard.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <Link
                to="/dashboard/orders"
                className="w-full flex items-center justify-center gap-2 bg-black text-white py-2.5 rounded hover:bg-gray-800 transition-all active:scale-95"
              >
                View My Orders
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/"
                className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 py-2 rounded hover:bg-gray-50 transition-all active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                Back to Shop
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="bg-gray-50 p-4 border-t border-gray-100 text-center">
          <button className="text-blue-600 text-xs font-medium flex items-center justify-center gap-1 mx-auto hover:underline">
            <Download className="w-3 h-3" />
            Download Invoice (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

import React from 'react';
import { ShieldAlert, ArrowLeft, Home, Lock } from 'lucide-react';

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4 font-sans">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 text-center">
        {/* Animated Icon Section */}
        <div className="relative flex justify-center mb-8">
          <div className="absolute inset-0 bg-red-100 scale-150 blur-2xl opacity-30 rounded-full"></div>
          <div className="relative bg-white p-4 rounded-full shadow-sm border border-red-50">
            <ShieldAlert className="w-16 h-16 text-red-500" strokeWidth={1.5} />
          </div>
        </div>

        {/* Heading & Subtext */}
        <div className="space-y-3 mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            403 - Restricted Access
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Sorry! You don't have the necessary permissions to view this page.
            If you believe this is an error, please contact your system
            administrator.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-semibold"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = '/dashboard')}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200 font-semibold"
          >
            <Home size={18} />
            Dashboard
          </button>
        </div>

        {/* Security Note Footer */}
        <div className="mt-12 pt-8 border-t border-gray-50 flex items-center justify-center gap-2 text-gray-400 text-sm">
          <Lock size={14} />
          <span>Secure Environment</span>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;

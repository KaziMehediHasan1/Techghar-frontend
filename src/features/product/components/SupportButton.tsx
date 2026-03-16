const SupportButton = ({ label }) => (
  <button className="flex items-center justify-between bg-white border border-gray-200 px-6 py-4 rounded-full shadow-sm hover:shadow-md hover:border-blue-400 transition-all group">
    <span className="text-sm font-semibold text-gray-800">{label}</span>
    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
      →
    </span>
  </button>
);
export default SupportButton;



const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
          Good morning, Mehedi 👋
        </h2>
        <p className="text-gray-500 text-sm">
          Here's what's happening with your account today.
        </p>
      </div>
      <div className="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-lg border">
        Wed, Apr 15, 2026
      </div>
    </div>
  );
};

export default Header;

import { AlertTriangle } from 'lucide-react';


const SidebarInfo = () => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-100">
        <h4 className="font-bold text-lg mb-2">Pro Tip</h4>
        <p className="text-blue-100 text-sm leading-relaxed">
          Enable Two-Factor Authentication (2FA) for enhanced account security.
        </p>
        <button className="mt-4 w-full py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition-colors border border-white/20">
          Configure 2FA
        </button>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
        <div className="flex items-center gap-2 text-red-600 mb-3">
          <AlertTriangle size={18} />
          <h4 className="font-bold">Danger Zone</h4>
        </div>
        <p className="text-red-400 text-xs mb-4 leading-relaxed">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
        <button className="w-full py-2.5 bg-white border border-red-200 text-red-600 rounded-xl text-sm font-bold hover:bg-red-600 hover:text-white transition-all">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default SidebarInfo;

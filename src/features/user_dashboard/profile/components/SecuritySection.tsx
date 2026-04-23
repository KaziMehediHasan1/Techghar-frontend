import { motion } from 'framer-motion'; 
import { Eye, EyeOff, ShieldCheck } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import CustomInput from './CustomInput';
import SaveButton from './SaveButton';

interface PasswordState {
  current: string;
  newPass: string; 
  confirm: string;
}

interface ShowPassState {
  current: boolean;
  new: boolean;
  confirm: boolean;
}

interface SecuritySectionProps {
  setPasswords: Dispatch<SetStateAction<PasswordState>>;
  showPass: ShowPassState; 
  passwords: PasswordState;
  setShowPass: Dispatch<SetStateAction<ShowPassState>>;
  getStrength: (password: string) => { width: string; color: string; label: string }; 
  handleSave: (type: string) => void;
  status: 'idle' | 'loading' | 'success' | 'error'; 
}

const SecuritySection = ({
  setPasswords,
  showPass,
  passwords,
  setShowPass,
  getStrength,
  handleSave,
  status,
}: SecuritySectionProps) => {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-gray-50 flex items-center gap-3">
        <ShieldCheck className="text-emerald-600" size={18} />
        <h3 className="font-bold text-gray-900">Security & Password</h3>
      </div>
      <div className="p-6 space-y-5">
        
        {/* Current Password */}
        <div className="relative">
          <CustomInput
            label="Current Password"
            type={showPass.current ? 'text' : 'password'}
            value={passwords.current}
            onChange={(v) => setPasswords({ ...passwords, current: v })}
          />
          <button
            type="button"
            onClick={() => setShowPass({ ...showPass, current: !showPass.current })}
            className="absolute right-4 top-9 text-gray-400 hover:text-gray-600"
          >
            {showPass.current ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* New Password */}
          <div className="relative">
            <CustomInput
              label="New Password"
              type={showPass.new ? 'text' : 'password'}
              value={passwords.newPass}
              onChange={(v) => setPasswords({ ...passwords, newPass: v })}
            />
            <button
              type="button"
              onClick={() => setShowPass({ ...showPass, new: !showPass.new })}
              className="absolute right-4 top-9 text-gray-400 hover:text-gray-600"
            >
              {showPass.new ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
            
            {/* Strength Bar */}
            {passwords.newPass && (
              <div className="mt-2 px-1">
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: getStrength(passwords.newPass).width }}
                    className={`h-full ${getStrength(passwords.newPass).color}`}
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase block">
                  {getStrength(passwords.newPass).label}
                </span>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <CustomInput
              label="Confirm Password"
              type={showPass.confirm ? 'text' : 'password'}
              value={passwords.confirm}
              onChange={(v) => setPasswords({ ...passwords, confirm: v })}
            />
            <button
              type="button"
              onClick={() => setShowPass({ ...showPass, confirm: !showPass.confirm })}
              className="absolute right-4 top-9 text-gray-400 hover:text-gray-600"
            >
              {showPass.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <SaveButton
          status={status}
          onClick={() => handleSave('password')}
          label="Update Password"
        />
      </div>
    </section>
  );
};

export default SecuritySection;
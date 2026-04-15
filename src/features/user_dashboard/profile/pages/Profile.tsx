import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Calendar,
  Eye,
  EyeOff,
  CheckCircle,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';

const AVATAR_COLORS = [
  'bg-blue-600',
  'bg-emerald-600',
  'bg-orange-700',
  'bg-amber-600',
  'bg-lime-700',
];

const Profile=()=> {
  const [info, setInfo] = useState({
    firstName: 'Mehedi',
    lastName: 'Hasan',
    email: 'mehedi@example.com',
    phone: '+880 1711 000000',
    dob: '1999-01-01',
    gender: 'Male',
  });

  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirm: '',
  });
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'saved'>('idle');
  const [showPass, setShowPass] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const initials =
    `${info.firstName[0] || ''}${info.lastName[0] || ''}`.toUpperCase();

  const handleSave = async (type: 'info' | 'password') => {
    setStatus('loading');
    // এপিআই সিমুলেশন
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('saved');
    setTimeout(() => setStatus('idle'), 2500);
  };

  const getStrength = (pass: string) => {
    if (!pass) return { width: '0%', color: 'bg-gray-200', label: '' };
    if (pass.length < 6)
      return { width: '30%', color: 'bg-red-500', label: 'Weak' };
    if (pass.length < 10)
      return { width: '60%', color: 'bg-amber-500', label: 'Medium' };
    return { width: '100%', color: 'bg-emerald-500', label: 'Strong' };
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-5">
          <div
            className={`w-20 h-20 rounded-full ${AVATAR_COLORS[avatarIndex]} flex items-center justify-center text-2xl font-bold text-white shadow-inner ring-4 ring-white`}
          >
            {initials}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 leading-tight">
              {info.firstName} {info.lastName}
            </h2>
            <p className="text-sm text-gray-500">{info.email}</p>
            <div className="flex gap-2 mt-3">
              {AVATAR_COLORS.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setAvatarIndex(idx)}
                  className={`w-6 h-6 rounded-full ${color} border-2 transition-transform hover:scale-110 ${avatarIndex === idx ? 'border-black scale-110' : 'border-transparent'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-bold self-start md:self-center">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          ACTIVE ACCOUNT
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Forms */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-50 flex items-center gap-3">
              <User className="text-blue-600" size={18} />
              <h3 className="font-bold text-gray-900">Personal Information</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <CustomInput
                  label="First Name"
                  value={info.firstName}
                  onChange={(v) => setInfo({ ...info, firstName: v })}
                />
                <CustomInput
                  label="Last Name"
                  value={info.lastName}
                  onChange={(v) => setInfo({ ...info, lastName: v })}
                />
              </div>
              <CustomInput
                label="Email Address"
                icon={<Mail size={16} />}
                value={info.email}
                onChange={(v) => setInfo({ ...info, email: v })}
              />
              <div className="grid grid-cols-2 gap-4">
                <CustomInput
                  label="Phone Number"
                  icon={<Phone size={16} />}
                  value={info.phone}
                  onChange={(v) => setInfo({ ...info, phone: v })}
                />
                <CustomInput
                  label="Date of Birth"
                  type="date"
                  icon={<Calendar size={16} />}
                  value={info.dob}
                  onChange={(v) => setInfo({ ...info, dob: v })}
                />
              </div>

              <div className="pt-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                  Gender
                </label>
                <div className="flex gap-2">
                  {['Male', 'Female', 'Other'].map((g) => (
                    <button
                      key={g}
                      onClick={() => setInfo({ ...info, gender: g })}
                      className={`flex-1 py-2 text-sm font-semibold rounded-xl border transition-all ${info.gender === g ? 'bg-blue-50 border-blue-200 text-blue-600 shadow-sm' : 'bg-gray-50 border-gray-100 text-gray-500 hover:bg-gray-100'}`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <SaveButton
                  status={status}
                  onClick={() => handleSave('info')}
                />
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-50 flex items-center gap-3">
              <ShieldCheck className="text-emerald-600" size={18} />
              <h3 className="font-bold text-gray-900">Security & Password</h3>
            </div>
            <div className="p-6 space-y-5">
              <div className="relative">
                <CustomInput
                  label="Current Password"
                  type={showPass.current ? 'text' : 'password'}
                  value={passwords.current}
                  onChange={(v) => setPasswords({ ...passwords, current: v })}
                />
                <button
                  onClick={() =>
                    setShowPass({ ...showPass, current: !showPass.current })
                  }
                  className="absolute right-4 top-9 text-gray-400 hover:text-gray-600"
                >
                  {showPass.current ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <CustomInput
                    label="New Password"
                    type={showPass.new ? 'text' : 'password'}
                    value={passwords.newPass}
                    onChange={(v) => setPasswords({ ...passwords, newPass: v })}
                  />
                  <button
                    onClick={() =>
                      setShowPass({ ...showPass, new: !showPass.new })
                    }
                    className="absolute right-4 top-9 text-gray-400 hover:text-gray-600"
                  >
                    {showPass.new ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                  {/* Strength Bar */}
                  {passwords.newPass && (
                    <div className="mt-2 px-1">
                      <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          animate={{
                            width: getStrength(passwords.newPass).width,
                          }}
                          className={`h-full ${getStrength(passwords.newPass).color}`}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 mt-1 uppercase">
                        {getStrength(passwords.newPass).label}
                      </span>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <CustomInput
                    label="Confirm Password"
                    type={showPass.confirm ? 'text' : 'password'}
                    value={passwords.confirm}
                    onChange={(v) => setPasswords({ ...passwords, confirm: v })}
                  />
                  <button
                    onClick={() =>
                      setShowPass({ ...showPass, confirm: !showPass.confirm })
                    }
                    className="absolute right-4 top-9 text-gray-400 hover:text-gray-600"
                  >
                    {showPass.confirm ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
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
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-100">
            <h4 className="font-bold text-lg mb-2">Pro Tip</h4>
            <p className="text-blue-100 text-sm leading-relaxed">
              Enable Two-Factor Authentication (2FA) for enhanced account
              security.
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
      </div>
    </div>
  );
}

// --- Reusable Components ---

function CustomInput({
  label,
  value,
  onChange,
  type = 'text',
  icon,
  placeholder,
}: any) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider ml-1">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full ${icon ? 'pl-11' : 'pl-4'} pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-gray-700`}
        />
      </div>
    </div>
  );
}

function SaveButton({ status, onClick, label = 'Save Changes' }: any) {
  return (
    <button
      onClick={onClick}
      disabled={status === 'loading'}
      className={`min-w-[140px] px-6 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
        status === 'saved'
          ? 'bg-emerald-600 text-white'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      } disabled:opacity-70 shadow-lg shadow-blue-100 disabled:shadow-none`}
    >
      {status === 'loading' ? (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : status === 'saved' ? (
        <>
          {' '}
          <CheckCircle size={16} /> Saved!{' '}
        </>
      ) : (
        label
      )}
    </button>
  );
}

export default Profile;

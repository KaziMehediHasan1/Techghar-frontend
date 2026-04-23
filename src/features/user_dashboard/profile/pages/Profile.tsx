import { useState, useEffect, type ChangeEvent } from 'react';
import { User, Mail, Phone, Calendar, Pencil, Camera } from 'lucide-react';
import CustomInput from '../components/CustomInput';
import SaveButton from '../components/SaveButton';
import SidebarInfo from '../components/SidebarInfo';
import SecuritySection from '../components/SecuritySection';
import { useUploadThing } from '@/utils/uploadthing';

const AVATAR_COLORS = [
  'bg-blue-600',
  'bg-emerald-600',
  'bg-orange-700',
  'bg-amber-600',
  'bg-lime-700',
];

const Profile = () => {
  const { startUpload } = useUploadThing('imageUploader');
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
  });

  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirm: '',
  });

  const [avatarIndex, setAvatarIndex] = useState(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'saved' | 'error'>(
    'idle'
  );
  const [showPass, setShowPass] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [isUploading, setIsUploading] = useState(false);

  // ২. API থেকে ডেটা ফেচ করা (Mount হওয়ার সময়)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // আপনার অরিজিনাল এপিআই এন্ডপয়েন্ট এখানে বসান
        const response = await axios.get('/api/user/profile');
        setInfo(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
    fetchUserData();
  }, []);

  const handleSave = async (type: 'info' | 'password') => {
    setStatus('loading');
    try {
      if (type === 'info') {
        await axios.put('/api/user/update-profile', info);
      } else {
        // পাসওয়ার্ড ভ্যালিডেশন
        if (passwords.newPass !== passwords.confirm) {
          alert('Passwords do not match!');
          setStatus('idle');
          return;
        }
        await axios.put('/api/user/change-password', {
          currentPassword: passwords.current,
          newPassword: passwords.newPass,
        });
      }

      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2500);
    } catch (error) {
      console.error('Save failed', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2500);
    }
  };

  const getStrength = (pass: string) => {
    if (!pass) return { width: '0%', color: 'bg-gray-200', label: '' };
    if (pass.length < 6)
      return { width: '30%', color: 'bg-red-500', label: 'Weak' };
    if (pass.length < 10)
      return { width: '60%', color: 'bg-amber-500', label: 'Medium' };
    return { width: '100%', color: 'bg-emerald-500', label: 'Strong' };
  };

  const [preview, setPreview] = useState<string>('');

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Shudhu prothom file-ti nibe
    if (!file) return;

    // 1. Local Preview toiri (Instant feedback)
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl); // State-e shudhu ei ekta URL thakbe
    setIsUploading(true);

    try {
      const uploaded = await startUpload([file]); // API array expect korle [file] pathabe

      if (uploaded && uploaded.length > 0) {
        const serverUrl = uploaded[0].ufsUrl;

        // 2. Server URL diye preview update kora
        setPreview(serverUrl);
        console.log(serverUrl, 'CJECK UP');

        // 3. Purano Blob URL clear kora memory bachaner jonno
        URL.revokeObjectURL(localUrl);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      setPreview(''); // Fail korle preview muche fela
    } finally {
      setIsUploading(false);
    }
  };


  return (
    <div className="space-y-4">
      {/* Header - একই থাকবে */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="relative group w-24 h-24">
            {/* ইমেজ প্রিভিউ অথবা ডিফল্ট অবতার */}
            <div
              className={`w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md flex items-center justify-center text-white text-2xl font-bold ${
                !preview ? AVATAR_COLORS[avatarIndex] : 'bg-gray-100'
              }`}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <p>init</p>
              )}
            </div>

            {/* কাস্টম আপলোড বাটন (Overlay) */}
            <label
              htmlFor="avatar-upload"
              className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              <Camera className="text-white" size={24} />
            </label>

            {/* ছোট এডিট আইকন (নিচের দিকে) */}
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-0 right-0 bg-blue-600 p-1.5 rounded-full border-2 border-white text-white cursor-pointer hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Pencil size={12} />
            </label>

            {/* আসল ইনপুট ফিল্ডটি লুকিয়ে রাখা হয়েছে */}
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 leading-tight">
              {info.firstName} {info.lastName} name
            </h2>
            <p className="text-sm text-gray-500">{info.email}email</p>
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
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />{' '}
          ACTIVE ACCOUNT
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
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

              {/* Gender Selection */}
              <div className="pt-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                  Gender
                </label>
                <div className="flex gap-2">
                  {['Male', 'Female', 'Other'].map((g) => (
                    <button
                      key={g}
                      onClick={(e) => {
                        e.preventDefault();
                        setInfo({ ...info, gender: g });
                      }}
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
          </div>

          {/* Security Section */}
          <SecuritySection
            getStrength={getStrength}
            handleSave={() => handleSave('password')}
            passwords={passwords}
            setPasswords={setPasswords}
            setShowPass={setShowPass}
            showPass={showPass}
            status={'success'}
          />
        </div>
        <SidebarInfo />
      </div>
    </div>
  );
};

export default Profile;

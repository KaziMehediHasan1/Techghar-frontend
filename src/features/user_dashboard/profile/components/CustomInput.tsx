import type { ReactNode } from 'react';

const CustomInput = ({
  label,
  value,
  onChange,
  type = 'text',
  icon,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (e: string) => void;
  type?: string;
  icon?: ReactNode;
  placeholder?: string;
}) => {
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
};

export default CustomInput;

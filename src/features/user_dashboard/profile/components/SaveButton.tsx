import { CheckCircle } from 'lucide-react';

const SaveButton = ({
  status,
  onClick,
  label = 'Save Changes',
}: {
  status: string;
  onClick: () => void;
  label?: string;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={status === 'loading'}
      className={`min-w-35 px-6 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
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
};

export default SaveButton;

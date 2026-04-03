import { AlertCircle, RefreshCcw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState = ({
  message = 'Failed to fetch data. Please try again.',
  onRetry,
}: ErrorStateProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-100 p-8 text-center animate-in fade-in zoom-in duration-300">
      <div className="bg-red-50 p-4 rounded-full mb-4">
        <AlertCircle className="w-12 h-12 text-red-500" />
      </div>

      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        Something went wrong!
      </h3>

      <p className="text-slate-500 max-w-xs mb-8">{message}</p>

      <div className="flex flex-wrap gap-4 justify-center">
        {onRetry && (
          <Button
            onClick={onRetry}
            variant="default"
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800"
          >
            <RefreshCcw className="w-4 h-4" />
            Try Again
          </Button>
        )}

        <Button
          onClick={() => navigate('/')}
          variant="outline"
          className="flex items-center gap-2 border-slate-200"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

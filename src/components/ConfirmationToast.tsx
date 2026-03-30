import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';

interface ConfirmDeleteProps {
  message: string;
  onConfirm: () => void;
}

export const showDeleteConfirmation = ({
  message,
  onConfirm,
}: ConfirmDeleteProps) => {
  const toastId = toast.info(
    <div className="flex flex-col gap-3 p-1">
      <p className="font-medium text-sm">{message}</p>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="destructive"
          className="h-8 px-3"
          onClick={async () => {
            await onConfirm();
            toast.dismiss(toastId);
          }}
        >
          Yes, Delete
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-8 px-3"
          onClick={() => toast.dismiss(toastId)}
        >
          Cancel
        </Button>
      </div>
    </div>,
    {
      position: 'top-center',
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      closeButton: false,
    }
  );
};

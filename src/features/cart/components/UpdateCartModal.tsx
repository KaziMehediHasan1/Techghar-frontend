import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import type { ICartItem } from '@/store';

interface UpdateCartModalProps {
  item: ICartItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const UpdateCartModal = ({ item, isOpen, onClose }: UpdateCartModalProps) => {
  const { updateQuantity, removeFromCart } = useCartStore();
//   const [localQuantity, setLocalQuantity] = useState(item?.quantity || 1);

  if (!item) return null;


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Update Cart Item</DialogTitle>
        </DialogHeader>

        <div className="flex items-center gap-4 py-4">
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-20 h-20 object-contain border rounded"
          />
          <div className="flex-1">
            <h4 className="font-bold text-sm line-clamp-1">{item.title}</h4>
            <p className="text-blue-600 font-bold">${item.price}</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-y py-4">
          <span className="text-sm font-medium">Quantity</span>
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => updateQuantity(item._id, 'decrement')}
              className="p-2 hover:bg-white rounded-md transition-all"
            >
              <Minus size={16} />
            </button>
            <span className="w-10 text-center font-bold">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item._id, 'increment')}
              className="p-2 hover:bg-white rounded-md transition-all"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            variant="destructive"
            onClick={() => {
              removeFromCart(item._id);
              onClose();
            }}
          >
            Remove
          </Button>
          <Button onClick={onClose} className="bg-[#0156FF]">
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCartModal;

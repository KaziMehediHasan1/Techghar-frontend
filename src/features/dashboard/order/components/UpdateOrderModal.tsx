import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { IOrderUpdateData } from '@/features/dashboard/order/order.types';
import { useForm, Controller } from 'react-hook-form';

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: IOrderUpdateData;
  onUpdate: (id: string, data: IOrderUpdateData) => Promise<void>;
  isLoading: boolean;
}

const UpdateOrderModal = ({
  isOpen,
  onClose,
  orderData,
  onUpdate,
  isLoading,
}: UpdateModalProps) => {
  const { register, handleSubmit, reset, control } =
    useForm<IOrderUpdateData>();

  useEffect(() => {
    if (orderData) {
      reset({
        quantity: orderData.quantity,
        status: orderData.status,
      });
    }
  }, [orderData, reset]);

  const onSubmit = async (data: IOrderUpdateData) => {
    await onUpdate(orderData._id || '', data);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Update Order Details</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Quantity */}
            <div className="space-y-2">
              <Label>Quantity</Label>
              <Input
                type="number"
                {...register('quantity', { valueAsNumber: true })}
                placeholder="0"
              />
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label>Status</Label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isLoading ? 'Updating...' : 'Update Order'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateOrderModal;

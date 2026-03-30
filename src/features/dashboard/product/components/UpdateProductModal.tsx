import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  productData: unknown; 
  onUpdate: (id: string, data: []) => Promise<void>;
  isLoading: boolean;
}

export const UpdateProductModal = ({
  isOpen,
  onClose,
  productData,
  onUpdate,
  isLoading,
}: UpdateModalProps) => {
  const { register, handleSubmit, reset } = useForm();

  // যখনই মোডাল ওপেন হবে বা productData চেঞ্জ হবে, ফর্ম রিসেট হবে
  useEffect(() => {
    if (productData) {
      reset(productData);
    }
  }, [productData, reset]);

  const onSubmit = async (data: any) => {
    await onUpdate(productData._id, data);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Update Product Information</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Product Name */}
            <div className="space-y-2">
              <Label>Product Name (Title)</Label>
              <Input {...register('title')} placeholder="Items Name" />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label>Product Categories</Label>
              <Input {...register('category')} placeholder="Category" />
            </div>

            {/* Brand */}
            <div className="space-y-2">
              <Label>Brand</Label>
              <Input {...register('brand')} placeholder="Brand Name" />
            </div>

            {/* Price */}
            <div className="space-y-2">
              <Label>Price ($)</Label>
              <Input type="number" {...register('price')} placeholder="0" />
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <Label>Quantity (Stock)</Label>
              <Input type="number" {...register('quantity')} placeholder="0" />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea
              {...register('description')}
              placeholder="Short description about the product"
              rows={4}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Updating...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

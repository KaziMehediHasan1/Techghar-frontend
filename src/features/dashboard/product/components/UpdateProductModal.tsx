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
import type { IProductUpdateData } from '@/features/dashboard/product/product.types';

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  productData: IProductUpdateData;
  onUpdate: (id: string, data: Partial<IProductUpdateData>) => Promise<void>;
  isLoading: boolean;
}

export const UpdateProductModal = ({
  isOpen,
  onClose,
  productData,
  onUpdate,
  isLoading,
}: UpdateModalProps) => {
  const { register, handleSubmit, reset } = useForm<IProductUpdateData>();

  useEffect(() => {
    if (productData) {
      reset(productData);
    }
  }, [productData, reset]);

  const onSubmit = async (data: IProductUpdateData) => {

    const { id, ...updatePayload } = data;

    const finalPrice =
      updatePayload.price! -
      (updatePayload.price! * (updatePayload.discount || 0)) / 100;

    const finalData = {
      ...updatePayload,
      finalPrice: Number(finalPrice.toFixed(2)),
    };

    await onUpdate(id, finalData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Update Product Information
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Name */}
            <div className="space-y-1.5">
              <Label htmlFor="title">Product Name (Title)</Label>
              <Input
                id="title"
                {...register('title')}
                placeholder="Items Name"
              />
            </div>

            {/* Brand */}
            <div className="space-y-1.5">
              <Label htmlFor="brand">Brand</Label>
              <Input
                id="brand"
                {...register('brand')}
                placeholder="Brand Name"
              />
            </div>

            {/* SKU & Model */}
            <div className="space-y-1.5">
              <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
              <Input id="sku" {...register('sku')} placeholder="e.g. SKU-123" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="modelName">Model Name</Label>
              <Input
                id="modelName"
                {...register('modelName')}
                placeholder="e.g. Trident 3"
              />
            </div>

            {/* Price & Discount */}
            <div className="space-y-1.5">
              <Label htmlFor="price">Base Price ($)</Label>
              <Input
                id="price"
                type="number"
                {...register('price', { valueAsNumber: true })}
                placeholder="0.00"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="discount">Discount (%)</Label>
              <Input
                id="discount"
                type="number"
                {...register('discount', { valueAsNumber: true })}
                placeholder="0"
              />
            </div>

            {/* Quantity & Warranty */}
            <div className="space-y-1.5">
              <Label htmlFor="quantity">Quantity in Stock</Label>
              <Input
                id="quantity"
                type="number"
                {...register('quantity', { valueAsNumber: true })}
                placeholder="0"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="warranty">Warranty Info</Label>
              <Input
                id="warranty"
                {...register('warranty')}
                placeholder="e.g. 1 Year Official"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <Label htmlFor="description">Product Description</Label>
            <Textarea
              id="description"
              {...register('description')}
              placeholder="Detailed description about the product..."
              className="min-h-25"
            />
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
            >
              {isLoading ? 'Updating...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

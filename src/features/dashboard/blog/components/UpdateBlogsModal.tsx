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
import type { IBlogUpdateData } from '@/features/dashboard/blog/blog.types';



interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  blogData: IBlogUpdateData;
  onUpdate: (id: string, data: Partial<IBlogUpdateData>) => Promise<void>;
  isLoading: boolean;
}

export const UpdateBlogsModal = ({
  isOpen,
  onClose,
  blogData,
  onUpdate,
  isLoading,
}: UpdateModalProps) => {
  const { register, handleSubmit, reset } = useForm<IBlogUpdateData>();

  useEffect(() => {
    if (blogData) {
      reset(blogData);
    }
  }, [blogData, reset]);

  const onSubmit = async (data: IBlogUpdateData) => {
    await onUpdate(blogData._id, data);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Update Blog Post</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Blog Title */}
            <div className="space-y-2 col-span-2">
              <Label>Blog Title</Label>
              <Input {...register('title')} placeholder="Enter blog title" />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label>Category</Label>
              <Input
                {...register('category')}
                placeholder="e.g. Technology, AI, Review"
              />
            </div>

            {/* Image Alt Text */}
            <div className="space-y-2">
              <Label>Image Alt Text</Label>
              <Input
                {...register('alt')}
                placeholder="Description for accessibility"
              />
            </div>
          </div>

          {/* Description / Content */}
          <div className="space-y-2">
            <Label>Blog Description</Label>
            <Textarea
              {...register('description')}
              placeholder="Write blog content or summary..."
              rows={8}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-white"
            >
              {isLoading ? 'Updating...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

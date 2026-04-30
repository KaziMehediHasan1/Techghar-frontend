import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImagePlus, X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUploadThing } from '@/utils/uploadthing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import type { IBlogFormData } from '@/features/dashboard/blog/blog.types';

const blogCategories = [
  'Technology',
  'AI & Robotics',
  'Product Review',
  'Gadgets',
  'Tips & Tricks',
];

const AddBlog = () => {
  const [images, setImages] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const { startUpload } = useUploadThing('imageUploader');
  const { mutateAsync, isPending } = usePost('/blog');

  const { register, handleSubmit, setValue, watch, reset } =
    useForm<IBlogFormData>({
      defaultValues: {
        title: '',
        category: '',
        alt: '',
        description: '',
        image: [],
      },
    });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prev) => [...prev, ...newImages]);

      setIsUploading(true);
      try {
        const uploaded = await startUpload(Array.from(files));
        if (uploaded) {
          const urls = uploaded.map((f) => f.ufsUrl);
          setImageUrls((prev) => [...prev, ...urls]);
        }
      } finally {
        setIsUploading(false);
      }
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: IBlogFormData) => {
    if (isUploading) return toast.error('Images are still uploading...');
    if (imageUrls.length === 0) return toast.error('Blog image is required!');

    const finalData = {
      ...data,
      image: imageUrls,
    };

    mutateAsync(finalData, {
      onSuccess: () => {
        toast.success('Blog posted successfully!');
        reset();
        setImageUrls([]);
        setImages([]);
      },
    });
  };

  return (
    <div className="bg-slate-50 text-slate-900 space-y-4 min-h-screen ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Create New Blog</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Preview Section */}
        <div className="w-full lg:w-1/3 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border sticky top-4">
            <h3 className="text-sm font-semibold text-slate-500 mb-3">
              Live Preview
            </h3>
            <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-slate-200">
              {images.length > 0 ? (
                <img
                  src={images[0]}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImagePlus className="w-12 h-12 text-slate-300" />
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase rounded">
                {watch('category') || 'Category'}
              </span>
              <h3 className="font-bold text-lg leading-tight">
                {watch('title') || 'Your Blog Title Here'}
              </h3>
              <p className="text-sm text-slate-500 line-clamp-3">
                {watch('description') || 'Blog description preview...'}
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                disabled={isPending || isUploading}
                onClick={handleSubmit(onSubmit)}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                {isPending ? 'Publishing...' : 'Publish Blog'}
              </Button>
              <Button
                variant="outline"
                onClick={() => reset()}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Image Upload Area */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold mb-4 text-slate-700">
              Blog Cover Photo
            </h3>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-wrap gap-4 items-center justify-center">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-32 h-32 rounded-lg overflow-hidden border group"
                >
                  <img src={img} className="w-full h-full object-cover" />
                  <button
                    onClick={() => removeImage(idx)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
              <label className="w-32 h-32 flex flex-col items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:bg-slate-50 transition border-slate-300">
                <Plus className="text-slate-400" />
                <span className="text-[10px] text-slate-400 mt-1">
                  Upload Image
                </span>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>

          {/* Information Form */}
          <form className="bg-white p-6 rounded-xl shadow-sm border space-y-6">
            <h3 className="font-semibold text-lg border-b pb-2">
              Content Details
            </h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Blog Title
                </label>
                <Input
                  {...register('title')}
                  placeholder="Enter a catchy title"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Category
                  </label>
                  <Select
                    onValueChange={(val: any) => setValue('category', val)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {blogCategories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Image Alt Text (SEO)
                  </label>
                  <Input
                    {...register('alt')}
                    placeholder="Describe the image"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Description / Content
                </label>
                <Textarea
                  {...register('description')}
                  placeholder="Start writing your blog content here..."
                  className="h-64 resize-none"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;

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
import type { IProductFormData } from '@/features/dashboard/product/product.types';
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';

// color options and categories can be fetched from the server in real application
const colorOptions = ['Black', 'White', 'Silver', 'Red', 'Blue', 'Gold'];
const categories = [
  'Headphone',
  'PC Componet',
  'Light',
  'Monitor',
  'Phone',
  'PC',
];

const AddProduct = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const { startUpload } = useUploadThing('imageUploader');
  const { mutate, error, isPending, isSuccess, data } = usePost('/product');
  console.log(error, isPending, isSuccess, data, 'post response -----');
  const { register, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      title: '',
      category: '',
      brand: '',
      price: 0,
      discount: 0,
      quantity: 0,
      description: '',
    },
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prev) => [...prev, ...newImages]);
    }
    setIsUploading(true);

    try {
      const uploaded = await startUpload(files ? Array.from(files) : []);
      if (uploaded) {
        const urls = uploaded.map((f) => f.ufsUrl);
        console.log(urls, 'urls ashol ----------');
        setImageUrls((prev) => [...prev, ...urls]);
      }
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: IProductFormData) => {
    // const imagesURL = await;
    if (isUploading) {
      toast.error('Images are still uploading...');
      return;
    }
    if (imageUrls.length === 0)
      return toast.error('At least one image is required!');
    const finalData = {
      ...data,
      colors: selectedColor,
      images: imageUrls,
      finalPrice: data.price - data.price * (data.discount / 100),
      stock: true,
    };
    console.log('Submitting to DB:', finalData);
    mutate(finalData, {
      onSuccess: () => {
        reset();
        setImageUrls([]);
        setImages([]);
      },
    });
  };

  return (
    <div className="bg-slate-50 text-slate-900 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Add New Product</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* preview section */}
        <div className="w-full lg:w-1/3 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border">
            <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-slate-200">
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
              <h3 className="font-bold text-lg">
                {/* // eslint-disable-next-line react-hooks/incompatible-library */}
                {watch('title') || 'Product Title'}
              </h3>
              <div className="flex items-center gap-x-5">
                <p className="text-brand-primary font-bold text-xl">
                  ${watch('price') || 0}{' '}
                  <span className="text-sm text-slate-400 line-through ml-2">
                    ${Number(watch('price')) + 20}
                  </span>
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-100 rounded text-xs font-medium">
                    {watch('brand') || 'Brand Name'}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-slate-100 rounded text-xs font-medium">
                    {watch('category') || 'Category Name'}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className=" py-1 text-xs font-medium">
                  {watch('description') || 'Description will be shown here...'}
                </span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                disabled={isPending || isUploading}
                onClick={handleSubmit(onSubmit)}
                className="flex-1 bg-brand-primary hover:bg-brand-dark"
              >
                {isPending ? 'Saving...' : 'Create Product'}
              </Button>
              <Button
                variant="outline"
                onClick={() => reset()}
                className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-50"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>

        {/* product information form */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* image area */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold mb-4">Add Product Photo</h3>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-wrap gap-4 items-center justify-center">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-24 h-24 rounded-lg overflow-hidden border"
                >
                  <img src={img} className="w-full h-full object-cover" />
                  {isUploading && (
                    <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}

                  <button
                    onClick={() => removeImage(idx)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
              <label className="w-24 h-24 flex flex-col items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:bg-slate-50 transition">
                <Plus className="text-slate-400" />
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>

          {/* product information form */}
          <form className="bg-white p-6 rounded-xl shadow-sm border space-y-6">
            <h3 className="font-semibold text-lg border-bottom pb-2">
              Product Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Product Name (Title)
                </label>
                <Input {...register('title')} placeholder="Items Name" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Product Categories
                </label>
                <Select onValueChange={(val) => setValue('category', val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Brand</label>
                <Input {...register('brand')} placeholder="Brand Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Price ($)</label>
                <Input
                  type="number"
                  {...register('price', { valueAsNumber: true })}
                  placeholder="Base Price"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Quantity (Stock)</label>
                <Input
                  type="number"
                  {...register('quantity', { valueAsNumber: true })}
                  placeholder="Available Amount"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">Colors :</label>
              <div className="flex gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition ${selectedColor === color ? 'border-brand-primary scale-110' : 'border-transparent'}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea
                {...register('description')}
                placeholder="Short description about the product"
                className="h-32"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

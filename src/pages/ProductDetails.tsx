import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '@/components/layout/Wrapper';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import SupportBanner from '@/features/product/components/SupportBanner';
import useFetch from '@/hooks/useFetch';
import type {
  IProductDetails,
  ProductDetailsApiResponse,
} from '@/types/productDetails';
import { BreadcrumbBasic } from '@/components/BreadcrumbBasic';
import ProductDetailSkeletonLoader from '@/components/ProductDetailSkeletonLoader';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'about' | 'details' | 'specs'>(
    'about'
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>('');

  // useFetch generic type
  const { data, isLoading } = useFetch<
    ProductDetailsApiResponse<IProductDetails>
  >(`/product/${id}`);
  const product = data?.data;

  useEffect(() => {
    if (product?.colors?.length) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (isLoading) {
    return <ProductDetailSkeletonLoader />;
  }

  if (!product)
    return <div className="text-center py-20">Product not found!</div>;

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#242424]">
      {/* --- Sticky Sub-Header --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <Wrapper>
          <div className="flex justify-between items-center h-16">
            <div className="flex gap-6 lg:gap-10">
              {(['about', 'details', 'specs'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-semibold capitalize relative py-5 transition-all
                    ${activeTab === tab ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#0156FF]' : 'text-gray-400 hover:text-black'}`}
                >
                  {tab === 'about' ? 'About Product' : tab}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <p className="text-sm">
                On Sale from{' '}
                <span className="font-bold text-lg">
                  $
                  {product.finalPrice?.toLocaleString() ||
                    product.price.toLocaleString()}
                </span>
              </p>
              <div className="flex items-center bg-gray-50/10 border rounded px-2 py-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-1 hover:text-blue-600"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center text-sm font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-1 hover:text-blue-600"
                >
                  <Plus size={14} />
                </button>
              </div>
              <Button className="bg-[#0156FF] hover:bg-blue-700 rounded-full px-8 h-10">
                Add to Cart
              </Button>
            </div>
          </div>
        </Wrapper>
      </nav>

      {/* --- Main Product Section --- */}
      <section className="md:mt-3">
        <Wrapper>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <nav className="text-xs tracking-widest text-gray-400 ">
                <BreadcrumbBasic
                  text={[
                    'Home',
                    product.category,
                    product.series || product.brand,
                  ]}
                />
              </nav>

              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight leading-[1.1]">
                  {product.title}
                </h1>
                <div className="flex items-center gap-2 text-[#0156FF] text-xs hover:underline cursor-pointer group">
                  Be the first to review this product
                </div>
              </div>

              <div className="text-[#666666] leading-relaxed max-w-xl">
                {product.description}
                {product.features && (
                  <ul className="mt-4 space-y-1 text-sm list-disc list-inside">
                    {product.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Dynamic Color Picker (Tailwind color matching logic) */}
              <div className=" pt-1">
                <div className="flex gap-4">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      style={{ backgroundColor: color.toLowerCase() }} // inline style for dynamic colors
                      className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full transition-all duration-300 border-2 
                        ${selectedColor === color ? 'ring-2 ring-[#0156FF] ring-offset-2 border-white scale-110 shadow-lg' : 'border-gray-200 opacity-60 hover:opacity-100'}`}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-100">
                <div className="text-[11px] ">
                  Questions?{' '}
                  <button className="text-[#0156FF] hover:underline ml-1">
                    Contact Support
                  </button>
                </div>
                <div className="text-[11px] text-gray-400 tracking-widest ">
                  SKU: {product.sku || 'N/A'}
                </div>
                <button className="text-[11px] font-black hover:text-[#0156FF] transition-colors ">
                  + {product.warranty || 'Product Info'}
                </button>
              </div>
            </div>

            {/* Right Side (Image handling) */}
            <div className="lg:col-span-5 relative group">
              <div className="aspect-square flex items-center justify-center  rounded overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-3/4 object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <SupportBanner />
    </div>
  );
};

export default ProductDetails;
